import { createContext, useContext, useReducer } from "react";

const initialAuth = {
  isLoggedIn: false,
  accessToken: "",
  refreshToken: "",
};

const AuthStateContext = createContext(initialAuth);
const AuthDispatchContext = createContext();

export const AuthReducer = (userState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isLoggedIn: action.payload.isLoggedIn,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    case "LOGOUT":
      return {
        ...initialAuth,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export function useAuthState() {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }

  return context;
}

export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }

  return context;
}

export const AuthContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialAuth);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
