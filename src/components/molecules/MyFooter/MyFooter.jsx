import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./MyFooter.styles";

import AtuhContext from "store/authContext";

/**
 * My page의 하단 부분입니다.
 * Logout 버튼을 누르면 로그아웃이 되고, 메인 페이지로 이동합니다.
 *
 * @returns
 */
export const MyFooter = () => {
  // const authCtx = useContext(AtuhContext);
  const navigate = useNavigate();
  const onClick = () => {
    // authCtx.logout();
    navigate("/");
  };

  return (
    <S.ButtonContainer>
      <S.Button onClick={onClick}>Logout</S.Button>
    </S.ButtonContainer>
  );
};
