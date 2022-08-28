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

function App() {
  const authCtx = useContext(AtuhContext);

  // 로그인 유무
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/auth/kakao/callback" element={<AuthPage />} />
      {isLoggedIn && (
        <>
          <Route path="/receipt" element={<ReceiptPage />} />
          <Route path="/my" element={<UserPage />} />
          <Route path="/login" element={<LoginPage />} />
        </>
      )}
      <Route
        path="*"
        element={
          <div>
            <h1>404</h1>
            <p>Page not found</p>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
