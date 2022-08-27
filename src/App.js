import { Routes, Route } from "react-router-dom";
import { TodoPage } from "components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
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
