import styled from "styled-components";

export const BtnContainer = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.type === "default" ? props.theme.wt : `#FFFFFF`};
  color: ${(props) => props.color};
  font-family: "Courier Prime", monospace;
  font-size: 1.125rem;

  &:hover {
    font-weight: 700;
  }
  &:active {
    font-weight: 700;
  }

  svg {
    transform: scale(0.8);
    opacity: 0.7;
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
