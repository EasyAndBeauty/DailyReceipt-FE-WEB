import { useAuthDispatch } from "store/authContext";

export function useLogin(token) {
  const dispatch = useAuthDispatch();

  dispatch({ type: "LOGIN", payload: { isLoggedIn: true, token } });
}

export function useLogout() {
  const dispatch = useAuthDispatch();

  dispatch({ type: "LOGOUT" });
}
