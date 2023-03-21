/*global chrome*/

import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("#000000");

  function handleColorChange(event) {
    setColor(event.target.value);

    // Check if the code is running in a Chrome extension
    if (chrome) {
      if (typeof chrome !== "undefined") {
        // chrome.tabs.executeScript({
        //   code: `document.body.style.backgroundColor = '${event.target.value}'`,
        // });

        if (navigator.clipboard) {
          navigator.clipboard
            .writeText(event.target.value)
            .then(() => console.log("Color copied to clipboard"))
            .catch((error) =>
              console.error("Error copying color to clipboard:", error)
            );
        }
      }
    }
  }

  return (
    <div>
      <input type="color" value={color} onChange={handleColorChange} />
      <p>{color}</p>
    </div>
  );
}

export default App;
