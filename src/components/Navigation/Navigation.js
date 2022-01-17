import React from 'react'
import { routes } from './routes'
import { Nav , NavItem } from './styled'

const Navigation = () => {
    return (
        <Nav>
            {
                routes.map( (route , key) => {
                    return (
                        <NavItem 
                            to={route.path} 
                            key={key} 
                            exact={route.exact}
                            activeClassName="active"
                        >
                            {route.name} 
                        </NavItem>
                    )
                })
            }
        </Nav>
    )
}

export default Navigation
