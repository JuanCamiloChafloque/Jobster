import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormRow from "../components/FormRow";
import Alert from "../components/Alert";
import icon from "../assets/images/icon.png";
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Register = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const user = { name, email, password };
    if (isMember) {
      loginUser(user);
    } else {
      registerUser(user);
    }
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-title">
          <img src={icon} alt="icon" />
          <h3>{values.isMember ? "Login" : "Register"}</h3>
        </div>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            value={values.name}
            name="name"
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          value={values.email}
          name="email"
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          value={values.password}
          name="password"
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
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
