import React, { useState , useEffect } from 'react'
import * as S from './styled'
import Tab from './Tab'
import Games from './Games'
import Banner from './Banner'
import axios from 'axios'

const Home = () => {
    const showStep = 60 ;  
    const [Visible, setVisible] = useState(showStep)
    const [slotName, setSlotName] = useState([])
    const [slotImgs, setSlotImgs] = useState([])
    const [filtered, setFiltered] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios({
            method: 'GET',
            url: 'https://betwill.com/api/game/getgametemplates/1/1/1',
        }).then( res => {  
            console.log(res)
            setLoading(false)
            setSlotImgs(res.data.GameTemplateImages)
            setSlotName(res.data.GameTemplateNameTranslations)
            setFiltered(res.data.GameTemplateNameTranslations)
        })
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

    // return loading 
    // ?
    //     <h2>Loading....</h2>
       
    // :
    //     <S.Wrapper>
    //         <Header />
    //         <Banner bannerImgs={slotImgs} />
    //         <Tab filterArr={filterArr} allGamesLenght={slotName.length}/>
    //         <Games bannerSize={'sm'} showMore={showMore} slotImgs={slotImgs} slotName={filtered} Visible={Visible} />
    //     </S.Wrapper>
     
    return (
        <S.Wrapper>
            <Banner bannerImgs={slotImgs} />
            <Tab filterArr={filterArr} allGamesLenght={slotName.length}/>
            <Games bannerSize={'sm'} showMore={showMore} slotImgs={slotImgs} slotName={filtered} Visible={Visible} />
        </S.Wrapper>
    )
}

export default Home
