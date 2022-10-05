import { useEffect } from "react";
import * as S from "./BottomSheetTemplate.styles";

/**
 * BottomSheetTemplate
 *
 * BottomSheet의 전체적인 레이아웃을 구성한다.
 *
 * @param {Object} props
 * @param {Boolean} props.isOpen - BottomSheet의 열림 여부를 받아온다
 * @param {Function} props.onClick - BottomSheet의 상태를 바꾼다
 *
 */

export function BottomSheetTemplate({ children, isOpen, onClick }) {
  console.log("bottom", isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <S.Background isOpen={isOpen}>
      <S.Content>{children}</S.Content>
    </S.Background>
  );
}
