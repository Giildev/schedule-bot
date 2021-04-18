import React from 'react';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';

import withAuth from '../../contexts/auth/withAuth';

import SEO from '../../components/SEO';
import { Button } from '@paljs/ui/Button';
import { navigate } from 'gatsby';

const Home = () => (
  <>
    <SEO title="Home" />
    <Row>
      <Col breakPoint={{ xs: 12, lg: 12 }}>
        <Button onClick={() => navigate('/example')}>Go to Example</Button>
      </Col>
    </Row>
  </>
);

export default withAuth(Home);
