import React from 'react'
import styles from "./Footer.css"

export default function Footer(){
    return(
        <div className='footer-container'>
         <div className='footer-parent'>
             <img src={require ('../../../assest/Home/shape-bg.png')} alt='no internet connections'/>
         </div>
        </div>
    )
}