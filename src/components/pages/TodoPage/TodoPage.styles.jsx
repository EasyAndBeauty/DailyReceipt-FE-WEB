import styled from "styled-components";

export const Container = styled.main`
  transform: scale(1);
  width: 100%;
  min-width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  scrollbar-width: none;
`;

export const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
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

  > div:first-child {
    //삼각형 모음
    display: flex;
    position: relative;
    top: 6px;
    box-shadow: 5px -20px 15px 2px rgba(10, 10, 10, 0.2);
  }
`;
