import { useNavigate } from "react-router-dom";
import { getUserToken } from "controllers/userController";
import { useAuthDispatch } from "store/authContext";

// 카카오에서 받은 인가코드를 백엔드에 전달 후, JWT 수신, 그 JWT를 각각 state와 로컬에 저장하고 isLoggedIn을 true로 만듦
export async function useLogin(code) {
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  if (!code) return;
  const { accessToken, refreshToken } = await getUserToken(code);

  // 액세스, 리프레쉬 토큰을 로컬에 저장
  window.localStorage.setItem("dr-access-token", accessToken);
  window.localStorage.setItem("dr-refresh-token", refreshToken);

  // 액세스, 리프레쉬 토큰을 스테이트에 저장하고 로그인 상태 변경
  dispatch({
    type: "LOGIN",
    payload: { isLoggedIn: true, accessToken, refreshToken },
  });

  navigate("/");
}

// 로컬에 저장되어있는 토큰을 전부 삭제 후 isLoggedIn을 false로 만듦
export function useLogout() {
  const dispatch = useAuthDispatch();

  dispatch({ type: "LOGOUT" });
}
