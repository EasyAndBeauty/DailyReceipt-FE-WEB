import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useTodoClient } from "controllers/todoController";
import { useCurrentToken } from "hooks/useCurrentToken";
import { TODAY } from "helper/constants";

/**
 * 해당 날짜의 todo리스트를 취득합니다.
 *
 * @param {string} date - 취득하고 싶은 날의 날짜. 디폴트 값은 오늘. 형식은 YYYY-MM-DD
 *
 * @returns {array} todos - 획득한 todo의 리스트
 * @returns {function} fetchTodos - todo리스트를 취득하는 함수
 */
export function useFetchTodos() {
  const { user } = useCurrentToken();
  const { getTodoList } = useTodoClient();

  const [todos, setTodos] = useState([]);

  const { isLoggedIn } = user;

  const getMemberData = async (date) => {
    try {
      const res = await getTodoList(date);
      if (res.status !== 200) {
        throw new Error(res.status);
      }
      const { data } = res;
      setTodos(data);
    } catch (e) {
      console.log(e);
    }
  };

  const getGuestData = async (date) => {
    try {
      const data = await window.localStorage.getItem(date);
      setTodos(data);
    } catch (e) {
      console.log(e);
    }
  };

  async function fetchTodos(date = TODAY) {
    isLoggedIn ? getMemberData(date) : getGuestData(date);
  }

  return { todos, fetchTodos };
}

/**
 * 해당 날짜의 todo리스트를 취득합니다.
 *
 * @param {Object} todo - post할 todo 단일 오브젝트. 이 훅스 내부에서는 todos를 별도 가공하지 않습니다.
 *
 * @returns {function} postTodos - todo를 post하는 함수
 */
