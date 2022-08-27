import styled from "styled-components";

export const Container = styled.div`
  width: 2rem;
  height: 2.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.5rem;
  padding: 0.5rem 0.25rem;
  ${(props) => props.isSelected && "background-color:  black;"}
`;

export const Text = styled.p`
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
