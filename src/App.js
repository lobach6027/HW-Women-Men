import { Route, Routes } from "react-router-dom";
import Form from "./compotents/Form/Form";
import Header from "./compotents/Header/Header";
import Main from "./compotents/Main/Main";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<p>1</p>} axact path="/about" />
        <Route element={<p>1</p>} path="/our women" />
        <Route element={<p>1</p>} path="/our man" />
        <Route element={<Form />} path="/join" />
      </Routes>
    </div>
  );
}

export default App;
