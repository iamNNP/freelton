import { useState } from "react";
import axios from "axios";
import { useTelegram } from "../hooks/useTelegram";
import { useNavigate } from "react-router-dom";

const AddProfile = () => {
  const { user } = useTelegram();
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    username: user?.username || "",
    languageCode: user?.languageCode || "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post("https://freelton.org/api/add-user", {
        telegramUserId: user?.telegramUserId,
        ...profileData,
      });

      navigate("/freelton");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div>
      <h1>Add Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={profileData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={profileData.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={profileData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Language Code:
          <input
            type="text"
            name="languageCode"
            value={profileData.languageCode}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProfile;