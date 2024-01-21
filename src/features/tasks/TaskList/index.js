import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, TasksListButton } from "./styled";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../tasksSlice";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import searchQueryParamName from "./searchQueryParamName";

const TaskList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <TasksListButton
            $toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </TasksListButton>
          <Content>
            <Link to={`/zadania/${task.id}`}>{task.content} </Link>
          </Content>
          <TasksListButton
            $remove
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </TasksListButton>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
