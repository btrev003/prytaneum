/**
 * @generated SignedSource<<8c010df0ee38f3feb18a3b2a6b27fe6c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Operation = "CREATE" | "DELETE" | "UPDATE" | "%future added value";
export type useLiveFeedbackListSubscription$variables = {
  connections: ReadonlyArray<string>;
  eventId: string;
};
export type useLiveFeedbackListSubscription$data = {
  readonly feedbackCRUD: {
    readonly edge: {
      readonly cursor: string;
      readonly node: {
        readonly createdBy: {
          readonly firstName: string | null;
          readonly id: string;
          readonly moderatorOf: boolean | null;
        } | null;
        readonly dmRecipientId: string | null;
        readonly id: string;
        readonly isDM: boolean | null;
        readonly message: string;
        readonly refFeedback: {
          readonly createdBy: {
            readonly firstName: string | null;
            readonly id: string;
            readonly moderatorOf: boolean | null;
          } | null;
          readonly " $fragmentSpreads": FragmentRefs<"LiveFeedbackReplyFragment">;
        } | null;
        readonly " $fragmentSpreads": FragmentRefs<"LiveFeedbackAuthorFragment" | "LiveFeedbackReplyFragment">;
      };
    };
    readonly operationType: Operation;
  };
};
export type useLiveFeedbackListSubscription = {
  response: useLiveFeedbackListSubscription$data;
  variables: useLiveFeedbackListSubscription$variables;
};

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
  "name": "operationType",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "message",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDM",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dmRecipientId",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": (v2/*: any*/),
  "kind": "ScalarField",
  "name": "moderatorOf",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "createdBy",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    (v9/*: any*/),
    (v10/*: any*/)
  ],
  "storageKey": null
},
v12 = {
  "args": (v2/*: any*/),
  "kind": "FragmentSpread",
  "name": "LiveFeedbackReplyFragment"
},
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "createdBy",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    (v9/*: any*/),
    (v10/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lastName",
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
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
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
    "name": "useLiveFeedbackListSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "FeedbackOperation",
        "kind": "LinkedField",
        "name": "feedbackCRUD",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "EventLiveFeedbackEdge",
            "kind": "LinkedField",
            "name": "edge",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "EventLiveFeedback",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v11/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "EventLiveFeedback",
                    "kind": "LinkedField",
                    "name": "refFeedback",
                    "plural": false,
                    "selections": [
                      (v11/*: any*/),
                      (v12/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v12/*: any*/),
                  {
                    "args": (v2/*: any*/),
                    "kind": "FragmentSpread",
                    "name": "LiveFeedbackAuthorFragment"
                  }
                ],
                "storageKey": null
              }
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
    "name": "useLiveFeedbackListSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "FeedbackOperation",
        "kind": "LinkedField",
        "name": "feedbackCRUD",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "EventLiveFeedbackEdge",
            "kind": "LinkedField",
            "name": "edge",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "EventLiveFeedback",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v13/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "EventLiveFeedback",
                    "kind": "LinkedField",
                    "name": "refFeedback",
                    "plural": false,
                    "selections": [
                      (v13/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v14/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v14/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependEdge",
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
    "cacheID": "cef97adbb7aac7fc317186830ba72216",
    "id": null,
    "metadata": {},
    "name": "useLiveFeedbackListSubscription",
    "operationKind": "subscription",
    "text": "subscription useLiveFeedbackListSubscription(\n  $eventId: ID!\n) {\n  feedbackCRUD(eventId: $eventId) {\n    operationType\n    edge {\n      cursor\n      node {\n        id\n        message\n        isDM\n        dmRecipientId\n        createdBy {\n          id\n          firstName\n          moderatorOf(eventId: $eventId)\n        }\n        refFeedback {\n          createdBy {\n            id\n            firstName\n            moderatorOf(eventId: $eventId)\n          }\n          ...LiveFeedbackReplyFragment_32qNee\n          id\n        }\n        ...LiveFeedbackReplyFragment_32qNee\n        ...LiveFeedbackAuthorFragment_32qNee\n      }\n    }\n  }\n}\n\nfragment LiveFeedbackAuthorFragment_32qNee on EventLiveFeedback {\n  createdBy {\n    id\n    firstName\n    lastName\n    avatar\n    moderatorOf(eventId: $eventId)\n  }\n  createdAt\n}\n\nfragment LiveFeedbackReplyFragment_32qNee on EventLiveFeedback {\n  id\n  message\n  ...LiveFeedbackAuthorFragment_32qNee\n}\n"
  }
};
})();

(node as any).hash = "f34251d614234129344aa61cd28f7058";

export default node;
