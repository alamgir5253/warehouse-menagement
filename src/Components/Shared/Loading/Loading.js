import React from 'react';
import './Loading.css'
const Loading = () => {
  return (
    <div>
      <div className="loading-container">
        <div className="spin"></div>
        <span>loading...</span>
      </div>
    </div>
  );
};

export default Loading;