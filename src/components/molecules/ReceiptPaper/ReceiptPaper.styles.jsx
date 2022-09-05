import styled from "styled-components";

export const Container = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bk};
`;

export const TrianglePosition = styled.div`
  transform: translateY(${(props) => props.y});
`;

export const Texture = styled.img`
  position: absolute;
  width: 100%;
  height: 98%;
  opacity: 0.6;
  mix-blend-mode: multiply;
  z-index: 0;
`;
