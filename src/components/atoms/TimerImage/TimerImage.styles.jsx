import styled from "styled-components";

export const TimerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: -1px;
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
