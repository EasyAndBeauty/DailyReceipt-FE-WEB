import { ModalTemplate, TextBtn, ErrorText, Spacer } from "components";
import * as S from "./NicknameModal.styles";
import { useState, useEffect } from "react";
import { isNull, isOverMaxLength } from "helper/validations";
import { IS_NULL, IS_OVER } from "helper/constants";
/**
 * AlertModal
 *
 * Alert 모달 컴포넌트,
 *
 * @returns {JSX.Element} 로딩 모달 컴포넌트
 */
export function NicknameModal({ onClose }) {
  const [newUserName, setNewUserName] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const handleNicknameSubmit = () => {
    if (error) return;
  };

  useEffect(() => {
    if (isNull(newUserName)) {
      setError(IS_NULL);
    } else if (isOverMaxLength(newUserName)) {
      setError(IS_OVER);
    } else {
      setError("");
    }
  }, [newUserName]);

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
          <S.ErrorDiv>{error && <ErrorText children={error} />}</S.ErrorDiv>
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
