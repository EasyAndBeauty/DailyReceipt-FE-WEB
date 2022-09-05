import styled from "styled-components";
import parperTexture from "assets/receiptPage/paper-texture.webp";

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Paper = styled(Center)`
  width: 360px;
  box-sizing: border-box;
  padding: 20px;
  background-color: ${(props) => props.theme.wt};
  font-size: 16px;
  font-family: "Courier Prime", "Gothic A1", monospace, sans-serif; //한글 폰트 추가하기
  letter-spacing: -0.5px;
  line-height: 1.4;
  color: #2f2f2f;
  background-image: url(${parperTexture});
`;

export const Title = styled.h1`
  margin: 16px 0;
  font-size: 28px;
`;

export const TodoContainer = styled(Center)`
  margin: 16px 0;
  width: 92%;
`;

export const TotalContainer = styled.div`
  width: 92%;
  margin: 8px 0;

  > div {
    display: flex;
    justify-content: space-between;
  }
`;
