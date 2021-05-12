import styled from "styled-components";

import Input from "../../components/Input";
import Cloud from "../../assets/cloud.png";

export const Container = styled.form`
  width: 100%;
  height: 100vh;

  background-image: url(${Cloud});

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 1366px) {
    justify-content: flex-end;
  }
`;

export const StyledInput = styled(Input)``;

export const Link = styled.a`
  font-size: 20px;
  font-weight: 300;

  text-transform: uppercase;

  cursor: pointer;

  ::after {
    content: "";
    width: 0px;
    height: 1px;
    display: block;
    background: black;
    transition: 300ms;
  }

  :hover::after {
    width: 100%;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  width: 100%;
  max-width: 600px;

  align-items: center;

  margin-bottom: 20px;
`;

export const CloudImage = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%);

  height: 200px;
  width: 200px;

  @media screen and (max-width: 1366px) {
    top: -5%;
  }

  @media screen and (max-width: 1090px) {
    top: -10px;
  }
`;
