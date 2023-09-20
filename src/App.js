import React, { useState } from "react";

function App() {
  const [previousBill, setPreviousBill] = useState("");
  const [currentBill, setCurrentBill] = useState("");
  const [difference, setDifference] = useState(null);
  const [percentage, setPercentage] = useState(null);

  const calculateDifference = () => {
    const diff = currentBill - previousBill;
    const perc = ((diff / previousBill) * 100).toFixed(2);
    setDifference(diff);
    setPercentage(perc);
  };

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", padding: "50px" }}>
      <h1>How much have your bills gone up?</h1>
      <img
        src="https://previews.123rf.com/images/hozard/hozard1705/hozard170500076/78108680-african-male-sitting-at-kitchen-table-feeling-sad-and-depressed-about-debts-can-t-pay-off-his.jpg"
        alt="Funny Graphic"
        style={{ width: "80%", maxWidth: "300px", margin: "20px auto" }}
      />
      <div>
        <input
          type="number"
          value={previousBill}
          onChange={(e) => setPreviousBill(e.target.value)}
          placeholder="Last Bill"
          style={{ padding: "10px", marginRight: "10px", width: "40%" }}
        />
        <input
          type="number"
          value={currentBill}
          onChange={(e) => setCurrentBill(e.target.value)}
          placeholder="Current Bill"
          style={{ padding: "10px", width: "40%" }}
        />
      </div>
      <button onClick={calculateDifference} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Calculate
      </button>
      {difference !== null && (
        <div style={{ marginTop: "30px", fontSize: "20px" }}>
          <div>
            Total {difference > 0 ? "Increase" : "Decrease"}: £{difference.toFixed(2)}{" "}
            {difference > 0 ? "😭" : "🥳"}
          </div>
          <div>
            {difference > 0 ? "Increase" : "Decrease"}: {percentage}%
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
