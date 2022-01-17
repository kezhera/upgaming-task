import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardWrapper = styled.div`
    margin-top: 15px;
    height: auto;
    span{
        width: 100%;
        height: 100%;
    }
    figure{
        width: 100%;
    }
    &.sm{
        figure{
            width: 208px;
        }
    }
`

export const CardHead = styled.figure`
    position: relative;
    height: auto;
    img{
        width: 100%;
        height: auto;
    }
`

export const CardBottom = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

export const CardLink = styled(Link)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`

export const CardTitle = styled.h2`
    font-family : p-semibold;
    text-transform: capitalize;
    font-size: ${ props => props.theme.fontSizes.sm};
    color : ${ props => props.theme.colors.border[100] };
    text-align: center;
    margin-bottom: 5px;

`

export const CardCat = styled.h3`
    font-family: p-reg;
    font-size: ${ props => props.theme.fontSizes.sm};
    text-transform: capitalize;
    color : ${ props => props.theme.colors.border[100] };
    text-align: center;
` 