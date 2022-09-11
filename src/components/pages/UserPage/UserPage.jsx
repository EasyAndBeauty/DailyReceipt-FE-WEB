import React, { useState, useContext } from "react";
import * as S from "./UserPage.styles";
import AtuhContext from "store/authContext";
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
