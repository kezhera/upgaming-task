import React  from 'react'
import { categories } from './categories'
import * as S from './styled'

const Tab = ({filterArr , allGamesLenght}) => {

    return (
        <S.Wrapper>
            <S.TabHead>
                <S.TabHeadItem>
                    <S.TabTitle>
                        All games
                        <span>({allGamesLenght})</span>
                    </S.TabTitle>
                </S.TabHeadItem>
                <S.TabHeadItem>
                    <S.TabDropdown>
                        <div className="dropdown-head">
                            <span>All Providers</span>
                            <img src="./images/img/anchor.png" alt="" />
                        </div>
                    </S.TabDropdown>
                </S.TabHeadItem>
                <S.TabHeadItem>
                    <S.TabSearch>
                        <input type="text" placeholder='Search Games...' onChange={ (e) => filterArr(e) } />
                        <S.SearchIcon src={"./images/svg/search.svg"} />
                    </S.TabSearch>
                </S.TabHeadItem>
            </S.TabHead>
            <S.TabList>
                {
                    categories.map( ( category , key)  => {
                        return (
                            <S.TabItem key={key}>
                                <div className="img-frame">
                                    <S.TabImg src={category.src} />
                                </div>
                                <span>{category.name}</span>
                                <S.TabLink to={category.path}/>
                            </S.TabItem>
                        )
                    })
                }
                <S.TabItem>
                    <div className="img-frame">
                        <S.TabImg src={'./images/svg/plus icon.svg'} />
                    </div>
                    <span>More</span>
                    <S.TabLink to="/" />
                </S.TabItem>
            </S.TabList>
        </S.Wrapper>
    )
}

export default Tab
