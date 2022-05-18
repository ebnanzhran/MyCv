import React from 'react'
import Typical from 'react-typical'
import styles from "./Profile.css"

export default function Profile (){
    return(

        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>

                        <a href='https://www.facebook.com/profile.php?id=100014512728880'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='bnanzhran515@gmail.com'>
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href='https://www.instagram.com/ebnanzhran/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://github.com/ebnanzhran'>
                            <i className='fa fa-github'></i>
                        </a>
                        <a href='https://twitter.com/ebnanzhran'>
                            <i className='fa fa-twitter'></i>
                        </a>
                            
                        </div>
                    </div>
                  <div className='profile-details-name'>
                       <span className='primary-text'>
                           {""}
                           Hello, I'M <span className='highlighted-text'>Bnan</span>
                       </span>
                  </div>
                  <div className='profile-details-role'>
                      <span className='primary-text'>
                          {" "}
                          <h1>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "FrontEnd Devloper 💻",
                                1000,
                                "BackEnd Developer",
                                1000,
                                "Android Developer With Kotlin 📱",
                                1000,
                                "NodeJs Developer",
                                1000,
                                "ReactJs Developer 🏷️",
                                1000,
                                "Full Stack Developer ⌚",
                                1000,
                            ]}
                            />
                          </h1>
                          <span className='profile-role-tagline'>
                              Kanck of building applications with front and back end operations.
                          </span>
                      </span>
                  </div>
                  <div className='profile-options'>
                  <a href="#middle">
                      <button  className='btn primary-btn'>
                          {" "}
                          Hire Me{" "}
                      </button></a>
                      <a href='bnanzhrancv.pdf' download="bnanzhrancv.pdf">
                          <button className='btn highlighted-btn'>Get Resume</button>
                      </a>
                  </div>
                </div>
                <div className='profile-picure'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}