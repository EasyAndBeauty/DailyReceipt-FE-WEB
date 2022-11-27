import { ReactComponent as PinIcon } from "assets/svg/pin_icon.svg";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useReceiptClient } from "controllers/receiptController";

export function PinBtn({ isPinned }) {
  const client = useReceiptClient();
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    if (isPinned) setPinned(true);
  }, [isPinned]);

  const handlePin = async () => {
    // todo: 서버로 pin 데이터 보내는 기능 추가
    // 세션 스토리지에서 TODO, 명언, 영수증 아이디 정보 취득
    if (isPinned === false) {
      // 이 때 PINNED는 무조건 true, 유저 이름은 컨텍스트에서 취득
      // 영수증 정보 취합하기
      // POST Pinned Receipt
      const response = await client.postPinnedReceipt(pinned);
      // clear session storage
    }
    if (isPinned === true) {
      //PUT Pinned Receipt
      const response = await client.putPinnedReceipt(pinned);
    }
    setPinned(!pinned);
  };

  return (
    <PinContainer onClick={handlePin} pinned={pinned}>
      <PinIcon />
      <span>{pinned ? "PINNED" : "PIN"}</span>
    </PinContainer>
  );
}

const PinContainer = styled.div`
  svg {
    transform: translateY(2px);
    fill: ${(props) => (props.pinned ? "#FEFEFE" : "none")};
  }
`;
