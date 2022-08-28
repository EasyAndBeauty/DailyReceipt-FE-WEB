import axios from "axios";

// TODO: API 클래스화
export const client = axios.create({
  baseURL: `${process.env.REACT_APP_DAILY_RECEIPT_API_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredential: true,
});
