import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 80vw;
  height: 276px;
  position: absolute;
  top: 40px;
  right: -130%;
  display: flex;
  justify-content: center;
  z-index: 999;
  padding: 24px 20px;
  background-color: ${({ theme }) => theme.wt};
  border-radius: 20px;
  box-sizing: border-box;
`;
export const CalendarHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CalendarTitle = styled.div``;

export const PrevBtn = styled.div`
  width: 20px;
  height: 20px;
`;

export const NextBtn = styled(PrevBtn)`
  transform: rotate(180deg);
`;
