import { useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "assets/receiptPage/back_icon.svg";
import * as S from "./style";
export function BackBtn() {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <S.BackIconContainer onClick={onClickBack}>
      <BackIcon />
    </S.BackIconContainer>
  );
}
