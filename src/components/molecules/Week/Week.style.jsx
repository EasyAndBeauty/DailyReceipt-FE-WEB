import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 2.75rem;
  padding: 16px;
  margin: 0 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    max-width: 1000px;
  }
`;
