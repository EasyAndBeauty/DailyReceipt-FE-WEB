import { useCallback, useEffect, useState } from "react";
import {
  getMemberTodo,
  getGuestTodo,
  postMemberTodo,
  postGuestTodo,
  putMemberTodo,
  putGuestTodo,
  deleteMemberTodo,
  deleteGuestTodo,
} from "controllers/todoController";
import { TODAY } from "helper/constants";
import { useAuth } from "./useAuth";

/**
 * 해당 날짜의 todo리스트를 취득합니다.
 *
 * @param {string} date - 취득하고 싶은 날의 날짜. 디폴트 값은 오늘. 형식은 YYYY-MM-DD
 *
 * @returns {array} todos - 획득한 todo의 리스트
 * @returns {function} fetchTodos - todo리스트를 취득하는 함수
 */
export function useFetchTodos() {
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useAuth();

  const fetchTodoList = useCallback(
    async (date = TODAY) => {
      try {
        setLoading(true);
        const res = isLoggedIn ? await getMemberTodo(date) : await getGuestTodo(date);

        if (isLoggedIn && res.status !== 200) {
          return;
        }
        setTodos(res.data);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    },
    [isLoggedIn],
  );

  useEffect(() => {
    fetchTodoList();
  }, [fetchTodoList]);

  return { todos, loading, fetchTodoList };
}

/**
 * 해당 날짜의 todo리스트를 취득합니다.
 *
 * @param {Object} todo - post할 todo 단일 오브젝트. 이 훅스 내부에서는 todos를 별도 가공하지 않습니다.
 *
 * @returns {function} postTodos - todo를 post하는 함수
 */
export function useTodo(fetchTodos) {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useAuth();

  const addTodo = async (todo) => {
    if (loading) return;
    setLoading(true);
    isLoggedIn ? await postMemberTodo(todo) : await postGuestTodo(todo);
    await fetchTodos(todo.date);

    setLoading(false);
    return;
  };

  const updateTodo = async (todo) => {
    if (loading) return;
    setLoading(true);

    isLoggedIn ? await putMemberTodo(todo) : await putGuestTodo(todo);
    await fetchTodos(todo.date);

    setLoading(false);
    return;
  };

  const removeTodo = async (todo) => {
    if (loading) return;
    setLoading(true);

    isLoggedIn ? await deleteMemberTodo(todo) : await deleteGuestTodo(todo);
    await fetchTodos(todo.date);

    setLoading(false);
    return;
  };

  return { addTodo, updateTodo, removeTodo, loading };
}
