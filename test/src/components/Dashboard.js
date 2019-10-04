import React, { useState } from "react";
import Display from "./Display";

export const addStrike = currentStrikes => {
  return currentStrikes + 1;
};

export const addBall = currentBalls => {
  return currentBalls + 1;
};

export const addHits = currentHits => {
  return currentHits + 1;
};

export const addHomeScore = currentHomeScore => {
  return currentHomeScore + 1;
};

export const addAwayScore = currentAwayScore => {
  return currentAwayScore + 1;
};

const Dashboard = () => {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [hits, setHits] = useState(0);
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);


  function playerFoul() {
    if (strike <= 1) return setStrike(addStrike(strike));
  }

 
  function playerStrike() {
    setStrike(addStrike(strike));
    if (strike === 2) {
      return setStrike(0), setBall(0);
    }
  }

 
  function playerBall() {
    setBall(addBall(ball));
    if (ball === 3) {
      return setStrike(0), setBall(0);
    }
  }

  //reset
  function playerHit() {
    setStrike(0);
    setBall(0);
    setHits(addHits(hits));
  }

  function homePoint() {
    setHomeScore(addHomeScore(homeScore));
  }

  function awayPoint() {
    setAwayScore(addAwayScore(awayScore));
  }
  return (
    <div className="dashboard">
      <Display
        homeScore={homeScore}
        awayScore={awayScore}
        hits={hits}
        ball={ball}
        strike={strike}
      />
      <div className="buttons">
        <button onClick={playerStrike}>Strike</button>
        <button onClick={playerBall}>Ball</button>
        <button onClick={playerFoul}>Foul </button>
        <button onClick={playerHit}>Hit</button>
      </div>
      <div className="buttons2">
        <button className="button" onClick={homePoint}>Home Score</button>
        <button className="button" onClick={awayPoint}>Away Score</button>
      </div>
    </div>
  );
};

export default Dashboard;