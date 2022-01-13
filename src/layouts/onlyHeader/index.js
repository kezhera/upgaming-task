import React from 'react'
import Header from '../../components/Header'

const OnlyHeaderLayout  = ( props ) => {
    
    return (
        <>
            <Header />
            {
                props.children
            }
        </>
    )
}

export default OnlyHeaderLayout
