import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import ReceiptDemeImage from "assets/images/receipt.png";
import AtuhContext from "store/auth-context";
import { getUserInfo } from "controllers/userController";
export const MyReceipt = () => {
  const [userInfo, setUserInfo] = useState(null);
  const authCtx = useContext(AtuhContext);
  const navigate = useNavigate();
  const onClick = () => {
    authCtx.logout();
    navigate("/");
  };

  const showUserInfo = async () => {
    const { nickname } = await getUserInfo(authCtx.token);
    setUserInfo(nickname);
  };

  useEffect(() => {
    showUserInfo();
  }, []);
  return (
    <S.MyReceiptContainer>
      <S.HeaderContainer>
        <S.MainText>{userInfo} 반가워요!</S.MainText>
        <p>소중한 당신의 오늘,</p>
        <p>하루 영수증과 함께 마무리해요</p>
      </S.HeaderContainer>
      <S.MyReceiptSeeAll>
        <S.ReceiptImg
          src={ReceiptDemeImage}
          alt="영수증 더미 이미지"
        ></S.ReceiptImg>
        <S.ReceiptImg
          src={ReceiptDemeImage}
          alt="영수증 더미 이미지"
        ></S.ReceiptImg>
        <S.ReceiptImg
          src={ReceiptDemeImage}
          alt="영수증 더미 이미지"
        ></S.ReceiptImg>
        <S.ReceiptImg
          src={ReceiptDemeImage}
          alt="영수증 더미 이미지"
        ></S.ReceiptImg>
      </S.MyReceiptSeeAll>
      <S.ButtonContainer>
        <S.Button onClick={onClick}>로그아웃</S.Button>
      </S.ButtonContainer>
    </S.MyReceiptContainer>
  );
};
