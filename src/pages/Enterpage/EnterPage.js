import React from 'react';
import './EnterPage.css';
import { Link } from 'react-router-dom';
// import Dana1 from '../../Pages/Dana/Dana1/Dana1';

const EnterPage = () => {
  return (
    <div className="enterpage">
      <div className="enter-box">
        <img src="https://i.postimg.cc/VsW-Sfq2b/Screen-Shot-2020-12-18-at-7-47-18-PM.png" alt="" className="follow-img"/>
        <div className="follow-links">
          <Link className="enter-link" to="/dana1">Let me speak with expressive</Link>
          <Link className="enter-link" to="/carson1">I can hear little clicks inside my dream.</Link>
          <Link className="enter-link" to="/derksen1">There goes the</Link>
        </div>
      </div>
    </div>
  );
}
export default EnterPage;
