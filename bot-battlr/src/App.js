// src/App.js
import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css'; // Import the CSS file

const App = () => {
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [showSpecs, setShowSpecs] = useState(null);

  // Fetch initial enlisted bots from the server
  useEffect(() => {
    const fetchEnlistedBots = async () => {
      try {
        const response = await fetch('http://localhost:3000/bots');
        const data = await response.json();
        setEnlistedBots(data);
      } catch (error) {
        console.error('Error fetching enlisted bots:', error);
      }
    };

    fetchEnlistedBots();
  }, []);

  const handleEnlist = async (bot) => {
    if (!enlistedBots.find((b) => b.id === bot.id)) {
      // Enlist the bot on the frontend
      setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, bot]);
    }
  };

  const handleRelease = async (bot) => {
    // Release the bot on the frontend
    setEnlistedBots((prevEnlistedBots) => prevEnlistedBots.filter((b) => b.id !== bot.id));

    // Release the bot on the backend
    try {
      await fetch(`http://localhost:3000/bots/${bot.id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error('Error releasing bot on the backend:', error);
    }
  };

  const handleDischarge = async (bot) => {
    // Discharge the bot on the frontend
    setEnlistedBots((prevEnlistedBots) => prevEnlistedBots.filter((b) => b.id !== bot.id));

    // Discharge the bot on the backend
    try {
      await fetch(`http://localhost:3000/bots/${bot.id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error('Error discharging bot on the backend:', error);
    }
  };

  const handleShowSpecs = (bot) => {
    setShowSpecs(bot);
  };

  const handleBackToList = () => {
    setShowSpecs(null);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Bot Battlr</h1>
      </div>
      <div className="bot-container">

      {showSpecs ? (
        <YourBotArmy army={enlistedBots} onRelease={handleRelease} onDischarge={handleDischarge} />
      ) : (
        <>
          <BotCollection onEnlist={handleEnlist} onShowSpecs={handleShowSpecs} />
          <YourBotArmy army={enlistedBots} onRelease={handleRelease} onDischarge={handleDischarge} />
        </>
      )}
    </div>
      </div>
  );
};

export default App;