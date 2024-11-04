import "./App.css";
import Tasks from "./pages/Onchain";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useTelegramBackButton } from './hooks/useTelegramBackButton';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useTelegramAddUser } from './hooks/useTelegramAddUser';
import { useTelegram } from "./hooks/useTelegram";


function App() {
  const navigate = useNavigate();

  useTelegramBackButton(() => {
    navigate("/freelton");
  })
  useTelegramAddUser();
  return (
    <Routes>
      <Route path="/freelton" element={<Home />} />
      <Route path="/freelton/profile" element={<Profile />} />
      <Route path="/freelton/tasks" element={<Tasks />} />
    </Routes>
  );
}

export default App;