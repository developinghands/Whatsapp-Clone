import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";

export default function Login() {
  const singIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => console.log(result))
      .catch(error => alert(error));
  };
  return (
    <div className="login">
      <div className="login_container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" />
        <div className="login_text">
          <h1>Sing in to WhatsApp</h1>
        </div>
        <Button onClick={singIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}
