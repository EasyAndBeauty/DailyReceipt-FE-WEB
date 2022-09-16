import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import {
  AuthPage,
  TodoPage,
  LoginPage,
  ReceiptPage,
  UserPage,
} from "components";
import { useAuthState } from "store/authContext";
import BaseContext from "store/baseContext";

function App() {
  const user = useAuthState();
  const BaseCtx = useContext(BaseContext);

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
