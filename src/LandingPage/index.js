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
            <div id="words">
                <h1 id='h1-flow'>GAO LIAN HAO</h1>
                <p>I'm a year two student major in computer science and technology
                    currently study in The Chinese University of Hong Kong, Shenzhen
                    And this is a stupid web test for achieve basic Html JS and CSS coding
                </p>
            </div>
        </section>

        <section id='section2'>
            <div id="words">
                <h1>Have a Life</h1>
                <div id='HZX-container'>
                    <img id='HZX'src={wechat} />
                    <img id='HZX'src={wechat} />
                    <img id='HZX'src={wechat} />
                </div>
            </div>
        </section>

        <section id='section3'>
            <div id="words">
                <h1>Contance Me</h1>
                <p>+86 110</p>
                <img id='contact-wechat-image'src={wechat}/>
            </div>
        </section>
        <nav>
            <ul>
                <li> <a>Hello MotherFuckers</a></li>
            </ul>
        </nav>
        </body>
    )
}
