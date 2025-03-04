/**
 * @generated SignedSource<<5218c5113a540a2b53fe670876eb785e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type PreviousQuestionButtonMutation$variables = {
  eventId: string;
};
export type PreviousQuestionButtonMutation$data = {
  readonly prevQuestion: {
    readonly currentQuestion: string | null;
    readonly id: string;
  };
};
export type PreviousQuestionButtonMutation = {
  response: PreviousQuestionButtonMutation$data;
  variables: PreviousQuestionButtonMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "eventId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "eventId",
        "variableName": "eventId"
      }
    ],
    "concreteType": "Event",
    "kind": "LinkedField",
    "name": "prevQuestion",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "currentQuestion",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PreviousQuestionButtonMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PreviousQuestionButtonMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e40b2e42bea3cd9ac4d1e9df055a0a7c",
    "id": null,
    "metadata": {},
    "name": "PreviousQuestionButtonMutation",
    "operationKind": "mutation",
    "text": "mutation PreviousQuestionButtonMutation(\n  $eventId: ID!\n) {\n  prevQuestion(eventId: $eventId) {\n    id\n    currentQuestion\n  }\n}\n"
  }
};
})();

(node as any).hash = "b6fd926c640c55d2e47b98383ffd5080";

export default node;
