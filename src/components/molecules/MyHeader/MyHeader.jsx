import * as S from "./MyHeader.styles";
import { BackBtn } from "components";

/**
 * MyHeader
 *
 * 헤더입니다, 사용자의 이름이 표시됩니다
 *
 * @param {string} userInfo 사용자의 이름
 */
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
