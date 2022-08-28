import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  overflow-x: hidden;
  scrollbar-width: none;
`;

export const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  //overflow-y: auto;
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 10;
  box-sizing: border-box;
  //justify-content: flex-start;

  div {
    //삼각형 모음
    display: flex;
    position: relative;
    top: 2px;
  }
`;
