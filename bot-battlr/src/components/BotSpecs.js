// src/components/BotSpecs.js
import React from 'react';

const BotSpecs = ({ bot, onEnlist, onBack }) => {
  return (
    <div>
      <h2>{bot.name} Details</h2>
      <p>Class: {bot.class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={() => onEnlist(bot)}>Enlist</button>
      <button onClick={onBack}>Back to List</button>
    </div>
  );
};

export default BotSpecs;