import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import MenuPage from "./pages/MenuPage";
import DepositCompleted from "./pages/DepositCompleted";
import Community from "./pages/Community";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menupage" element={<MenuPage />} />
        <Route path="/community" element={<Community />} />
        {/* 팝업창! 필요없으면 삭제 */}
        {/* <Route path="/completed" element={<DepositCompleted />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
