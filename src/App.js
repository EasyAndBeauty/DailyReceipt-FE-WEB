import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuthDispatch, useAuthState } from "store/authContext";
import BaseContext from "store/baseContext";
import {
  AuthPage,
  TodoPage,
  LoginPage,
  ReceiptPage,
  UserPage,
} from "components";
import { TOKEN_KEY } from "helper/constants";

function App() {
  const user = useAuthState();
  const dispatch = useAuthDispatch();
  const BaseCtx = useContext(BaseContext);
  const currentToken = localStorage.getItem(TOKEN_KEY);

  useEffect(() => {
    if (currentToken) {
      dispatch({
        type: "LOGIN",
        payload: { isLoggedIn: true, ...currentToken },
      });
    }
  }, [currentToken, dispatch]);

  const isBase = BaseCtx.isBase;

  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/auth/kakao/callback" element={<AuthPage />} />
      {isBase && (
        <>
          {user.isLoggedIn && <Route path="/my" element={<UserPage />} />}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/receipt" element={<ReceiptPage />} />
          <Route path="*" element={<LoginPage />} />
        </>
      )}
    </Routes>
  );
}

export default App;
