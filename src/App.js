import React from "react";
import "./style.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Router>
          <Switch>
            <Sidebar />
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">{/*char*/}</Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
