import React, { useState } from "react";
import "./style.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [user, setUser] = useState("");
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">{/*<Chat />*/}</Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}
