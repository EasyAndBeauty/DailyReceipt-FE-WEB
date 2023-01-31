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

export const DayContainer = styled.div`
  width: 3rem;
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.75rem;
  color: ${(props) => props.theme.wt};
  cursor: pointer;
  ${(props) => props.isActive && "background-color: #efefef; color: #191919;"}
`;

export const DayText = styled.p`
  &:first-child {
    font-weight: 700;
  }
  &:last-child {
    font-size: 0.75rem;
  }
`;
