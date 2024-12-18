import React from "react";

const JournalArchive = ({ journals, setJournals }) => {
  const deleteEntry = (index) => {
    const updatedJournals = journals.filter((_, i) => i !== index);
    setJournals(updatedJournals);
  };

  return (
    <div>
      <h2>Journal Archive</h2>
      {journals.length > 0 ? (
        journals.map((entry, index) => (
          <div key={index}>
            <p>{entry}</p>
            <button onClick={() => deleteEntry(index)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No journal entries yet.</p>
      )}
    </div>
  );
};

export default JournalArchive;
