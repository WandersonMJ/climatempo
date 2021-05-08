import styled, { css } from "styled-components";

import InputMask from "react-input-mask";

export const InputCEP = styled(InputMask)`
  width: 80%;
  /* height: 100%; */
  height: 34px;
  border: none;
  font-size: 21px;
`;

export const WrapperInput = styled.div`
  width: 600px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid #000;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  /* position: absolute;
  top: ${({ top }) => (top ? `${top}px` : "150px")}; */

  ${({ hasValue }) =>
    hasValue &&
    css`
      border-color: blue;
    `}

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: red;
    `}

  svg {
    cursor: pointer;
  }
`;

export const Error = styled.div`
  line-height: 40px;
  font-size: 21px;
  color: red;
  letter-spacing: 2.5px;
  font-family: "Roboto", sans-serif;

  margin-left: 24px;
  /* position: absolute;
  top: ${({ top }) => (top ? `${top + 57}px` : "150px")}; */
`;

export const WrapInput = styled.div`
  margin-bottom: 24px;

  ${({ error }) =>
    error &&
    css`
      margin-bottom: 10px;
    `}
`;
