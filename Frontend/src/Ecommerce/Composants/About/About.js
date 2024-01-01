import React from 'react';

import './about.css'
import { Header } from '../Header/Header';
import { Footer } from '../footer/footer';

const About = () => {
    return (
        <>

            <div style={{ boxShadow: "0 4px 6px 0 rgba(0,0,0,0.2)" }}>
                <Header />
            </div>

            <div  id="about" >

                <div className='leftAbout'>
                    <h1 style={{fontSize:"47px"}}>About us</h1>
                    <p >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, culpa! Asperiores labore amet nemo ullam odit atque adipisci, hic, aliquid animi fugiat praesentium quidem. Perspiciatis, expedita!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, culpa! Asperiores labore amet nemo ullam odit atque adipisci labore amet nemo ullam odit atque adipisci  odit atque adipisci
                    </p>
                    <br />
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, culpa! Asperiores labore amet nemo ullam odit atque adipisci
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, culpa! Asperiores labore amet nemo ullam odit atque adipisci 
                    </p>
                </div>

                <div id='imgAbout'>

                 <img src='images/Cover2.jpg' width="310px" />
                </div>
            </div>

            <div id='sectionInfos' >
                <div>
                    <h3 >01 TEST</h3>
                    <p>
                    Our clothing is made from high-quality materials, ensuring durability and long-lasting wear.
                    </p>
                </div>
                <div>
                    <h3 >01 TEST</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing Totam, culpa! Asperiores labore 

                    </p>
                </div>
                <div>
                    <h3 >01 TEST</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing Totam, culpa! Asperiores labore 
</p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default About;
