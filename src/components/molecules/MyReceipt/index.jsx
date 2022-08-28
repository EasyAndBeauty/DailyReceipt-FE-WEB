import React from "react";
import * as S from "./style";
import ReceiptDemeImage from "assets/images/receipt.png";

export const MyReceipt = () => {
  return (
    <S.MyReceiptContainer>
      <S.HeaderContainer>
        <S.MainText>JAY 반가워요!</S.MainText>
        <p>뭔가 멋진 문구 추가</p>
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
