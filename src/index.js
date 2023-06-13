import React from "react";
import ReactDOM from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  console.log("hello");
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return <div>
    <Pizza />
    <Pizza />
    <Pizza />
  </div>
}

function Footer() {

  const currentTime = new Date().getHours();
  const openTime = 8;
  const closeTime = 18;
  const statusOpen = currentTime >= openTime && currentTime <= closeTime;
  if(statusOpen) {
    console.log("Open");
  } else {
    console.log("Close");
  }

  return (
    <footer>{new Date().toLocaleTimeString()}. We're open for order!</footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="pizza-focaccia" />
      <h1>Focaccia</h1>
      <p>Bread with italian olive oil and rosemar</p>
    </div>
  );
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
