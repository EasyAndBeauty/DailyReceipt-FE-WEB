import { useCallback, useEffect, useState } from "react";
import { TODAY } from "helper/constants";

import { getTodoList, postTodo, putTodo, deleteTodo } from "controllers/todoController";
/**
 * 해당 날짜의 todo리스트를 취득합니다.
 *
 * @param {string} date - 취득하고 싶은 날의 날짜. 디폴트 값은 오늘. 형식은 YYYY-MM-DD
 *
 * @returns {array} todos - 획득한 todo의 리스트
 * @returns {function} fetchTodos - todo리스트를 취득하는 함수
 */
export function useFetchTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTodoList = useCallback(async (date = TODAY) => {
    try {
      setLoading(true);

      const res = await getTodoList(date);

      setTodos(res);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, []);

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
export function useAddTodo(fetchTodos) {
  const [loading, setLoading] = useState(false);

  const addTodos = async (todo) => {
    if (loading) return;
    setLoading(true);

    await postTodo(todo);
    await fetchTodos(todo.date);

    setLoading(false);
    return;
  };

  return { addTodos, loading };
}

export function useUpdateTodo(fetchTodos) {
  const [loading, setLoading] = useState(false);

  const updateTodo = async (todo) => {
    if (loading) return;
    setLoading(true);

    await putTodo(todo);
    await fetchTodos(todo.date);

    setLoading(false);
    return;
  };
  return { updateTodo };
}

export function useRemoveTodo(fetchTodos) {
  const [loading, setLoading] = useState(false);

  const removeTodo = async (todo) => {
    if (loading) return;
    setLoading(true);

    await deleteTodo(todo);
    await fetchTodos(todo.date);

    setLoading(false);
    return;
  };
  return { removeTodo };
}
