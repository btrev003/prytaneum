import * as React from 'react';
import { graphql, usePaginationFragment } from 'react-relay';

import type { useQuestionsByTopicFragment$key } from '@local/__generated__/useQuestionsByTopicFragment.graphql';
import type { Question } from '../types';
import { useTopic } from '../useTopic';

export const USE_QUESTIONS_BY_TOPIC = graphql`
    fragment useQuestionsByTopicFragment on Event
    @refetchable(queryName: "questionsByTopicPagination")
    @argumentDefinitions(
        first: { type: "Int", defaultValue: 50 }
        after: { type: "String" }
        topic: { type: "String", defaultValue: "default" }
        userLang: { type: "String!" }
    ) {
        id
        currentQuestion
        questionsByTopic(first: $first, after: $after, topic: $topic)
            @connection(key: "useQuestionsByTopicFragment_questionsByTopic", filters: ["topic"]) {
            __id
            edges {
                cursor
                node {
                    id
                    question
                    lang
                    position
                    onDeckPosition
                    topics {
                        topic
                        description
                        position
                    }
                    createdBy {
                        id
                        firstName
                        lastName
                        avatar
                    }
                    createdAt
                    likedByCount
                    isLikedByViewer
                    ...QuestionActionsFragment @arguments(lang: $userLang)
                    ...QuestionAuthorFragment
                    ...QuestionStatsFragment
                    ...QuestionContentFragment @arguments(lang: $userLang)
                    ...QuestionTopicsFragment
                    refQuestion {
                        id
                        question
                        lang
                        questionTranslated(lang: $userLang)
                        createdBy {
                            id
                            firstName
                            lastName
                            avatar
                        }
                        createdAt
                        ...QuestionQuoteFragment @arguments(lang: $userLang)
                    }
                }
            }
            pageInfo {
                startCursor
                endCursor
            }
        }
    }
`;

interface Props {
    fragmentRef: useQuestionsByTopicFragment$key;
}

// Right now when enqueued the question is still in the list, just being filtered in the memo.
export function useQuestionsByTopic({ fragmentRef }: Props) {
    const { topic } = useTopic();
    // Use pagination fragment for the list of questions by topic
    const { data, loadNext, loadPrevious, hasNext, hasPrevious, isLoadingNext, isLoadingPrevious, refetch } =
        usePaginationFragment(USE_QUESTIONS_BY_TOPIC, fragmentRef);
    const { questionsByTopic: _questions, id: eventId, currentQuestion } = data;

    const questions: Question[] = React.useMemo(() => {
        if (!_questions?.edges) return [];
        const ids = new Set<string>();
        const filteredQuestions = _questions.edges?.filter(({ node }) => {
            const { position, topics, onDeckPosition } = node;
            if (ids.has(node.id)) return false; // Filter out duplicates
            ids.add(node.id);

            let _isQueued = false;
            if (topic === 'default') return position === '-1' && onDeckPosition === '-1';
            if (position !== '-1') _isQueued = true;
            if (onDeckPosition !== '-1') return false;
            if (!topics) return !_isQueued;

            let isInCurrentTopic = false;
            topics.forEach((_topic) => {
                if (_topic.topic === topic) isInCurrentTopic = true;
                if (_topic.position !== '-1') _isQueued = true;
            });
            return isInCurrentTopic && !_isQueued;
        });
        const sortedQuestions = filteredQuestions.sort((a, b) => (a.cursor > b.cursor ? -1 : 1));
        return sortedQuestions.map(({ node, cursor }) => {
            return { ...node, cursor };
        });
    }, [_questions?.edges, topic]);

    const pageInfo = React.useMemo(() => {
        return _questions?.pageInfo;
    }, [_questions]);

    const connections = React.useMemo(() => {
        return _questions?.__id ? [_questions.__id] : [];
    }, [_questions?.__id]);

    return {
        questions,
        eventId,
        connections,
        currentQuestion,
        loadNext,
        loadPrevious,
        hasNext,
        hasPrevious,
        isLoadingNext,
        isLoadingPrevious,
        refetch,
        pageInfo,
    };
}
