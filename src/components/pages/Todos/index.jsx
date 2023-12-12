import React, { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";
import { Context } from "../../../context";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const createTodo = () => {
    let arr = [...todos, { text: inputValue, complete: false }];

    if (inputValue) {
      setTodos(arr);
      setInputValue("");
      localStorage.setItem("todos", JSON.stringify(arr));
    }
  };

  useEffect(() => {
    let localTodos = JSON.parse(localStorage.getItem("todos"));

    localTodos && setTodos(localTodos);
  }, []);
};
