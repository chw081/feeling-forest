// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import MoodEntry from "./components/MoodEntry";
import ForestView from "./components/ForestView";
import DailyJournal from "./components/DailyJournal";

const App = () => {
  const [forest, setForest] = useState([]);
  const [journals, setJournals] = useState([]);

  const saveMood = (mood) => {
    const treeColor =
      mood === "happy"
        ? "green"
        : mood === "sad"
        ? "blue"
        : mood === "calm"
        ? "lightgreen"
        : "red";
    setForest([...forest, { mood, color: treeColor }]);
  };

  const saveJournal = (entry) => {
    setJournals([...journals, entry]);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/forest">Forest</Link> |{" "}
        <Link to="/journal">Journal</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MoodEntry onSaveMood={saveMood} />} />
        <Route path="/forest" element={<ForestView forest={forest} />} />
        <Route path="/journal" element={<DailyJournal onSaveJournal={saveJournal} />} />
      </Routes>
    </Router>
  );
};

export default App;
