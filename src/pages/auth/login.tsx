import React, { useState, useContext, useEffect } from 'react';
import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { EvaIcon } from '@paljs/ui/Icon';
import { Link } from 'gatsby';

import { AuthContext } from '../../contexts/auth/authContext';

import Auth, { Group } from '../../components/Auth';
import Socials from '../../components/Auth/Socials';
import SEO from '../../components/SEO';
import useAuth from '../../firebase/hooks/useAuth';

export default function Login() {
  const { userState, setUser } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [handlers, user] = useAuth();

  useEffect(() => {
    if (user) setUser(user);
  }, [user]);

  const handlerDefaultLogin = () => {
    if (form.email && form.password) {
      handlers.emailAndPassword(form.email, form.password);
    }
  };

  const onChangeInput = (e) => {
    e.preventDefault();

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Auth title="Login" subTitle="Hello! Login with your email">
      <SEO title="Login" />
      <form>
        <InputGroup fullWidth>
          <input type="email" placeholder="Email Address" name="email" onChange={onChangeInput} />
        </InputGroup>
        <InputGroup fullWidth>
          <input type="password" placeholder="Password" name="password" onChange={onChangeInput} />
        </InputGroup>
        <Button onClick={handlerDefaultLogin} status="Success" type="button" shape="SemiRound" fullWidth>
          Login
        </Button>
      </form>
      <p>Or</p>
      <Button
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={handlers.google}
        status="Control"
        shape="Round"
        fullWidth
      >
        <EvaIcon name="google" />
        <span style={{ marginLeft: '0.5rem' }}>Sign in with Google</span>
      </Button>
      {/* <Socials /> */}
      <p>
        Don&apos;t have account? <Link to="/auth/register">Register</Link>
      </p>
      <p>
        Forgot Passowrd? <Link to="/auth/forgot-password">here</Link>
      </p>
    </Auth>
  );
}
