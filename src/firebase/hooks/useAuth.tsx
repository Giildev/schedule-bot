import { useContext } from 'react';
import { navigate } from 'gatsby';

import { AuthContext } from '../../contexts/auth/authContext';

import { login, signInWithGoogle, register, getToken } from '../queries/auth';

const useAuth = () => {
  const { userState, setUser } = useContext(AuthContext);

  const setAccessToken = (accessToken) => {
    localStorage.setItem('access_token', accessToken);
  };

  const buildUserObject = (user) => ({
    displayName: user?.displayName,
    photoURL: user?.photoURL,
    email: user?.email,
  });

  const handleSignIn = (email, password) => {
    login(email, password)
      .then(async (res) => {
        console.log(res);
        const token = await getToken();
        setAccessToken(token);
        setUser(buildUserObject(res.user));
        navigate('/basic/home');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleRegister = (email, password) => {
    register(email, password)
      .then((res) => {
        if (res.user !== null) {
          navigate('/auth/login');
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        setAccessToken(res.credential.accessToken);
        setUser(buildUserObject(res.user));
        navigate('/basic/home');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handler = {
    google: handleSignInWithGoogle,
    emailAndPassword: handleSignIn,
    register: handleRegister,
  };

  return [handler, userState];
};

export default useAuth;
