import { TOKEN_KEY } from "helper/constants";

export const isLoggedIn = !!window.localStorage.getItem(TOKEN_KEY);
