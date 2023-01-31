import styled from "styled-components";

export const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
`;

export const ModalTitle = styled.span`
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  margin: 10px;
`;

export const ModalMessage = styled.span`
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;
