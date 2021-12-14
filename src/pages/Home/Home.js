import React, { useState , useEffect } from 'react'
import Header from '../../components/Header'
import * as S from './styled'
import Tab from './Tab'
import Games from './Games'
import Banner from './Banner'


const Home = () => {
    const showStep = 60 ;  
    const [Visible, setVisible] = useState(showStep)
    const [slotName, setSlotName] = useState([])
    const [slotImgs, setSlotImgs] = useState([])
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        fetch('https://betwill.com/api/game/getgametemplates/1/1/1')
        .then(response => response.json())
        .then(
            data => {
                setSlotImgs(data.GameTemplateImages)
                setSlotName(data.GameTemplateNameTranslations)
                setFiltered(data.GameTemplateNameTranslations)
            }
        );
    }, [Visible])

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
            <Header />
            <Banner bannerImgs={slotImgs} />
            <Tab filterArr={filterArr} allGamesLenght={slotName.length}/>
            <Games bannerSize={'sm'} showMore={showMore} slotImgs={slotImgs} slotName={filtered} Visible={Visible} />
        </S.Wrapper>
    )
}

export default Home
