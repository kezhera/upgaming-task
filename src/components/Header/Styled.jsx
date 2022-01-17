import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.header`
    width: 100%;
    padding: 0px 35px;
    height: 75px;
    background: ${ props => props.theme.colors.background[400]};
    display: flex;
    align-items: center;
    justify-content: space-between;
` 

export const Logo = styled(Link)`
    margin-right: 70px;
`

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

export const HeaderRight = styled.div``

