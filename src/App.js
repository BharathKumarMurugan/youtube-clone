import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Recommendations from "./components/Recommendations";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="app_page">
                <Sidebar />
                <Recommendations />
            </div>
        </div>
    );
}

export default App;
