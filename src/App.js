import { Routes, Route } from "react-router-dom";
import {
  AuthPage,
  TodoPage,
  LoginPage,
  ReceiptPage,
  UserPage,
} from "components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/auth/kakao/callback" element={<AuthPage />} />
      <Route path="/my" element={<UserPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/receipt" element={<ReceiptPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
