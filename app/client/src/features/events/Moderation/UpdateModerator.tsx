import * as React from 'react';
import { graphql, useMutation } from 'react-relay';

import type { UpdateModeratorMutation } from '@local/__generated__/UpdateModeratorMutation.graphql';
import { ModeratorForm, ModeratorProps, TModeratorForm } from './ModeratorForm';
import { useSnack } from '@local/core';

export interface CreateModeratorProps {
    eventId: string;
    form: TModeratorForm;
    onSubmit?: () => void;
}

export const UPDATE_MODERATOR_MUTATION = graphql`
    mutation UpdateModeratorMutation($input: UpdateModerator!) {
        updateModerator(input: $input) {
            isError
            message
            body {
                id
                firstName
                lastName
                avatar
            }
        }
    }
`;

export function UpdateModerator({ eventId, onSubmit, form }: CreateModeratorProps) {
    const [commit] = useMutation<UpdateModeratorMutation>(UPDATE_MODERATOR_MUTATION);
    const { displaySnack } = useSnack();

    const handleSubmit: ModeratorProps['onSubmit'] = (submittedForm: TModeratorForm) => {
        commit({
            variables: {
                input: {
                    ...submittedForm,
                    eventId,
                },
            },
            onCompleted(results) {
                if (results.updateModerator.isError)
                    displaySnack(results.updateModerator.message, { variant: 'error' });
                else if (onSubmit) onSubmit();
            },
            onError(err) {
                displaySnack(err.message, { variant: 'error' });
            },
        });
    };
    return <ModeratorForm onSubmit={handleSubmit} form={form} />;
}
