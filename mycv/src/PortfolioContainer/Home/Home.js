import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import styles from "./Home.css"
import { ContactUs } from './contact'
export default function Home() {
    return(
        <div className='home-container'>
        <Profile/>
        <Footer/>
        <ContactUs/>
        
        </div>
    )
}