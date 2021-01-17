import React from 'react';
import './Dana1.css';
import { Link } from 'react-router-dom';

const Dana1 = () => {

  return (
    <div className="dana-pages">
      <div className="dana-text">
        <p>Let me speak with expressive</p>
        <Link className="link" to="/dana2">hesitation & a feeling for</Link>
      </div>
    </div>
  );
}

export default Dana1;
