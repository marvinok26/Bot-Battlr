import React, { useState, useEffect } from 'react';

const BotCollection = ({ onEnlist, onShowSpecs }) => {
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
            <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} className="bot-avatar" />
            <h3 className="bot-name">{bot.name}</h3>
            <p className="bot-info">Class: {bot.bot_class}</p>
            <p className="bot-info">Health: {bot.health}</p>
            <p className="bot-info">Damage: {bot.damage}</p>
            <p className="bot-info">Armor: {bot.armor}</p>
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