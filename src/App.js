import React from 'react';
import axios from 'axios';

function App() {
  
  axios.get('https://gist.githubusercontent.com/calvez/56bec47cb9c97d9999574adc65ef5368/raw/51f01cb2a160748d87dd40eae7d3785272a87355/all.json',
  );

  return (
    <div>
      <h1>Azopus</h1>
    </div>
  );
}

export default App;
