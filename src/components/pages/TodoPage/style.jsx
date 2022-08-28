import styled from "styled-components";

export const Container = styled.main`
  //position: relative;
  width: 100%;
  //margin-top: 2.75rem;
  //padding-bottom: 2.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: scroll;
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
  overflow-y: auto;
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 10;
  //justify-content: flex-start;

  div {
    //삼각형 모음
    display: flex;
    position: relative;
    top: 2px;
  }
`;
