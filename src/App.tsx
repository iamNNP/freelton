import "./App.css";
import Tasks from "./pages/Onchain";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Take from "./pages/Take";
import { useTelegramBackButton } from './hooks/useTelegramBackButton';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useTelegram } from "./hooks/useTelegram";
// import { useTelegramAddUser } from "./hooks/useTelegramAddUser";


function App() {
  const navigate = useNavigate();

  useTelegramBackButton(() => {
    navigate("/freelton");
  })
  const { user } = useTelegram();
  
  // useTelegramAddUser({ user });
  console.log("App.tsx: ", user);

  return (
    <>
      {user ? (
        <Routes>
          <Route path="/freelton" element={<Home />} />
          <Route path="/freelton/profile" element={<Profile />} />
          <Route path="/freelton/tasks" element={<Tasks />} />
          <Route path="/freelton/take" element={<Take />} />
        </Routes>
      ) : (
        <a>Error</a>
      )}
    </>
  );
}
export default App;