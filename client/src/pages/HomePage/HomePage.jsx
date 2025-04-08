import React from 'react';
import './HomePage.scss';
import SideBar from '../../components/SideBar/SideBar';
import Navbar from '../../components/Navbar/Navbar';
import NewsPromt from '../../components/NewsCard/NewsPromt';


export default function HomePage() {
    return (
        <div className='app'>
            <Navbar />
            <div className="bg"></div>
            <div className='contant'> 
                <SideBar />
                <NewsPromt />
            </div>
            
        </div>
    )
}