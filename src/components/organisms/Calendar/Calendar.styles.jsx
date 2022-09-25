import styled from "styled-components";

export const DayContainer = styled.div`
  width: 100%;
  min-height: 200px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(auto-fill, 40px);
  margin: 12px 0 6px;
`;

export const Day = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    font-weight: 700;
    span {
      border-bottom: 2px solid ${({ theme }) => theme.bk};
    }
  }
`;
