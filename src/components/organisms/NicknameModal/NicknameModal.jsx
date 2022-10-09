import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinBeam } from "@fortawesome/free-solid-svg-icons";
import { ModalTemplate, TextBtn, SquareBtn } from "components";
import * as S from "./NicknameModal.styles";

/**
 * AlertModal
 *
 * Alert 모달 컴포넌트,
 *
 * @returns {JSX.Element} 로딩 모달 컴포넌트
 */
export function NicknameModal({ onClick }) {
  // TODO: 백엔드 연결이후 삭제
  const nickName = "테스트";

  return (
    <S.Background>
      <ModalTemplate onClick={onClick}>
        <S.NicknameContainer>
          <S.CurrentNickname>지금 사용하는 별명 : {nickName}</S.CurrentNickname>
          <S.NicknameInput
            type="text"
            placeholder="새로운 닉네임을 입력해주세요"
          />
          <S.Divider />
        </S.NicknameContainer>
        <S.SelectDiv>
          <TextBtn onClick={onClick} type="inactive">
            Cancel
          </TextBtn>
          <TextBtn onClick={onClick}>Change</TextBtn>
        </S.SelectDiv>
      </ModalTemplate>
    </S.Background>
  );
}
