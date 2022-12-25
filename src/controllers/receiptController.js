import { client } from "./client";

export const getPinnedReceipts = async () => {
  return await client.get("/api/v1/receipt/pinned");
};

export const postPinnedReceipt = async (receipt) => {
  return await client.post(`/api/v1/receipt/pinned`, receipt);
};

export const updatePinnedReceipt = async (receipt, receiptId) => {
  return await client.put(`/api/v1/receipt/pinned/${receiptId}`, receipt);
};
