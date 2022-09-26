import styled from "styled-components";

export const DayContainer = styled.div`
  min-height: 200px;
  display: grid;
  grid-template-columns: repeat(7, 42px);
  grid-template-rows: repeat(auto-fill, 42px);
  margin: 10px;
`;

export const Day = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.today {
    font-weight: 700;
    background-color: #dcdcdc;
    color: ${({ theme }) => theme.bk};
    border-radius: 8px;
  }

  &.selected,
  &:hover {
    span {
      font-weight: 700;
      transform: translateY(1.3px);
      border-bottom: 2px solid ${({ theme }) => theme.bk};
    }
  }
`;
