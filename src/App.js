import './index.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from './components/home';
import { EmailForm } from './components/emailForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/send_email">
            <EmailForm />
          </Route>
        </Switch>
      </Router>
      <div className="triangle"></div>
    </div>
  );
}

export default App;
