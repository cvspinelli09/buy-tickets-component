import React from 'react';

import './header-box.styles.scss';

const HeaderBox = () => (
  <div>
    <div className="header">
      <h2 className="header-title">Buy Tickets</h2>
    </div>
    <div className="header-box">
      <form className="header-form">
        <input
          type="geo"
          className="input-container"
          placeholder="From *"
        ></input>
        <input
          type="geo"
          className="input-container"
          placeholder="To *"
        ></input>
      </form>
    </div>
  </div>
);

export default HeaderBox;

