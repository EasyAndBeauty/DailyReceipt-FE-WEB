import styled from "styled-components";

export const TriContainer = styled.div`
  display: flex;
  transform: translateX(2px);
  width: 360px;
`;

export const Triangle = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 4px;
  background-color: ${(props) => props.theme.wt};
  transform: rotate(45deg);
`;
