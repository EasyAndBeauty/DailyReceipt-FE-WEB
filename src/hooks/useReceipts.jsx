import { postPinnedReceipt, updatePinnedReceipt } from "controllers/receiptController";
import { getUser } from "controllers/userController";
import { useEffect, useState } from "react";

function useCreatePinnedReceipt() {
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
  const { receiptBody } = useCreatePinnedReceipt();
  const [id, setId] = useState("");

  // TODO : 에러 처리
  async function postPinReceipt() {
    const response = await postPinnedReceipt(receiptBody);
    console.log(response);
    setId(response.data.id);
  }

  async function updatePinReceipt() {
    const response = await updatePinnedReceipt({ ...receiptBody, pinned: false }, id);
    console.log(response);
  }

  return { postPinReceipt, updatePinReceipt };
}
