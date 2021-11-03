import React from 'react';
import styled from 'styled-components';

export default function Change() {
  const Style = styled.text`
    margin-left: 10px;
    margin-top: 20px;
  `;
  return (
    <Style>
      <div className="text">
        <a>Change password</a>
      </div>
    </Style>
  );
}
