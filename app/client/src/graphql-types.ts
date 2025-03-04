export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
  JSON: { [key: string]: any };
};

export type AddQuestionToOnDeck = {
  eventId: Scalars['ID'];
  newPosition: Scalars['String'];
  questionId: Scalars['ID'];
};

export type AddQuestionToQueue = {
  eventId: Scalars['ID'];
  questionId: Scalars['ID'];
};

export type AddQuestionToTopicQueue = {
  eventId: Scalars['ID'];
  questionId: Scalars['ID'];
  topic: Scalars['String'];
};

export type AlterLike = {
  questionId: Scalars['ID'];
  /** True if the user is attempting to like the question; false if they are trying to remove a like */
  to: Scalars['Boolean'];
};

export type CreateBroadcastMessage = {
  broadcastMessage: Scalars['String'];
  eventId: Scalars['ID'];
};

export type CreateEvent = {
  description: Scalars['String'];
  endDateTime: Scalars['Date'];
  orgId: Scalars['String'];
  startDateTime: Scalars['Date'];
  title: Scalars['String'];
  topic: Scalars['String'];
};

export type CreateFeedback = {
  eventId: Scalars['ID'];
  isReply?: InputMaybe<Scalars['Boolean']>;
  message: Scalars['String'];
  refFeedbackId?: InputMaybe<Scalars['ID']>;
};

export type CreateFeedbackDm = {
  eventId: Scalars['ID'];
  message: Scalars['String'];
  recipientId: Scalars['ID'];
};

export type CreateFeedbackPrompt = {
  choices: Array<Scalars['String']>;
  eventId: Scalars['ID'];
  feedbackType: Scalars['String'];
  isDraft: Scalars['Boolean'];
  prompt: Scalars['String'];
  reasoningType: Scalars['String'];
};

export type CreateFeedbackPromptResponse = {
  eventId: Scalars['ID'];
  multipleChoiceResponse: Scalars['String'];
  promptId: Scalars['ID'];
  response: Scalars['String'];
  vote: Scalars['String'];
};

export type CreateInvite = {
  email: Scalars['String'];
  eventId: Scalars['ID'];
};

/** Info necessary for adding a member to an organization */
export type CreateMember = {
  email: Scalars['String'];
  orgId: Scalars['ID'];
};

export type CreateModerator = {
  email: Scalars['String'];
  eventId: Scalars['ID'];
};

/** Necessary information for org creation */
export type CreateOrganization = {
  name: Scalars['String'];
};

export type CreateQuestion = {
  eventId: Scalars['ID'];
  isFollowUp?: InputMaybe<Scalars['Boolean']>;
  isQuote?: InputMaybe<Scalars['Boolean']>;
  question: Scalars['String'];
  refQuestion?: InputMaybe<Scalars['ID']>;
};

export type CreateSpeaker = {
  description: Scalars['String'];
  /** This is for matching the speaker to an account */
  email: Scalars['String'];
  eventId: Scalars['String'];
  name: Scalars['String'];
  pictureUrl: Scalars['String'];
  title: Scalars['String'];
};

export type CreateVideo = {
  eventId: Scalars['String'];
  lang: Scalars['String'];
  url: Scalars['String'];
};

export type DeleteAccountForm = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type DeleteBroadcastMessage = {
  broadcastMessageId: Scalars['ID'];
  toggleBroadcastMessageVisibility: Scalars['Boolean'];
};

/** In order to delete an event, user must provide a title and a confirmation title, similar to account deletion. */
export type DeleteEvent = {
  confirmTitle: Scalars['String'];
  eventId: Scalars['String'];
  title: Scalars['String'];
};

export type DeleteMember = {
  orgId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type DeleteModerator = {
  eventId: Scalars['ID'];
  userId: Scalars['ID'];
};

/** Information necessary for deleting an org */
export type DeleteOrganization = {
  orgId: Scalars['ID'];
};

export type DeleteQuestion = {
  isVisible: Scalars['Boolean'];
  questionId: Scalars['ID'];
};

export type DeleteSpeaker = {
  /** Necessary for verifying user permissions */
  eventId: Scalars['String'];
  id: Scalars['String'];
};

export type DeleteVideo = {
  eventId: Scalars['String'];
  id: Scalars['String'];
};

export type EditBroadcastMessage = {
  broadcastMessage: Scalars['String'];
  broadcastMessageId: Scalars['ID'];
};

export type Error = {
  __typename?: 'Error';
  message: Scalars['String'];
};

export type Event = Node & {
  __typename?: 'Event';
  broadcastMessages?: Maybe<EventBroadcastMessagesConnection>;
  createdAt?: Maybe<Scalars['Date']>;
  /** Creator of this event */
  createdBy?: Maybe<User>;
  /** The broadcast message currently being broadcasted, corresponds to a "position" value on the event broadcastmessage */
  currentBroadcastMessage?: Maybe<Scalars['Int']>;
  /** The question currently being asked, corresponds to a "position" value on the event question */
  currentQuestion?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** The planned end date time string */
  endDateTime?: Maybe<Scalars['Date']>;
  eventType?: Maybe<Scalars['String']>;
  googleMeetSpace?: Maybe<Scalars['String']>;
  googleMeetUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** List of users who can view event when private */
  invited?: Maybe<UserConnection>;
  /** Whether or not the Event is live */
  isActive?: Maybe<Scalars['Boolean']>;
  /** Collect user ratings after the event has ended */
  isCollectRatingsEnabled?: Maybe<Scalars['Boolean']>;
  /** Display a forum-like interface once the "live" part of the event is over */
  isForumEnabled?: Maybe<Scalars['Boolean']>;
  /** Is the event private, ie invite only */
  isPrivate?: Maybe<Scalars['Boolean']>;
  /** Let all users see what questions have been submitted */
  isQuestionFeedVisible?: Maybe<Scalars['Boolean']>;
  /** Whether or not the viewer is invited */
  isViewerInvited?: Maybe<Scalars['Boolean']>;
  /** Whether or not the viewer is a moderator */
  isViewerModerator?: Maybe<Scalars['Boolean']>;
  issueGuideUrl?: Maybe<Scalars['String']>;
  /** Live Feedback given during the event */
  liveFeedback?: Maybe<EventLiveFeedbackConnection>;
  /** Live Feedback Prompts w/ responses */
  liveFeedbackPrompts?: Maybe<EventLiveFeedbackPromptConnection>;
  /** List of moderators for this particular event */
  moderators?: Maybe<UserConnection>;
  /** The owning organization */
  organization?: Maybe<Organization>;
  /** Participants of the event -- individuals who showed up */
  participants?: Maybe<EventParticipantConnection>;
  questionModQueue?: Maybe<EventQuestionConnection>;
  /** Questions having to do with the queue */
  questionQueue?: Maybe<EventQuestionQueue>;
  /** All questions relating to this event */
  questions?: Maybe<EventQuestionConnection>;
  questionsByTopic?: Maybe<EventQuestionConnection>;
  /** Registrants for this event -- individuals invited */
  registrants?: Maybe<UserConnection>;
  /** Speakers for this event */
  speakers?: Maybe<EventSpeakerConnection>;
  /** The planned start date time string */
  startDateTime?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  topic?: Maybe<Scalars['String']>;
  topicQueue?: Maybe<EventQuestionConnection>;
  topics?: Maybe<Array<EventTopic>>;
  updatedAt?: Maybe<Scalars['Date']>;
  /** Video feeds and the languages */
  videos?: Maybe<EventVideoConnection>;
};


export type EventBroadcastMessagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type EventInvitedArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type EventLiveFeedbackArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type EventLiveFeedbackPromptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type EventModeratorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type EventParticipantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type EventQuestionModQueueArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type EventQuestionQueueArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type EventQuestionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  topic?: InputMaybe<Scalars['String']>;
  viewerOnly?: InputMaybe<Scalars['Boolean']>;
};


