import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { EvaIcon } from '@paljs/ui/Icon';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Auth from '../../components/Auth';
import SEO from '../../components/SEO';
import useAuth from '../../firebase/hooks/useAuth';

const Input = styled(InputGroup)`
  margin-bottom: 2rem;
`;

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    tlf: '',
  });
  const [handlers] = useAuth();
  const onChangeInput = (e) => {
    e.preventDefault();

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    if (form.email && form.password) {
      handlers.register(form.email, form.password);
    }
  };

  return (
    <Auth title="Create new account">
      <SEO title="Register" />
      <form>
        <Input fullWidth>
          <input type="text" placeholder="Name" name="name" onChange={onChangeInput} />
        </Input>
        <Input fullWidth>
          <input type="email" placeholder="Email Address" name="email" onChange={onChangeInput} />
        </Input>
        <Input fullWidth>
          <input type="tel" placeholder="Phone Number" name="tlf" onChange={onChangeInput} />
        </Input>
        <Input fullWidth>
          <input type="password" placeholder="Password" name="password" onChange={onChangeInput} />
        </Input>
        {/* <Input fullWidth>
          <input type="password" placeholder="Confirm Password" />
        </Input> */}
        {/* <Checkbox onChange={onCheckbox}>
          Agree to <Link to="/">Terms & Conditions</Link>
        </Checkbox> */}
        <Button onClick={handleRegister} status="Success" type="button" shape="SemiRound" fullWidth>
          Register
        </Button>
      </form>
      {/* <Socials /> */}
      <p>Or</p>
      <Button
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={handlers.google}
        status="Control"
        shape="Round"
        fullWidth
      >
        <EvaIcon name="google" />
        <span style={{ marginLeft: '0.5rem' }}>Register with Google</span>
      </Button>
      <p>
        Already have an account? <Link to="/auth/login">Log In</Link>
      </p>
    </Auth>
  );
}
