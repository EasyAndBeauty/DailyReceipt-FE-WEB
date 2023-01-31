import styled from "styled-components";
import { ReactComponent as SmallArrowIcon } from "assets/svg/arrow-s.svg";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  position: fixed;
  bottom: 0;
  background-color: ${(props) => props.theme.bk};
  box-shadow: 0px -6px 10px ${(props) => props.theme.bk};
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 66px;
  width: 100%;
  background-image: linear-gradient(to right, white 33%, rgba(255, 255, 255, 0) 0%);
  background-position: top;
  background-size: 8px 1px; /*점선 간격 수정*/
  background-repeat: repeat-x;
  cursor: pointer;
`;

export const ButtonText = styled.span`
  color: ${(props) => props.theme.wt};
  font-size: 1rem;
  font-family: "Courier Prime", monospace;
  text-align: center;
`;

export const StyledIcon = styled(SmallArrowIcon)`
  path {
    stroke: ${(props) => props.theme.wt};
  }
  transform: scaleX(-1);
`;
