import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fafafa 0% 0% no-repeat padding-box;
  border-radius: 7px;
  opacity: 1;
  height: 44px;
  padding: 0 15px;
  margin: 10px 30px;

  border: 1px solid #e6e6e6;
  color: #333;

  display: flex;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px solid #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #333;
      border-color: #333;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ca151c;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #ccc;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
