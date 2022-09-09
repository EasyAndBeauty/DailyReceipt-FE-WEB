import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import AtuhContext from "store/authContext";
import { ReceiptPaper, AlertModal } from "components";
import { ReactComponent as SaveIcon } from "assets/svg/save_icon.svg";
import { ReactComponent as ShareIcon } from "assets/svg/share_icon.svg";
import { ReactComponent as BackIcon } from "assets/svg/back_icon.svg";
import dayjs from "dayjs";
import * as S from "./ReceiptPage.styles";

export function ReceiptPage() {
  const {
    state: { todos, date },
  } = useLocation();
  const authCtx = useContext(AtuhContext);
  const navigate = useNavigate();
  const receiptRef = useRef(null);

  const [userInfo, setUserInfo] = useState("");
  const [scale, setScale] = useState(1);
  const [modalOn, setModalOn] = useState(false);

  function handleShare() {
    setModalOn(true);
  }

  const downloadFileName = `${userInfo ? `_` + userInfo : `my_receipt`}${
    date ? `_` + dayjs(date).format("YYYY-MM-DD") : ""
  }.jpg`;

  async function handleDownload() {
    await html2canvas(document.getElementById("receipt"), {
      backgroundColor: "none",
    }).then((canvas) => {
      const aTag = document.createElement("a");
      document.body.appendChild(aTag);
      aTag.href = canvas.toDataURL("image/jpg");
      aTag.download = downloadFileName;
      aTag.click();
      document.body.removeChild(aTag);
    });
  }

  // 서버와 연결이 되어있지 않음, 아직 사용 불가능
  // const showUserInfo = async () => {
  //   const { nickname } = await getUserInfo(authCtx.token);
  //   setUserInfo(nickname);
  // };

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
        <div onClick={handleShare}>
          <ShareIcon />
          <span>SHARE</span>
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
