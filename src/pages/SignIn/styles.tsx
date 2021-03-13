import styled, { keyframes } from 'styled-components';

import cover from '../../assets/images/cover.jpg';

const appearFromTop = keyframes`
from {
 opacity: 0;
 transform: translateY(-50px);
}
to{
  opacity: 1;
 transform: translateY(0);
}
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: transparent url(${cover}) 0% 0% no-repeat;
  background-size: cover;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;
  background: #fff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 7px;
  opacity: 1;

  animation: ${appearFromTop} 1s;

  img {
    height: 95px;
    margin-top: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 13px;

    button {
      border-radius: 0 0 7px 7px;
    }
  }
`;
