// src/components/BotCollection.js
import React, { useState, useEffect } from 'react';

const BotCollection = ({ onEnlist, onShowSpecs, enlistedBots }) => {
  const [bots, setBots] = useState([]);

//  

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