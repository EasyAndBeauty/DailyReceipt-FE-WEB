import styled from "styled-components";

export const TextContainer = styled.div`
  font-family: "Courier Prime", monospace;
  font-weight: ${(props) => (props.type === "inactive" ? "400" : "bold")};
  font-size: 18px;
  color: ${(props) => (props.type === "inactive" ? "#797979" : "#191919")};
`;
