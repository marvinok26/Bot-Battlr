// src/components/BotCollection.js
import React, { useState, useEffect } from 'react';

const BotCollection = ({ onEnlist, onShowSpecs, enlistedBots }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8001/bots');
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="section-title">Bot Collection</h2>
      <div className="bot-container">
        {bots.map((bot) => (
          <div key={bot.id} className="bot-card">
            {/* ... (existing code) */}
            <div className="bot-actions">
              <button onClick={() => onEnlist(bot)}>Enlist</button>
              <button onClick={() => onShowSpecs(bot)}>Show Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
