import {Route, Switch, Redirect} from 'react-router-dom'

import CheckingRoute from './checkingRoute'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Jobs from './components/Jobs'
import JobItemDetails from './components/JobItemDetails'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <CheckingRoute exact path="/Job-Searching-Application" component={Home} />
    <CheckingRoute exact path="/jobs" component={Jobs} />
    <CheckingRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
