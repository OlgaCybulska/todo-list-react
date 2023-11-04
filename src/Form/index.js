import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setnewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    if ((newTaskContent = "")) {
      return;
    }
    addNewTask(newTaskContent.trim());
    setnewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        onChange={({ target }) => setnewTaskContent(target.value)}
        type="text"
        className="form__input"
        placeholder="Co jest do zrobienia?"
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
