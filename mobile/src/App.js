import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

function App() {
  return (
    <>
      <StatusBar backgroundColor="#df4723" barStyle="light-content" />
      <Routes />
    </>
  );
}

export default App;
