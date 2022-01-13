import React from 'react'
import * as S from './styled'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = ( {size , text , banner , cardName , lazyImg  , height} ) => {

    return (
        <S.CardWrapper  className={`card ${ size }`} >
            <S.CardHead>
                {            
                    lazyImg 
                    ?
                        <LazyLoadImage 
                            src={`https://static.inpcdn.com/${banner}`} 
                            alt={cardName}
                            effect="blur"
                            height={height}
                        />
                    :
                        <img src={`https://static.inpcdn.com/${banner}`} alt="" />
                }
                <S.CardLink to={'/'}/>
            </S.CardHead>
            {text && <S.CardBottom>
                <S.CardTitle>{cardName}</S.CardTitle>
                <S.CardCat>category</S.CardCat>
            </S.CardBottom>}
        </S.CardWrapper> 
    )
}

export default Card
