import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Employees from "./components/Employees/Employees";



function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Employees />
    </div>
  );
}

export default App;
