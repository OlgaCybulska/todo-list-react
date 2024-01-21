import { ThemeProvider } from "styled-components";
import Form from "../Form";
import TaskList from "../TaskList";
import Buttons from "../Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";

const theme = {
  breakpoint: 767,
};

function TasksPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Lista zadań" />

        <Section title="Dodaj nowe zadanie" body={<Form />} />

        <Section title="Wyszukiwarka" body={<Search />} />

        <Section
          title="Lista zadań"
          body={<TaskList />}
          extrHeaderContent={<Buttons />}
        />
      </Container>
    </ThemeProvider>
  );
}

export default TasksPage;
