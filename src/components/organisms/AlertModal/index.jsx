import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinBeam } from "@fortawesome/free-solid-svg-icons";
import { Portal, ModalTemplate } from "components";

/**
 * AlertModal
 *
 * Alert 모달 컴포넌트,
 *
 * @returns {JSX.Element} 로딩 모달 컴포넌트
 */
export function AlertModal({ onClick }) {
  return (
    <ModalTemplate onClick={onClick}>
      <FontAwesomeIcon icon={faFaceGrinBeam} size="4x" />
      <h1>준비중인 기능입니다ㅎㅎ</h1>
    </ModalTemplate>
  );
}
