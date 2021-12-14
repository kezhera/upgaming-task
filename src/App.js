import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

function App() {

  return (
    <Router>
      <div className="app">
        <Home />
      </div>
    </Router>
  );
}

export default App;
