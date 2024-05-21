import React from "react";

import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

const Home = () => {
  const navigate = useNavigate();

  const handleStartChat = () => {
    // Logic to navigate to the chat page
    navigate("/chat");
  };

  return (
    <div>
      <h1>Welcome to our Chat App</h1>

      <Button variant="contained" color="primary" onClick={handleStartChat}>
        Start Chat
      </Button>
    </div>
  );
};

export default Home;
