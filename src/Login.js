import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";

export default function Login() {
  return (
    <div className="login">
      <div className="login_container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" />
        <div className="login_text">
          <h1>Sing in to WhatsApp</h1>
        </div>
        <Button>Sign In with Google</Button>
      </div>
    </div>
  );
}
