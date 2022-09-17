// 외부에 노출되어도 상관없는 토큰입니다.
export const TEST_JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE2NjIzODU1ODd9.0-wb-7tBZoqimI3eWxT3SGl0hDhnzPZTAev_6DLvdDo";

export const localToken = localStorage.getItem("token") || false;

// JWT payload 파싱
export const parseJWT = (token) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(
    decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    )
  );
};

// 토큰 만료 여부 판정
export const isValidToken = (iat, exp) => {
  return exp - iat > 3600;
};
