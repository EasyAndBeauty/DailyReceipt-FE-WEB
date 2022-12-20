import styled from "styled-components";

export const TextContainer = styled.div`
  font-family: "Courier Prime", monospace;
  font-weight: ${(props) => (props.type === "bold" ? "bold" : "400")};
  font-size: 18px;
  color: ${(props) => props.theme[props.color]};
  cursor: pointer;
`;
