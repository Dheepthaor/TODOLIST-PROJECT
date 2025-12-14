import { useReducer } from "react";
import Usagereducer from "./Usagereducer";

const initialstate = {
  value: 0,
  color: 'white'
};

function Usage() {
  const [state, dispatch] = useReducer(Usagereducer, initialstate);

  return (
    <div
      style={{
        background: state.color,  width: "400px",
        height: "250px",}}
    >
      <button onClick={() => dispatch({ type: 'change-value', payload: 1 })}>
        INCREMENT
      </button>

      <h1>{state.value}</h1>

      <button onClick={() => dispatch({ type: 'change-value', payload: -1 })}>
        DECREMENT
      </button>

      <br /><br />

      <button onClick={() => dispatch({ type: 'change-color', payload: 'green' })}>
        GREEN
      </button>

      <button onClick={() => dispatch({ type: 'change-color', payload: 'blue' })}>
        BLUE
      </button>
    </div>
  );
}

export default Usage;
