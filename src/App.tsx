import React from "react";
import "./App.scss";
import { faker } from "@faker-js/faker";
function App() {
  const name = faker.person.fullName();
  return <div className="App">{name}</div>;
}

export default App;
