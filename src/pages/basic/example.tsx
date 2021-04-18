import React, { useContext } from 'react';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';

import withAuth from '../../contexts/auth/withAuth';
import { AuthContext } from '../../contexts/auth/authContext';

import SEO from '../../components/SEO';

const Example = () => {
  const { userState } = useContext(AuthContext);

  return (
    <>
      <SEO title="Example Home" />
      <Row>
        <Col breakPoint={{ xs: 12, lg: 12 }}>{userState.displayName}</Col>
      </Row>
    </>
  );
};

export default withAuth(Example);
