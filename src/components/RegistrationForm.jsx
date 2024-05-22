import "../styles/RegistrationForm.css";
import { useForm } from "react-hook-form";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const handleErrors = (errors) => {};
  const handleRegistration = () => {
    console.log("Submitted");
  };
  const options = {
    name: {
      required: "Name is required.",
    },
    email: {
      required: "Email is required. ",
    },
  };
  return (
    <div className="RegistrationFormContainer">
      <form
        className="RegistrationForm"
        onSubmit={handleSubmit(handleRegistration, handleErrors)}
      >
        <div className="input-container">
          <label htmlFor="name">Enter your name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            {...register("name", options.name)}
          />
          <small className="text-danger">
            {errors?.name && errors.name.message}
          </small>
        </div>
        <div className="input-container">
          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
            id="email"
            {...register("email", options.email)}
          />
          <small className="text-danger">
            {errors?.email && errors.email.message}
          </small>
        </div>
        <button>Register</button>
      </form>
    </div>
  );
}
