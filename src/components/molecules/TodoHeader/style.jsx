import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  //height: 100%;
  margin: 44px 20px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Btn = styled.button`
  background-color: transparent;
  margin-left: 8px;
  color: ${(props) => props.wt};
  &:last-child {
    transform: translateY(1px);
  }
`;
