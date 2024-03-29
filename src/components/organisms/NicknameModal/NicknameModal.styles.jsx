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

export const ErrorDiv = styled.div`
  weight: 100%;
  min-height: 35px;
  display: flex;
`;

export const ErrorNotification = styled.span`
  color: red;
`;

export const NicknameInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 12px;
  border: 1px solid #191919;
  border-radius: 16px;
`;
