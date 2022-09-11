import { createContext, useContext, useReducer } from "react";
import { localToken } from "helper/jwt";

const token = localToken;

const initialAuth = {
  isLoggedIn: "" || !!token,
  token: "" || token,
};

const AuthStateContext = createContext(initialAuth);
const AuthDispatchContext = createContext();

export const AuthReducer = (initialState, action) => {
  const reducers = {
    LOGIN: {
      isLoggedIn: action.payload.user,
      token: action.payload.auth_token,
    },
    LOGOUT: { ...initialState },
  };

  return reducers[action.type];
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

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialAuth);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
