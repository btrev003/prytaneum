from flask import Flask, request, jsonify
import GoogleGemini as gemini
from AlgoStages.analyzeReadingMaterials import ExtractIssueFromReadingMaterials as GetIssue
from AlgoStages.analyzeReadingMaterials import ExtractCategoriesDescriptions as GetTopics
from AlgoStages.substantiveness import IsSubstantive
from AlgoStages.offensiveness import IsOffensive
from AlgoStages.relevance import IsRelevant
from AlgoStages.classifyQuestion import DoesQuestionFitCategory

app = Flask(__name__)

def GetIssueTopics(reading_materials: str) -> dict:
    """Extracts the overall issue and the topics with descriptions from the given reading materials.
    @issue (str) = Broad issue that the reading materials discuss (Ex: 'modernizing congress')
    @topics (dict) = Dict of topics and their descriptions extracted from the reading materials {'topic': 'description', ...}
    @Return: {'issue': issue, 'topics': topics}"""
    # Make sure Google API is initialized
    model = 'gemini-pro'
    gemini.InitGoogleGemini()
    issue = GetIssue(model, reading_materials)
    topics = GetTopics(model, reading_materials)
    return {'issue': issue, 'topics': topics}

def ProcessQuestion(issue: str, topics: dict, question: str) -> dict:
    """Process a question through the algorithm and return the results from each stage as a dict.
    @Param: issue = Broad issue that the town hall is about (Ex: 'modernizing congress')
    @Param: question = User question or comment to process
    @Return: results = {'substantive': bool, 'offensive': bool, 'relevant': bool, 'topics': {'topic0': bool, 'topic1': bool, ...}}"""
    # NOTE: Make sure Google API is initialized (Ex: set env variable GOOGLE_APPLICATION_CREDENTIALS to filepath with API key)
    model = 'gemini-pro'

    # Process the question through the algo
    response = {'substantive': False, 'offensive': False, 'relevant': False, 'topics': {}}

    # Check for substantiveness
    response['substantive'] = IsSubstantive(model, question)
    if(not response['substantive']):
        return response

    # Check for offensiveness
    response['offensive'] = IsOffensive(question)
    if(response['offensive']):
        return response

    # Check for relevancy
    response['relevant'] = IsRelevant(model, question, issue)

    # Classify into topics
    for topic, description in topics.items():
        response['topics'][topic] = DoesQuestionFitCategory(model, question, topic, description)

    return response

@app.route('/', methods=['POST'])
def HandleUserInput():
    # Check if the request contains JSON data
    if request.is_json:
        print(request)
        # If reading materials are provided, return their discussed issue and topics / descriptions
        reading_materials = request.get_json().get("reading_materials")
        if(reading_materials):
            return jsonify(GetIssueTopics(reading_materials)), 200 # HTTP success

        # Otherwise, 
        issue = request.get_json().get("issue") # Get overall issue (Ex: 'modernizing congress')
        topics = request.get_json().get("topics") # All possible topics and their description {'topic': 'description', ...}
        question = request.get_json().get("question") # Get the user question/comment
        if(question and issue and topics):
            # Process user question through the algorithm and return output
            return jsonify(ProcessQuestion(issue, topics, question)), 200 # HTTP success
        else:
            return jsonify({'ERROR': 'Missing field(s) in request data'}), 400 # HTTP bad request
    else:
        return jsonify({'ERROR': 'Request must be in JSON format'}), 415 # HTTP unsupported media type

if __name__ == '__main__':
    app.run(debug=True)