import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import {
  TodoPage,
  LoginPage,
  ReceiptPage,
  UserPage,
  MyReceipt,
  AuthPage,
} from "components";
import AtuhContext from "store/auth-context";
import BaseContext from "store/base-context";

function App() {
  const authCtx = useContext(AtuhContext);
  const BaseCtx = useContext(BaseContext);

  // 로그인 유무
  const isLoggedIn = authCtx.isLoggedIn;
  // 루트 페이지 진입 여부
  const isBase = BaseCtx.isBase;

  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/auth/kakao/callback" element={<AuthPage />} />
      {isBase && <Route path="/receipt" element={<ReceiptPage />} />}
      {isLoggedIn && <Route path="/my" element={<UserPage />} />}
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
