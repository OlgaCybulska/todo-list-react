import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage/index.js";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink } from "./styled.js";
import { toAuthor, toTask, toTasks } from "./routes.js";

export const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
        </li>
      </ul>
      <Switch>
        <Route path={toTask()}>
          <TaskPage />
        </Route>
        <Route path={toTasks()}>
          <TasksPage />
        </Route>
        <Route path={toAuthor()}>
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to={toTasks()} />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
