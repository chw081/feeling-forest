import React, { useEffect, useRef } from "react";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ForestView = ({ forest }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy existing chart instance if any
      if (Chart.getChart(ctx)) {
        Chart.getChart(ctx).destroy();
      }

      // Calculate mood counts
      const moodCounts = forest.reduce((acc, tree) => {
        acc[tree.mood] = (acc[tree.mood] || 0) + 1;
        return acc;
      }, {});

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: Object.keys(moodCounts),
          datasets: [
            {
              label: "Mood Count",
              data: Object.values(moodCounts),
              backgroundColor: ["green", "blue", "lightgreen", "red"],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
          },
        },
      });
    }
  }, [forest]);

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
      <canvas ref={chartRef} />
    </div>
  );
};

export default ForestView;
