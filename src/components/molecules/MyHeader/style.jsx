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
  margin-bottom: 1rem;
`;

export const MainText = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

export const SubText = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  color: white;
`;

export const MyReceiptSeeAll = styled.div`
  display: flex;
  width: 20rem;
  overflow-y: hidden;
  overflow-x: scroll;
  margin-bottom: 1rem;
`;
