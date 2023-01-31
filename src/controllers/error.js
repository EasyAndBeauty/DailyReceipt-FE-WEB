import { useNavigate } from "react-router-dom";

export const AbortIfError = (error) => {
  // TODO: 에러별 화면으로 이동
  const navigate = useNavigate();
  navigate("/error");
};
