import { useState, useEffect, useCallback } from "react";
import useLocalStorage from "./useLocalStorage";
import { getTodoList } from "controllers/todoController";

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

export default function useDataFetch({ date }) {
  const [todos, setTodos] = useState([]);
  const [storedValue, setValue, getValue] = useLocalStorage(
    new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .split("T")[0],
    []
  );

  // get - 게스트 사용자 : 랜더링시 localStorage에서 데이터를 받아온다.
  const getLocalData = useCallback(() => {
    const newDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .split("T")[0];
    const data = getValue(newDate);
    setTodos(data);
  }, [date]);

  // get - 로그인 사용자 : 랜더링시 서버에서 데이터를 받아온다.
  const getUserData = useCallback(async () => {
    // const response = await fetch("백엔드서버/파라미터");
    const data = getTodoList(date);
    setTodos(data);
    // 로컬에 저장
  }, [date]);

  // post - 로그인 사용자 : 입력시 서버에 데이터를 보낸다 + localStorage에 저장한다.
  const postUseData = useCallback(
    async (task) => {
      // const response = await fetch("백엔드서버/파라미터", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     task,
      //   }),
      // });
      // const response = postData(task); // 나중에 마당이 만들어 줄것
      // const data = await response.json();
      setTodos((pre) => [
        ...pre,
        {
          id: todos.length + 1,
          task,
          date: new date(),
          isdate: false,
          timer: 25,
        },
      ]);
    },
    [date, todos.length]
  );

  // post - 게스트 사용자  : localStorage에 데이터를 저장한다

  const postLocalData = useCallback(
    (task) => {
      const newDate = new Date(
        date.getTime() - date.getTimezoneOffset() * 60000
      )
        .toISOString()
        .split("T")[0];

      const newData = [
        ...todos,
        {
          id: todos.length + 1,
          task,
          isdate: false,
          timer: 25,
        },
      ];

      setTodos(newData);
      setValue(newData, newDate);
    },
    [setValue, todos.length]
  );

  // put - 로그인 사용자 : 수정시 서버에 데이터를 보낸다 + localStorage에 저장한다.

  // put - 게스트 사용자  : localStorage에 데이터를 저장한다.

  // delete - 로그인 사용자 : 삭제시 서버에 데이터를 보낸다 + localStorage에 저장한다.

  // delete - 게스트 사용자  : localStorage에 데이터를 저장한다.

  const deleteLocalData = useCallback(
    (id) => {
      const newDate = new Date(
        date.getTime() - date.getTimezoneOffset() * 60000
      )
        .toISOString()
        .split("T")[0];
      setValue((pre) => pre.filter((todo) => todo.id !== id), newDate);
      setTodos((pre) => pre.filter((todo) => todo.id !== id));
    },
    [date, setValue]
  );

  useEffect(() => {
    getLocalData();
  }, [getUserData, getLocalData]);

  return {
    todos,
    getUserData,
    getLocalData,
    postUseData,
    postLocalData,
    deleteLocalData,
  };
}
