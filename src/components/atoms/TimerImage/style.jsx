import styled from "styled-components";

// TimerContainer 크기와 CountNumber 크기 조절이 필요할 것 같습니다.
export const TimerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: -1px;
`;

export const TimerImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CountNumber = styled.span`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  color: ${(props) => props.theme.gray};
  transform: translate(-50%, -50%);
  font-size: 0.75rem;
`;
