import axios from "axios";
import { client } from "./clietns";

const dummySatTodos = [
  {
    task: "풀리퀘 확인하기",
    date: "2022-08-27T12:41:21",
    isDone: true,
    timer: 30,
  },
  {
    task: "과제",
    date: "2022-08-27T12:41:21",
    isDone: true,
    timer: 25,
  },
  {
    task: "Yoga Class",
    date: "2022-08-27T12:41:21",
    isDone: false,
    timer: 180,
  },
];

const dummySunTodos = [
  {
    task: "풀리퀘 확인하기",
    date: "2022-08-28T12:41:21",
    isDone: true,
    timer: 30,
  },
  {
    task: "과제",
    date: "2022-08-28T12:41:21",
    isDone: false,
    timer: 25,
  },
  {
    task: "Yoga Class",
    date: "2022-08-28T12:41:21",
    isDone: true,
    timer: 180,
  },
];

export const getTodoList = async (date, req) => {
  try {
    // TODO: 백엔드 연결
    // const response = await client.get("/todo", { params: { date } });
    console.log(date);
  } catch (err) {
    console.log(err);
  }
  return dummySatTodos;
};

export const postTodo = async (todo, req) => {
  // const response = client.post("/login");
};
