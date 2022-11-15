import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthDispatch } from "store/authContext";
import { NicknameModal } from "components";
import { TOKEN_KEY } from "helper/constants";
import * as S from "./MyFooter.styles";

/**
 * My page의 하단 부분입니다.
 * Logout 버튼을 누르면 로그아웃이 되고, 메인 페이지로 이동합니다.
 *
 * @returns
 */
export const MyFooter = () => {
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();
  const [visibleModal, setVisibleModal] = useState(false);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem(TOKEN_KEY);

    navigate("/");
  };

  const showModal = () => {
    document.body.style.overflow = "hidden";
    setVisibleModal(true);
  };

  const closeModal = () => {
    document.body.style.overflow = "unset";
    setVisibleModal(false);
  };

  return (
    <S.ButtonContainer>
      <S.Button onClick={showModal}>
        <S.ButtonText>Change My Nickname</S.ButtonText>
        <S.StyledIcon />
      </S.Button>
      <S.Button onClick={logout}>
        <S.ButtonText>Logout</S.ButtonText>
      </S.Button>
      {visibleModal && <NicknameModal onClose={closeModal} />}
    </S.ButtonContainer>
  );
};
