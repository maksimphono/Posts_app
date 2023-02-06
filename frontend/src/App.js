import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Provider } from 'react-redux';
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage";
import store from "./store.js";


function App() {
  return (
    <Provider store = {store}>
      <Router>
        <Routes>
          <Route path = "/" element={<Layout />}>
            <Route index element = {<HomePage/>} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
