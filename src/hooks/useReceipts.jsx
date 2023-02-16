import { useCallback, useEffect, useState } from "react";
import {
  getPinnedReceipts,
  postPinnedReceipt,
  updatePinnedReceipt,
} from "controllers/receiptController";
import { getUser } from "controllers/userController";

export function useFetchReceipt() {
  const [pinnedReceipts, setPinnedReceipts] = useState();
  const [loading, setLoading] = useState(true);

  const fetchReceipts = useCallback(async () => {
    setLoading(true);
    const response = await getPinnedReceipts();
    setPinnedReceipts(response.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchReceipts();
  }, [fetchReceipts]);

  return { pinnedReceipts, fetchReceipts, loading };
}

/**
 * 세션 스토리지와 유저의 정보를 취합하여 새 핀 영수증을 만듭니다.
 *
 * @returns {Object} Pinned Receipt
 */
function useGeneratePinnedReceipt() {
  const [userName, setUserName] = useState("");
  const [todoIds, setTodoIds] = useState([]);
  const [todos, _] = useState(JSON.parse(sessionStorage.getItem("todos")));
  const [famousSaying, __] = useState(sessionStorage.getItem("famousSaying"));

  useEffect(() => {
    (async () => {
      const response = await getUser();
      setUserName(response.data.nickname);
    })();
  }, []);

  useEffect(() => {
    // todos가 아직 세션 스토리지에 저장되지 않아서 null인 경우 return.
    if (!todos) return;

    setTodoIds(todos.map((todo) => todo.id));
  }, [todos]);

  return {
    receiptBody: { todoIds, famousSaying: famousSaying, receipt_name: userName, pinned: true },
  };
}

export function usePinnedReceipt() {
  const { receiptBody } = useGeneratePinnedReceipt();
  // TODO : 에러 처리
  async function postPinReceipt() {
    await postPinnedReceipt(receiptBody);
  }

  async function updatePinReceipt(receiptId) {
    await updatePinnedReceipt({ pinned: false }, receiptId);
  }

  return { postPinReceipt, updatePinReceipt };
}
