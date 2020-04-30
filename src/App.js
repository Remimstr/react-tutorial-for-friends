import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import logo from "./logo.svg";
import "./App.css";
import countryCodes from "./countryCodes.json";

const constructOption = (virusData, selectedCountry) => {
  return {
    title: {
      text: `Coronavirus Cases in ${selectedCountry}`,
      textAlign: "left",
      textStyle: {
        color: "white",
      },
    },
    dataset: {
      dimensions: [
        "date",
        "New Daily Cases",
        "New Daily Deaths",
        "Total Cases",
        "Total Recoveries",
      ],
      source: Object.entries(virusData).map(([key, value]) => [
        key,
        value.new_daily_cases,
        value.new_daily_deaths,
        value.total_cases,
        value.total_recoveries,
      ]),
    },
    xAxis: {
      type: "category",
      axisLine: {
        lineStyle: {
          color: "white",
        },
      },
    },
    yAxis: {
      axisLine: {
        lineStyle: {
          color: "white",
        },
      },
    },
    series: [
      {
        type: "bar",
      },
      {
        type: "bar",
      },
      {
        type: "bar",
      },
      {
        type: "bar",
      },
    ],
    legend: {
      left: "center",
      padding: 30,
      textStyle: {
        color: "white",
      },
      selected: {
        "New Daily Cases": true,
        "New Daily Deaths": false,
        "Total Cases": false,
        "Total Recoveries": false,
      },
    },
    tooltip: {
      textStyle: {
        color: "white",
      },
      trigger: "axis",
    },
    dataZoom: [
      {
        type: "inside",
      },
    ],
  };
};

function App() {
  const [userFeedback, setUserFeedback] = useState({ likes: 0, dislikes: 0 });
  const [selectedCountry, setSelectedCountry] = useState("CA");
  const [virusData, setVirusData] = useState([]);

  useEffect(() => {
    const fetchVirusData = async () => {
      const response = await fetch(
        `https://api.thevirustracker.com/free-api?countryTimeline=${selectedCountry}`
      );
      const data = await response.json();
      if (data.hasOwnProperty("timelineitems")) {
        setVirusData(data.timelineitems[0]);
      } else {
        setVirusData([]);
      }
    };
    fetchVirusData();
  }, [selectedCountry]);

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
        <span>
          Select a Country:
          <select
            className="country-select"
            defaultValue="CA"
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {countryCodes.map((country, index) => (
              <option key={index} value={country.Code}>
                {country.Name}
              </option>
            ))}
          </select>
        </span>
        <div className="chart-container">
          <ReactEcharts
            option={constructOption(
              virusData,
              countryCodes.filter(
                (country) => country.Code === selectedCountry
              )[0].Name
            )}
          />
        </div>
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
