// useUser.jsx
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthDispatch } from "store/authContext";
import { getUserToken } from "controllers/userController";
import { TOKEN_KEY } from "helper/constants";

//
/**
 * 카카오에서 받은 인가코드를 백엔드에 전달 후, JWT 수신하고 userState를 갱신합니다.
 * @param {string} code 카카오톡 인가코드
 * @returns
 */
export async function useLogin() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAuthDispatch();
  // const navigate = useNavigate();

  const login = async (code) => {
    try {
      setLoading(true);

      const { accessToken, refreshToken } = await getUserToken(code);
      // 액세스, 리프레쉬 토큰을 로컬에 저장
      console.log("토큰값", accessToken, refreshToken);
      window.localStorage.setItem(TOKEN_KEY, { accessToken, refreshToken });
      dispatch({
        type: "LOGIN",
        payload: { isLoggedIn: true, accessToken, refreshToken },
      });
      setLoading(false);
    } catch (error) {
      console.log("로그인 에러", error);
    } finally {
      setLoading(false);
      console.log("로그인 확인", loading, login);
    }
  };

  return { login, loading };
}

export function useAuthCallback(login, code) {
  const isCalled = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isCalled.current) {
      isCalled.current = true;
      login(code);
      //   navigate("/");
    }
  }, [login, code, navigate]);
}

/**
 * 로그아웃을 진행합니다. 로컬 스토리지에 보관되어있는 토큰을 모두 삭제 후, userState를 갱신합니다.
 */
export function useLogout() {
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  window.localStorage.removeItem(TOKEN_KEY);

  dispatch({ type: "LOGOUT" });
  navigate("/");
}
