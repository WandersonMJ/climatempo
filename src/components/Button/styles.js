import styled, { css } from "styled-components";

export const Container = styled.div`
  /* position: absolute;
  top: ${({ top }) => (top ? `${top}px` : "150px")}; */
  width: 130px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid black;
  /* 
  ${({ left }) =>
    left &&
    css`
      left: ${left};
    `} */

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;

  :hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-weight: 500;
  color: #000;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 100%;

  cursor: pointer;
`;
