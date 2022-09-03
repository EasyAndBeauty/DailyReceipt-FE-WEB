import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bk};
`;

export const BackIconContainer = styled.div`
  width: 36px;
  margin-top: 46px;
  margin-left: 14px;
  padding: 8px;
  opacity: 50%;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 42px;
    left: 48px;
  }
`;

export const ReceiptContainer = styled.div`
  width: 100%;
  height: 70%;
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    transform: scale(${(props) => props.scale});
  }
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 24px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px;
    margin: 4px 24px;
    cursor: pointer;
  }

  svg {
    padding: 8px;
    opacity: 40%;
  }

  span {
    font-family: "Courier Prime", monospace;
    font-size: 16px;
    color: #efefef;
  }
`;
