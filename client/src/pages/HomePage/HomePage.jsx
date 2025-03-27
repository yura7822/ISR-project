import React from 'react';
import './HomePage.scss';
import SideBar from '../../components/SideBar/SideBar';


export default function HomePage() {
    return (
        <div className='app'>
            <div className="bg"></div>

            <SideBar />
            
        </div>
    )
}