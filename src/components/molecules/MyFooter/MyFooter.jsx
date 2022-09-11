import { useLogout } from "hooks/useUser";
import * as S from "./MyFooter.styles";

/**
 * My page의 하단 부분입니다.
 * Logout 버튼을 누르면 로그아웃이 되고, 메인 페이지로 이동합니다.
 *
 * @returns
 */
export const MyFooter = () => {
  return (
    <S.ButtonContainer>
      <S.Button onClick={useLogout}>Logout</S.Button>
    </S.ButtonContainer>
  );
};
