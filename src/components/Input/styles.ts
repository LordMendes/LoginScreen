import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface InputProps {
  isErrored: boolean;
  isFocused: boolean;
}

export const Container = styled.div`
  p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;

    display: flex;
    align-items: center;

    color: #383e71;
    margin-bottom: 8px;
  }
`;

export const InputBox = styled.div<InputProps>`
  width: 256px;
  height: 48px;
  left: 877px;
  top: 353px;

  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  border: 1px solid #989fdb;
  box-sizing: border-box;
  border-radius: 8px;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #383e71;
    margin-bottom: 16px;

    &::placeholder {
      color: #989fdb;
    }
    &:focus {
      outline: none;
    }
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: ${darken(0.2, '#989fdb')};
    `}
`;
