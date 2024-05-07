import { graphql, useFragment } from 'react-relay';
import { CardContent, CardContentProps, Typography, TypographyProps } from '@mui/material';

import type { QuestionContentFragment$key } from '@local/__generated__/QuestionContentFragment.graphql';

export type QuestionContentProps = {
    fragmentRef: QuestionContentFragment$key;
    typographyProps?: TypographyProps;
} & CardContentProps;

export const QUESTION_CONTENT_FRAGMENT = graphql`
    fragment QuestionContentFragment on EventQuestion {
        question
    }
`;

export function QuestionContent({ fragmentRef, typographyProps = {}, ...props }: QuestionContentProps) {
    const questionContentData = useFragment(QUESTION_CONTENT_FRAGMENT, fragmentRef);

    return (
        <CardContent {...props} sx={{ margin: (theme) => theme.spacing(-2, 0, -1, 0) }}>
            <Typography variant='inherit' style={{ wordBreak: 'break-word' }} {...typographyProps}>
                {questionContentData.question}
            </Typography>
        </CardContent>
    );
}