export type EventQuestionsByTopicArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  topic?: InputMaybe<Scalars['String']>;
};


export type EventSpeakersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type EventTopicQueueArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  topic?: InputMaybe<Scalars['String']>;
};


export type EventVideosArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type EventBroadcastMessage = Node & {
  __typename?: 'EventBroadcastMessage';
  /** The actual content of the broadcast message */
  broadcastMessage: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  /** User information on the person asking the broadcast message */
  createdBy?: Maybe<User>;
  /** The user id of the creator */
  createdById?: Maybe<Scalars['ID']>;
  event?: Maybe<Event>;
  id: Scalars['ID'];
  /** If the broadcast message is owned by the current viewer */
  isVisible?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  /** The users who have liked this broadcast message */
  likedBy?: Maybe<UserConnection>;
  position?: Maybe<Scalars['Int']>;
  translatedBroadcastMessage?: Maybe<Scalars['String']>;
};


export type EventBroadcastMessageTranslatedBroadcastMessageArgs = {
  lang: Scalars['String'];
};

export type EventBroadcastMessageEdge = {
  __typename?: 'EventBroadcastMessageEdge';
  cursor: Scalars['String'];
  node: EventBroadcastMessage;
};

export type EventBroadcastMessageEdgeContainer = {
  __typename?: 'EventBroadcastMessageEdgeContainer';
  edge: EventBroadcastMessageEdge;
};

