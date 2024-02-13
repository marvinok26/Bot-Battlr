// src/components/YourBotArmy.js
import React from 'react';

const BotArmy = ({ army, onRelease, onEnlist }) => {
  return (
    <div>
      <h2 className="your-bot-army "> Your Bot Army</h2>
      <div className="bot-container">
        {army.map((bot) => (
          <div key={bot.id} className="bot-card">
            <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} className="bot-avatar" />
            <h3 className="bot-name">{bot.name}</h3>
            <p className="bot-info">Class: {bot.bot_class}</p>
            <p className="bot-info">Health: {bot.health}</p>
            <p className="bot-info">Damage: {bot.damage}</p>
            <p className="bot-info">Armor: {bot.armor}</p>
            <div className="bot-actions">
              <button onClick={() => onRelease(bot)}>Release</button>
              <button onClick={() => onEnlist(bot)}>Enlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotArmy;