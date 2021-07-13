import React from 'react'
import { Navbar } from '../../components'
import './home.css'

export const Home: React.FC  = () => {
    return (
        <div className='root'>
            <Navbar/>
            <div className='title'>BLACK FRIDAY</div>
            <div className='subtitle'>É NA GAMA STORE</div>
        </div>
    )
}