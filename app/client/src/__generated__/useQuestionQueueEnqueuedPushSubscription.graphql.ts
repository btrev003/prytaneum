/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import {  } from "relay-runtime";
export type useQuestionQueueEnqueuedPushSubscriptionVariables = {
    eventId: string;
    connections: Array<string>;
};
export type useQuestionQueueEnqueuedPushSubscriptionResponse = {
    readonly enqueuedPushQuestion: {
        readonly edge: {
            readonly node: {
                readonly id: string;
                readonly position: number | null;
                readonly " $fragmentRefs": FragmentRefs<"QuestionAuthorFragment" | "QuestionStatsFragment" | "QuestionContentFragment">;
            };
            readonly cursor: string;
        };
    };
};
export type useQuestionQueueEnqueuedPushSubscription = {
    readonly response: useQuestionQueueEnqueuedPushSubscriptionResponse;
    readonly variables: useQuestionQueueEnqueuedPushSubscriptionVariables;
};



/*
subscription useQuestionQueueEnqueuedPushSubscription(
  $eventId: ID!
) {
  enqueuedPushQuestion(eventId: $eventId) {
    edge {
      node {
        id
        ...QuestionAuthorFragment
        ...QuestionStatsFragment
        ...QuestionContentFragment
        position
      }
      cursor
    }
  }
}

fragment QuestionAuthorFragment on EventQuestion {
  createdBy {
    id
    firstName
    avatar
  }
  createdAt
}

fragment QuestionContentFragment on EventQuestion {
  question
}

fragment QuestionStatsFragment on EventQuestion {
  id
  likedByCount
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "eventId"
},
v2 = [
  {
    "kind": "Variable",
    "name": "eventId",
    "variableName": "eventId"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "position",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useQuestionQueueEnqueuedPushSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "EventQuestionEdgeContainer",
        "kind": "LinkedField",
        "name": "enqueuedPushQuestion",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "EventQuestionEdge",
            "kind": "LinkedField",
            "name": "edge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "EventQuestion",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "QuestionAuthorFragment"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "QuestionStatsFragment"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "QuestionContentFragment"
                  }
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "useQuestionQueueEnqueuedPushSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "EventQuestionEdgeContainer",
        "kind": "LinkedField",
        "name": "enqueuedPushQuestion",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "EventQuestionEdge",
            "kind": "LinkedField",
            "name": "edge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "EventQuestion",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "createdBy",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "firstName",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "avatar",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "likedByCount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "question",
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "edge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e69ac0cfb512625b35be5cdf8c66bbc0",
    "id": null,
    "metadata": {},
    "name": "useQuestionQueueEnqueuedPushSubscription",
    "operationKind": "subscription",
    "text": "subscription useQuestionQueueEnqueuedPushSubscription(\n  $eventId: ID!\n) {\n  enqueuedPushQuestion(eventId: $eventId) {\n    edge {\n      node {\n        id\n        ...QuestionAuthorFragment\n        ...QuestionStatsFragment\n        ...QuestionContentFragment\n        position\n      }\n      cursor\n    }\n  }\n}\n\nfragment QuestionAuthorFragment on EventQuestion {\n  createdBy {\n    id\n    firstName\n    avatar\n  }\n  createdAt\n}\n\nfragment QuestionContentFragment on EventQuestion {\n  question\n}\n\nfragment QuestionStatsFragment on EventQuestion {\n  id\n  likedByCount\n}\n"
  }
};
})();
(node as any).hash = 'cc98295b429f3da5547c318c31931e20';
export default node;
