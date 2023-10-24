import "./style.css";

const Tasks = ({tasks, hideDone, removeTask}) => (
  <ul className="section__item">
    {tasks.map(task => (
      <li
        className={`list__item 
        ${task.done && hideDone ? "list__item--hidden" : ""}`}
      >
        <button className="list__button list__button--done">
          {task.done ? "✔" : ""}
        </button>
        <span className={`${task.done ? "list__task--done" : "list__item--text"}`}>
          {task.content}
        </span>
        <button 
        className="list__button list__button--remove"  
        onClick={() => removeTask(task.id)}>🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
