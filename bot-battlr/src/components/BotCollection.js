//BotCollection
import React from 'react';

const BotCollection = ({ bots, enlistBot, dischargeBot }) => {
  const handleEnlistment = (bot) => {
      enlistBot(bot);
  };

  const handleDischarge = (botId) => {
      dischargeBot(botId);
  };

  return (
      <div className='collections'>
      <h2>Bot Collection</h2>
      <div className="bot-contain">
          {bots.map(bot => (
          <div key={bot.id} className="bot-card" onClick={() => handleEnlistment(bot)}>
              <h3>{bot.name}</h3>
              <img className='avatar' src={bot.avatar_url} alt="bot" />
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <div className="bot-actions">
              <button className="delete" onClick={() => handleDischarge(bot.id)}>Release</button>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}

export default BotCollection;