import React, { useContext } from "react";
import AuthenticationContext from "./AuthenticationContext";
import { MoodContext } from "./MoodContext";

const MESSAGES = {
  happy: "Great to see you!",
  normal: "",
  sad: "Have a good day, I guess..."
};

export default function UserGreeting() {
  const { currentMood } = useContext(MoodContext);
  const { currentUser } = useContext(AuthenticationContext);
  const message = MESSAGES[currentMood];
  return (
    <>
      <h2>Hi {currentUser ? currentUser.name : "stranger"}</h2>
      <h3>{message}</h3>
    </>
  );
}
