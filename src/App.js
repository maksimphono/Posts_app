import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Navbar from "./app/Navbar.jsx";
import PostsList from './features/posts/PostsList';
import { Provider } from 'react-redux';
import store from "./app/store.js";
import AddPostForm from './features/posts/AddPostForm';
import SinglePost from './features/posts/SinglePost';
import EditPostForm from "./features/posts/EditPostForm.jsx";

function App() {
  return (
    <Provider store = {store}>
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path = "/" render = {() => (
              <>
                <AddPostForm />
                <PostsList />
              </>
            )} />
            <Route
              exact
              path = "/posts/:postId"
              component = {SinglePost}
            />
            <Route
              exact
              path = "/editPost/:postId"
              component = {EditPostForm}
            />
            <Redirect to = "/" />
          </Switch>  
        </div>
      </Router>
    </Provider>
  );
}

export default App;
