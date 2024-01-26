import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { ThemeProvider } from "styled-components";
import FetchExampleTasksButton from "./TasksPage/FetchExampleTasksButton";

const theme = {
  breakpoint: 767,
};

function Tasks() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Lista zadań" />

        <Section
          title="Dodaj nowe zadanie"
          extrHeaderContent={<FetchExampleTasksButton />}
          body={<Form />}
        />

        <Section
          title="Lista zadań"
          body={<TaskList />}
          extrHeaderContent={<Buttons />}
        />
      </Container>
    </ThemeProvider>
  );
}

export default Tasks;
