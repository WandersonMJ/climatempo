import styled, { css, keyframes } from "styled-components";

import Cloud from "../../assets/cloud.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-image: url(${Cloud});
`;

export const TableHistory = styled.div`
  width: 55%;
  height: 60vh;
  background-color: black;
  opacity: 0.5;

  position: absolute;
  top: 200px;
  overflow: scroll;

  border-radius: 10px;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: gray;
    border-radius: 0 10px 10px 0;

    :hover {
      opacity: 3;
      transition: opacity 0.5s ease;
    }
  }

  ::-webkit-scrollbar-thumb {
    background-color: black;
    /* border-radius: 20px; */
    border-radius: 0 10px 10px 0;
    border: 3px solid white;
  }

  overflow-x: hidden;

  ${({ center }) =>
    center &&
    css`
      overflow-y: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ${({ loading }) =>
    loading &&
    css`
      transform: scale(5);
    `}
`;

export const Item = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid white;
  background-color: black;
  padding: 14px 36px;
`;

export const WrapperColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Text = styled.div`
  width: 50%;

  font-size: 21px;
  color: white;
  font-weight: 30px;

  margin-bottom: 14px;
`;

const rotate = keyframes`
 to {
     transform: rotate(1turn)
 }
 
`;

export const Loading = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid #e5e5e5;
  border-top-color: #51d4db;
  animation: ${rotate} 1s infinite;

  border-radius: 50%;
`;
