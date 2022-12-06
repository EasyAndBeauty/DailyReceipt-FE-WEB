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
 * @param {String} color1 - 버튼에 표시될 텍스트 색※context에 지정된 색만 사용할 것 "bk"(default) / "wt" / "red" / "gray" / "green"
 * @param {String} color2 - 버튼에 표시될 텍스트 색※context에 지정된 색만 사용할 것 "bk"(default) / "wt" / "red" / "gray" / "green"
 * @param {String} type1 - 버튼에 표시될 텍스트 타입 "normal"(default) / "bold"
 * @param {String} type2 - 버튼에 표시될 텍스트 타입 "normal"(default) / "bold"
 * @param {Boolean} isDark - 모달 배경색 검정색 여부
 *
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
  color1,
  color2,
  type1,
  type2,
  isDark,
}) => {
  const wv = Math.floor(window.innerWidth) / 8;
  return (
    <S.Container isDark={isDark}>
      <span>{`-`.padStart(wv, "-")}</span>
      <S.ButtonContainer>
        <S.Button1 onClick={onClick1} color1={color1} type1={type1}>
          {btnName1}
        </S.Button1>
        <S.Button2 onClick={onClick2} color2={color2} type2={type2}>
          {btnName2}
        </S.Button2>
      </S.ButtonContainer>
    </S.Container>
  );
};
