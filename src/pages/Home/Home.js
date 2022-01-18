import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Overview from '../../components/Overview'
import useAxios from '../../hooks/useAxios'
import * as S from './styled'
import Loading from '../../components/Loading/Loading'

const Home = () => {
    const [games, setGames] = useState([])
    // http://192.168.251.127:7444/test/getgames
    const {response ,loading} = useAxios('http://192.168.251.127:7444/test/getgames')
    useEffect(() => {
        if( response ){
            setGames(response)
        }
    },[ response ])

    console.log(games)

    const bannerImgs = [
        {
            CdnUrl : '16,05700e3cda05bb.webp'
        },
        {
            CdnUrl : '16,05700e3cda05bb.webp'
        },
        {
            CdnUrl : '16,057010a514caa5.webp'
        },
    ]

    return (
        <S.Wrapper>
            <Banner bannerImgs={bannerImgs} height={240} />
            { loading ? <Loading /> : <Overview /> }
        </S.Wrapper>
    )
}

export default Home
