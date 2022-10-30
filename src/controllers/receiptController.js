import { AuthClient } from "./client";
import { dummyPinnedReceipts } from "./dummy";

export const useReceiptClient = () => {
  const authClient = AuthClient();

  // Todo: 백엔드 갱신 후 API요청 URL 수정
  const getPinnedReceipts = async () => {
    return dummyPinnedReceipts;
    // return await authClient.get("/api/v1/receipt/pinned");
  };

  const postPinnedReceipt = async (receipt) => {
    return await authClient.post(`/api/v1/receipt/pinned`, receipt);
  };

  const updatePinnedReceipt = async (receipt, receiptId) => {
    return await authClient.put(`/api/v1/receipt/pinned/${receiptId}`, receipt);
  };

  return { getPinnedReceipts, postPinnedReceipt, updatePinnedReceipt };
};
