import styled from "styled-components";

export const Container = styled.div`
  width: 2rem;
  height: 2.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) => props.isSelected && "background-color:  black;"}
`;

export const Text = styled.p`
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
