import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Menu = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 65px;
  background-color: blue;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const WrapRoutes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Item = styled.div`
  font-size: 20px;
  color: #fff;
  font-weight: 20px;
`;

export const WrapItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 130px;

  z-index: 2;

  position: relative;

  cursor: pointer;

  svg {
    margin-left: 14px;
  }

  ${({ active, pathname }) =>
    active &&
    css`
      ::after {
        content: "";
        width: ${pathname === "" ? "80%" : "100%"};
        height: 3px;
        background-color: white;
        position: absolute;
        top: 30px;
        border-radius: 10px;
        left: ${pathname === "" ? "10%" : "0"};
        z-index: 3;
      }
    `}
`;
