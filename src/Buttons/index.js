import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <>
      <button onClick={toggleHideDone} className="buttons__button">
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="buttons__button"
        onClick={setAllDone}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </>
  );

export default Buttons;
