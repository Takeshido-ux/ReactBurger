import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/app-router/app-router";
import AppHeader from "./components/app-header/app-header";
import Modal from "./components/modal/modal";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader />
        <AppRouter />
        <Modal />
      </div>
    </BrowserRouter>
  );
}

export default App;
