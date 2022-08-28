import styled from "styled-components";

export function ReceiptPaperTriangle() {
  return (
    <TriContainer>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
      <Triangle></Triangle>
    </TriContainer>
  );
}

const TriContainer = styled.div`
  display: flex;
  transform: translateX(2px);
  width: 360px;
`;

const Triangle = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 4px;
  background-color: white;
  transform: rotate(45deg);
`;
