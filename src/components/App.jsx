import React from "react";
import Card from "./Card";
import contacts from '../contacts'


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div>
        <Card {...contacts[0]} />
        <Card {...contacts[1]} />
        <Card {...contacts[2]} />
      </div>
    </div>
  );
}

export default App;
