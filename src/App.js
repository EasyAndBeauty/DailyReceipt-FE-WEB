import { Routes, Route } from "react-router-dom";
import {
  AuthPage,
  TodoPage,
  LoginPage,
  ReceiptPage,
  UserPage,
} from "components";

function App() {
  // const authCtx = useContext(AtuhContext);
  // const BaseCtx = useContext(BaseContext);

  // // 로그인 유무
  // const isLoggedIn = authCtx.isLoggedIn;
  // // 루트 페이지 진입 여부
  // const isBase = BaseCtx.isBase;

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
