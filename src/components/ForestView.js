// src/components/ForestView.js
import React from "react";

const ForestView = ({ forest }) => {
  return (
    <div>
      <h2>Your Emotional Forest</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {forest.map((tree, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: tree.color,
                display: "inline-block",
              }}
            ></div>
            <p>{tree.mood}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForestView;
