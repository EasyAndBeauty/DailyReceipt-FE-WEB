import * as S from "./TwotBtnLayout.styles";

/**
 * TwotBtn
 *
 * 2개의 버튼을 가지는 컴포넌트 입니다.
 * 첫 랜더링의 wv값에 따라 실선의 크기가 결정됩니다
 *
 * @param {String} lineColor - 점선 색 "bk"(default) / "wt"
 * @param {JSX.Element} children - textBt이 두 개 있어야합니다.
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
export const TwotBtnLayout = ({ lineColor = "bk", children }) => {
  const wv = Math.floor(window.innerWidth) / 8;
  return (
    <S.Container lineColor={lineColor}>
      <span>{`-`.padStart(wv, "-")}</span>
      <S.ButtonContainer>{children}</S.ButtonContainer>
    </S.Container>
  );
};
