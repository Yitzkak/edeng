import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from "../Navigation/navigation"

import Todos from "../Todos";
import IncomeManager from "../Income-Manager"
import Shops from '../Shops'
import Logout from '../Logout'

const App = () => (
    <Router>
        <Navigation />

        <Route path = '/todos' component = {Todos}/>
        <Route path = '/shops' component = {Shops}/>
        <Route path = '/income-manager' component = {IncomeManager}/>
        <Route path = '/logout' component = {Logout}/>

    </Router>
)

export default App;
