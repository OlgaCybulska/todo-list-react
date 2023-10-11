import "./style.css";

const Tasks = (propos) => (
  <ul className="section__item">
    {propos.tasks.map((task) => (
      <li
        className={`list__item 
        ${task.done && propos.hideDoneTasks ? "list__item--hidden" : ""}`}
      >
        <button className="list__button list__button--done">
          {task.done ? "✔" : ""}
        </button>
        <span className={`${task.done ? "list__task--done" : "list__item--text"}`}>
          {task.content}
        </span>
        <button className="list__button list__button--remove">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
