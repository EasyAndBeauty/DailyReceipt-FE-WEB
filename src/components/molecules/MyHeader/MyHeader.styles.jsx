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
  > div:first-child {
    position: relative;
    top: 0;
    left: 0;
    margin: 16px 0;
  }

  > div:nth-child(2) {
    margin-left: 32px;
    margin-top: 20px;
  }
`;

export const MainText = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
  font-weight: bold;
  color: ${(props) => props.theme.wt}; ;
`;

export const SubText = styled.p`
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 1.25rem;
  color: ${(props) => props.theme.gray};
  line-height: 24px;
`;

export const MyReceiptSeeAll = styled.div`
  display: flex;
  width: 20rem;
  overflow-y: hidden;
  overflow-x: scroll;
  margin-bottom: 1rem;
`;
