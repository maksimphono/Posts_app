import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Layout from "./components/Layout.jsx";

function App() {
  return (
    <Provider store = {store}>
      <Router>
        <Switch>
          <Route path = "/" component={<Layout />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
