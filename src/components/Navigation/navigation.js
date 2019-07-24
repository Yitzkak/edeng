import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from '../elements'

const Navigation = () => (
    <div>
        <Nav>
            <Navbar>
                <ul>
                    <NavLink to = "/todos">Todo List</NavLink>
                    <NavLink to = "/shops">Shops</NavLink>
                    <NavLink to = "/income-manager">Income Manager</NavLink>
                    <NavLink to = "/logout">Log Out</NavLink>
                </ul>
            </Navbar>
        </Nav>
    </div>
) 
export default Navigation;