import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function BackBtn() {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <FontAwesomeIcon
      onClick={onClickBack}
      icon={faBackspace}
      size="2x"
      style={{ marginLeft: "16px" }}
    />
  );
}
