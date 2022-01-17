import React from 'react'
import * as S from './Styled'
import SVG from 'react-inlinesvg'
const Overview = () => {
    return (
        <S.Wrapper>
            <S.Head>
                <S.HeadGroup>
                    <S.Live>Live</S.Live>
                    <S.PageLink to="/">  
                        <span className="text">106 events</span>
                    </S.PageLink>
                </S.HeadGroup>

                <S.HeadGroup>
                    <S.PageLink to="/">  
                        <span className="text">Upcoming/Today</span>
                    </S.PageLink>
                </S.HeadGroup>
            </S.Head>

            <S.List>
                <S.Row height={60}>
                    <S.Grid className='first'>
                        <S.GridLeft>
                            <img src="soccer" alt="" />
                        </S.GridLeft>
                        <h2>Soccer</h2>
                    </S.Grid>

                    <S.GridGroup>
                        <S.Grid width={3}>
                            <h2>Match result</h2>
                        </S.Grid>

                        <S.Grid width={2}>
                            <h2>Total</h2>
                        </S.Grid>

                        <S.Grid width={3}>
                            <h2>Next goal</h2>
                        </S.Grid>
                    </S.GridGroup>
                    
                </S.Row>

                <S.Category>
                    <S.Row background='#636363'>
                        <S.Grid className='first'>
                            <S.GridLeft>
                                <img src="soccer" alt="" />
                            </S.GridLeft>
                            <p>International Clubs - Club Friendly Games</p>
                        </S.Grid>

                        <S.GridGroup>
                            <S.Grid width={3}>
                                <span>1</span>
                                <span>X</span>
                                <span>2</span>
                            </S.Grid>

                            <S.Grid width={2}>
                                <span>Over</span>
                                <span>Under</span>
                            </S.Grid>

                            <S.Grid width={3}>
                                <span>1</span>
                                <span>No goal</span>
                                <span>2</span>
                            </S.Grid>
                        </S.GridGroup>

                    </S.Row>

                    <S.Matchs>

                        <S.Row className='match'>
                            <S.Grid className='first'>
                                <S.GridLeft>
                                    <span>105`</span>
                                </S.GridLeft>

                                <div className="match-box">

                                    <div className="match-team">
                                        <span className="match-name">Olympique Lyonnais (Walker)</span>
                                        <span className="match-score">117</span>
                                    </div>

                                    <div className="match-team">
                                        <span className="match-name">Burhaniye Belediyespor W.</span>
                                        <span className="match-score">78</span>
                                    </div>

                                </div>

                            </S.Grid>

                            <S.GridGroup>
                                <S.Grid width={3}>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                </S.Grid>

                                <S.Grid width={2}>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                </S.Grid>

                                <S.Grid width={3}>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                </S.Grid>

                            </S.GridGroup>
                        </S.Row>

                        <S.Row className='match'>
                            <S.Grid className='first'>
                                <S.GridLeft>
                                    <span>105`</span>
                                </S.GridLeft>

                                <div className="match-box">

                                    <div className="match-team">
                                        <span className="match-name">Olympique Lyonnais (Walker)</span>
                                        <span className="match-score">117</span>
                                    </div>

                                    <div className="match-team">
                                        <span className="match-name">Burhaniye Belediyespor W.</span>
                                        <span className="match-score">78</span>
                                    </div>

                                </div>

                            </S.Grid>

                            <S.GridGroup>
                                <S.Grid width={3}>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                </S.Grid>

                                <S.Grid width={2}>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                </S.Grid>

                                <S.Grid width={3}>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                </S.Grid>

                            </S.GridGroup>
                        </S.Row>

                        <S.Row className='match'>
                            <S.Grid className='first'>
                                <S.GridLeft>
                                    <span>105`</span>
                                </S.GridLeft>

                                <div className="match-box">

                                    <div className="match-team">
                                        <span className="match-name">Olympique Lyonnais (Walker)</span>
                                        <span className="match-score">117</span>
                                    </div>

                                    <div className="match-team">
                                        <span className="match-name">Burhaniye Belediyespor W.</span>
                                        <span className="match-score">78</span>
                                    </div>

                                </div>

                            </S.Grid>

                            <S.GridGroup>
                                <S.Grid width={3}>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                </S.Grid>

                                <S.Grid width={2}>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                </S.Grid>

                                <S.Grid width={3}>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                </S.Grid>

                            </S.GridGroup>
                        </S.Row>

                        <S.Row className='match'>
                            <S.Grid className='first'>
                                <S.GridLeft>
                                    <span>105`</span>
                                </S.GridLeft>

                                <div className="match-box">

                                    <div className="match-team">
                                        <span className="match-name">Olympique Lyonnais (Walker)</span>
                                        <span className="match-score">117</span>
                                    </div>

                                    <div className="match-team">
                                        <span className="match-name">Burhaniye Belediyespor W.</span>
                                        <span className="match-score">78</span>
                                    </div>

                                </div>

                            </S.Grid>

                            <S.GridGroup>
                                <S.Grid width={3}>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                </S.Grid>

                                <S.Grid width={2}>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                </S.Grid>

                                <S.Grid width={3}>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                    <span className='span'>3.80</span>
                                </S.Grid>

                            </S.GridGroup>
                        </S.Row>

                    </S.Matchs>

                </S.Category>

            </S.List>
        </S.Wrapper>
    )
}

export default Overview
