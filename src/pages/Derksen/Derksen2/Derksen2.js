import React from 'react';
import { Link } from 'react-router-dom';

const Derksen2 = () => {
  return (
    <div className="derksen-pages">
      <div className="derksen-text">
      <p>There goes the</p>
        <p>aluminum, the antimony, the arsenic</p>
        <Link className="derksen-link" to="/derksen3">the barium, the cadmium,</Link>
      </div>
    </div>
  );
}

export default Derksen2;
