import { Route, Routes } from "react-router-dom";
import Form from "./compotents/Form/Form";
import Header from "./compotents/Header/Header";
import Main from "./compotents/Main/Main";
import Man  from "./pages/Man/Man";
import Women from "./pages/Women/Women";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<p>1</p>} axact path="/about" />
        <Route element={<Women/>} path="/ourwomen" />
        <Route element={<Man />} path="/ourman" />
        <Route element={<Form />} path="/join" />
      </Routes>
    </div>
  );
}

export default App;
