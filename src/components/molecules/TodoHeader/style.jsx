import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  //height: 100%;
  margin: 44px 0 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  > div {
    display: flex;
    align-items: center;
    margin-left: 8px;
  }
`;

export const Btn = styled.button`
  background-color: transparent;
  margin: 0 0.5rem;
  color: ${(props) => props.wt};
`;
