import { Link } from "react-router-dom";
import styled , { css }  from "styled-components";

const baseInputStyles = css`
    padding: 12px 20px 14px;
    font-family: p-bold;
    font-size: ${props => props.theme.fontSizes.sm}; 
    margin-right: 15px;
    color: ${props => props.theme.colors.white};
    text-transform: capitalize;
    border-radius : 2px; 
    &.yellow{
        background-color: ${props => props.theme.colors.background[100]};
        color: ${props => props.theme.colors.text[100]};
    }
    &:last-child{
        margin-right: 0;
    }
`;

export const StyledBtn = styled.button`
    ${baseInputStyles}
`
export const StyledLink = styled(Link)`
    ${baseInputStyles}
`