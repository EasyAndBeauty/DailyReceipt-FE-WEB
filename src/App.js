import { Routes, Route } from "react-router-dom";
import {
  TodoPage,
  LoginPage,
  ReceiptPage,
  UserPage,
  MyReceipt,
  AuthPage,
} from "components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/receipt" element={<ReceiptPage />} />
      <Route path="/my" element={<UserPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/auth/kakao/callback" element={<AuthPage />} />
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
