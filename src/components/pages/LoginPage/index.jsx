import { BackBtn } from "components";
import KaKaoLogin from "assets/images/kakao_login_medium_wide.png";
import ReceiptImg from "assets/images/receipt_img.png";
import * as S from "./style";
import { useEffect } from "react";

/**
 * LoginPage
 *
 * 독립적인 페이지에다가 요소가 많지 않아, 한곳에서 마무리를 했습니다
 * 나중에 kakao 로그인 리다이렉션 액션이 들어올곳 입니다.
 *
 * @returns
 */

export function LoginPage() {
  // const REST_API_KEY = "688155dfbbfe5bca5363ff274b08c04d";

  const REST_API_KEY = "c667de0836de69184d52aa8825eb6922"; // woo
  // const JAVASCRIPT_API_KEY = "32ec32c9fce4020aa1b5c9df1cde4423"; // woo
  const JAVASCRIPT_API_KEY = "1375c61b1936f19fab061fdb9b7684e8";
  const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";

  // const REDIRECT_URI = "http://3.36.239.183:8080/auth/kakao/callback"; // woo

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=32ec32c9fce4020aa1b5c9df1cde4423&redirect_uri=http://localhost:3000/auth/kakao/callback&response_type=code`;
  // https://kauth.kakao.com/oauth/authorize?client_id=32ec32c9fce4020aa1b5c9df1cde4423&redirect_uri=http://3.36.239.183:8080/auth/kakao/callback&response_type=code
  //   return (
  //     <Router>
  //     <div className="App">
  //       <Switch>
  //         <Route exact path="/">
  //           <h1><a href={KAKAO_AUTH_URL}>Kakao Login</a></h1>
  //         </Route>
  //         <Route path="/oauth/kakao/callback">
  //           <Auth />
  //         </Route>
  //       </Switch>
  //     </div>
  //     </Router>
  //   );
  // }
  // export default App;

  const getAccessToken = async () => {
    const code = new URL(window.location.href).searchParams.get("code");
    const response = await fetch(KAKAO_AUTH_URL);
    const json = await response.json();
    console.log(json);
    return json.access_token;
  };

  return (
    <S.Container>
      <S.Header>
        <BackBtn />
      </S.Header>
      <S.Img src={ReceiptImg} alt="receipt" />
      <S.H1>우리 하루 영수증 써주셍..(텍스트 들어갈곳.. 아님 이미지..?)</S.H1>
      <S.Btn>
        <a href={KAKAO_AUTH_URL}>안녕</a>
        <img src={KaKaoLogin} alt="카카오 로그인" />
      </S.Btn>
    </S.Container>
  );
}
