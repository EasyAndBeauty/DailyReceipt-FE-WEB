import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  width: 100%;
  margin-top: 2.75rem;
  padding-bottom: 2.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow-y: scroll;
`;

export const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  bottom: 8px;
`;
