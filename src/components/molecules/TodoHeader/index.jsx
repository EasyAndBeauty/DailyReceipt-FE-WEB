import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { AlertModal, HeaderText } from "components";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

/**
 * TodoHeader component
 *
 * 상단 헤더의 layout을 담당하는 컴포넌트
 * month 값을 받아와 헤더를 담당한다
 *
 */

export function TodoHeader({ month }) {
  const [modalOn, setModalOn] = useState(false);
  let navigate = useNavigate();
  function goPage(url) {
    navigate(url);
  }
  return (
    <S.Container>
      <HeaderText>{month}</HeaderText>
      <div>
        <S.Btn
          onClick={() => {
            setModalOn(true);
          }}
        >
          <FontAwesomeIcon
            icon={faCalendarDays}
            size="2x"
            color="#aaaaaa"
          ></FontAwesomeIcon>
        </S.Btn>
        <S.Btn
          onClick={() => {
            navigate("/my");
          }}
        >
          <FontAwesomeIcon
            icon={faReceipt}
            size="2x"
            color="#aaaaaa"
          ></FontAwesomeIcon>
        </S.Btn>
      </div>
      {modalOn && <AlertModal onClick={() => setModalOn(false)} />}
    </S.Container>
  );
}
