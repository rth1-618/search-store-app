import React from "react";
import "./assets/scss/main.scss";
import { faker } from "@faker-js/faker";
import SearchBar from "./components/SearchBar/SearchBar";

const App: React.FC = () => {
  const name = faker.person.fullName();
  return (
    <div className="wrap">
      <div className="App">
        {name}
        <SearchBar />
      </div>
    </div>
  );
};

export default App;
