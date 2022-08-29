import styled from "styled-components";

export const MyReceiptContainer = styled.section`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 2.75rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const HeaderContainer = styled.header`
  margin-left: -16px;
  margin-top: -44px;

  > div:nth-child(2) {
    margin-left: 32px;
    margin-top: 48px;
  }
`;

export const MainText = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
  font-weight: bold;
  color: white;
`;

export const SubText = styled.p`
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 1.25rem;
  color: white;
  line-height: 24px;
`;

export const MyReceiptSeeAll = styled.div`
  display: flex;
  width: 20rem;
  overflow-y: hidden;
  overflow-x: scroll;
  margin-bottom: 1rem;
`;
