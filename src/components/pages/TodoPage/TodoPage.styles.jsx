import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow-x: hidden;
  scrollbar-width: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    padding: 44px;
  }
`;

export const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    max-width: 1000px;
  }
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
