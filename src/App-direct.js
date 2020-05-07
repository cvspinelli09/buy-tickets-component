import React from 'react';
import './App.scss';

import HeaderBox from './components/header-box/header-box.component';
import OutwardBox from './components/outward-journey-box/outward-journey-box.component';
import ReturnBox from './components/return-journey-box/return-journey-box.component';

const App = () => {
  return (
    <div className='big-box'>
        <HeaderBox />
        <OutwardBox />
        <ReturnBox />        
    </div>
  );
}

export default App;
