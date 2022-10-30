import * as S from "./TwotBtn.styles";

/**
 * My page의 하단 부분입니다.
 * Logout 버튼을 누르면 로그아웃이 되고, 메인 페이지로 이동합니다.
 *
 * @returns
 */
export const TwotBtn = ({ onClick1, onClick2, btnName1, btnName2 }) => {
  const wv = Math.floor(window.innerWidth) / 8;
  return (
    <S.Container>
      <span>{`-`.padStart(wv, "-")}</span>
      <S.ButtonContainer>
        <S.Button1 onClick={onClick1}>{btnName1}</S.Button1>
        <S.Button2 onClick={onClick2}>{btnName2}</S.Button2>
      </S.ButtonContainer>
    </S.Container>
  );
};
