import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import ClearTodoList from "./components/ClearTodoList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/clear" element={<ClearTodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
