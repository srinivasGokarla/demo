
import React from 'react';
import { useLocation } from 'react-router-dom';
const Greeting = () => {
    const location = useLocation();
    const userMessage = location.state?.userMessage || 'No message provided';
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hello, {userMessage}</h1>
    </div>
  );

}

export default Greeting
