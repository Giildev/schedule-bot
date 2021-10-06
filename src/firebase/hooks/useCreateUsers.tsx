import { useState } from 'react';
import { navigate } from 'gatsby';
import _ from 'lodash';
import { register } from '../queries/auth';
import { createUser } from '../queries/user';

const useCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const handleCreateUser = async (user) => {
    try {
      setLoading(true);
      const userToSave = _.omit(user, ['password']);
      await register(user.email, user.password);
      await createUser(userToSave);
      navigate('/auth/login');
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return [handleCreateUser, loading, error];
};

export default useCreateUser;
