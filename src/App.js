import React from 'react';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Signup from './component/Signup';
import Login from './component/Login';
import Profile from './component/Profile';

function App() {
  // After a successful login, you can redirect like this:
const history = useHistory();
history.push('/profile');

// After logout:
history.push('/login');
  // Add authentication logic here
  // In your login route handler
const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
res.json({ token });

// In your middleware for protected routes
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' });
    req.userId = decoded.userId;
    next();
  });
};

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
           {/* <Redirect from="/" to="/login" />  */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
