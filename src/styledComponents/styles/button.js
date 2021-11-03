import React from 'react';
import { Button } from '@paljs/ui/Button';
import styled from 'styled-components';

export default function Save() {
  const Style = styled.button`
    margin: auto;
  `;
  return (
    <Style>
      <Button>Save</Button>
    </Style>
  );
}
