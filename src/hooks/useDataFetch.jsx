import { useContext, useEffect, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import useLocalStorage from "./useLocalStorage";
import { getTodoList, postTodo, updateTodo } from "controllers/todoController";
import AtuhContext from "store/auth-context";

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
  const authCtx = useContext(AtuhContext);
  let userId = authCtx.token;

  const newDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];

  const [storedValue, setValue, getValue] = useLocalStorage(
    new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .split("T")[0],
    []
  );

  /**
   * GET - 로그인 사용자 : 랜더링시 서버에서 데이터를 받아온다.
   * GET - 게스트 사용자 : 랜더링시 localStorage에서 데이터를 받아온다.
   *
   */

  // get - 게스트 사용자 : 랜더링시 localStorage에서 데이터를 받아온다.
  const getLocalData = useCallback(() => {
    const data = getValue(newDate);
    setTodos(data);
  }, [date]);

  // get - 로그인 사용자 : 랜더링시 서버에서 데이터를 받아온다.
  const getUserData = useCallback(async () => {
    const data = await getTodoList(userId, newDate);
    setTodos(data);
  }, [date]);

  // const getDataLogic = authCtx.isLoggedIn ? getUserData : getLocalData;

  // 임시
  const getDataLogic = getLocalData;

  /**
   * POST - 로그인 사용자 : 서버에 새로운 데이터를 저장한다
   * POST - 게스트 사용자 : localStorage에 새로운 데이터를 저장한다
   *
   */

  // post - 로그인 사용자 : 입력시 서버에 데이터를 보낸다 + localStorage에 저장한다.
  const postUseData = useCallback(
    async (newTodo) => {
      const temp = { ...newTodo, timer: String(newTodo.timer), date: newDate };
      // const res = await postTodo(userId, temp);
      const res = await fetch(
        `${process.env.REACT_APP_DAILY_RECEIPT_API_BASE_URL}/api/v2/todo/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(temp),
        }
      );
      const data = await res.json();
      console.log(data);

      const { task, timer, isDone } = newTodo;

      setTodos((pre) => [
        ...pre,
        {
          id: uuidv4(),
          task,
          date: dayjs().format(),
          isDone,
          timer,
        },
      ]);
    },
    [date, todos]
  );

  // post - 게스트 사용자  : localStorage에 데이터를 저장한다
  const postLocalData = useCallback(
    (todo) => {
      const { task, timer, isDone } = todo;
      const newData = [
        ...todos,
        {
          id: uuidv4(),
          task,
          date: dayjs().format(),
          isDone,
          timer,
        },
      ];

      setTodos(newData);
      setValue(newData, newDate);
    },
    [setValue, todos.length]
  );

  // const postDataLogic = authCtx.isLoggedIn ? postUseData : postLocalData;

  // 임시
  const postDataLogic = postLocalData;

  /**
   * PUT - 로그인 사용자 : 서버에서 데이터를 업데이트한다.
   * PUT - 게스트 사용자 : localStorage에 데이터를 업데이트한다.
   *
   */

  // put - 로그인 사용자 : 수정시 서버에 데이터를 보낸다
  const putUseData = useCallback(
    async (id, todo) => {
      const { task, timer, isDone, date } = todo;
      const req = { task, timer, isDone, newDate };
      const res = await updateTodo(userId, req);
      const data = res.json();

      console.log(res, data);

      setTodos((pre) => {
        return pre.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              task,
              timer,
              isDone,
            };
          }
          return todo;
        });
      });
    },
    [date, todos]
  );

  // put - 게스트 사용자  : localStorage에 데이터를 수정한다.
  const putLocalData = useCallback(
    async (id, task) => {
      const newData = [...todos].map((todo) => {
        if (todo.id === id) {
          return task;
        }
        return todo;
      });
      await setValue(newData, newDate);
      setTodos(newData);
    },
    [todos, setValue, setTodos]
  );

  // const putDataLogic = authCtx.isLoggedIn ? putUseData : putLocalData;

  // 임시
  const putDataLogic = putLocalData;

  /**
   * Delete - 로그인 사용자 : 서버에서 데이터를 삭제한다.
   * Delete - 게스트 사용자 : localStorage에서 데이터를 삭제한다.
   *
   */
  // delete - 로그인 사용자 : 삭제시 서버에 데이터를 보낸다 + localStorage에 저장한다.

  // delete - 게스트 사용자  : localStorage에 데이터를 저장한다.

  const deleteLocalData = useCallback(
    async (id) => {
      const newData = todos.filter((todo) => todo.id !== id);
      await setValue(newData, newDate);
      setTodos(newData);
    },
    [date, setValue]
  );

  useEffect(() => {
    getDataLogic();
  }, [getDataLogic]);

  return {
    getDataLogic,
    postDataLogic,
    putDataLogic,
    deleteLocalData,
  };
}
