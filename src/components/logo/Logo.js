import React from 'react'

import Plant from '../../image/plant.png'

import './Logo.css'


function Logo() {
    return (

        <div className='nav-bar'>
            <h1><img src={Plant} alt='logo' className='plant'/> My Veggie Week</h1>
        </div>
    )
}

export default Logo