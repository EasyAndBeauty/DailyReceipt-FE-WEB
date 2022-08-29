import styled from "styled-components";

export const Container = styled.div`
  width: 3rem;
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.75rem;
  //padding: 0.5rem;
  color: ${(props) => props.theme.wt};
  ${(props) => props.isActive && "background-color: #efefef; color: #191919;"}
`;

export const Text = styled.p`
  &:first-child {
    font-weight: 700;
  }
  &:last-child {
    font-size: 0.75rem;
  }
`;
