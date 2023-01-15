import React, { useState } from "react";
import styled from "styled-components";
import FormRow from "../components/FormRow";
import Alert from "../components/Alert";
import icon from "../assets/images/icon.png";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
  showAlert: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-title">
          <img src={icon} alt="icon" />
          <h3>{values.isMember ? "Login" : "Register"}</h3>
        </div>
        {values.showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          value={values.email}
          name="email"
          onChange={handleChange}
        />
        <FormRow
          type="password"
          value={values.password}
          name="password"
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  .form-title {
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      margin-top: 25px;
      margin-left: 5px;
    }
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;

export default Register;
