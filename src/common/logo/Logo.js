import React from 'react'

import Plant from '../../image/plant.png'

import './Logo.css'


function Logo({initialPage}) {
    return (

        <div className='logo'>
            <h1 onClick={initialPage}><img src={Plant} alt='logo' className='plant'/> My Veggie Week</h1>
        </div>
    )
}

export default Logo