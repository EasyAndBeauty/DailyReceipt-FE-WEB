// FontAwsomeIcon 사용법
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // 1. FontAwesomeIcon 컴포넌트를 가져온다.
import { faSchool } from "@fortawesome/free-solid-svg-icons"; // 2. fa이후 검색후 있다면 사용할 아이콘을 사용한다.
import * as S from "./style";

/**
 * TempComponent
 *
 * 임시 컴포넌트, FontAwesomeIcon 사용법 예제가 들어가 있다
 *
 * @returns  임시 컴포넌트
 */
export function TempComponent({ children }) {
    return (
        <S.TempContainer>
            <FontAwesomeIcon icon={faSchool} />
            <h1>{children}</h1>
        </S.TempContainer>
    );
}
