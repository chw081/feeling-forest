// src/components/DailyJournal.js
import React, { useState } from "react";

const DailyJournal = ({ onSaveJournal, recentMood }) => {
  const prompts = {
    happy: "What made you happy today?",
    sad: "What was troubling you?",
    calm: "What helped you stay calm?",
    angry: "What triggered your anger and how did you cope?",
  };

  const [entry, setEntry] = useState("");

  const handleJournalSubmit = (e) => {
    e.preventDefault();
    if (entry.trim()) {
      onSaveJournal(entry);
      setEntry("");
    }
  };

  return (
    <form onSubmit={handleJournalSubmit}>
      <label>
        {recentMood ? prompts[recentMood] : "Write about your day:"}
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          rows="5"
        ></textarea>
      </label>
      <button type="submit">Save Entry</button>
    </form>
  );
};

export default DailyJournal;

