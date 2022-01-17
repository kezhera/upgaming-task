import styled from "styled-components";
import SVG from 'react-inlinesvg';
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
    width: 100%;
    height: 210px;
    max-width: ${ props => props.theme.containers.lg};
    margin: auto;
    background-color : ${ props => props.theme.colors.background[200]};;
`

export const TabHead = styled.ul`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.border[100]};
    padding-left: 36px;
`
export const TabHeadItem = styled.li`
    margin-right: 36px;
    min-height: 78px;
    position: relative;
    display: flex;
    align-items: center;
    &:hover{
        &::after{
            background-color: ${props => props.theme.colors.white};
        }
    }
    &::after{
        content : "";
        display: block;
        width : 100% ;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: transparent;
        transition: 0.2s;
    }
    &:last-child{
        margin-right: 0;
    }
`

export const TabTitle = styled.button`
    display: flex;
    align-items: center;
    font-family : p-semibold;
    font-size: 15px;
    color : ${props => props.theme.colors.white};
    text-transform: capitalize;
    span{
        font-family : p-reg;
        color: #dacf0c;
        margin-left: 10px;
    }
`

export const TabDropdown = styled.div`
    .dropdown-head{
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            font-size: 15px;
            font-family : p-reg;
            color : ${props => props.theme.colors.white};
            text-transform: capitalize;
        }
        img{
            width: 20px;
            height: 9px;
            object-fit: contain;
            margin-left: 5px;
        }
    }
`

export const TabSearch = styled.div`
    width: 200px;
    height: 38px;
    border: 1px solid ${props => props.theme.colors.border[100]};
    display: flex;
    align-items: center;
    input{
        width: 100%;
        height: 100%;
        background-color: transparent;
        outline : none;
        border : none;
        padding-left: 10px;
        &::placeholder{
            color : ${props => props.theme.colors.border[100]};
            font-family : p-reg;
            font-size: 13px;
            text-transform: capitalize;
        }
    }
`

export const SearchIcon = styled(SVG)`
    height: 100%;
    margin-right: 10px;
    .st0{
        fill : ${props => props.theme.colors.background[200]};
        stroke: ${props => props.theme.colors.background[300]};
    }
`

export const TabList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
`

export const TabItem = styled.li`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    &:hover{
        .cls-1{
        fill: ${props => props.theme.colors.background[100]} !important;
        transition : 0.2s;
        }
        path{
            stroke : unset !important;
            transition : 0.2s; 
        }
        .st0{
            stroke-width: 0px;
            fill : ${props => props.theme.colors.background[100]} !important;
            transition : 0.2s; 
        }
        span{
            color : ${props => props.theme.colors.background[100]};
        }
    }
    .img-frame{
        width: 38px;
        display: flex;
        justify-content: center;
        height: auto;
        margin-bottom: 10px;
    }
    span{
        text-align: center;
        width: 70px;
        font-size: 13px;
        font-family : p-reg;
        color : ${props => props.theme.colors.border[100]};
        text-transform: capitalize;
        transition : 0.2s;
    }
`

export const TabImg = styled(SVG)`
    .cls-1{
        fill: ${props => props.theme.colors.background[300]} !important;
        transition : 0.2s;
    }
    path{
        stroke : unset !important;
        transition : 0.2s; 
    }
    .st0{
        stroke-width: 0px;
        fill : ${props => props.theme.colors.background[300]} !important;
        transition : 0.2s; 
    }
`

export const TabLink = styled(Link)`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`
