import React from "react";

const AuthenticationContext = React.createContext({
  currentUser: null,
  onLogin: () => {},
  onLogout: () => {}
});

export default AuthenticationContext;
