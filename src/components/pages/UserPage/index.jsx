import React, { useState, useEffect, useContext } from "react";
import * as S from "./style";
import AtuhContext from "store/auth-context";
import { getUserInfo } from "controllers/userController";
import { MyHeader } from "components/molecules/MyHeader";
import { MySection } from "components/organisms/MySection";
import { MyFooter } from "components/molecules/MyFooter";
export const UserPage = () => {
  const [userInfo, setUserInfo] = useState("새로운 사용자");
  const authCtx = useContext(AtuhContext);

  const showUserInfo = async () => {
    const { nickname } = await getUserInfo(authCtx.token);
    setUserInfo(nickname);
  };

  useEffect(() => {
    showUserInfo();
  }, []);
  return (
    <S.MyReceiptContainer>
      <MyHeader userInfo={userInfo} />
      <MySection />
      {authCtx.isLoggedIn && <MyFooter />}
    </S.MyReceiptContainer>
  );
};
