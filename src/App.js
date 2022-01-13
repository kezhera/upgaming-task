import React , { Suspense } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from './routes';
const Home = React.lazy(() => import('./pages/Home'));

function App() {

  return (
    <Router>
      <div className="app">
        {/* <Routes /> */}
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Routes />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
