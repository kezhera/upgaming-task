import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
`

export const NavItem = styled(Link)`
    color : #fff;
    margin-right: 45px;
    font-size: ${props => props.theme.fontSizes.xs}; 
    color: ${props => props.theme.colors.white};
    font-family : p-reg;
    text-transform: capitalize;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    &:last-child{
        margin-right: 0;
    }
    &:hover{
        &::after{
            background-color: ${props => props.theme.colors.background[100]};
        }
    }
    &:after{
        content : "";
        width: 100%;
        height: 3px;
        background-color: transparent;
        position: absolute;
        left: 0;
        bottom: 0;
        transition : 0.2s;
    }
` 