import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { HeaderText } from "components";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

/**
 * TodoHeader component
 *
 * 상단 헤더의 layout을 담당하는 컴포넌트
 * month 값을 받아와 헤더를 담당한다
 *
 */

export function TodoHeader({ month }) {
    let navigate = useNavigate();
    function goMypage(){
        navigate("/my")
    }
    return (
        <S.Container>
            <S.Btn
                onClick={() => {
                    goMypage()
                }}
            >
                <FontAwesomeIcon icon={faReceipt} size="2x"></FontAwesomeIcon>
            </S.Btn>
            <HeaderText>{month}</HeaderText>
            <S.Btn
                onClick={() => {
                    goMypage()
                }}
            >
                <FontAwesomeIcon
                    icon={faCalendarDays}
                    size="2x"
                ></FontAwesomeIcon>
            </S.Btn>
        </S.Container>
    )}
