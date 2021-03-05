import React from 'react'
import "./page.css"
import wechat from "../Image/wechat.jpg"

export default function Page() {
    return (
        <body>
        <nav>
            <ul>
                <li> <a class="obss-scroller" href="#section1">Who Am I</a> </li>
                <li> <a class="obss-scroller" href="#section2">About Me</a> </li>
                <li> <a class="obss-scroller" href="#section3">Contact Me</a> </li>
            </ul>
        </nav>

        <section id='section1'>
            <h1>GAO LIAN HAO</h1>
            <p>Learning Loving The Life</p>
            <p>I'm a year two student major in computer science and technology
                currently study in The Chinese University of Hong Kong, Shenzhen
            </p>
        </section>

        <section id='section2'>
            <h1>Music and Travel</h1>
            <p>Ok Temperaly test page</p>
        </section>

        <section id='section3'>
            <h1>Contance Me</h1>
            <img id='contact-wechat-image'
            src={wechat}/>
        </section>
        
        </body>
    )
}
