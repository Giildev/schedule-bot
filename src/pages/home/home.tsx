import React from 'react';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import Container from '@material-ui/core/Container';
import Table from '../../components/Table/Table';

import SEO from '../../components/SEO';

const Home = () => {
  return (
    <>
      <SEO title="Basic Home" />
      <Container>
        <Row>
          <Col breakPoint={{ lg: 1 }}></Col>
          <Col breakPoint={{ xs: 12, lg: 10 }}>
            <Table></Table>
          </Col>
          <Col breakPoint={{ lg: 1 }}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
