import { ModalTemplate, TwotBtnTemplate, TextBtn, Spacer } from "components";
import * as S from "./TimerAlertModal.styles";

/**
 * TimerAlertModal
 *
 * 타이머 중지 알림 모달 컴포넌트
 *
 * @returns {JSX.Element} 타이머 중지 알림 모달 컴포넌트
 */
export function TimerAlertModal({ onClose, onStop, task }) {
  return (
    <S.Background>
      <ModalTemplate>
        <Spacer />
        <S.ModalContainer>
          <S.ModalTitle>TODO : {task}</S.ModalTitle>
          <Spacer />
          <S.ModalMessage>타이머를 중지할까요?</S.ModalMessage>
          <Spacer />
        </S.ModalContainer>
        <TwotBtnTemplate isAbsolute={false}>
          <TextBtn onClick={onClose} color="lightGray">
            Cancel
          </TextBtn>
          <TextBtn
            onClick={() => {
              onStop();
              onClose();
            }}
            type="bold"
            color="red"
          >
            Stop
          </TextBtn>
        </TwotBtnTemplate>
      </ModalTemplate>
    </S.Background>
  );
}
