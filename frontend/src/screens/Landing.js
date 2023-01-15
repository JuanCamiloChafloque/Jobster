import React from "react";
import styled from "styled-components";
import main from "../assets/images/logo.svg";
import Logo from "../components/Logo";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h3>
            Job <span>Tracking</span> App
          </h3>
          <p>
            An app that helps students and graduates keep track of their
            progress during their job hunting process by seeing their stats
            based on their pending, completed and rejected
            interviews/applications
          </p>
          <button className="btn btn-hero">Login/Register</button>
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
