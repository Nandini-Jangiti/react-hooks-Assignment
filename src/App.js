import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';


export const UserContext = createContext();

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <Router>
        <div>
          <Route path="/" exact component={LoginPage} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          
        </div>
      </Router>
    </UserContext.Provider>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLoggedIn()
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
);

const isLoggedIn = () => {
  // Check if user is logged in (you can implement your own logic here)
  return true; // For demonstration, always assume the user is logged in
};

export default App;
