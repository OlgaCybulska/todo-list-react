import {
  HashRouter,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage/index.js";
import AuthorPage from "./features/author/AuthorPage";

export const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
        <li>
          <Link to="/autor">O autorze</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
