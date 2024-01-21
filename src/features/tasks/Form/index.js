import React, { useState, useRef } from "react";
import { FormTask, Button } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import Input from "../Input";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContentTrimmed = newTaskContent.trim();

    if (!newTaskContentTrimmed) {
      return;
    }

    dispatch(
      addTask({
        content: newTaskContentTrimmed,
        done: false,
        id: nanoid(),
      })
    );
  };

  return (
    <FormTask onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        type="text"
        placeholder="Co jest do zrobienia?"
      ></Input>
      <Button onClick={focusInput}>Dodaj zadanie</Button>
    </FormTask>
  );
};

export default Form;
