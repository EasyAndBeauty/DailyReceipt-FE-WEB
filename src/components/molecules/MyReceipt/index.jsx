import React from "react";
import * as S from "./style";
import ReceiptDemeImage from "assets/images/receipt.png";

export const MyReceipt = () => {
  return (
    <S.MyReceiptContainer>
      <S.HeaderContainer>
        <S.MainText>JAY 반가워요!</S.MainText>
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
        <S.Button>로그아웃</S.Button>
      </S.ButtonContainer>

    </S.MyReceiptContainer>
  );
};
