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
    setVisibleModal(true);
  };

  const closeModal = () => {
    setVisibleModal(false);
  };

  return (
    <S.ButtonContainer>
      <S.Button onClick={showModal}>Change My Nickname</S.Button>
      <S.Button onClick={logout}>Logout</S.Button>
      {visibleModal && <NicknameModal onClose={closeModal} />}
    </S.ButtonContainer>
  );
};
