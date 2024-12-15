// src/components/MoodEntry.js
import React, { useState } from "react";

const MoodEntry = ({ onSaveMood }) => {
  const [mood, setMood] = useState("");

  const handleMoodSubmit = (e) => {
    e.preventDefault();
    if (mood) {
      onSaveMood(mood);
      setMood(""); // Reset the form
    }
  };

  return (
    <form onSubmit={handleMoodSubmit}>
      <label>
        Select your mood:
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="">--Select--</option>
          <option value="happy">😊 Happy</option>
          <option value="sad">😢 Sad</option>
          <option value="calm">🌱 Calm</option>
          <option value="angry">😠 Angry</option>
        </select>
      </label>
      <button type="submit">Save Mood</button>
    </form>
  );
};

export default MoodEntry;
