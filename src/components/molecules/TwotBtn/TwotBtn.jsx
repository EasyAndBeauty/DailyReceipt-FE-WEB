import * as S from "./TwotBtn.styles";

/**
 * TwotBtn
 *
 * 2개의 버튼을 가지는 컴포넌트 입니다.
 * 첫 랜더링의 wv값에 따라 실선의 크기가 결정됩니다
 *
 * @param {Function} onClick1 - 버튼1을 클릭했을 때 실행되는 함수
 * @param {Function} onClick2 - 버튼2을 클릭했을 때 실행되는 함수
 * @param {String} text1 - 버튼1에 표시될 텍스트
 * @param {String} text2 - 버튼2에 표시될 텍스트
 * @param {Number} activeBtn - 활성화된 버튼의 번호
 *
 * @returns {JSX.Element} TwotBtn
 *
 * @example
 * import { TwotBtn } from "components";
 *
 * <TwotBtn
 * onClick1={() => console.log("버튼1 클릭")}
 * onClick2={() => console.log("버튼2 클릭")}
 * text1="버튼1"
 * text2="버튼2"
 * activeBtn={1}
 * />
 *
 */
export const TwotBtn = ({
  onClick1,
  onClick2,
  btnName1,
  btnName2,
  activeBtn,
}) => {
  const wv = Math.floor(window.innerWidth) / 8;
  return (
    <S.Container>
      <span>{`-`.padStart(wv, "-")}</span>
      <S.ButtonContainer>
        <S.Button1 onClick={onClick1}>{btnName1}</S.Button1>
        <S.Button2 onClick={onClick2} active={activeBtn === 2 ? true : false}>
          {btnName2}
        </S.Button2>
      </S.ButtonContainer>
    </S.Container>
  );
};
