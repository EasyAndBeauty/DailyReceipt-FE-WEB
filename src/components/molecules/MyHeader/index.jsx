import * as S from "./style";
import { BackBtn } from "../../atoms/BackBtn";
export const MyHeader = ({ userInfo }) => {
  return (
    <S.HeaderContainer>
      <BackBtn />
      <div>
        <S.MainText>{userInfo}님 반가워요 :)</S.MainText>
        <S.SubText>
          소중한 당신의 오늘,
          <br />
          하루 영수증과 함께 마무리해요.
        </S.SubText>
      </div>
    </S.HeaderContainer>
  );
};
