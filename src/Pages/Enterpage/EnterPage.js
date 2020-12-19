import React from 'react';
import './EnterPage.css';
import { Link } from 'react-router-dom';
// import Dana1 from '../../Pages/Dana/Dana1/Dana1';

const EnterPage = () => {
  return (
    <div className="enterpage">
      <div className="enter-box">

        <img src="https://i.postimg.cc/wB9KwWDP/output-onlinepngtools-9.png" alt="" className="follow-img"/>
        <div className="follow-links">
          <Link to="/dana1">line 1</Link>
          <Link to="/carson1">line2</Link>
          <Link to="/derksen1">line2</Link>
        </div>
      </div>
    </div>
  );
}
export default EnterPage;