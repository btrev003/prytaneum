/**
 * @generated SignedSource<<9d71561b8f7a27314c5c3ff37a266184>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BroadcastMessageActionsFragment$data = {
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"DeleteBroadcastMessageButtonFragment" | "EditBroadcastMessageButtonFragment">;
  readonly " $fragmentType": "BroadcastMessageActionsFragment";
};
export type BroadcastMessageActionsFragment$key = {
  readonly " $data"?: BroadcastMessageActionsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BroadcastMessageActionsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BroadcastMessageActionsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DeleteBroadcastMessageButtonFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EditBroadcastMessageButtonFragment"
    }
  ],
  "type": "EventBroadcastMessage",
  "abstractKey": null
};

(node as any).hash = "5e955631fde2af9ec0fdda2f3127bf9d";

export default node;
