import { Routes, Route } from "react-router-dom";
import { TodoPage, LoginPage, ReceiptPage, UserPage } from "components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/checkout" element={<ReceiptPage />} />
      <Route path="/my" element={<UserPage />} />
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
