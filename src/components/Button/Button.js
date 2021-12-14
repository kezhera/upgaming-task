import React from 'react'
import { StyledBtn, StyledLink } from './styled'

const Button = ( props ) => {
    
    if(props.element === 'a'){
        return ( <StyledLink to={props.to} className={props.className}>{props.text}</StyledLink> )
    }else{
        return ( <StyledBtn onClick={props.onClick} className={props.className}>{props.text}</StyledBtn> )
    }
}

export default Button
