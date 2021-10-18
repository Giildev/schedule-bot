import React from 'react';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import Container from '@material-ui/core/Container';

import SEO from '../../components/SEO';
import styled from 'styled-components';
import { InputGroup } from '@paljs/ui/Input';

const Profile = () => {
  const Input = styled(InputGroup)`
    margin-bottom: 10px;
  `;
  return (
    <>
      <SEO title="Basic Profile" />
      <Container>
        <Row>
          <Col breakPoint={{ xs: 12, lg: 12 }}>
            {/* Add avatar (rounded) */}
            <Input fullWidth size="Medium">
              <input type="text" placeholder="Name" />
            </Input>
            <Input fullWidth size="Medium">
              <input type="text" placeholder="Last Name" />
            </Input>
            <Input fullWidth size="Medium">
              <input type="text" placeholder="Phone" />
            </Input>
            {/* Checkbox asking if he wants to receive notifications (check notion for this) */}
            <Input fullWidth size="Medium">
              <input type="text" placeholder="Email" />
            </Input>
            {/* Checkbox asking if he wants to receive notifications (check notion for this) */}
            {/* Add button to update (CTA = Call to Action) */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
