import React from 'react';
import './Derksen1.css';
import { Link } from 'react-router-dom';

const Derksen1 = () => {
  return (
    <div className="derksen-pages">
      <div className="derksen-text">
        <p>There goes the</p>
        <Link className="derksen-link" to="/derksen2">aluminum, the antimony, the arsenic</Link>
      </div>
    </div>
  );
}

export default Derksen1;