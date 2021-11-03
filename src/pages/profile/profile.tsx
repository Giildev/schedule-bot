import React, { useState } from 'react';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import Container from '@material-ui/core/Container';
import SEO from '../../components/SEO';
import styled from 'styled-components';
import Avatar from '../../styledComponents/styles/avatar';
import Button from '../../styledComponents/styles/button';
import { InputGroup } from '@paljs/ui/Input';
import { Checkbox } from '@paljs/ui/Checkbox';
import ChangePassword from '../../styledComponents/styles/changePassword';

const Profile = () => {
  const Input = styled(InputGroup)`
    margin-bottom: 10px;
  `;
  const [checkbox, setCheckbox] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const onChangeCheckbox = (value: boolean, name: number) => {
    setCheckbox({ ...checkbox, [name]: value });
  };
  return (
    <>
      <SEO title="Basic Profile" />
      <Container>
        <Row>
          <Col breakPoint={{ xs: 12, lg: 12 }}>
            <Avatar />
            <Input fullWidth size="Medium">
              <input type="text" placeholder="Name" />
            </Input>
            <Input fullWidth size="Medium">
              <input type="text" placeholder="Last Name" />
            </Input>
            <Input fullWidth size="Medium">
              <input type="text" placeholder="Phone" />
            </Input>
            <Checkbox checked={checkbox[1]} status="Success" onChange={(value) => onChangeCheckbox(value, 1)}>
              New message
            </Checkbox>
            <Checkbox checked={checkbox[2]} status="Success" onChange={(value) => onChangeCheckbox(value, 2)}>
              New appointment
            </Checkbox>
            <Checkbox checked={checkbox[3]} status="Success" onChange={(value) => onChangeCheckbox(value, 3)}>
              Reminder appointment
            </Checkbox>
            <Input fullWidth size="Medium">
              <input type="text" placeholder="Email" />
            </Input>
            <Checkbox checked={checkbox[4]} status="Success" onChange={(value) => onChangeCheckbox(value, 4)}>
              New message
            </Checkbox>
            <Checkbox checked={checkbox[5]} status="Success" onChange={(value) => onChangeCheckbox(value, 5)}>
              New appointment
            </Checkbox>
            <Checkbox checked={checkbox[6]} status="Success" onChange={(value) => onChangeCheckbox(value, 6)}>
              Reminder appointment
            </Checkbox>
          </Col>

          <ChangePassword />

          <Button />
        </Row>
      </Container>
    </>
  );
};

export default Profile;
