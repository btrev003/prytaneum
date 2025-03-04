import { graphql, useMutation } from 'react-relay';

import type { UpdateEventMutation, UpdateEventMutation$data } from '@local/__generated__/UpdateEventMutation.graphql';
import { EventForm, TEventForm, EventFormProps } from './EventForm';
import { useSnack } from '@local/core';

export const UPDATE_EVENT_MUTATION = graphql`
    mutation UpdateEventMutation($input: UpdateEvent!) {
        updateEvent(event: $input) {
            isError
            message
            body {
                id
                title
                topic
                description
                startDateTime
                endDateTime
            }
        }
    }
`;

export type TUpdatedEvent = NonNullable<UpdateEventMutation$data['updateEvent']>;
export type UpdateEventProps = {
    eventId: string;
    onSubmit: () => void;
    form: TEventForm;
} & Omit<EventFormProps, 'onSubmit' | 'form' | 'formType'>;

export function UpdateEvent({ eventId, onSubmit, ...eventFormProps }: UpdateEventProps) {
    const [commit] = useMutation<UpdateEventMutation>(UPDATE_EVENT_MUTATION);
    const { displaySnack } = useSnack();

    function handleSubmit(submittedForm: TEventForm) {
        commit({
            variables: {
                input: {
                    ...submittedForm,
                    eventId,
                },
            },
            onCompleted(results) {
                if (results.updateEvent.isError) displaySnack(results.updateEvent.message, { variant: 'error' });
                else onSubmit();
            },
            onError(err) {
                displaySnack(err.message, { variant: 'error' });
            },
        });
    }

    return <EventForm {...eventFormProps} formType='Update' onSubmit={handleSubmit} title='Update Event Details' />;
}
