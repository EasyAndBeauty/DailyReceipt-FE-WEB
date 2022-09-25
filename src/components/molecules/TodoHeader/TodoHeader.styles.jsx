import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 44px;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  > div {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    max-width: 1000px;
  }
`;

export const Btn = styled.button`
  margin-left: 8px;
  background-color: transparent;
  color: ${(props) => props.wt};

  &:last-child {
    transform: translateY(1px);
  }
`;

export const Dimmed = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
`;
