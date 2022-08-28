import styled from "styled-components";

export const BtnContainer = styled.button`
  //width: 16.25rem;
  width: 100%;
  height: 64px;
  //border-radius: 0.75rem 0.75rem 0 0;
  background-color: ${(props) => props.theme.wt};
  color: ${(props) => props.theme.bk};
  font-family: "Courier Prime", monospace;
  font-size: 1rem;
  text-align: center;
  //font-weight: 700;
  //line-height: 150%;

  &:hover {
    background-color: rgba(1, 1, 1, 0.9);
  }
  &:active {
    background-color: rgba(1, 1, 1, 0.9);
  }
`;
