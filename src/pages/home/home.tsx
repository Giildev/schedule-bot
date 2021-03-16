import React from 'react';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import Container from '@material-ui/core/Container';
import Table from '../../components/Table/Table';
import useGetSchedule from '../../firebase/hooks/useGetSchedule';

import SEO from '../../components/SEO';

const Home = () => {
  const [data, loading, error] = useGetSchedule();

  console.log(loading);
  console.log(data);
  console.log(error);

  return (
    <>
      <SEO title="Basic Home" />
      <Container>
        <Row>
          <Col breakPoint={{ xs: 12, lg: 12 }}>
            <Table />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
