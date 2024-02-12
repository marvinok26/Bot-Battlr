import React from 'react';

const BotArmy = ({ army, onRelease, onDischarge }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} style={{ maxWidth: '100px', maxHeight: '100px' }} />
          <h3>{bot.name}</h3>
          <p>Class: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <button onClick={() => onRelease(bot)}>Release</button>
          <button onClick={() => onDischarge(bot)}>Discharge</button>
        </div>
      ))}
    </div>
  );
};

export default BotArmy;
