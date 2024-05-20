import "../styles/SignupForm.css";
import { useState } from "react";
export default function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const updateFirstName = (e) => {
    return setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    return setLastName(e.target.value);
  };
  const updateEmail = (e) => {
    return setEmail(e.target.value);
  };

  return (
    <div className="SignupForm">
      <div className="firstNameContainer">
        <label htmlFor="firstName">Enter your first name</label>
        <input
          type="text"
          id="firstName"
          placeholder="first name"
          onChange={(event) => updateFirstName(event)}
          value={firstName}
        />
      </div>
      <div className="lastNameContainer">
        <label htmlFor="lastName">Enter your last name</label>
        <input
          type="text"
          id="lastName"
          placeholder="last name"
          onChange={(event) => updateLastName(event)}
          value={lastName}
        />
      </div>
      <div className="emailContainer">
        <label htmlFor="email">Enter your E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="E-mail"
          onChange={(event) => updateEmail(event)}
          value={email}
        />
      </div>
      <button>Submit</button>
    </div>
  );
}
