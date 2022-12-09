import * as S from "./TwotBtnLayout.styles";

/**
 * TwotBtn
 *
 * 2개의 버튼을 가지는 컴포넌트 입니다.
 * 첫 랜더링의 wv값에 따라 실선의 크기가 결정됩니다
 *
 * @param {String} lineColor - 점선 색 "bk"(default) / "wt"
 * @param {Boolean} isAbsolute - position속성을 지정합니다.
 * @param {JSX.Element} children - TextBtn이 두 개 있어야합니다.
 *
 *
 * @returns {JSX.Element} TwotBtn
 *
 * @example
 * import { TwotBtnLayout } from "components";
 *
 * <TwotBtnLayout isDark="true">
 *   <TextBtn onClick={onClick} type="bold"> text1 </TextBtn>
 *   <TextBtn onClick={onClick} color="red"> text2 </TextBtn>
 * </TwoBtnLayout>
 *
 */
export const TwotBtnLayout = ({ lineColor = "bk", isAbsolute = "true", children }) => {
  return (
    <S.Container lineColor={lineColor} isAbsolute={isAbsolute}>
      <S.Divider />
      <S.ButtonContainer>{children}</S.ButtonContainer>
    </S.Container>
  );
};
