import axios from "axios";

// TODO: API 클래스화
export const client = axios.create({
  baseURL: `${process.env.DAILY_RECEIPT_API_BASE_URL}/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});
