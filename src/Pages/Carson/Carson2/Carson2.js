import React from 'react';
import './Carson2.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Carson2 = () => {

  return (
    <div className="carson-pages">
      <div id="carson-text">
      <p>I can hear little clicks inside my dream.</p>
        <p>Night drips its silver tap</p>
        <Link className="link" to="/carson3">down the back.</Link>
      </div>
    </div>
  );
}

export default Carson2;