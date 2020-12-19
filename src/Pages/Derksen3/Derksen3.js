import React from 'react';
import './Derksen3.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const Derksen3 = () => {

  return (
    <div id="derksen-3-main-div">
      <div id="derksen-3-text-div">
      <p>There goes the</p>
        <p>aluminum, the antimony, the arsenic</p>
        <p>the barium, the cadmium,</p>
        <Link className="derksen-link" to="/addderksenpost">the cesium, the gadolinium</Link>
      </div>
    </div>
  );
}

export default Derksen3;