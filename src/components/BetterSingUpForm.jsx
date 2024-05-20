import { useState } from "react";
import "../styles/BetterSignupForm.css";
export default function BetterSignupForm() {
  const [formState, setFormState] = useState({ firstName: "", lastName: "" });
  const updateFormValue = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;

    setFormState((formState) => {
      formState[fieldName] = value;
      return { ...formState };
    });
  };
  return (
    <>
      <div className="BetterSignupForm">
        <div className="firstNameContainer">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            placeholder="First name"
            value={formState.firstName}
            name="firstName"
            onChange={(event) => updateFormValue(event)}
          />
        </div>
        <div className="lastNameContainer">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            placeholder="Last name"
            name="lastName"
            value={formState.lastName}
            onChange={(event) => updateFormValue(event)}
          />
        </div>
        <button>Sing up</button>
      </div>
    </>
  );
}
