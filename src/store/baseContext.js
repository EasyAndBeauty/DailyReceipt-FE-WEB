import React, { useState, useCallback, useEffect } from "react";
const BaseContext = React.createContext({
  isBase: false,
  setIsBase: () => {},
});

// Base로 들어왔는지 확인하는 Context
export const BaseContextProvider = (props) => {
  // 토큰 상태를 담당하는 Hook
  const [isBase, setIsBase] = useState(false);

  // Provider에서 사용할 상태를을 정리
  const contextValue = {
    isBase,
    setIsBase,
  };
  return (
    <BaseContext.Provider value={contextValue}>
      {props.children}
    </BaseContext.Provider>
  );
};

export default BaseContext;
