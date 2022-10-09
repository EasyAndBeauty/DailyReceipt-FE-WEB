/**
 * JWT를 파싱
 * @param {string} token
 * @returns
 */
const parseJWT = (token) => {
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

/**
 * 로컬에서 취득한 토큰이 유효한지 판단합니다.
 * @param {string} localToken
 * @returns
 */
export const isValidToken = (localToken) => {
  const { iat, exp } = parseJWT(JSON.parse(localToken).refreshToken);
  return exp - iat > 3600;
};
