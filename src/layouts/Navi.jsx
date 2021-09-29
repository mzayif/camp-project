import React, { useState, useEffect } from 'react'
import CartSummary from './CartSummary'
import { Container, Form, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { NavLink, useHistory } from 'react-router-dom'


export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory();

    function handleSignOut(params) {
        setIsAuthenticated(false);
        history.push("/")
    }

    function handleSignIn(params) {
        setIsAuthenticated(true);
    }

    return (
        <div>
            <Menu inverted fixed="top" >
                <Container>
                    <Menu.Item
                        name='home'
                        as={NavLink}
                        to="/"
                    />
                    <Menu.Item
                        name='messages'
                    />

                    <Menu.Menu position='right'>
                        <CartSummary />
                        {isAuthenticated ? <SignedIn singOut={handleSignOut} /> : <SignedOut singIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
