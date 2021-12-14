import React from 'react'
import * as S from './styled'

const Card = ( {size , text , banner , cardName} ) => {

    return (
        <S.CardWrapper  className={`card ${ size }`} >
            <S.CardHead>
                <img src={`https://static.inpcdn.com/${banner}`} alt="" />
                <S.CardLink to={'/'}/>
            </S.CardHead>
            <S.CardBottom className={`${ text === false && 'hide' }`}>
                <S.CardTitle>{cardName}</S.CardTitle>
                <S.CardCat>category</S.CardCat>
            </S.CardBottom>
        </S.CardWrapper> 
    )
}

export default Card
