import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function setInfo(event) {
    const { value, name } = event.target;

    setContact((preCont) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preCont.lName,
          email: preCont.email,
        };
      } else if (name === "lName") {
        return {
          fName: preCont.fName,
          lName: value,
          email: preCont.email,
        };
      } else if (name === "email") {
        return {
          fName: preCont.fName,
          lName: preCont.lName,
          email: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          onChange={setInfo}
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          name="lName"
          onChange={setInfo}
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          name="email"
          onChange={setInfo}
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
