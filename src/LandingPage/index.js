import React from 'react'
import "./page.css"
import wechat from "../Image/wechat.jpg"
import Ghost from "../Ghost/index.js"
import HZX1 from "../Image/hzx-1.jpg"
import HZX2 from "../Image/hzx-2.jpg"
import HZX3 from "../Image/hzx-3.jpg"

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
            <h1>Have a Life</h1>
            <div id='HZX-container'>
                <img id='HZX'src={HZX1} />
                <img id='HZX'src={HZX2} />
                <img id='HZX'src={HZX3} />
            </div>
        </section>

        <section id='section3'>
            <h1>Contance Me</h1>
            <p>+86 110</p>
            <img id='contact-wechat-image'src={wechat}/>
        </section>
        <nav>
            <ul>
                <li> <a>Hello MotherFuckers</a></li>
            </ul>
        </nav>
        </body>
    )
}
