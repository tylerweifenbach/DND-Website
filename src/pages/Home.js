import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1>Are you a new player? Or an experienced one?</h1>
      <div className="button-container">
        <Link to="/new-player" className="btn">
          New Player
        </Link>
        <Link to="/experienced-player" className="btn">
          Experienced Player
        </Link>
      </div>
    </div>
  );
};

export default Home;
