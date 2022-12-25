import { ModalTemplate, TwotBtnTemplate, TextBtn, ErrorText, Spacer } from "components";
import * as S from "./NicknameModal.styles";
import { useState, useEffect } from "react";
import { isNull, isOverMaxLength } from "helper/validations";
import { IS_NULL, IS_OVER } from "helper/constants";
import { putUser, getUser } from "controllers/userController";
import { AbortIfError } from "controllers/error";
/**
 * NicknameModal
 *
 * 닉네임 변경 모달 컴포넌트
 *
 * @returns {JSX.Element} 닉네임 변경 모달 컴포넌트
 */
export function NicknameModal({ onClose }) {
  const [newUserName, setNewUserName] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const handleNicknameSubmit = async () => {
    if (error || !newUserName.length) {
      alert("올바른 닉네임을 입력해주세요.");
      return;
    }

    try {
      putUser(newUserName).then(alert("닉네임 변경이 완료 되었습니다."));
    } catch (error) {
      AbortIfError(error);
    }
    onClose();
  };

  useEffect(() => {
    (async () => {
      const response = await getUser();
      setUserName(response.data.nickname);
    })();
  }, []);

  // 닉네임 유효성검사
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
        <S.ModalContainer>
          <S.ModalTitle>지금 사용하는 별명 : {userName}</S.ModalTitle>
          <S.NicknameInput
            type="text"
            placeholder="새로운 닉네임을 입력해주세요"
            onChange={(e) => setNewUserName(e.target.value)}
          />
          <S.ErrorDiv>{error && <ErrorText children={error} />}</S.ErrorDiv>
        </S.ModalContainer>
        <TwotBtnTemplate isAbsolute={false}>
          <TextBtn onClick={onClose} color="lightGray">
            Cancel
          </TextBtn>
          <TextBtn onClick={handleNicknameSubmit} type="bold">
            Change
          </TextBtn>
        </TwotBtnTemplate>
      </ModalTemplate>
    </S.Background>
  );
}
