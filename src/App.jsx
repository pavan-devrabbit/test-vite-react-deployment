// src/App.jsx
import React from "react";

function App() {
  return (
    <div>
      <h1>{import.meta.env.VITE_SITE_NAME}</h1>
      <p>API URL: {import.meta.env.VITE_BASE_URL}</p>
    </div>
  );
}

export default App;
