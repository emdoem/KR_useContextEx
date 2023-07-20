import React, { useContext } from "react";
import AuthenticationContext from "./AuthenticationContext";

export const ALL_USERS = [{ name: "Bob" }, { name: "Alice" }];

export default function UserSelector() {
  const { onLogin, onLogout, currentUser } = useContext(AuthenticationContext);
  return (
    <div>
      {ALL_USERS.map((user) => (
        <button
          key={user.name}
          disabled={currentUser === user}
          onClick={() => onLogin(user)}
        >
          Login as {user.name}
        </button>
      ))}
      <button disabled={!currentUser} onClick={onLogout}>
        Log out
      </button>
    </div>
  );
}
