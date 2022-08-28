import { TempComponent} from "components"; // 절대 경로를 설정했기때문에 폴더 이름만 넣어줘도 된다 (현재 경로의 의미 : src 밑에 components에서 파일을 가져온다는 뜻)
import { MyReceipt} from "components/molecules/MyReceipt/index";
export function UserPage() {
  return <MyReceipt></MyReceipt>
}
