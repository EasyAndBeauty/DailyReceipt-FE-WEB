import styled from "styled-components";
import paperTexture from "assets/images/paper-texture.webp";

export const TriContainer = styled.div`
  display: flex;
  transform: translateX(2px);
  width: 360px;
`;

export const Triangle = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 4px;
  transform: rotate(45deg);
  background: ${(props) => (props.isPaper ? `url(${paperTexture})` : props.theme.wt)};
`;
