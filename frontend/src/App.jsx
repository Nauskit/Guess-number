import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [guess, SetGuess] = useState("");
  const [message, setMessage] = useState("");

  const handleGuess = async () => {
    const res = await fetch("http://localhost:3000/guess", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ number: Number(guess) }),
    });
    const data = await res.json();
    setMessage(data.result);
  };

  const newGame = async () => {
    await fetch("http://localhost:3000/new-game");
    setMessage("Started a new game!");
    SetGuess("");
  };

  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-screen
      bg-gradient-to-br from-green-400 to-yellow-500 text-white"
      >
        <h1 className="text-3xl font-bold mb-6">Guess number</h1>
        <input
          type="number"
          value={guess}
          onChange={(e) => SetGuess(e.target.value)}
          className="p-2 rounded text-black mb-4"
          placeholder="Enter your guess"
        />

        <button
          onClick={handleGuess}
          className="px-4 py-2 bg-green-500 rounded mb-4 hover:bg-green-600"
        >
          Guess
        </button>

        <button
          onClick={newGame}
          className="px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-600"
        >
          New Game
        </button>

        <p className="mt-6 text-xl">{message}</p>
      </div>
    </>
  );
}

export default App;
