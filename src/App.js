import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [userFeedback, setUserFeedback] = useState({ likes: 0, dislikes: 0 });

  const handleUpvote = () => {
    setUserFeedback({ ...userFeedback, likes: userFeedback.likes + 1 });
  };
  const handleDownvote = () => {
    setUserFeedback({
      ...userFeedback,
      dislikes: userFeedback.dislikes + 1,
    });
  };

  const likePercentage =
    userFeedback.dislikes + userFeedback.likes > 0
      ? Math.round(
          (userFeedback.likes / (userFeedback.dislikes + userFeedback.likes)) *
            100
        )
      : 0;

  return (
    <div className="App">
      <header className="App-header">
        This is Remi's App
        <div className="stats-section">
          There are {userFeedback.likes} likes and {userFeedback.dislikes}{" "}
          dislikes, where the percentage of likes is{" "}
          <span className={likePercentage > 50 ? "liked" : "disliked"}>
            {likePercentage}%
          </span>
          <div>
            <button onClick={handleUpvote}>Upvote</button>
            <button onClick={handleDownvote}>Downvote</button>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
