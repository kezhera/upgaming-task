import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    max-width: ${ props => props.theme.containers.lg};
    margin: auto;
`

export const GamesList = styled.ul`
    width: 100%;
    min-height: 236px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const GamesItem = styled.li``

export const GameMore = styled.div`
    display : flex;
    justify-content: center;
    width: 100%;
    margin: 20px 0px;
`
