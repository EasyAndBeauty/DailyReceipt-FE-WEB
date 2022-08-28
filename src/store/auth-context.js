import React, { useState, useCallback, useEffect } from "react";
const AtuhContext = React.createContext({
  userName: "",
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

// 남은 로그아웃 시간
let logoutTimer;

// 남은 시간을 계산해주는 함수
const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remianingDuration = adjExpirationTime - currentTime;
  return remianingDuration;
};

// local에 토큰이 유효한지 확인
const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = JSON.parse(storedToken).expires;
  const remainingTime = calculateRemainingTime(storedExpirationDate);

  // 이미 지난 토큰이라면
  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    return null;
  }

  // 아니라면
  return {
    token: storedToken,
    duration: remainingTime,
  };
};

// 인증 관려 상태를 관리하는 역할을 함
export const AuthContextProvider = (props) => {
  // 처음에 토큰을 가져온다
  const tokenData = retrieveStoredToken();
  let initialToken;

  if (tokenData) {
    initialToken = tokenData.token;
  }
  // 사용자의 이름을 담당하는 Hook

  let tempNicName = JSON.parse(initialToken);

  const [userName, setUserName] = useState(
    tempNicName[Object.keys(tempNicName)[0]] || ""
  );

  // 토큰 상태를 담당하는 Hook
  const [token, setToken] = useState(initialToken);

  // 토큰이 없다면 => fasle , 있다먄 => true
  const userIsLoggendIn = !!token;

  // login 할때는 token을 넣자
  const loginHandler = (token, expirationTime) => {
    const { id, email, nickname } = token;
    setToken(email);
    setUserName(nickname);
    localStorage.setItem(
      "token",
      JSON.stringify({
        [email]: nickname,
        expires: expirationTime,
      })
    );

    // 남은 시간을 계산해주는 함수
    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  useEffect(() => {
    if (tokenData) {
      // 토큰 시간
      // console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [loginHandler, tokenData]);

  // Provider에서 사용할 상태를을 정리
  const contextValue = {
    userName,
    token: token,
    isLoggedIn: userIsLoggendIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AtuhContext.Provider value={contextValue}>
      {props.children}
    </AtuhContext.Provider>
  );
};

export default AtuhContext;
