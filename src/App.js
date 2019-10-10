import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './components/Auth/Register'
import Dashboard from './components/Dashboard/Dashboard'
import Navigation from './components/Navigation/Navigation'
import SignInPage from './components/Auth/SignInPage'
import AddBook from './components/Books/AddBook'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/register' component={Register} />
          <Route path='/signin' component={SignInPage} />
          <Route path='/addbook' component={AddBook} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
