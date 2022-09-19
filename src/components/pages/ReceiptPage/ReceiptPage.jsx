import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import { ReceiptPaper, AlertModal } from "components";
import { ReactComponent as SaveIcon } from "assets/svg/save_icon.svg";
import { ReactComponent as CopyIcon } from "assets/svg/copy_icon.svg";
import { ReactComponent as BackIcon } from "assets/svg/back_icon.svg";
import dayjs from "dayjs";
import * as S from "./ReceiptPage.styles";

export function ReceiptPage() {
  const {
    state: { todos, date },
  } = useLocation();
  const navigate = useNavigate();
  const receiptRef = useRef(null);

  const [userInfo, setUserInfo] = useState();
  const [scale, setScale] = useState(1);
  const [modalOn, setModalOn] = useState(false);

  const { ClipboardItem } = window;

  async function handleCopy() {
    await html2canvas(document.getElementById("receipt"), {
      backgroundColor: "none",
    })
      .then((canvas) => {
        canvas.toBlob((blob) => {
          navigator.clipboard.write([
            new ClipboardItem(
              Object.defineProperty({}, blob.type, {
                value: blob,
                enumerable: true,
              })
            ),
          ]);
        });
      })
      .then(alert("복사가 완료되었어요 :)"));
  }

  const downloadFileName = `${userInfo ? `_` + userInfo : `my_receipt`}${
    date ? `_` + dayjs(date).format("YYYY-MM-DD") : ""
  }.png`;

  async function handleDownload() {
    await html2canvas(document.getElementById("receipt"), {
      backgroundColor: "none",
    }).then((canvas) => {
      const aTag = document.createElement("a");
      document.body.appendChild(aTag);
      aTag.href = canvas.toDataURL("image/png");
      aTag.download = downloadFileName;
      aTag.click();
      document.body.removeChild(aTag);
    });
  }

  useEffect(() => {
    const ratio = window.innerHeight / 1700;
    const receiptSectionHeight = window.innerHeight * ratio;
    const receiptHeight = receiptRef.current.offsetHeight;
    if (receiptHeight > receiptSectionHeight) {
      setScale(receiptSectionHeight / receiptHeight - 0.01);
    }
  }, []);

  return (
    <S.Container>
      <S.BackIconContainer onClick={() => navigate(-1)}>
        <BackIcon />
      </S.BackIconContainer>
      <S.ReceiptContainer ref={receiptRef} scale={scale}>
        <ReceiptPaper todos={todos} />
      </S.ReceiptContainer>
      <S.IconContainer>
        <div onClick={async () => await handleCopy()}>
          <CopyIcon />
          <span>COPY</span>
        </div>
        <div onClick={async () => await handleDownload()}>
          <SaveIcon />
          <span>SAVE</span>
        </div>
      </S.IconContainer>
      {modalOn && <AlertModal onClick={() => setModalOn(false)} />}
    </S.Container>
  );
}
