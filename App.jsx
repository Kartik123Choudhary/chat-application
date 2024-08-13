import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) { // If the User does not exist
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else { // If the user exist
    return <ChatsPage user={user} />;
  }
}

export default App;