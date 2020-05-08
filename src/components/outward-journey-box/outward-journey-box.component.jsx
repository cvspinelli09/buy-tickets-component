import React from 'react';

import './outward-journey-box.styles.scss';

const OutwardBox = () => (
  <div className="outward-journey-section">
    <div className="mid-section">
      <h2 className="title">Outward journey</h2>
    </div>
    <form method='get'>
      <input
        type="text"
        className="input-container-outward"
        placeholder="11 March, 2020"
      ></input>
      <div className="fieldset">
        <div className="input-icons">
          <i class="fa fa-sort icon"></i>
          <input className="depart-input" placeholder="Depart After"></input>
          <i class="fa fa-sort icon"></i>
          <input type="text" className="clock-input" placeholder="17"></input>
          <i class="fa fa-sort icon"></i>
          <input type="text" className="clock-input" placeholder="00"></input>
        </div>
      </div>
      <div className="return-checkbox">
        <div className="one-way-checkbox">
          <input type="radio" className="checkbox"></input>
          <label className="labels">One way</label>
        </div>
        <div className="one-way-checkbox">
          <input type="radio" className="checkbox"></input>
          <labe className="labels"> Return</labe>
        </div>
      </div>
    </form>
  </div>
);

export default OutwardBox;


;