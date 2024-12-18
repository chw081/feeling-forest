// src/components/MoodEntry.js
import React, { useState } from "react";

const MoodEntry = ({ onSaveMood }) => {
  const [mood, setMood] = useState("");

  const moodStyles = {
    happy: { backgroundColor: "#FFD700", emoji: "😊" },
    sad: { backgroundColor: "#87CEEB", emoji: "😢" },
    calm: { backgroundColor: "#98FB98", emoji: "🌱" },
    angry: { backgroundColor: "#FF6347", emoji: "😠" },
  };

  const handleMoodSubmit = (e) => {
    e.preventDefault();
    if (mood) {
      onSaveMood(mood);
      setMood(""); // Reset the form
    }
  };

  return (
    <div
      className="mood-entry-container"
      style={{
        backgroundColor: mood ? moodStyles[mood].backgroundColor : "#f0f0f0",
      }}
    >
      <form onSubmit={handleMoodSubmit}>
        <h2>How are you feeling today?</h2>
        <label>
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="mood-select"
          >
            <option value="">--Select--</option>
            <option value="happy">😊 Happy</option>
            <option value="sad">😢 Sad</option>
            <option value="calm">🌱 Calm</option>
            <option value="angry">😠 Angry</option>
          </select>
        </label>
        <button
          type="submit"
          className="save-mood-button"
        >
          Save Mood
        </button>
      </form>
      {mood && <div className="mood-emoji">{moodStyles[mood].emoji}</div>}
    </div>
  );
};

export default MoodEntry;

