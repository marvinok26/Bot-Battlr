// src/components/BotCollection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BotCollection = ({ onEnlist }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8001/bots');
        setBots(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Bot Collection</h2>
      {/* Render bot cards and enlist functionality */}
    </div>
  );
};

export default BotCollection;
