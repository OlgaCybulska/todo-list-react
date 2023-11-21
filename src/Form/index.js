import React, { useState, useRef } from "react";
import { FormTask, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContentTrimmed = newTaskContent.trim();

    if (!newTaskContentTrimmed) {
      return;
    }

    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
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
      <Button className="form__button" onClick={focusInput}>
        Dodaj zadanie
      </Button>
    </FormTask>
  );
};

export default Form;
