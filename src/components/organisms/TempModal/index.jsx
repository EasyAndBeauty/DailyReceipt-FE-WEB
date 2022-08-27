// FontAwsomeIcon 사용법
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // 1. FontAwesomeIcon 컴포넌트를 가져온다.
import { faSchool } from "@fortawesome/free-solid-svg-icons"; // 2. fa이후 검색후 있다면 사용할 아이콘을 사용한다.
import * as S from "./style";
import { ModalTemplate } from "components/templates/ModalTemplate";

/**
 * TempModal
 *
 * 임시 모달 컴포넌트,
 *
 * @returns  임시 컴포넌트
 */
export function TempModal({ children, onClick }) {
  console.log(children, onClick);
  return (
    <ModalTemplate onClick={onClick}>
      <S.TempContainer>
        <FontAwesomeIcon icon={faSchool} />
        <h1>안녕</h1>
      </S.TempContainer>
    </ModalTemplate>
  );
}
