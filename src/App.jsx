import React from "react";
import Header from "../src/components/Header";
import "./App.css";
import MainContent from "../src/components/MainContent";
import Sidebar from "../src/components/Sidebar";

function App() {
  return (
    <div className="container">
    <Header />
    <div className="layout">
      <div className="main-column">
        <MainContent />
      </div>
      <div className="sidebar-column">
        <Sidebar />
      </div>
    </div>
  </div>
  );
}

export default App;