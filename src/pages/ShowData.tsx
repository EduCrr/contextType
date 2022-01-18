import { useContext } from "react";
import { Link } from "react-router-dom";
import { Contexts } from "../contexts/contexts";
export const ShowData = () => {
  const { state, dispatch } = useContext(Contexts);
  return (
    <>
      {state.user.name && (
        <>
          <h3>{state.user.name}</h3>
          <h3>{state.user.age}</h3>
        </>
      )}
      {!state.user.name && <h1>nada</h1>}
      <h1>ShowData</h1>
      <Link to="/">Home</Link>
    </>
  );
};
