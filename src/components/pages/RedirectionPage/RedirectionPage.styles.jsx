import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
  }
`;

export const H1 = styled.h1`
  color: ${(props) => props.theme.wt};
  padding-top: 40px;
  margin-left: 32px;
  letter-spacing: -1px;
  box-sizing: border-box;
  z-index: 1;

  > div:first-child {
    font-family: "Courier Prime", monospace;
    font-size: 1.75rem;
    padding-bottom: 20px;
    font-weight: 400;
  }

  > div:last-child {
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1.4;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  z-index: 1;
`;

export const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.gray};
  border-radius: 20px 20px 0 0;
  color: ${(props) => props.theme.bk};
  font-size: 1rem;
  font-family: "Courier Prime", monospace;
  text-align: center;
  height: 76px;
  width: 100%;
  position: fixed;
  margin-top: 3rem;
  bottom: 0;

  div {
    position: relative;
    top: -2px;

    span {
      font-weight: 700;
    }
  }

  animation: pulse 1s linear 0s infinite alternate;
  margin-top: 0;

  @keyframes pulse {
    0% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media screen and (min-width: 768px) {
    height: 84px;
    font-size: 1.25rem;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;

  div {
    width: 100%;
    height: 100%;
    position: fixed;
    opacity: 80%;
    background: linear-gradient(to bottom, #000000, #191919 60%);
  }
`;

export const Img = styled.img`
  src: ${(props) => props.src};
  transform: translateY(-300px) scale(0.8) rotate(-30deg);

  @media screen and (min-width: 600px) {
    transform: scale(1.2) rotate(-45deg);
  }

  @media screen and (min-width: 1900px) {
    transform: scale(1.8) rotate(-45deg);
  }
`;
