import { useNavigate } from "react-router-dom";
import { getUserToken } from "controllers/userController";
import { useAuthDispatch } from "store/authContext";

//
/**
 * 카카오에서 받은 인가코드를 백엔드에 전달 후, JWT 수신하고 userState를 갱신합니다.
 * @param {string} code 카카오톡 인가코드
 * @returns
 */
export async function useLogin(code) {
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  if (!code) return;
  const { accessToken, refreshToken } = await getUserToken(code);

  // 액세스, 리프레쉬 토큰을 로컬에 저장
  window.localStorage.setItem("dr-access-token", accessToken);
  window.localStorage.setItem("dr-refresh-token", refreshToken);

  dispatch({
    type: "LOGIN",
    payload: { isLoggedIn: true, accessToken, refreshToken },
  });
  navigate("/");
}

/**
 * 로그아웃을 진행합니다. 로컬 스토리지에 보관되어있는 토큰을 모두 삭제 후, userState를 갱신합니다.
 */
export function useLogout() {
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  window.localStorage.removeItem("dr-access-token");
  window.localStorage.removeItem("dr-refresh-token");

  dispatch({ type: "LOGOUT" });
  navigate("/");
}
