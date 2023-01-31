import * as S from "./TextBtn.styles";

/**
 * TextBtn
 *
 * 텍스트가 있는 버튼입니다.
 *
 * @param {Function} onClick - 버튼을 클릭했을 때 실행되는 함수
 * @param {String} text - 버튼에 표시될 텍스트
 * @param {String} color - 텍스트의 색 ※context에 지정된 색만 사용할 것 "bk"(default) / "wt" / "red" / "gray" / "green" / "lightGray"
 * @param {String} type - 텍스트의 타입  "default" / "bold"
 * @param {String} size - 텍스트의 타입  "sm" 12px / "md"(default) 18px / "lg" 24px
 *
 * @returns {JSX.Element} TextBtn
 */
export function TextBtn({ onClick, type = "default", color = "bk", size = "md", children }) {
  return (
    <S.TextContainer onClick={onClick} type={type} color={color} size={size}>
      {children}
    </S.TextContainer>
  );
}
