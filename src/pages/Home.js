import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

//For now, both buttons will lead to the same page. Need to implement account functionality.
//They can either register or log in to their account, which will have all their characters saved.
const Home = () => {
  return (
    <div className="container">
      <h1>header</h1>
      <div className="button-container">
        <Link to="/new-character" className="btn">
          Register
        </Link>
        <Link to="/new-character" className="btn">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Home;
