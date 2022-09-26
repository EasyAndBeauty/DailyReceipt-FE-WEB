import styled from "styled-components";

export const Container = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TrianglePosition = styled.div`
  transform: translateY(${(props) => props.y});
`;

