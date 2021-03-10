import React from 'react'
import "./page1.css"

export default function Page() {
    return (
        <body>
            <nav>
                <ul>
                    <li> <a href="#section1">Who Am I</a> </li>
                    <li> <a href="#section2">About Me</a> </li>
                    <li> <a href="#section3">Contact Me</a> </li>
                </ul>
            </nav>

            <div className='practice1'> 
                <h1><span>I</span><span>M</span><span>POSSIABLE</span></h1>
            </div>


            <section id='section1'>
                <div className='content'>
                    <h1>GAO LIAN HAO</h1>
                    <p>I'm a year two student major in computer science and technology
                    currently study in The Chinese University of Hong Kong, Shenzhen
                    And this is a stupid web test for achieve basic Html JS and CSS coding
                </p>
                </div>
            </section>

            <section id='section2'>
                <div>
                    <h1>LOVE MY LIFE</h1>
                </div>
            </section>

            <section id='section3'>
                <div>
                    <h1>CONTACT ME</h1>
                    <p>+86 11011910086</p>
                </div>
            </section>


        </body>

        
    )
}
