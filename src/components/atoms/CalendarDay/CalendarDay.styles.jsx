import styled from "styled-components";

export const Day = styled.div`
  //width: 40px;
  //height: 40px;
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
    background-color: #e4e2e2;
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
