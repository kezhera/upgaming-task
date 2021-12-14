import React from 'react'
import Button from '../Button'
import Navigation from '../Navigation'
import { HeaderLeft, HeaderRight, Logo, Wrapper } from './Styled'

const Header = () => {
    return (
        <Wrapper>
            <HeaderLeft>
                <Logo>
                    <img src="./images/img/LOGO.png" alt="Betwill" />
                </Logo>
                <Navigation />
            </HeaderLeft>
            <HeaderRight>
                <Button element='a' to="/"  className="yellow" text="Join"/>
                <Button element='a' to="/" text="Log In"/>
            </HeaderRight>
        </Wrapper>
    )
}

export default Header
