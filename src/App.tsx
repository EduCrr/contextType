import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShowData } from "./pages/ShowData";
import { SignUp } from "./pages/SignUp";
import { Contexts } from "./contexts/contexts";
import { useContext } from "react";
const App = () => {
  const { state, dispatch } = useContext(Contexts);
  const handleTheme = () => {
    if (state.theme.status === "dark") {
      dispatch({
        type: "CHANGE_Status",
        payload: {
          status: "light",
        },
      });
    } else {
      dispatch({
        type: "CHANGE_Status",
        payload: {
          status: "dark",
        },
      });
    }
  };
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: state.theme.status === "light" ? "#fff" : "#222",
        }}
      >
        <h1>Titulo pg {state.theme.status}</h1>
        <button onClick={handleTheme}>cor</button>
        <hr />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/exibir" element={<ShowData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
