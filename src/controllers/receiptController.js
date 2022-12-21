import { AuthClient } from "./client";

export const useReceiptClient = () => {
  const authClient = AuthClient();

  const getPinnedReceipts = async () => {
    return await authClient.get("/api/v1/receipt/pinned");
  };

  const postPinnedReceipt = async (receipt) => {
    return await authClient.post(`/api/v1/receipt/pinned`, receipt);
  };

  const updatePinnedReceipt = async (receipt, receiptId) => {
    return await authClient.put(`/api/v1/receipt/pinned/${receiptId}`, receipt);
  };

  return { getPinnedReceipts, postPinnedReceipt, updatePinnedReceipt };
};
