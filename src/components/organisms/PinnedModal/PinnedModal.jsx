import { useNavigate } from "react-router-dom";
import { ModalTemplate, TwotBtnTemplate, TextBtn, Spacer } from "components";
import * as S from "./PinnedModal.style";

/**
 * PinnedModal
 *
 * 핀 버튼 클릭 시 사용자 알림 모달 컴포넌트
 *
 * @returns {JSX.Element} 핀 버튼 클릭 알림 모달 컴포넌트
 */
export function PinnedModal({ onClose }) {
  const navigate = useNavigate();
  return (
    <S.Background>
      <ModalTemplate>
        <Spacer />
        <S.ModalContainer>
          <S.ModalMessage>
            영수증이 저장되었어요!
            <br />
            My Page에서 확인해보세요.
          </S.ModalMessage>
        </S.ModalContainer>
        <TwotBtnTemplate isAbsolute={false}>
          <TextBtn onClick={onClose} color="lightGray">
            Cancel
          </TextBtn>
          <TextBtn
            onClick={() => {
              navigate("/my");
            }}
            type="bold"
          >
            My Page
          </TextBtn>
        </TwotBtnTemplate>
      </ModalTemplate>
    </S.Background>
  );
}
