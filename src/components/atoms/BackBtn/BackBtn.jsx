import { useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "assets/svg/back_icon.svg";
import * as S from "./BackBtn.styles";

/**
 * BackBtn
 *
 * 뒤로가기 버튼입니다
 * 누르면 이전 페이지로 이동합니다
 *
 * @returns
 */
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
