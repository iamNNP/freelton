import "./App.css";
import Tasks from "./pages/Onchain";
import Home from "./pages/Home";
import AddProfile from "./pages/Profile";
import Take from "./pages/Take";
import { useTelegramBackButton } from './hooks/useTelegramBackButton';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useTelegram } from "./hooks/useTelegram";
import { useEffect, useState } from "react";
// import { useTelegramAddUser } from "./hooks/useTelegramAddUser";
import axios from "axios";

function App() {
  const navigate = useNavigate();

  useTelegramBackButton(() => {
    navigate("/freelton");
  })
  const { user } = useTelegram();
  const [isLoading, setIsLoading] = useState(true);
  const [isUserInDatabase, setIsUserInDatabase] = useState(false);
  
  // useTelegramAddUser(user);

  useEffect(() => {
    const checkUserInDatabase = async () => {
      if (!user) return;
      try {
        const response = await axios.post(
          "https://freelton.org/api/check-user",
          { telegramUserId: user.telegramUserId },
          { headers: { "Content-Type": "application/json" } }
        );

        if (response.data.exists) {
          setIsUserInDatabase(true);
        } else {
          setIsUserInDatabase(false);
          navigate("/freelton/profile");
        }
      } catch (error) {
        console.error("Error checking user in database:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkUserInDatabase();
  }, [user, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    // <>
    //   {user ? (
    //     <Routes>
    //       <Route path="/freelton" element={<Home />} />
    //       <Route path="/freelton/profile" element={<Profile />} />
    //       <Route path="/freelton/tasks" element={<Tasks />} />
    //       <Route path="/freelton/take" element={<Take />} />
    //     </Routes>
    //   ) : (
    //     <a>Error</a>
    //   )}
    // </>
    <Routes>
      {isUserInDatabase ? (
        <>
          <Route path="/freelton" element={<Home />} />
          <Route path="/freelton" element={<Home />} />
          <Route path="/freelton/profile" element={<AddProfile />} />
          <Route path="/freelton/tasks" element={<Tasks />} />
          <Route path="/freelton/take" element={<Take />} />
        </>
      ) : (
        <Route path="/freelton/add-profile" element={<AddProfile />} />
      )}
    </Routes>
  );
}




export default App;