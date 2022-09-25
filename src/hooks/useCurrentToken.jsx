import { useEffect } from "react";
import { useAuthState, useAuthDispatch } from "store/authContext";
import { TOKEN_KEY } from "helper/constants";
import { isValidToken } from "helper/jwt";

export const useCurrentToken = () => {
  const user = useAuthState();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    const currentToken = localStorage.getItem(TOKEN_KEY);

    if (currentToken) {
      isValidToken(currentToken)
        ? dispatch({
            type: "LOGIN",
            payload: {
              token: JSON.parse(currentToken),
            },
          })
        : dispatch({ type: "LOGOUT" });
    }
  }, [dispatch]);
  return { user };
};
