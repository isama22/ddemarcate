import React from 'react';
import './EnterPage.css';
import { Link } from 'react-router-dom';

const EnterPage = () => {
  return (
    <div className="enterpage">
        <p>enter page</p>
        <Link to="/">home</Link>
    </div>
  );
}
export default EnterPage;