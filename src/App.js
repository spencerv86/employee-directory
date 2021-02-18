import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Employees from "./components/Employees/Employees";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Employees />
    </div>
  );
}

export default App;
