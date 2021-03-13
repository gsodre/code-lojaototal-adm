import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin: 5px 0 0;
  height: 44px;
  background: #ca151c;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 7px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.03, '#ca151c')};
  }
`;
