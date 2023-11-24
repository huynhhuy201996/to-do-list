import React from 'react'
import { Link } from 'react-router-dom'
import { Backward } from 'iconsax-react'

function HeaderComponent() {
    return (
        <div className='container-flucid bg-dark'>
            <div className="container">
                <Backward size="32" color="#FF8A65" />
                <div><Link to={'/Login'}>Login</Link ></div>
            </div>
        </div>

    )
}

export default HeaderComponent



