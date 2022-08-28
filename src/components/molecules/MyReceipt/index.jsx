import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import ReceiptDemeImage from "assets/images/receipt.png";
import AtuhContext from "store/auth-context";
export const MyReceipt = () => {
  const authCtx = useContext(AtuhContext);
  const navigate = useNavigate();
  const onClick = () => {
    authCtx.logout();
    navigate("/");
  };

  const showUserInfo = () => {
    const paser = JSON.parse(authCtx.token);
    return paser[Object.keys(paser)[0]];
  };
  return (
    <S.MyReceiptContainer>
      <S.HeaderContainer>
        <S.MainText>{showUserInfo()} 반가워요!</S.MainText>
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
