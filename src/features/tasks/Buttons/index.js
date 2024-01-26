import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "./styled";
import {
  selectTasks,
  toggleHideDone,
  setAllDone,
  selectHideDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
} from "../tasksSlice";
import Button from "../Button";

const Buttons = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};
export default Buttons;
