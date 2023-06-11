import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  console.log("hello");
  return <h1>Hello React!</h1>;
}

// react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// strictmode, rerender twice to check for error when using React API(good for development)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// react before v18
// React.render(<App />);
