import styled from "styled-components";

export const BtnContainer = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.wt};
  color: ${(props) => props.theme.bk};
  font-family: "Courier Prime", monospace;
  font-size: 1rem;

  &:hover {
    font-weight: 700;
  }
  &:active {
    font-weight: 700;
  }

  span {
    position: relative;
    top: -2px;
  }

  @media screen and (min-width: 768px) {
    height: 84px;
    font-size: 1.25rem;
  }
`;
