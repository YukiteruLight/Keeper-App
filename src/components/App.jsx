import React from "react";
import Card from "./Card";
import contacts from '../contacts'

 const createCard = (contact) => {
  return <Card key={contact.id} {...contact}/>
 };


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div>
       {contacts.map(createCard)}
      </div>
    </div>
  );
}

export default App;
