import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

import AtuhContext from "store/auth-context";

export const MyFooter = () => {
  const authCtx = useContext(AtuhContext);
  const navigate = useNavigate();
  const onClick = () => {
    authCtx.logout();
    navigate("/");
  };

  return (
    <S.ButtonContainer>
      <S.Button onClick={onClick}>로그아웃</S.Button>
    </S.ButtonContainer>
  );
};
