import React from 'react'
import Banner from '../../components/Banner'
import Overview from '../../components/Overview'
import * as S from './styled'

const Home = () => {
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
            <Overview />
        </S.Wrapper>
    )
}

export default Home
