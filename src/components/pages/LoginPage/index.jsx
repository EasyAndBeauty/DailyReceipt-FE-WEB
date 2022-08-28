import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import KaKaoLogin from "assets/images/kakao_login_medium_wide.png";
import ReceiptImg from "assets/images/receipt_img.png";
import * as S from "./style";
export function LoginPage() {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <S.Container>
      <S.Header>
        <FontAwesomeIcon
          onClick={onClickBack}
          icon={faBackspace}
          size="2x"
          style={{ marginLeft: "16px" }}
        />
      </S.Header>
      <S.Img src={ReceiptImg} alt="receipt" />
      <S.H1>당신의 영수증을 저장 해 보세요!</S.H1>
      <button>
        <img src={KaKaoLogin} alt="카카오 로그인" />
      </button>
    </S.Container>
  );
}
