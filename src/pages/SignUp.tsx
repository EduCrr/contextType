import { Link } from "react-router-dom";
import { ChangeEvent, useContext, useState } from "react";
import { Contexts } from "../contexts/contexts";
export const SignUp = () => {
  const { state, dispatch } = useContext(Contexts);
  const [nome, setNome] = useState("");
  const [age, setAge] = useState(0);
  const handleName = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        name: "Tess",
      },
    });
  };
  const handleNome = (e: ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  };
  const handleAge = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(parseInt(e.target.value));
  };
  const handleSave = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        name: nome,
      },
    });
    dispatch({
      type: "CHANGE_AGE",
      payload: {
        age,
      },
    });
  };
  return (
    <>
      <input
        value={nome}
        onChange={handleNome}
        placeholder="nome"
        type="text"
      />
      <input value={age} onChange={handleAge} placeholder="idade" type="text" />
      <Link to="/exibir">Show Data</Link>
      <button onClick={handleSave}>Salve</button>
      <button onClick={handleName}>Trocar nome</button>
    </>
  );
};
