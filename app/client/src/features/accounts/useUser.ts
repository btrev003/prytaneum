import * as React from 'react';
import { graphql, useFragment } from 'react-relay';

import { UserContext, UserDispatch } from '@local/features/accounts/UserContext';

export const USE_USER_FRAGMENT = graphql`
    fragment useUserFragment on User {
        id
        firstName
        lastName
        email
        avatar
        isOrganizer
        isAdmin
        preferredLang
    }
`;

export function useUser() {
    const { userState: userFragment, isLoadingState: isLoading } = React.useContext(UserContext);
    const { userDispatch: setUser, isLoadingDispatch: setIsLoading } = React.useContext(UserDispatch);
    if (userFragment === undefined || isLoading === undefined || setUser === undefined || setIsLoading === undefined)
        throw new Error('useUser() must be used within a UserContextProvider');
    const user = useFragment(USE_USER_FRAGMENT, userFragment);

    return { user, setUser, isLoading, setIsLoading } as const;
}