export type EventBroadcastMessageMutationResponse = MutationResponse & {
  __typename?: 'EventBroadcastMessageMutationResponse';
  body?: Maybe<EventBroadcastMessageEdge>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type EventBroadcastMessagesConnection = {
  __typename?: 'EventBroadcastMessagesConnection';
  edges?: Maybe<Array<EventBroadcastMessageEdge>>;
  pageInfo: PageInfo;
};

/** Connection to Events */
export type EventConnection = {
  __typename?: 'EventConnection';
  edges?: Maybe<Array<EventEdge>>;
  pageInfo: PageInfo;
};

/** Event Edge */
export type EventEdge = {
  __typename?: 'EventEdge';
  cursor: Scalars['String'];
  node: Event;
};

/** Required to reduce frontend complexity due to relay limitation https://github.com/facebook/relay/issues/3457 */
export type EventEdgeContainer = {
  __typename?: 'EventEdgeContainer';
  edge: EventEdge;
};

export type EventFeedbackMutationResponse = MutationResponse & {
  __typename?: 'EventFeedbackMutationResponse';
  body?: Maybe<EventLiveFeedbackEdge>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type EventFeedbackPromptMutationResponse = MutationResponse & {
  __typename?: 'EventFeedbackPromptMutationResponse';
  body?: Maybe<EventLiveFeedbackPromptEdge>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type EventFeedbackPromptResponseMutationResponse = MutationResponse & {
  __typename?: 'EventFeedbackPromptResponseMutationResponse';
  body?: Maybe<EventLiveFeedbackPromptResponseEdge>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type EventLiveFeedback = Node & {
  __typename?: 'EventLiveFeedback';
  createdAt?: Maybe<Scalars['Date']>;
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['ID']>;
  dmRecipientId?: Maybe<Scalars['ID']>;
  event?: Maybe<Event>;
  id: Scalars['ID'];
  isDM?: Maybe<Scalars['Boolean']>;
  isReply?: Maybe<Scalars['Boolean']>;
  message: Scalars['String'];
  refFeedback?: Maybe<EventLiveFeedback>;
};

export type EventLiveFeedbackConnection = {
  __typename?: 'EventLiveFeedbackConnection';
  edges?: Maybe<Array<EventLiveFeedbackEdge>>;
  pageInfo: PageInfo;
};

export type EventLiveFeedbackEdge = {
  __typename?: 'EventLiveFeedbackEdge';
  cursor: Scalars['String'];
  node: EventLiveFeedback;
};

export type EventLiveFeedbackPrompt = Node & {
  __typename?: 'EventLiveFeedbackPrompt';
  createdAt?: Maybe<Scalars['Date']>;
  event?: Maybe<Event>;
  id: Scalars['ID'];
  isDraft?: Maybe<Scalars['Boolean']>;
  isMultipleChoice?: Maybe<Scalars['Boolean']>;
  isOpenEnded?: Maybe<Scalars['Boolean']>;
  isVote?: Maybe<Scalars['Boolean']>;
  multipleChoiceOptions?: Maybe<Array<Scalars['String']>>;
  prompt: Scalars['String'];
  reasoningType?: Maybe<Scalars['String']>;
  responses?: Maybe<EventLiveFeedbackPromptResponseConnection>;
  stakeholders?: Maybe<Array<Scalars['String']>>;
  viewpoints?: Maybe<Array<Scalars['String']>>;
  voteViewpoints?: Maybe<Scalars['JSON']>;
};


export type EventLiveFeedbackPromptResponsesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type EventLiveFeedbackPromptConnection = {
  __typename?: 'EventLiveFeedbackPromptConnection';
  edges?: Maybe<Array<EventLiveFeedbackPromptEdge>>;
  pageInfo: PageInfo;
};

export type EventLiveFeedbackPromptEdge = {
  __typename?: 'EventLiveFeedbackPromptEdge';
  cursor: Scalars['String'];
  node: EventLiveFeedbackPrompt;
};

export type EventLiveFeedbackPromptResponse = Node & {
  __typename?: 'EventLiveFeedbackPromptResponse';
  createdAt?: Maybe<Scalars['Date']>;
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['ID']>;
  event?: Maybe<Event>;
  id: Scalars['ID'];
  isMultipleChoice?: Maybe<Scalars['Boolean']>;
  isOpenEnded?: Maybe<Scalars['Boolean']>;
  isVote?: Maybe<Scalars['Boolean']>;
  multipleChoiceResponse?: Maybe<Scalars['String']>;
  prompt?: Maybe<EventLiveFeedbackPrompt>;
  promptId?: Maybe<Scalars['ID']>;
  response?: Maybe<Scalars['String']>;
  vote?: Maybe<Scalars['String']>;
};

export type EventLiveFeedbackPromptResponseConnection = {
  __typename?: 'EventLiveFeedbackPromptResponseConnection';
  edges?: Maybe<Array<EventLiveFeedbackPromptResponseEdge>>;
  pageInfo: PageInfo;
};

export type EventLiveFeedbackPromptResponseEdge = {
  __typename?: 'EventLiveFeedbackPromptResponseEdge';
  cursor: Scalars['String'];
  node: EventLiveFeedbackPromptResponse;
};

export type EventMutationResponse = MutationResponse & {
  __typename?: 'EventMutationResponse';
  body?: Maybe<Event>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type EventParticipant = {
  __typename?: 'EventParticipant';
  isMuted: Scalars['Boolean'];
  user: User;
};

export type EventParticipantConnection = {
  __typename?: 'EventParticipantConnection';
  edges?: Maybe<Array<EventParticipantEdge>>;
  pageInfo: PageInfo;
};

export type EventParticipantEdge = {
  __typename?: 'EventParticipantEdge';
  cursor: Scalars['String'];
  node: EventParticipant;
};

export type EventQuestion = Node & {
  __typename?: 'EventQuestion';
  createdAt?: Maybe<Scalars['Date']>;
  /** User information on the person asking the question */
  createdBy?: Maybe<User>;
  /** The user id of the creator */
  createdById?: Maybe<Scalars['ID']>;
  event?: Maybe<Event>;
  id: Scalars['ID'];
  isAsked?: Maybe<Scalars['Boolean']>;
  isFollowUp?: Maybe<Scalars['Boolean']>;
  /** Whether or not the current user likes the question */
  isLikedByViewer?: Maybe<Scalars['Boolean']>;
  /** If the question is owned by the current viewer */
  isMyQuestion?: Maybe<Scalars['Boolean']>;
  isQuote?: Maybe<Scalars['Boolean']>;
  isVisible: Scalars['Boolean'];
  lang?: Maybe<Scalars['String']>;
  /** The users who have liked this question */
  likedBy?: Maybe<UserConnection>;
  /** Find the count of the likes only */
  likedByCount?: Maybe<Scalars['Int']>;
  offensive: Scalars['Boolean'];
  onDeckPosition: Scalars['String'];
  position: Scalars['String'];
  /** The actual content of the question */
  question: Scalars['String'];
  questionTranslated?: Maybe<Scalars['String']>;
  refQuestion?: Maybe<EventQuestion>;
  relevant: Scalars['Boolean'];
  substantive: Scalars['Boolean'];
  topics?: Maybe<Array<EventQuestionTopic>>;
};


export type EventQuestionQuestionTranslatedArgs = {
  lang: Scalars['String'];
};

export type EventQuestionConnection = {
  __typename?: 'EventQuestionConnection';
  edges?: Maybe<Array<EventQuestionEdge>>;
  pageInfo: PageInfo;
};

export type EventQuestionEdge = {
  __typename?: 'EventQuestionEdge';
  cursor: Scalars['String'];
  node: EventQuestion;
};

/** Required to reduce frontend complexity due to relay limitation https://github.com/facebook/relay/issues/3457 */
export type EventQuestionEdgeContainer = {
  __typename?: 'EventQuestionEdgeContainer';
  edge: EventQuestionEdge;
};

export type EventQuestionMutationResponse = MutationResponse & {
  __typename?: 'EventQuestionMutationResponse';
  body?: Maybe<EventQuestionEdge>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

/** EventQuestionQueue is the entire queue of the event */
export type EventQuestionQueue = {
  __typename?: 'EventQuestionQueue';
  enqueuedQuestions?: Maybe<EventQuestionConnection>;
  /** last index is current question */
  questionRecord?: Maybe<EventQuestionConnection>;
};


/** EventQuestionQueue is the entire queue of the event */
export type EventQuestionQueueEnqueuedQuestionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


/** EventQuestionQueue is the entire queue of the event */
export type EventQuestionQueueQuestionRecordArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type EventQuestionTopic = {
  __typename?: 'EventQuestionTopic';
  description: Scalars['String'];
  position: Scalars['String'];
  topic: Scalars['String'];
};

export type EventSpeaker = Node & {
  __typename?: 'EventSpeaker';
  /** Description set by the organizer of the event */
  description?: Maybe<Scalars['String']>;
  /** email of the speaker */
  email?: Maybe<Scalars['String']>;
  /** Event eventId that this user is speaking at */
  eventId?: Maybe<Scalars['ID']>;
  /** Speaker id */
  id: Scalars['ID'];
  /** Name set by the organizer of the event */
  name?: Maybe<Scalars['String']>;
  /** Picture set by the organizer of the event */
  pictureUrl?: Maybe<Scalars['String']>;
  /** Title set by the organizer of the event */
  title?: Maybe<Scalars['String']>;
  /** The related user account associated with the speaker */
  user?: Maybe<User>;
};

export type EventSpeakerConnection = {
  __typename?: 'EventSpeakerConnection';
  edges?: Maybe<Array<EventSpeakerEdge>>;
  pageInfo: PageInfo;
};

export type EventSpeakerEdge = {
  __typename?: 'EventSpeakerEdge';
  cursor: Scalars['String'];
  node: EventSpeaker;
};

export type EventSpeakerMutationResponse = MutationResponse & {
  __typename?: 'EventSpeakerMutationResponse';
  body?: Maybe<EventSpeaker>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type EventTopic = Node & Topic & {
  __typename?: 'EventTopic';
  description: Scalars['String'];
  id: Scalars['ID'];
  topic: Scalars['String'];
};

export enum EventType {
  GoogleMeet = 'GOOGLE_MEET',
  NoVideo = 'NO_VIDEO',
  YoutubeStream = 'YOUTUBE_STREAM'
}

export type EventVideo = Node & {
  __typename?: 'EventVideo';
  event?: Maybe<Event>;
  id: Scalars['ID'];
  lang: Scalars['String'];
  url: Scalars['String'];
};

export type EventVideoConnection = {
  __typename?: 'EventVideoConnection';
  edges?: Maybe<Array<EventVideoEdge>>;
  pageInfo: PageInfo;
};

export type EventVideoEdge = {
  __typename?: 'EventVideoEdge';
  cursor: Scalars['String'];
  node: EventVideo;
};

export type EventVideoMutationResponse = MutationResponse & {
  __typename?: 'EventVideoMutationResponse';
  body?: Maybe<EventVideo>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type EventsSearchFilters = {
  /** Search by event name */
  eventName?: InputMaybe<Scalars['String']>;
  /** Search by organizaiton name */
  orgName?: InputMaybe<Scalars['String']>;
};

export type FeedbackOperation = {
  __typename?: 'FeedbackOperation';
  edge: EventLiveFeedbackEdge;
  operationType: Operation;
};

export type GenerateViewpointsInput = {
  eventId: Scalars['ID'];
  isForcedRegenerate?: InputMaybe<Scalars['Boolean']>;
  promptId: Scalars['ID'];
};

export type GeneratedTopic = {
  __typename?: 'GeneratedTopic';
  description: Scalars['String'];
  locked?: Maybe<Scalars['Boolean']>;
  topic: Scalars['String'];
};

export type HideQuestion = {
  eventId: Scalars['ID'];
  questionId: Scalars['ID'];
  /** Goal state. If we want to change the state to hidden, toggleTo is true; false otherwise. */
  toggleTo: Scalars['Boolean'];
};

export type InviteMutationResponse = MutationResponse & {
  __typename?: 'InviteMutationResponse';
  body?: Maybe<UserEdge>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type Like = {
  __typename?: 'Like';
  question: EventQuestion;
  user: User;
};

export type LoginForm = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ModeratorMutationResponse = MutationResponse & {
  __typename?: 'ModeratorMutationResponse';
  body?: Maybe<User>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addQuestionToOnDeck: EventQuestionMutationResponse;
  addQuestionToQueue: EventQuestionMutationResponse;
  addQuestionToTopicQueue: EventQuestionMutationResponse;
  /** Update topics */
  addTopic?: Maybe<TopicMutationResponse>;
  addTopics?: Maybe<TopicMutationResponse>;
  alterLike: EventQuestionMutationResponse;
  createBroadcastMessage: EventBroadcastMessageMutationResponse;
  createEvent: EventMutationResponse;
  createFeedback: EventFeedbackMutationResponse;
  createFeedbackDM: EventFeedbackMutationResponse;
  createFeedbackPrompt: EventFeedbackPromptMutationResponse;
  createFeedbackPromptResponse: EventFeedbackPromptResponseMutationResponse;
  createInvite: InviteMutationResponse;
  /** Adds a new member and returns the new user added */
  createMember: UserMutationResponse;
  /** Add a new moderator to the given event */
  createModerator: ModeratorMutationResponse;
  createOrganization: OrganizationMutationResponse;
  createQuestion: EventQuestionMutationResponse;
  createSpeaker: EventSpeakerMutationResponse;
  createVideo: EventVideoMutationResponse;
  deleteAccount: UserMutationResponse;
  deleteBroadcastMessage: EventBroadcastMessageMutationResponse;
  deleteEvent: EventMutationResponse;
  /** Delete a member from the organization */
  deleteMember: UserMutationResponse;
  /** Removes a moderator from a given event */
  deleteModerator: ModeratorMutationResponse;
  deleteOrganization: OrganizationMutationResponse;
  deleteQuestion: EventQuestionMutationResponse;
  deleteSpeaker: EventSpeakerMutationResponse;
  deleteVideo: EventVideoMutationResponse;
  editBroadcastMessage: EventBroadcastMessageMutationResponse;
  /** End the event so that it is not live */
  endEvent: EventMutationResponse;
  finalizeTopics?: Maybe<TopicFinalizeMutationResponse>;
  /**
   * Generate topics based on the event id and material
   * Material limited to ~120k characters
   */
  generateEventTopics?: Maybe<TopicGenerationMutationResponse>;
  generateViewpoints: EventFeedbackPromptMutationResponse;
  hideQuestion?: Maybe<EventQuestion>;
  lockTopic?: Maybe<TopicLockToggleMutationResponse>;
  lockTopics?: Maybe<MutationResponse>;
  login: UserMutationResponse;
  /** The logout just returns the timestamp of the logout action */
  logout: Scalars['Date'];
  makeOrganizer: UserMutationResponse;
  muteParticipant: MuteParticipantMutationResponse;
  /**
   * Advance the current question
   * TODO: make this an EventMutationResponse
   */
  nextQuestion: Event;
  participantPingEvent: ParticipantPingEventMutationResponse;
  /**
   * Go to the previous question
   * TODO: make this an EventMutationResponse
   */
  prevQuestion: Event;
  /** Regenerates topics with existing reading materials while keeping any locked topics */
  regenerateEventTopics?: Maybe<TopicGenerationMutationResponse>;
  register: UserMutationResponse;
  removeOrganizer: UserMutationResponse;
  removeQuestionFromOnDeck: EventQuestionMutationResponse;
  removeQuestionFromQueue: EventQuestionMutationResponse;
  removeQuestionFromTopicQueue: EventQuestionMutationResponse;
  removeTopic?: Maybe<TopicRemoveMutationResponse>;
  removeTopics?: Maybe<TopicsRemoveMutationResponse>;
  resetPassword: ResetPasswordMutationResponse;
  /**
   * send a reset password request if the account exists
   * returns false if an account with the provided email cannot be found
   */
  resetPasswordRequest: ResetPasswordRequestMutationResponse;
  reshareFeedbackPrompt: EventFeedbackPromptMutationResponse;
  shareFeedbackPromptDraft: EventFeedbackPromptMutationResponse;
  shareFeedbackPromptResults: EventFeedbackPromptMutationResponse;
  /** Start the event so that it is "live" */
  startEvent: EventMutationResponse;
  submitPostEventFeedback: PostEventFeedbackMutationResponse;
  uninviteUser: InviteMutationResponse;
  unlockTopic?: Maybe<TopicLockToggleMutationResponse>;
  unlockTopics?: Maybe<MutationResponse>;
  unmuteParticipant: MuteParticipantMutationResponse;
  updateEmail: UserMutationResponse;
  updateEvent: EventMutationResponse;
  updateEventType: UpdateEventTypeMutationResponse;
  updateModerator: ModeratorMutationResponse;
  updateOnDeckPosition: EventQuestionMutationResponse;
  updateOrganization: OrganizationMutationResponse;
  updateOrganizer: UserMutationResponse;
  updatePassword: UserMutationResponse;
  updatePreferedLanguage: UserMutationResponse;
  updateQuestionPosition: EventQuestionMutationResponse;
  updateSpeaker: EventSpeakerMutationResponse;
  updateTopic?: Maybe<TopicMutationResponse>;
  updateTopicQueuePosition: EventQuestionMutationResponse;
  updateVideo: EventVideoMutationResponse;
};


export type MutationAddQuestionToOnDeckArgs = {
  input: AddQuestionToOnDeck;
};


export type MutationAddQuestionToQueueArgs = {
  input: AddQuestionToQueue;
};


export type MutationAddQuestionToTopicQueueArgs = {
  input: AddQuestionToTopicQueue;
};


export type MutationAddTopicArgs = {
  description: Scalars['String'];
  eventId: Scalars['String'];
  topic: Scalars['String'];
};


export type MutationAddTopicsArgs = {
  eventId: Scalars['String'];
  topics: Array<Scalars['String']>;
};


export type MutationAlterLikeArgs = {
  input: AlterLike;
};


export type MutationCreateBroadcastMessageArgs = {
  input: CreateBroadcastMessage;
};


export type MutationCreateEventArgs = {
  event: CreateEvent;
};


export type MutationCreateFeedbackArgs = {
  input: CreateFeedback;
};


export type MutationCreateFeedbackDmArgs = {
  input: CreateFeedbackDm;
};


export type MutationCreateFeedbackPromptArgs = {
  input: CreateFeedbackPrompt;
};


export type MutationCreateFeedbackPromptResponseArgs = {
  input: CreateFeedbackPromptResponse;
};


export type MutationCreateInviteArgs = {
  input: CreateInvite;
};


export type MutationCreateMemberArgs = {
  input: CreateMember;
};


export type MutationCreateModeratorArgs = {
  input: CreateModerator;
};


export type MutationCreateOrganizationArgs = {
  input: CreateOrganization;
};


export type MutationCreateQuestionArgs = {
  input: CreateQuestion;
};


export type MutationCreateSpeakerArgs = {
  input: CreateSpeaker;
};


export type MutationCreateVideoArgs = {
  input: CreateVideo;
};


export type MutationDeleteAccountArgs = {
  input: DeleteAccountForm;
};


export type MutationDeleteBroadcastMessageArgs = {
  input: DeleteBroadcastMessage;
};


export type MutationDeleteEventArgs = {
  event: DeleteEvent;
};


export type MutationDeleteMemberArgs = {
  input: DeleteMember;
};


export type MutationDeleteModeratorArgs = {
  input: DeleteModerator;
};


export type MutationDeleteOrganizationArgs = {
  input: DeleteOrganization;
};


export type MutationDeleteQuestionArgs = {
  input: DeleteQuestion;
};


export type MutationDeleteSpeakerArgs = {
  input: DeleteSpeaker;
};


export type MutationDeleteVideoArgs = {
  input: DeleteVideo;
};


export type MutationEditBroadcastMessageArgs = {
  input: EditBroadcastMessage;
};


export type MutationEndEventArgs = {
  eventId: Scalars['String'];
};


export type MutationFinalizeTopicsArgs = {
  descriptions: Array<Scalars['String']>;
  eventId: Scalars['String'];
  topics: Array<Scalars['String']>;
};


export type MutationGenerateEventTopicsArgs = {
  eventId: Scalars['String'];
  material: Scalars['String'];
};


export type MutationGenerateViewpointsArgs = {
  input: GenerateViewpointsInput;
};


export type MutationHideQuestionArgs = {
  input: HideQuestion;
};


export type MutationLockTopicArgs = {
  eventId: Scalars['String'];
  topic: Scalars['String'];
};


export type MutationLockTopicsArgs = {
  eventId: Scalars['String'];
  topics: Array<Scalars['String']>;
};


export type MutationLoginArgs = {
  input: LoginForm;
};


export type MutationMakeOrganizerArgs = {
  input: OrganizerForm;
};


export type MutationMuteParticipantArgs = {
  eventId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationNextQuestionArgs = {
  eventId: Scalars['ID'];
};


export type MutationParticipantPingEventArgs = {
  eventId: Scalars['ID'];
};


export type MutationPrevQuestionArgs = {
  eventId: Scalars['ID'];
};


export type MutationRegenerateEventTopicsArgs = {
  eventId: Scalars['String'];
};


export type MutationRegisterArgs = {
  input: RegistrationForm;
};


export type MutationRemoveOrganizerArgs = {
  input: OrganizerForm;
};


export type MutationRemoveQuestionFromOnDeckArgs = {
  input: RemoveQuestionFromOnDeck;
};


export type MutationRemoveQuestionFromQueueArgs = {
  input: RemoveQuestionFromQueue;
};


export type MutationRemoveQuestionFromTopicQueueArgs = {
  input: RemoveQuestionFromTopicQueue;
};


export type MutationRemoveTopicArgs = {
  eventId: Scalars['String'];
  topic: Scalars['String'];
};


export type MutationRemoveTopicsArgs = {
  eventId: Scalars['String'];
  topics: Array<Scalars['String']>;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordForm;
};


export type MutationResetPasswordRequestArgs = {
  input: ResetPasswordRequestForm;
};


export type MutationReshareFeedbackPromptArgs = {
  promptId: Scalars['ID'];
};


export type MutationShareFeedbackPromptDraftArgs = {
  promptId: Scalars['ID'];
};


export type MutationShareFeedbackPromptResultsArgs = {
  eventId: Scalars['ID'];
  promptId: Scalars['ID'];
};


export type MutationStartEventArgs = {
  eventId: Scalars['String'];
};


export type MutationSubmitPostEventFeedbackArgs = {
  eventId: Scalars['ID'];
  feedback: Scalars['String'];
};


export type MutationUninviteUserArgs = {
  eventId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationUnlockTopicArgs = {
  eventId: Scalars['String'];
  topic: Scalars['String'];
};


export type MutationUnlockTopicsArgs = {
  eventId: Scalars['String'];
  topics: Array<Scalars['String']>;
};


export type MutationUnmuteParticipantArgs = {
  eventId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationUpdateEmailArgs = {
  input: UpdateEmailForm;
};


export type MutationUpdateEventArgs = {
  event: UpdateEvent;
};


export type MutationUpdateEventTypeArgs = {
  input: UpdateEventType;
};


export type MutationUpdateModeratorArgs = {
  input: UpdateModerator;
};


export type MutationUpdateOnDeckPositionArgs = {
  input: UpdateOnDeckPosition;
};


export type MutationUpdateOrganizationArgs = {
  input: UpdateOrganization;
};


export type MutationUpdateOrganizerArgs = {
  input: UpdateOrganizerForm;
};


export type MutationUpdatePasswordArgs = {
  input: UpdatePasswordForm;
};


export type MutationUpdatePreferedLanguageArgs = {
  language: Scalars['String'];
};


export type MutationUpdateQuestionPositionArgs = {
  input: UpdateQuestionPosition;
};


export type MutationUpdateSpeakerArgs = {
  input: UpdateSpeaker;
};


export type MutationUpdateTopicArgs = {
  description: Scalars['String'];
  eventId: Scalars['String'];
  newTopic: Scalars['String'];
  oldTopic: Scalars['String'];
};


export type MutationUpdateTopicQueuePositionArgs = {
  input: UpdateTopicQueuePosition;
};


export type MutationUpdateVideoArgs = {
  input: UpdateVideo;
};

export type MutationResponse = {
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type MuteParticipantMutationResponse = MutationResponse & {
  __typename?: 'MuteParticipantMutationResponse';
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export enum Operation {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export type Organization = Node & {
  __typename?: 'Organization';
  /** When this org was created */
  createdAt?: Maybe<Scalars['Date']>;
  /** Events owned by this organization */
  events?: Maybe<EventConnection>;
  /** Unique identifier for this org */
  id: Scalars['ID'];
  /** Whether or not the current viewer is a member */
  isViewerMember?: Maybe<Scalars['Boolean']>;
  /** all members of this org */
  members?: Maybe<UserConnection>;
  /** name of the org */
  name: Scalars['String'];
};


export type OrganizationEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type OrganizationMembersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type OrganizationConnection = {
  __typename?: 'OrganizationConnection';
  edges?: Maybe<Array<OrganizationEdge>>;
  pageInfo: PageInfo;
};

export type OrganizationEdge = {
  __typename?: 'OrganizationEdge';
  cursor: Scalars['String'];
  node: Organization;
};

export type OrganizationMutationResponse = MutationResponse & {
  __typename?: 'OrganizationMutationResponse';
  body?: Maybe<OrganizationEdge>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type OrganizationSubscription = {
  __typename?: 'OrganizationSubscription';
  deleteMember: Scalars['Boolean'];
  orgId: Scalars['ID'];
  userId?: Maybe<Scalars['ID']>;
};

export type OrganizerForm = {
  email: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type ParticipantPingEventMutationResponse = MutationResponse & {
  __typename?: 'ParticipantPingEventMutationResponse';
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type PostEventFeedbackMutationResponse = MutationResponse & {
  __typename?: 'PostEventFeedbackMutationResponse';
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  dashboardEvents?: Maybe<Array<Event>>;
  /** Fetch a single event */
  event?: Maybe<Event>;
  eventBroadcastMessages?: Maybe<Array<EventBroadcastMessage>>;
  eventParticipants: Array<Maybe<EventParticipant>>;
  eventTopics?: Maybe<Array<EventTopic>>;
  /** Fetch all events */
  events?: Maybe<Array<Event>>;
  isOrganizer: Scalars['Boolean'];
  /** Fetch user data about the current user */
  me?: Maybe<User>;
  myFeedback?: Maybe<Array<Maybe<EventLiveFeedback>>>;
  node?: Maybe<Node>;
  prompt?: Maybe<EventLiveFeedbackPrompt>;
  promptResponseViewpoints?: Maybe<Array<Scalars['String']>>;
  promptResponseVotes: Votes;
  promptResponses?: Maybe<Array<EventLiveFeedbackPromptResponse>>;
  prompts?: Maybe<Array<EventLiveFeedbackPrompt>>;
  questionsByEventId?: Maybe<Array<EventQuestion>>;
  topics?: Maybe<Array<EventTopic>>;
  /** Validates an invite token and logs the user in if they are already registered. */
  validateInvite: ValidateInviteQueryResponse;
  validatePasswordResetToken: ValidatePasswordResetTokenQueryResponse;
};


export type QueryEventArgs = {
  eventId: Scalars['ID'];
};


export type QueryEventBroadcastMessagesArgs = {
  eventId: Scalars['ID'];
};


export type QueryEventParticipantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  eventId: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryEventTopicsArgs = {
  eventId: Scalars['String'];
};


export type QueryMyFeedbackArgs = {
  eventId: Scalars['ID'];
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryPromptArgs = {
  promptId: Scalars['ID'];
};


export type QueryPromptResponseViewpointsArgs = {
  promptId: Scalars['ID'];
};


export type QueryPromptResponseVotesArgs = {
  promptId: Scalars['ID'];
};


export type QueryPromptResponsesArgs = {
  promptId: Scalars['ID'];
};


export type QueryPromptsArgs = {
  eventId: Scalars['ID'];
};


export type QueryQuestionsByEventIdArgs = {
  eventId: Scalars['ID'];
};


export type QueryValidateInviteArgs = {
  input: ValidateInvite;
};


export type QueryValidatePasswordResetTokenArgs = {
  input: ValidatePasswordResetTokenForm;
};

export type QuestionBody = {
  __typename?: 'QuestionBody';
  originalLang: Scalars['String'];
  question: Scalars['String'];
};

export type RegistrationForm = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type RemoveQuestionFromOnDeck = {
  eventId: Scalars['ID'];
  newPosition: Scalars['String'];
  questionId: Scalars['ID'];
  /** Can use the topic and new position to properly place the question in the correct order in the correct topic queue */
  topic: Scalars['String'];
};

export type RemoveQuestionFromQueue = {
  eventId: Scalars['ID'];
  questionId: Scalars['ID'];
};

export type RemoveQuestionFromTopicQueue = {
  eventId: Scalars['ID'];
  questionId: Scalars['ID'];
  topic: Scalars['String'];
};

export type ResetPasswordForm = {
  confirmNewPassword: Scalars['String'];
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export type ResetPasswordMutationResponse = MutationResponse & {
  __typename?: 'ResetPasswordMutationResponse';
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type ResetPasswordRequestForm = {
  email: Scalars['String'];
};

export type ResetPasswordRequestMutationResponse = MutationResponse & {
  __typename?: 'ResetPasswordRequestMutationResponse';
  body?: Maybe<Scalars['Boolean']>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  broadcastMessageCreated: EventBroadcastMessageEdgeContainer;
  broadcastMessageDeleted: EventBroadcastMessageEdgeContainer;
  enqueuedPushQuestion: EventQuestionEdgeContainer;
  enqueuedRemoveQuestion: EventQuestionEdgeContainer;
  enqueuedUnshiftQuestion: EventQuestionEdgeContainer;
  eventCreated: EventEdgeContainer;
  eventDeleted: EventEdgeContainer;
  /** New messages as feedback is given */
  eventLiveFeedbackCreated: EventLiveFeedback;
  eventUpdates: Event;
  feedbackCRUD: FeedbackOperation;
  feedbackPromptResultsShared: EventLiveFeedbackPrompt;
  feedbackPrompted: EventLiveFeedbackPromptEdge;
  /** subscription for whenever a new org is added */
  orgUpdated: OrganizationSubscription;
  participantMuted?: Maybe<Scalars['Boolean']>;
  /** Question subscription for all operations performed on questions */
  questionCreated: EventQuestionEdgeContainer;
  questionCreatedByTopic: EventQuestionEdgeContainer;
  questionDeleted: EventQuestionEdgeContainer;
  questionDequeued: EventQuestionEdgeContainer;
  questionEnqueued: EventQuestionEdgeContainer;
  questionUpdated: EventQuestionEdgeContainer;
  recordPushQuestion: EventQuestionEdgeContainer;
  recordRemoveQuestion: EventQuestionEdgeContainer;
  recordUnshiftQuestion: EventQuestionEdgeContainer;
  topicQueuePush: EventQuestionEdgeContainer;
  topicQueueRemove: EventQuestionEdgeContainer;
  topicUpdated?: Maybe<EventTopic>;
  /** Subscribes to the creation of invites for a given event. */
  userInvited: UserEdgeContainer;
  /** Subscribes to the removal of invites for a given event. */
  userUninvited: UserEdgeContainer;
};


export type SubscriptionBroadcastMessageCreatedArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionBroadcastMessageDeletedArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionEnqueuedPushQuestionArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionEnqueuedRemoveQuestionArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionEnqueuedUnshiftQuestionArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionEventCreatedArgs = {
  userId?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionEventDeletedArgs = {
  eventIds: Array<Scalars['ID']>;
};


export type SubscriptionEventLiveFeedbackCreatedArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionEventUpdatesArgs = {
  userId: Scalars['ID'];
};


export type SubscriptionFeedbackCrudArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionFeedbackPromptResultsSharedArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionFeedbackPromptedArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionParticipantMutedArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionQuestionCreatedArgs = {
  eventId: Scalars['ID'];
  viewerOnly?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionQuestionCreatedByTopicArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionQuestionDeletedArgs = {
  eventId: Scalars['ID'];
  viewerOnly?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionQuestionDequeuedArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionQuestionEnqueuedArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionQuestionUpdatedArgs = {
  eventId: Scalars['ID'];
  viewerOnly?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionRecordPushQuestionArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionRecordRemoveQuestionArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionRecordUnshiftQuestionArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionTopicQueuePushArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionTopicQueueRemoveArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionTopicUpdatedArgs = {
  eventId: Scalars['String'];
};


export type SubscriptionUserInvitedArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionUserUninvitedArgs = {
  eventId: Scalars['ID'];
};

export type Topic = {
  description: Scalars['String'];
  id: Scalars['ID'];
  topic: Scalars['String'];
};

export type TopicFinalizeMutationResponse = MutationResponse & {
  __typename?: 'TopicFinalizeMutationResponse';
  body?: Maybe<Array<GeneratedTopic>>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type TopicGenerationMutationResponse = MutationResponse & {
  __typename?: 'TopicGenerationMutationResponse';
  body?: Maybe<Array<GeneratedTopic>>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type TopicLockToggleMutationResponse = MutationResponse & {
  __typename?: 'TopicLockToggleMutationResponse';
  body?: Maybe<TopicOnly>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type TopicMutationResponse = MutationResponse & {
  __typename?: 'TopicMutationResponse';
  body?: Maybe<GeneratedTopic>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type TopicOnly = {
  __typename?: 'TopicOnly';
  topic: Scalars['String'];
};

export type TopicRemoveMutationResponse = MutationResponse & {
  __typename?: 'TopicRemoveMutationResponse';
  body?: Maybe<TopicOnly>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type TopicsRemoveMutationResponse = MutationResponse & {
  __typename?: 'TopicsRemoveMutationResponse';
  body?: Maybe<Array<TopicOnly>>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type UpdateEmailForm = {
  currentEmail: Scalars['String'];
  newEmail: Scalars['String'];
};

export type UpdateEvent = {
  description?: InputMaybe<Scalars['String']>;
  endDateTime?: InputMaybe<Scalars['Date']>;
  eventId: Scalars['String'];
  isCollectRatingsEnabled?: InputMaybe<Scalars['Boolean']>;
  isForumEnabled?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  isQuestionFeedVisible?: InputMaybe<Scalars['Boolean']>;
  startDateTime?: InputMaybe<Scalars['Date']>;
  title?: InputMaybe<Scalars['String']>;
  topic?: InputMaybe<Scalars['String']>;
};

export type UpdateEventType = {
  eventId: Scalars['ID'];
  eventType: EventType;
};

export type UpdateEventTypeMutationResponse = MutationResponse & {
  __typename?: 'UpdateEventTypeMutationResponse';
  body?: Maybe<Scalars['String']>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type UpdateModerator = {
  email: Scalars['String'];
  eventId: Scalars['ID'];
};

export type UpdateOnDeckPosition = {
  eventId: Scalars['ID'];
  newPosition: Scalars['String'];
  questionId: Scalars['ID'];
};

/** Information that may be updated by the user */
export type UpdateOrganization = {
  name: Scalars['String'];
  orgId: Scalars['ID'];
};

export type UpdateOrganizerForm = {
  canMakeOrgs: Scalars['Boolean'];
  id: Scalars['ID'];
};

export type UpdatePasswordForm = {
  confirmNewPassword: Scalars['String'];
  email: Scalars['String'];
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type UpdateQuestionPosition = {
  eventId: Scalars['ID'];
  position: Scalars['String'];
  questionId: Scalars['ID'];
};

export type UpdateQuestionQueue = {
  adding: Scalars['Boolean'];
  eventId: Scalars['ID'];
  questionId: Scalars['ID'];
};

export type UpdateSpeaker = {
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  eventId: Scalars['String'];
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  pictureUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateTopicQueuePosition = {
  eventId: Scalars['ID'];
  newPosition: Scalars['String'];
  questionId: Scalars['ID'];
  topic: Scalars['String'];
};

export type UpdateVideo = {
  eventId: Scalars['String'];
  lang?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  videoId: Scalars['String'];
};

/** User Data */
export type User = Node & {
  __typename?: 'User';
  /** All events */
  allEvents?: Maybe<EventConnection>;
  /** Avatar URL if null then no avatar is uploaded */
  avatar?: Maybe<Scalars['String']>;
  canMakeOrgs?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  /** Events that this user is a moderator of, or has been invited to */
  events?: Maybe<EventConnection>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  isEmailVerified?: Maybe<Scalars['Boolean']>;
  isOrganizer?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  /** Can be used to check if the user is a moderator of a specific event */
  moderatorOf?: Maybe<Scalars['Boolean']>;
  /** Organizations that this user belongs to */
  organizations?: Maybe<OrganizationConnection>;
  preferredLang?: Maybe<Scalars['String']>;
  /** All the users */
  users?: Maybe<UserConnection>;
};


/** User Data */
export type UserAllEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<EventsSearchFilters>;
  first?: InputMaybe<Scalars['Int']>;
};


/** User Data */
export type UserEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


/** User Data */
export type UserModeratorOfArgs = {
  eventId: Scalars['ID'];
};


/** User Data */
export type UserOrganizationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


/** User Data */
export type UserUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UsersSearchFilters>;
  first?: InputMaybe<Scalars['Int']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges?: Maybe<Array<UserEdge>>;
  pageInfo: PageInfo;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserEdgeContainer = {
  __typename?: 'UserEdgeContainer';
  edge: UserEdge;
};

export type UserMutationResponse = MutationResponse & {
  __typename?: 'UserMutationResponse';
  body?: Maybe<User>;
  isError: Scalars['Boolean'];
  message: Scalars['String'];
};

export type UserSettings = {
  __typename?: 'UserSettings';
  currentEmail: Scalars['String'];
  deleteAccount: Scalars['Boolean'];
  isAnonymous: Scalars['Boolean'];
  isNotificationsEnabled: Scalars['Boolean'];
  updateEmail?: Maybe<Scalars['String']>;
  updatePassword?: Maybe<Scalars['String']>;
};

export type UsersSearchFilters = {
  /** Search by email */
  email?: InputMaybe<Scalars['String']>;
  /** Search by first name */
  firstName?: InputMaybe<Scalars['String']>;
  /** Search by last name */
  lastName?: InputMaybe<Scalars['String']>;
};

export type ValidateInvite = {
  eventId: Scalars['ID'];
  token: Scalars['String'];
};

export type ValidateInviteQueryResponse = {
  __typename?: 'ValidateInviteQueryResponse';
  user?: Maybe<User>;
  valid: Scalars['Boolean'];
};

export type ValidatePasswordResetTokenForm = {
  token: Scalars['String'];
};

export type ValidatePasswordResetTokenQueryResponse = {
  __typename?: 'ValidatePasswordResetTokenQueryResponse';
  message: Scalars['String'];
  valid: Scalars['Boolean'];
};

export enum Vote {
  Against = 'AGAINST',
  Conflicted = 'CONFLICTED',
  For = 'FOR'
}

export type Votes = {
  __typename?: 'Votes';
  against: Scalars['Int'];
  conflicted: Scalars['Int'];
  for: Scalars['Int'];
};
