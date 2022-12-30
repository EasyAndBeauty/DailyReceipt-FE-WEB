import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReceiptPaper, SaveBtn, CopyBtn, PinBtn, PinnedModal } from "components";
import { ReactComponent as BackIcon } from "assets/svg/back_icon.svg";
import * as S from "./ReceiptPage.styles";

export function ReceiptPage() {
  const {
    state: { todos, pinned, date, receiptNumber, quote },
  } = useLocation();
  const navigate = useNavigate();
  const receiptRef = useRef(null);

  const [scale, setScale] = useState(1);
  const [pinBtnModalVisible, setPinBtnModalVisible] = useState(false);

  useEffect(() => {
    const ratio = window.innerHeight / 1700;
    const receiptSectionHeight = window.innerHeight * ratio;
    const receiptHeight = receiptRef.current.offsetHeight;
    if (receiptHeight > receiptSectionHeight) {
      setScale(receiptSectionHeight / receiptHeight - 0.01);
    }
  }, []);
  console.log(pinned);
  useEffect(() => {
    sessionStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <S.Container>
      <S.BackIconContainer onClick={() => navigate(-1)}>
        <BackIcon />
      </S.BackIconContainer>
      <S.ReceiptContainer ref={receiptRef} scale={scale}>
        <ReceiptPaper todos={todos} quote={quote} />
      </S.ReceiptContainer>
      <S.IconContainer>
        <CopyBtn />
        <SaveBtn date={date} />
        <PinBtn
          isPinned={pinned}
          openModal={() => setPinBtnModalVisible(true)}
          id={receiptNumber}
        />
      </S.IconContainer>
      {pinBtnModalVisible && <PinnedModal onClose={() => setPinBtnModalVisible(false)} />}
    </S.Container>
  );
}
