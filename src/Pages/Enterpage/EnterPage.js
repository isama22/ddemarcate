import React from 'react';
import './EnterPage.css';
import { Link } from 'react-router-dom';

const EnterPage = () => {
  return (
    <div className="enterpage">
      <div className="enter-box">

        <p>follow a line</p>
        <div className="follow-links">
          <p>line 1</p>
          <p>line 2</p>
          <p>line 3</p>
        </div>
      </div>
    </div>
  );
}
export default EnterPage;