import styled from "styled-components";

const fontSize = { sm: "16px", md: "18px", lg: "24px" };

export const TextContainer = styled.div`
  font-family: "Courier Prime", monospace;
  font-weight: ${(props) => (props.type === "bold" ? "bold" : "400")};
  font-size: ${(props) => fontSize[props.size]};
  color: ${(props) => props.theme[props.color]};
  cursor: pointer;
`;
