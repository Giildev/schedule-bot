import React, { useContext, useEffect } from 'react';
import { navigate } from 'gatsby';

import { AuthContext } from './authContext';

const withAuth = (Component: React.FC): React.FC => (props) => {
  const { userState } = useContext(AuthContext);

  const fallback = '/auth/login';

  useEffect(() => {
    if (userState) return;

    navigate(fallback);
  }, [userState]);

  return (
    <>
      <Component {...props} />
    </>
  );
};

export default withAuth;
