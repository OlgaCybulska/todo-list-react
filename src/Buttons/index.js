import "./style.css";

const Buttons = (props) => (
 props.tasks.length > 0 && ( 
 <>
    <button className="buttons_button">
      {props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
    </button>
    <button 
    className="buttons_button" 
    disabled={props.tasks.every(({ done }) => done )}>
      Ukończ wszystkie
    </button>
  </>
  ) 
    
);

export default Buttons;
