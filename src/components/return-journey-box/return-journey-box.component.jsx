import React from 'react';

import './return-journey-box.styles.scss'

const ReturnBox = () => (
  <div className="return-journey-section">
    <div className="mid-section">
      <h2 className="title">Return journey</h2>
    </div>
    <div className="open-return-container">
      <input
        type="checkbox"
        className="checkbox"
        placeholder="Open return"
      ></input>
      <label className="labels">Open return</label>
    </div>
    <form>
      <input
        type="text"
        className="input-container-outward"
        placeholder="11 March, 2020"
      ></input>
      <div className="fieldset">
        <input className="depart-input" placeholder="Depart After"></input>
        <input type="" className="clock-input" placeholder="17"></input>
        <input type="" className="clock-input" placeholder="00"></input>
      </div>
    </form>
  </div>
);

export default ReturnBox;


    