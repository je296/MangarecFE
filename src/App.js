import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import ArticledetailPage from "./pages/reccomendDetail/ArticledetailPage";

function App() {
  return (
    <div className="App font-kanit">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/recommend/:id" element={<ArticledetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
