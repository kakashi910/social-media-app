import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Home from './components/Home/Home';
import MyLikes from './components/MyLikes';
import MyBookmarks from './components/MyBookmarks';
import MyPosts from './components/MyPosts';
import MyProfile from './components/MyProfile';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/my-likes" component={MyLikes} />
          <Route path="/my-bookmarks" component={MyBookmarks} />
          <Route path="/my-posts" component={MyPosts} />
          <Route path="/my-profile" component={MyProfile} />
          <Route path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
     <PrivateRoute path="/my-likes" component={MyLikes} />
     <PrivateRoute path="/my-bookmarks" component={MyBookmarks} />
     <PrivateRoute path="/my-posts" component={MyPosts} />
     <PrivateRoute path="/my-profile" component={MyProfile} />
);
};

export default App;
