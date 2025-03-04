import * as React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { graphql, useMutation, useFragment } from 'react-relay';
import { DeleteButtonFragment$key } from '@local/__generated__/DeleteButtonFragment.graphql';
import { DeleteButtonMutation } from '@local/__generated__/DeleteButtonMutation.graphql';
import { useSnack } from '@local/core/useSnack';

const DELETE_QUESTION_FRAGMENT = graphql`
    fragment DeleteButtonFragment on EventQuestion {
        id
        position
    }
`;

const DELETE_QUESTION_MUTATION = graphql`
    mutation DeleteButtonMutation($input: DeleteQuestion!) {
        deleteQuestion(input: $input) {
            isError
            message
            body {
                cursor
                node {
                    id
                }
            }
        }
    }
`;

interface Props {
    fragmentRef: DeleteButtonFragment$key;
}

export function DeleteButton({ fragmentRef }: Props) {
    const { id: questionId, position } = useFragment(DELETE_QUESTION_FRAGMENT, fragmentRef);
    const [commit] = useMutation<DeleteButtonMutation>(DELETE_QUESTION_MUTATION);
    const { displaySnack } = useSnack();

    function handleClick() {
        commit({
            variables: {
                input: {
                    questionId,
                    isVisible: false,
                },
            },
            onCompleted({ deleteQuestion }) {
                if (deleteQuestion.isError) displaySnack(deleteQuestion.message);
            },
        });
    }

    const isQueued = React.useMemo(() => {
        if (parseInt(position) === -1) return false;
        return true;
    }, [position]);

    if (isQueued) return <React.Fragment />;

    return (
        <React.Fragment>
            <IconButton onClick={handleClick} sx={{ color: (theme) => theme.palette.custom.danger }}>
                <DeleteIcon fontSize='small' />
            </IconButton>
        </React.Fragment>
    );
}
