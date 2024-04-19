import os
import hashlib
import json
from googleapiclient.discovery import build

def InitPerspectiveAPI(folder=''):
    "Retrieve my API key and set an environmental variable to it"
    folder = os.path.dirname(os.path.abspath(__file__)) + '/' # Folder of this script
    os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = folder + 'MyPersonalKeyAPI/secret' # Personal key

def GetToxicityScores(text: str, force=False) -> dict:
    """Get the toxicity scores of a given piece of text from Perspective API.
    The toxicity attributes are: TOXICITY, SEVERE_TOXICITY, IDENTITY_ATTACK, INSULT, PROFANITY, THREAT"""
    # Check if the text has been requested before
    folder = os.path.dirname(os.path.abspath(__file__)) + '/' # Folder of this script
    response = ''
    hashedPrompt = str(hashlib.md5(text.encode('utf-8')).hexdigest()[:8])
    filepath = folder + 'PerspectiveapiCache/' + hashedPrompt
    if(os.path.isfile(filepath)):
        with open(filepath, 'r') as f:
            try:
                response = json.load(f)
            except:
                response = {}
    
    # If force is True, always send a new request to Perspective API
    if(force):
        response = {}

    # Get the response and its safety ratings from Gemini if it was not cached
    if(len(response) == 0):
        client = build(
            'commentanalyzer',
            'v1alpha1',
            discoveryServiceUrl='https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1',
        )
        analyze_request = {
            'comment': {
                'text':text,
            },
            'requestedAttributes': {
                'TOXICITY': {},
                'SEVERE_TOXICITY':{},
                'IDENTITY_ATTACK':{},
                'INSULT':{},
                'PROFANITY':{},
                'THREAT':{},
            },
        }
        response = client.comments().analyze(body=analyze_request).execute()
    
        # Output the response to cache if it has not been executed before
        with open(filepath, 'w') as f:
            f.write(json.dumps(response))
    
    # Extract and return the toxicity scores as a dictionary
    toxicityScores = {} # {Attribute:score, ...}
    for attribute, scores in response['attributeScores'].items():
        score = round(scores['summaryScore']['value'], 2)
        toxicityScores[attribute] = score
        
    return toxicityScores
