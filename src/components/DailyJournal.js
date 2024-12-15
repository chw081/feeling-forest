// src/components/DailyJournal.js
import React, { useState } from "react";

const DailyJournal = ({ onSaveJournal }) => {
  const [entry, setEntry] = useState("");

  const handleJournalSubmit = (e) => {
    e.preventDefault();
    if (entry.trim()) {
      onSaveJournal(entry);
      setEntry(""); // Reset the form
    }
  };

  return (
    <form onSubmit={handleJournalSubmit}>
      <label>
        Write about your day:
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
