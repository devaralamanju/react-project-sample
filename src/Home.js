import React from 'react';
import { Link } from 'react-router-dom'; // This is imported but not used. Consider using it or removing it if unnecessary.
import './index.css';

const Home = () => {
  const user = 'John'; // This 'user' is declared but not used anywhere.

  return (
    <div>
      <center>
        <h3 style={{ textAlign: "center" }}>Register Form</h3>
        <br />
        <form className="form-horizontal" autoComplete="off">
          <div className="form-group">
            <label className="control-label col-sm-2">First Name:</label>
            <div className="col-sm-4"> 
              <input type="text" className="form-control" placeholder="First Name" name="firstname" />
            </div>
          </div>
        </form>
      </center>
    </div>
  );
}

export default Home;
