import { useCallback, useEffect, useState } from "react";
import {
  getPinnedReceipts,
  postPinnedReceipt,
  updatePinnedReceipt,
} from "controllers/receiptController";
import { getUser } from "controllers/userController";
/**
 * 세션 스토리지와 유저의 정보를 취합합니다.
 *
 * @returns {Object} Pinned Receipt
 */
function useGeneratePinnedReceipt() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await getUser();
      setUserName(response.data.nickname);
    })();
  }, []);

  const famousSaying = sessionStorage.getItem("famous_saying");
  const todos = JSON.parse(sessionStorage.getItem("todos"));

  return {
    receiptBody: { todos, famous_saying: famousSaying, receipt_name: userName, pinned: true },
  };
}

export function usePinnedReceipt() {
  const { receiptBody } = useGeneratePinnedReceipt();
  const [id, setId] = useState("");

  // TODO : 에러 처리
  async function postPinReceipt() {
    const response = await postPinnedReceipt(receiptBody);
    setId(response.data.id);
  }

  async function updatePinReceipt() {
    await updatePinnedReceipt({ ...receiptBody, pinned: false }, id);
  }

  return { postPinReceipt, updatePinReceipt };
}

export function useFetchReceipt() {
  const [pinnedReceipts, setPinnedReceipts] = useState();

  const fetchReceipts = useCallback(async () => {
    const data = await getPinnedReceipts();
    setPinnedReceipts(data);
  }, []);

  useEffect(() => {
    fetchReceipts();
  }, [fetchReceipts]);

  return { pinnedReceipts, fetchReceipts };
}
