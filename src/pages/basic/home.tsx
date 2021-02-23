import React from 'react';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';

import SEO from '../../components/SEO';

const Accordions = () => {
  return (
    <>
      <SEO title="Basic Home" />
      <Row>
        <Col breakPoint={{ xs: 12, lg: 12 }}>Basic Home</Col>
      </Row>
    </>
  );
};

export default Accordions;
