import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    max-width: ${ props => props.theme.containers.lg};
    margin: auto;
`

export const Head = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    max-width: 1233px;
    margin: auto;
`

export const HeadGroup = styled.div``

export const PageLink = styled(Link)`
    color: #fff;
    padding: 5px;
`

export const Live = styled(Link)`
    padding: 5px 16px;
    color: ${props => props.theme.colors.background[100]};
    background: ${ props => props.theme.colors.background[400]};
    margin-right: 8px;
`

export const List = styled.ul``

export const Category = styled.ul``

export const Matchs = styled.ul``

export const Row = styled.div`
    width: 100%;
    background-color: ${ props => props.background ? props.background : 'transparent'};
    display: flex;
    justify-content: space-between;
    padding-right: 50px;
    max-width: 1233px;
    margin: auto;
    height: ${ props => props.height ? `${props.height}px` : 'auto' };
    &.match{
        .first{
            border-right: 1px solid #fff;
            padding-right: 4px;
            span{
                color: #fff;
            }
        }
        span{
            color: ${props => props.theme.colors.background[100]};
        }
    }
`

export const Grid = styled.div`
    width: ${ props => `${props.width*4}rem` };
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    margin: 8px 0px;
    p , .match-name {
        flex: 1;
        padding-right: 8px;
        font-size: 14px;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    span{
        font-size: 14px;
        width: 4rem;
        height: 100%;
        display: flex;
        align-items : center;
        justify-content: center;
        text-align: center;
        cursor: pointer;
        &:hover{
            background-color: red;
        }
    }
    h2{
        font-size: 1rem;
        text-align: center;
    }
    .match-name{
        text-align: left;
        width: unset;
        justify-content: flex-start;
        &:hover{
            background-color: transparent;
        }
    }
    &.first{
        justify-content: flex-start;
        width: 100%;
        h2{
            font-size: 1.2rem;
        }
    }
    .match-box{
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    .match-team{
        display: flex;
        justify-content: space-between;
        padding: 4px 0px;
    }
    .match-score{
        width: 1.5rem;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        font-family: p-bold;
    }
`

export const GridLeft = styled.div`
    width: 24px;
    flex-shrink: 0;
    margin-right: 8px;
    span{
        width: unset;
        font-size: 12px;
        color: #afafaf !important;
    }
`

export const GridGroup = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-around;
    flex-shrink: 0;
`