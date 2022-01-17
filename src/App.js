import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';

function App() {

  return (
    <Router>
      <div className="app">
        {/* <Routes /> */}
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Routes />
      </div>
    </Router>
  );
}

export default App;
