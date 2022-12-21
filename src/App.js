import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import BaseContext from "store/baseContext";
import { AuthPage, TodoPage, LoginPage, ReceiptPage, UserPage, RedirectionPage } from "components";
import { useCurrentToken } from "hooks/useCurrentToken";

function App() {
  const BaseCtx = useContext(BaseContext);
  const { user } = useCurrentToken();
  const { isLoggedIn } = user;
  // const isLoggedIn = true;
  const isBase = BaseCtx.isBase;

  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/auth/kakao/callback" element={<AuthPage />} />
      {isBase && (
        <>
          {isLoggedIn && <Route path="/my" element={<UserPage />} />}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/receipt" element={<ReceiptPage />} />
          <Route path="*" element={<LoginPage />} />
        </>
      )}
      <Route path="/error" element={<RedirectionPage />} />
    </Routes>
  );
}

export default App;
