import React from 'react'
import Button from '../../../components/Button'
import Card from '../../../components/Card/Card'
import * as S from './styled'

const Games = ( {bannerSize , showMore , slotImgs , slotName , Visible} ) => {

    return (
        <S.Wrapper>
            <S.GamesList>
                {
                    slotName.slice(0, Visible).map( ( slot , key ) => {
                        var banner = ''

                        for( let i in slotImgs){

                            if(slotImgs[i]['GameTemplateId'] === slot.GameTemplateId){
                                banner = slotImgs[i]['CdnUrl']
                                break;
                            }
                        }

                        return (
                            <S.GamesItem key={slot.GameTemplateId}>
                                <Card banner={banner} size={bannerSize} cardName={slot?.Value}/>
                            </S.GamesItem>
                        )
                    })
                }
            </S.GamesList>
            <S.GameMore>
                <Button className='yellow' text="Show More" onClick={showMore} />
            </S.GameMore>
        </S.Wrapper>
    )
}

export default Games
