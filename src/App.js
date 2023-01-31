import { Routes, Route } from "react-router-dom";
import { AuthPage, TodoPage, LoginPage, ReceiptPage, UserPage, RedirectionPage } from "components";
import { useAuth } from "hooks/useAuth";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/auth/kakao/callback" element={<AuthPage />} />
      {isLoggedIn ? (
        <Route path="/my" element={<UserPage />} />
      ) : (
        <Route path="/login" element={<LoginPage />} />
      )}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/receipt" element={<ReceiptPage />} />
      <Route path="*" element={<LoginPage />} />
      <Route path="/error" element={<RedirectionPage />} />
    </Routes>
  );
}

export default App;
