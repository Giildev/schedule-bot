import React from 'react';
import styled from 'styled-components';

export default function Avatar() {
  const Style = styled.image`
    position: relative;
    left: 45%;
    transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);

    &:hover {
      -moz-box-shadow: #000000;
      -webkit-box-shadow: #000000;
      box-shadow: #000000;
    }
  `;
  return (
    <Style>
      <div className="image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"
          alt="avatar"
          width="150"
          height="150"
        />
      </div>
    </Style>
  );
}
