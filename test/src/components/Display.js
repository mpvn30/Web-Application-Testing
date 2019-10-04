import React from "react";

const Display = player => {
  return (
    <div>
      <h1>Score</h1>
        <div className="score">
            <h2 data-testid="home-score">
                Home: {player.homeScore}
            </h2>
            <h2 data-testid="away-score">
                Away: {player.awayScore}
            </h2>
            </div>
            <div className= "stats">
            <h2 data-testid="total-hits">Total Hits: {player.hits}</h2>

            <h2 data-testid="ball">Ball: {player.ball}</h2>

            <h2 data-testid="strike">Strike: {player.strike}</h2>
        </div>
    </div>
  );
};

export default Display;