/**
 * @generated SignedSource<<e3a5476e33e7806b3a4ee4b9f38c611f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EventSettingsQuery$variables = {
  eventId: string;
};
export type EventSettingsQuery$data = {
  readonly node: {
    readonly id: string;
    readonly isViewerModerator?: boolean | null;
    readonly " $fragmentSpreads": FragmentRefs<"EventDetailsFragment" | "EventIssueGuideSettingsFragment" | "GenericSettingsFragment" | "ModeratorEventSettingsFragment" | "SpeakerEventSettingsFragment" | "VideoEventSettingsFragment" | "useEventDetailsFragment" | "useInvitedUsersListFragment">;
  } | null;
};
export type EventSettingsQuery = {
  response: EventSettingsQuery$data;
  variables: EventSettingsQuery$variables;
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
    "kind": "Variable",
    "name": "id",
    "variableName": "eventId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isViewerModerator",
  "storageKey": null
},
v4 = [
  {
    "kind": "Variable",
    "name": "eventId",
    "variableName": "eventId"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "topic",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v9 = [
  {
    "kind": "Literal",
    "name": "after",
    "value": ""
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    (v12/*: any*/),
    (v13/*: any*/)
  ],
  "storageKey": null
},
v15 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__id",
      "storageKey": null
    }
  ]
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatar",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EventSettingsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "EventDetailsFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "SpeakerEventSettingsFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "VideoEventSettingsFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "GenericSettingsFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ModeratorEventSettingsFragment"
              },
              {
                "args": (v4/*: any*/),
                "kind": "FragmentSpread",
                "name": "useInvitedUsersListFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "EventIssueGuideSettingsFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "useEventDetailsFragment"
              }
            ],
            "type": "Event",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EventSettingsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startDateTime",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endDateTime",
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "concreteType": "EventSpeakerConnection",
                "kind": "LinkedField",
                "name": "speakers",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "EventSpeakerEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "EventSpeaker",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "eventId",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          (v6/*: any*/),
                          (v8/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "pictureUrl",
                            "storageKey": null
                          },
                          (v10/*: any*/),
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v11/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v14/*: any*/),
                  (v15/*: any*/)
                ],
                "storageKey": "speakers(after:\"\",first:10)"
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "SpeakerEventSettingsFragment_speakers",
                "kind": "LinkedHandle",
                "name": "speakers"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "eventType",
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "concreteType": "EventVideoConnection",
                "kind": "LinkedField",
                "name": "videos",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "EventVideoEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "EventVideo",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "lang",
                            "storageKey": null
                          },
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v11/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v14/*: any*/),
                  (v15/*: any*/)
                ],
                "storageKey": "videos(after:\"\",first:10)"
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "YoutubeSettingsFragment_videos",
                "kind": "LinkedHandle",
                "name": "videos"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "googleMeetUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isQuestionFeedVisible",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isCollectRatingsEnabled",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isForumEnabled",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isPrivate",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "issueGuideUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "concreteType": "UserConnection",
                "kind": "LinkedField",
                "name": "moderators",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      (v11/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v16/*: any*/),
                          (v17/*: any*/),
                          (v18/*: any*/),
                          (v10/*: any*/),
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v14/*: any*/),
                  (v15/*: any*/)
                ],
                "storageKey": "moderators(after:\"\",first:10)"
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "ModeratorEventSettingsFragment_moderators",
                "kind": "LinkedHandle",
                "name": "moderators"
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "concreteType": "UserConnection",
                "kind": "LinkedField",
                "name": "invited",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v16/*: any*/),
                          (v17/*: any*/),
                          (v18/*: any*/),
                          {
                            "alias": null,
                            "args": (v4/*: any*/),
                            "kind": "ScalarField",
                            "name": "moderatorOf",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      (v13/*: any*/),
                      (v12/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v15/*: any*/)
                ],
                "storageKey": "invited(after:\"\",first:10)"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isActive",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isViewerInvited",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "EventTopic",
                "kind": "LinkedField",
                "name": "topics",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "Event",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "292c88447da476b1563a8b532b331eab",
    "id": null,
    "metadata": {},
    "name": "EventSettingsQuery",
    "operationKind": "query",
    "text": "query EventSettingsQuery(\n  $eventId: ID!\n) {\n  node(id: $eventId) {\n    __typename\n    id\n    ... on Event {\n      isViewerModerator\n      ...EventDetailsFragment\n      ...SpeakerEventSettingsFragment\n      ...VideoEventSettingsFragment\n      ...GenericSettingsFragment\n      ...ModeratorEventSettingsFragment\n      ...useInvitedUsersListFragment_32qNee\n      ...EventIssueGuideSettingsFragment\n      ...useEventDetailsFragment\n    }\n  }\n}\n\nfragment EventDetailsFragment on Event {\n  id\n  title\n  topic\n  description\n  startDateTime\n  endDateTime\n}\n\nfragment EventIssueGuideSettingsFragment on Event {\n  id\n  title\n  issueGuideUrl\n}\n\nfragment GenericSettingsFragment on Event {\n  id\n  isQuestionFeedVisible\n  isCollectRatingsEnabled\n  isForumEnabled\n  isPrivate\n  issueGuideUrl\n}\n\nfragment GoogleMeetSettingsFragment on Event {\n  googleMeetUrl\n  id\n}\n\nfragment ModeratorEventSettingsFragment on Event {\n  id\n  moderators(first: 10, after: \"\") {\n    edges {\n      cursor\n      node {\n        id\n        firstName\n        lastName\n        avatar\n        email\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment SpeakerEventSettingsFragment on Event {\n  id\n  speakers(first: 10, after: \"\") {\n    edges {\n      node {\n        id\n        eventId\n        name\n        title\n        description\n        pictureUrl\n        email\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment VideoEventSettingsFragment on Event {\n  eventType\n  ...YoutubeSettingsFragment\n  ...GoogleMeetSettingsFragment\n  id\n}\n\nfragment YoutubeSettingsFragment on Event {\n  id\n  videos(first: 10, after: \"\") {\n    edges {\n      node {\n        id\n        url\n        lang\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment useEventDetailsFragment on Event {\n  id\n  title\n  topic\n  description\n  startDateTime\n  endDateTime\n  isActive\n  isViewerModerator\n  isPrivate\n  isViewerInvited\n  issueGuideUrl\n  topics {\n    id\n    topic\n    description\n  }\n  eventType\n}\n\nfragment useInvitedUsersListFragment_32qNee on Event {\n  invited(first: 10, after: \"\") {\n    edges {\n      node {\n        id\n        firstName\n        lastName\n        avatar\n        moderatorOf(eventId: $eventId)\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "cafed250469a666dd14f9e222175d52b";

export default node;
