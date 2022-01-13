import React from 'react'
import Header from '../../components/Header'

const DefaultLayout  = ( props ) => {
    
    return (
        <>
            <Header />
            {
                props.children
            }
        </>
    )
}

export default DefaultLayout
