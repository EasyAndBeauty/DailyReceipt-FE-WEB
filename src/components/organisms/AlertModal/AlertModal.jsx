import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinBeam } from "@fortawesome/free-solid-svg-icons";
import { ModalTemplate } from "components";

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
      <FontAwesomeIcon icon={faFaceGrinBeam} size="2x" />
      <h1>준비 중인 기능입니다 :)</h1>
    </ModalTemplate>
  );
}
