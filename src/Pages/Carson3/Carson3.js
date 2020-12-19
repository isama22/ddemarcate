import React from 'react';
import './Carson3.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Carson3 = () => {

  return (
    <div className="bgcolor">
      <br></br><br></br><br></br><br></br>
      <div className="main3-c">
        <div id="text3-c">
          <p>I can hear little clicks inside my dream.</p>
          <p>Night drips its silver tap</p>
          <p>down the back.</p>
          <Link id="line4-c" to="/addcarsonpost">At 4 A.M. I wake. Thinking</Link>
      </div>
    </div>
    </div >
  );
}

export default Carson3;