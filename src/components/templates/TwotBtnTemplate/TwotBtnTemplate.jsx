import * as S from "./TwotBtnTemplate.styles";

/**
 * TwotBtnTemplate
 *
 * 2개의 버튼을 가지는 템플렛 입니다.
 * 부모 width의 80%의 값으로 실선의 크기가 결정됩니다
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
export const TwotBtnTemplate = ({ lineColor = "bk", isAbsolute = "true", children }) => {
  return (
    <S.Container lineColor={lineColor} isAbsolute={isAbsolute}>
      <S.Divider />
      <S.ButtonContainer>{children}</S.ButtonContainer>
    </S.Container>
  );
};
