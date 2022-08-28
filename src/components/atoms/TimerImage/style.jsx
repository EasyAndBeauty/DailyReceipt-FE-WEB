import styled from "styled-components";

// TimerContainer 크기와 CountNumber 크기 조절이 필요할 것 같습니다.
export const TimerContainer = styled.div`
  position: relative;
  width: 50px;
  height: 55px;
`;

export const TimerImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CountNumber = styled.span`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
`;
