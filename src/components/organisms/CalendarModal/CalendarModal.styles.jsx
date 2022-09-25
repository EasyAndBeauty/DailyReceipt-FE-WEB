import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: calc(100% - 32px);
  position: absolute;
  top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 24px 20px;
  background-color: ${({ theme }) => theme.wt};
  border-radius: 20px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.bk};

  @media screen and (min-width: 768px) {
    width: 90%;
    max-width: 500px;
    top: 142px;
    right: 8%;
    padding: 40px 80px;
  }

  @media screen and (min-width: 1600px) {
    right: 20%;
  }

  @media screen and (min-width: 2250px) {
    right: 30%;
  }
`;
export const CalendarHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CalendarTitle = styled.div`
  font-family: "Courier Prime", monospace;
  font-weight: 700;
  font-size: 20px;
  cursor: default;
`;

export const PrevBtn = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:active {
    opacity: 0.4;
  }
`;

export const NextBtn = styled(PrevBtn)`
  transform: rotate(180deg);
`;