export function usePostTodos() {
  const { user } = useCurrentToken();
  const { postTodo } = useTodoClient();

  const { isLoggedIn } = user;
  // TODO: date는 훅이 아니라 유저에게서 데이터를 받는 시점에 지정할 것.
  // 선택한 날짜의 날짜이므로 여기서 지정불가.
  // post - 로그인 사용자 : 입력시 서버에 데이터를 보낸다 + localStorage에 저장한다.
  const postMemberData = async (todo) => {
    try {
      const res = await postTodo(todo);

      if (res.status !== 201) {
        throw new Error(res.status);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // post - 게스트 사용자  : localStorage에 데이터를 저장한다
  const postGuestData = async (todo) => {
    try {
      const newTodo = { ...todo, id: uuidv4() };
      window.localStorage.setItem(newTodo.date, JSON.stringify(newTodo));
    } catch (e) {
      console.log(e);
    }
  };

  async function postTodos(todos) {
    isLoggedIn ? postMemberData(todos) : postGuestData(todos);
  }
  return { postTodos };
}

export function useUpdateTodos() {
  const { user } = useCurrentToken();
  const { updateTodo } = useTodoClient();

  const { isLoggedIn } = user;

  const putMemberData = async (todo) => {
    try {
      const res = await updateTodo(todo);

      if (res.status !== 201) {
        throw new Error(res.status);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const putGuestData = async (todo) => {
    try {
      const newTodo = { ...todo, id: uuidv4() };
      window.localStorage.setItem(newTodo.date, JSON.stringify(newTodo));
    } catch (e) {
      console.log(e);
    }
  };

  async function updateTodos(todos) {
    isLoggedIn ? putMemberData(todos) : putGuestData(todos);
  }
  return { updateTodos };
}

export function useDeleteTodos() {
  const { user } = useCurrentToken();
  const { deleteTodo } = useTodoClient();

  const { isLoggedIn } = user;

  const deleteMemberData = async (todo) => {
    try {
      const res = await deleteTodo(todo);

      if (res.status !== 201) {
        throw new Error(res.status);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteGuestData = async (todo) => {
    try {
      const newTodo = { ...todo, id: uuidv4() };
      window.localStorage.setItem(newTodo.date, JSON.stringify(newTodo));
    } catch (e) {
      console.log(e);
    }
  };

  async function deleteTodos(todos) {
    isLoggedIn ? deleteMemberData(todos) : deleteGuestData(todos);
  }
  return { deleteTodos };
}

// export default function useDataFetch({ todos, setTodos, setAllTodos, date }) {
//   const { user } = useCurrentToken();

//   const { isLoggedIn } = user;

//   const { getTodoList, postTodo, updateTodo, deleteTodo } = useTodoClient();

//   const newDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
//     .toISOString()
//     .split("T")[0];

//   const { setValue, getValue, getAllDateValue, clearAllDateValue } = useLocalStorage(newDate, []);

//   /**
//    * GET - 로그인 사용자 : 랜더링시 서버에서 데이터를 받아온다.
//    * GET - 게스트 사용자 : 랜더링시 localStorage에서 데이터를 받아온다.
//    *
//    */

//   // get - 게스트 사용자 : 랜더링시 localStorage에서 데이터를 받아온다.
//   const getLocalData = useCallback(async () => {
//     try {
//       const data = await getValue(newDate);
//       setTodos(data);
//     } catch (e) {
//       console.log(e);
//     }
//   }, [newDate]);

//   // get - 로그인 사용자 : 랜더링시 서버에서 데이터를 받아온다.
//   const getUserData = useCallback(async () => {
//     try {
//       const res = await getTodoList(newDate);
//       if (res.status !== 200) {
//         throw new Error(res.status);
//       }
//       const { data } = res;
//       setTodos(data);
//     } catch (e) {
//       console.log(e);
//     }
//   }, [newDate]);

//   const getDataLogic = isLoggedIn ? getUserData : getLocalData;

//   const getAllUserData = useCallback(async () => {
//     try {
//       const res = await getTodoList();

//       if (res.status !== 200) {
//         throw new Error(res.status);
//       }
//       const { data } = res;
//       setAllTodos(data);
//     } catch (e) {
//       console.log(e.message);
//     }
//   }, []);

//   /**
//    * POST - 로그인 사용자 : 서버에 새로운 데이터를 저장한다
//    * POST - 게스트 사용자 : localStorage에 새로운 데이터를 저장한다
//    *
//    */

//   // post - 로그인 사용자 : 입력시 서버에 데이터를 보낸다 + localStorage에 저장한다.
//   const postUseData = useCallback(
//     async (newTodo) => {
//       try {
//         const nextTodo = { ...newTodo, date: newDate };
//         const res = await postTodo(nextTodo);

//         if (res.status !== 201) {
//           throw new Error(res.status);
//         }
//         const { data } = res;

//         const id = data;
//         const { task, timer, isDone } = newTodo;

//         setTodos((pre) => [
//           ...pre,
//           {
//             id,
//             task,
//             date: newDate,
//             isDone,
//             timer,
//           },
//         ]);
//       } catch (e) {
//         console.log(e);
//       }
//     },
//     [newDate, postTodo, setTodos],
//   );

//   // post - 게스트 사용자  : localStorage에 데이터를 저장한다
//   const postLocalData = useCallback(
//     async (todo) => {
//       try {
//         const { task, timer, isDone } = todo;
//         const newData = [
//           ...todos,
//           {
//             id: uuidv4(),
//             task,
//             date: newDate,
//             isDone,
//             timer,
//           },
//         ];

//         setTodos(newData);
//         setValue(newData, newDate);
//       } catch (e) {
//         console.log(e);
//       }
//     },
//     [todos, newDate, setTodos, setValue],
//   );

//   const postDataLogic = isLoggedIn ? postUseData : postLocalData;

//   /**
//    * PUT - 로그인 사용자 : 서버에서 데이터를 업데이트한다.
//    * PUT - 게스트 사용자 : localStorage에 데이터를 업데이트한다.
//    *
//    */

//   // put - 로그인 사용자 : 수정시 서버에 데이터를 보낸다
//   const putUseData = useCallback(
//     async (id, todo) => {
//       try {
//         const { task, timer, isDone, date } = todo;
//         const req = { task, timer, isDone, date };
//         const res = await updateTodo(id, req);

//         if (res.status !== 200) {
//           throw new Error(res.status);
//         }

//         const { data } = res;
//         setTodos((pre) => {
//           return pre.map((todo) => {
//             if (todo.id === id) {
//               return {
//                 ...todo,
//                 ...data,
//               };
//             }
//             return todo;
//           });
//         });
//       } catch (e) {
//         console.log(e);
//       }
//     },
//     [setTodos, updateTodo],
//   );

//   // put - 게스트 사용자  : localStorage에 데이터를 수정한다.
//   const putLocalData = useCallback(
//     async (id, task) => {
//       try {
//         const newData = [...todos].map((todo) => {
//           if (todo.id === id) {
//             return task;
//           }
//           return todo;
//         });
//         await setValue(newData, newDate);
//         setTodos(newData);
//       } catch (e) {
//         console.log(e);
//       }
//     },
//     [todos, setValue, setTodos, newDate],
//   );

//   const putDataLogic = isLoggedIn ? putUseData : putLocalData;

//   // 임시
//   // const putDataLogic = putLocalData;

//   /**
//    * Delete - 로그인 사용자 : 서버에서 데이터를 삭제한다.
//    * Delete - 게스트 사용자 : localStorage에서 데이터를 삭제한다.
//    *
//    */
//   // delete - 로그인 사용자 : 삭제시 서버에 데이터를 보낸다 + localStorage에 저장한다.
//   const deleteUseData = useCallback(
//     async (id) => {
//       try {
//         const newData = todos.filter((todo) => todo.id !== id);
//         await deleteTodo(id);
//         setTodos(newData);
//       } catch (e) {
//         console.log(e);
//       }
//     },
//     [deleteTodo, setTodos, todos],
//   );

//   // delete - 게스트 사용자  : localStorage에 데이터를 저장한다.

//   const deleteLocalData = useCallback(
//     async (id) => {
//       try {
//         const newData = todos.filter((todo) => todo.id !== id);
//         await setValue(newData, newDate);
//         setTodos(newData);
//       } catch (e) {
//         console.log(e);
//       }
//     },
//     [newDate, setTodos, setValue, todos],
//   );

//   const deleteDataLogic = isLoggedIn ? deleteUseData : deleteLocalData;

//   const registeTodos = async () => {
//     let allTodos = getAllDateValue();
//     try {
//       for (let todosWithnDate in allTodos) {
//         for (let todo of allTodos[todosWithnDate]) {
//           const { task, timer, isDone } = todo;
//           const req = { task, timer, isDone, date: todosWithnDate };
//           await postTodo(req);
//         }
//       }
//       await clearAllDateValue();
//       getDataLogic();
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     let allTodos = getAllDateValue();
//     if (allTodos) {
//       registeTodos();
//     }
//   }, []);

//   useEffect(() => {
//     getDataLogic();
//   }, [getDataLogic, newDate]);

//   useEffect(() => {
//     if (isLoggedIn) {
//       getAllUserData();
//     }
//   }, [getAllUserData, isLoggedIn, todos]);

//   return {
//     postDataLogic,
//     putDataLogic,
//     deleteDataLogic,
//     getAllUserData,
//   };
// }
