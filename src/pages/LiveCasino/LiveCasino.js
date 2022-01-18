import React, { useState , useEffect } from 'react'
import * as S from './styled'
import Tab from './Tab'
import Games from './Games'
import Banner from '../../components/Banner'
import useAxios from '../../hooks/useAxios'
import Loading from '../../components/Loading/Loading'

const LiveCasino = () => {
    const showStep = 60 ;  
    const [Visible, setVisible] = useState(showStep)
    const [slotName, setSlotName] = useState([])
    const [slotImgs, setSlotImgs] = useState([])
    const [filtered, setFiltered] = useState([])

    const {response ,loading} = useAxios('https://betwill.com/api/game/getgametemplates/1/1/1')

    useEffect(() => {
        if( response ){
            setSlotName(response.GameTemplateNameTranslations)
            setFiltered(response.GameTemplateNameTranslations)
            setSlotImgs(response.GameTemplateImages)
        }
    },[ response ])
    
    const filterArr = (e) => {

        setFiltered(
            slotName.filter( (slot) => slot.Value.includes( capitalize(e.target.value)) )
        )

    }

    const capitalize = (str) => {
        const lower = str.toLowerCase()
        return str.charAt(0).toUpperCase() + lower.slice(1)
    }

    const showMore = (e) => {
        setVisible( Visible + showStep )
    }

    return (
        <S.Wrapper>
            { !loading ? <Banner bannerImgs={slotImgs} height={506}/> : <Loading /> }
            <Tab filterArr={filterArr} allGamesLenght={slotName.length}/>
            { !loading ? <Games bannerSize={'sm'} showMore={showMore} slotImgs={slotImgs} slotName={filtered} Visible={Visible} /> : <Loading /> }
            
        </S.Wrapper>
    )
}

export default LiveCasino
