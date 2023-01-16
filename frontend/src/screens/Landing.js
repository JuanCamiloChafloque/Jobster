import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import main from "../assets/images/logo.svg";
import logo from "../assets/images/icon.png";

const Landing = () => {
  return (
    <Wrapper>
      <nav></nav>
      <div className="container page">
        <div className="info">
          <div>
            <img src={logo} alt="logo" />
            <h3>
              <span>Jobster</span> - A Job Tracking App
            </h3>
          </div>
          <p>
            An app that helps students and graduates keep track of their
            progress during their job hunting process by seeing their stats
            based on their pending, completed and rejected
            interviews/applications
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="main" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    h3 {
      color: var(--primary-500);
      margin-left: 5px;
      margin-top: 25px;
    }
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h3 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
