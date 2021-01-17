import React from 'react';
import { Link } from 'react-router-dom';

const Derksen3 = () => {

  return (
    <div className="derksen-pages">
      <div className="derksen-text">
        <p>There goes the</p>
        <p>aluminum, the antimony, the arsenic</p>
        <p>the barium, the cadmium,</p>
        <Link className="derksen-link" to="/addderksenline">the cesium, the gadolinium</Link>
      </div>
    </div>
  );
}

export default Derksen3;
