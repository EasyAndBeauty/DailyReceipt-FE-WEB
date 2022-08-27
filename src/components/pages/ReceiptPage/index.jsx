import { useLocation } from "react-router-dom";
import { TempComponent } from "components"; // 절대 경로를 설정했기때문에 폴더 이름만 넣어줘도 된다 (현재 경로의 의미 : src 밑에 components에서 파일을 가져온다는 뜻)

export function ReceiptPage() {
  /**
   * Todo List에서 받은 값, location.state에 담겨 있다.
   * location.state = {todoList: {todo}}
   */
  const location = useLocation();
  console.log(location.state);

  return <TempComponent>ReceiptPage</TempComponent>;
}
