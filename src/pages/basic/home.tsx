import React from 'react';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';

import SEO from '../../components/SEO';
import useGetSchedule from '../../firebase/hooks/useGetSchedule';

const Accordions = () => {
  const [data, loading, error] = useGetSchedule();

  console.log(loading)
  console.log(data)

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
