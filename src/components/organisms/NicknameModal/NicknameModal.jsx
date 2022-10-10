import { ModalTemplate, TextBtn, ErrorText, Spacer } from "components";
import * as S from "./NicknameModal.styles";
import { useState } from "react";

/**
 * AlertModal
 *
 * Alert 모달 컴포넌트,
 *
 * @returns {JSX.Element} 로딩 모달 컴포넌트
 */
export function NicknameModal({ onClose }) {
  const [newUserName, setNewUserName] = useState("");
  const [userName, setUserName] = useState("테스트");
  const [error, setError] = useState("닉네임이 비어있어요.");

  const handleNicknameSubmit = async () => {
    console.log(newUserName);
  };

  return (
    <S.Background>
      <ModalTemplate>
        <Spacer />
        <S.NicknameContainer>
          <S.CurrentNickname>지금 사용하는 별명 : {userName}</S.CurrentNickname>
          <S.NicknameInput
            type="text"
            placeholder="새로운 닉네임을 입력해주세요"
            onChange={(e) => setNewUserName(e.target.value)}
          />
          <ErrorText children={error} />
        </S.NicknameContainer>
        <S.Divider />
        <S.SelectDiv>
          <TextBtn onClick={onClose} type="inactive">
            Cancel
          </TextBtn>
          <TextBtn onClick={handleNicknameSubmit()}>Change</TextBtn>
        </S.SelectDiv>
      </ModalTemplate>
    </S.Background>
  );
}
