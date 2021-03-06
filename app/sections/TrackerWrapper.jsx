'use strict';

import React from 'react';
import Tracker from './../components/Tracker';

import RaceData from '../libs/racedata';

// A way for us to pass props to just this
export default class TrackerWrapper extends React.Component {
  render() {
    return(
      <Tracker appdata={RaceData}/>
    );
  }
}
