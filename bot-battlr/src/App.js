
import React,{useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const enlistBot = (bot) => {
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, bot]);
    }
  };

  const releaseBot = (botId) => {
    setEnlistedBots((prevEnlistedBots) =>
      prevEnlistedBots.filter((bot) => bot.id !== botId)
    );
  };

  const handleDischarge = (botId) => {
    const updatedBots = bots.filter((bot) => bot.id !== botId);
    setBots(updatedBots);
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete bot from backend");
        }
      })
      .catch((error) => {
        console.error("Error deleting bot from backend:", error);
      });
  };

  return (
    <Router>
      <div className="container">
        <h1>Bot Battlr</h1>
        <small>click to view Your Army:</small>
        <Link to="/your-bot-army">Your Bot Army</Link>
        <Routes>
          <Route
            path="/"
            element={
              <BotCollection
                bots={bots}
                enlistBot={enlistBot}
                dischargeBot={handleDischarge}
              />
            }
          />
          <Route
          
            path="/your-bot-army"
            element={
              <YourBotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;