import { useEffect, useCallback } from "react";
// import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "./useLocalStorage";
import { useTodoClient } from "controllers/todoController";
import { useCurrentToken } from "hooks/useCurrentToken";

/**
 * useDataFetch
 *
 * date에 따라 데이터를 받아오는 패치 하는 hook
 *
 * @param {string} date - 날짜
 * @returns {array} todos - todos 데이터
 * @returns {function} getUerData - 유저 데이터를 받아오는 함수
 * @returns {function} getLocalData - 로컬 데이터를 받아오는 함수
 * @returns {function} postUesrData - 유저 데이터를 받아오는 함수
 * @returns {function} postLocalData - 로컬 데이터를 받아오는 함수
 * @returns {function} deleteLocalData - 로컬 데이터를 삭제하는 함수
 *
 */

export default function useDataFetch({ todos, setTodos, date }) {
  const { user } = useCurrentToken();

  const { isLoggedIn } = user;

  const { getTodoList, postTodo, updateTodo, deleteTodo } = useTodoClient();

  const newDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];

  const [storedValue, setValue, getValue] = useLocalStorage(newDate, []);

  /**
   * GET - 로그인 사용자 : 랜더링시 서버에서 데이터를 받아온다.
   * GET - 게스트 사용자 : 랜더링시 localStorage에서 데이터를 받아온다.
   *
   */

  // get - 게스트 사용자 : 랜더링시 localStorage에서 데이터를 받아온다.
  const getLocalData = useCallback(async () => {
    const data = await getValue(newDate);
    setTodos(data);
  }, [newDate]);

  // get - 로그인 사용자 : 랜더링시 서버에서 데이터를 받아온다.
  const getUserData = useCallback(async () => {
    const { data } = (await getTodoList(newDate)) || [];
    const newTodos = data.filter((todo) => todo.date === newDate);
    setTodos(newTodos);
  }, [newDate]);

  const getDataLogic = isLoggedIn ? getUserData : getLocalData;

  /**
   * POST - 로그인 사용자 : 서버에 새로운 데이터를 저장한다
   * POST - 게스트 사용자 : localStorage에 새로운 데이터를 저장한다
   *
   */

  // post - 로그인 사용자 : 입력시 서버에 데이터를 보낸다 + localStorage에 저장한다.
  const postUseData = useCallback(
    async (newTodo) => {
      const nextTodo = { ...newTodo, date: newDate };
      const todoId = await postTodo(nextTodo);

      const { task, timer, isDone } = newTodo;

      setTodos((pre) => [
        ...pre,
        {
          todoId,
          task,
          date: newDate,
          isDone,
          timer,
        },
      ]);
    },
    [newDate, postTodo, setTodos]
  );

  // post - 게스트 사용자  : localStorage에 데이터를 저장한다
  const postLocalData = useCallback(
    (todo) => {
      const { task, timer, isDone } = todo;
      const newData = [
        ...todos,
        {
          todoId: uuidv4(),
          task,
          date: newDate,
          isDone,
          timer,
        },
      ];

      setTodos(newData);
      setValue(newData, newDate);
    },
    [todos, newDate, setTodos, setValue]
  );

  const postDataLogic = isLoggedIn ? postUseData : postLocalData;

  /**
   * PUT - 로그인 사용자 : 서버에서 데이터를 업데이트한다.
   * PUT - 게스트 사용자 : localStorage에 데이터를 업데이트한다.
   *
   */

  // put - 로그인 사용자 : 수정시 서버에 데이터를 보낸다
  const putUseData = useCallback(
    async (id, todo) => {
      const { task, timer, isDone, date } = todo;
      const req = { task, timer, isDone, date };
      const newTodo = await updateTodo(id, req);
      setTodos((pre) => {
        return pre.map((todo) => {
          if (todo.todoId === id) {
            return {
              ...todo,
              ...newTodo,
            };
          }
          return todo;
        });
      });
    },
    [setTodos, updateTodo]
  );

  // put - 게스트 사용자  : localStorage에 데이터를 수정한다.
  const putLocalData = useCallback(
    async (id, task) => {
      const newData = [...todos].map((todo) => {
        if (todo.todoId === id) {
          return task;
        }
        return todo;
      });
      await setValue(newData, newDate);
      setTodos(newData);
    },
    [todos, setValue, setTodos, newDate]
  );

  const putDataLogic = isLoggedIn ? putUseData : putLocalData;

  // 임시
  // const putDataLogic = putLocalData;

  /**
   * Delete - 로그인 사용자 : 서버에서 데이터를 삭제한다.
   * Delete - 게스트 사용자 : localStorage에서 데이터를 삭제한다.
   *
   */
  // delete - 로그인 사용자 : 삭제시 서버에 데이터를 보낸다 + localStorage에 저장한다.
  const deleteUseData = useCallback(
    async (id) => {
      const newData = todos.filter((todo) => todo.todoId !== id);
      await deleteTodo(id);
      setTodos(newData);
    },
    [deleteTodo, setTodos, todos]
  );

  // delete - 게스트 사용자  : localStorage에 데이터를 저장한다.

  const deleteLocalData = useCallback(
    async (id) => {
      const newData = todos.filter((todo) => todo.todoId !== id);
      await setValue(newData, newDate);
      setTodos(newData);
    },
    [newDate, setTodos, setValue, todos]
  );

  const deleteDataLogic = isLoggedIn ? deleteUseData : deleteLocalData;
  // 임시
  // const deleteDataLogic = deleteLocalData;

  return {
    getDataLogic,
    postDataLogic,
    putDataLogic,
    deleteDataLogic,
  };
}
