import React from "react";
import { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = {
      username: username,
      password: password,
    };
  };

  return (
    <div>
      <div>
        <label htmlFor="">Username:</label>
        <input
          type="text"
          name=""
          id=""
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">password:</label>
        <input
          type="text"
          name=""
          id=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  );
}

export default LoginPage;
