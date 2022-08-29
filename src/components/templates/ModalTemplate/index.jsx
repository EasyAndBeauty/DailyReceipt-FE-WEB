import { useRef, useCallback } from "react";
import { Portal } from "components";
import * as S from "./style";

/**
 *  ModalTemplate
 *
 * children 값을 넣으면 해당화면은 modla 형태로 보여진다.
 *
 */
export function ModalTemplate({ children, onClick }) {
  const focusRef = useRef(null);

  // 모달이 아닌 영역을 클릭했을 때 모달을 닫는다.
  const onLeaveFocusLogin = useCallback(
    (e) => {
      if (!focusRef.current) return;
      if (!focusRef.current.contains(e.target)) {
        onClick();
      }
    },
    [onClick]
  );
  return (
    <Portal>
      <S.Background onClick={onLeaveFocusLogin}>
        <S.Content ref={focusRef}>{children}</S.Content>
      </S.Background>
    </Portal>
  );
}
