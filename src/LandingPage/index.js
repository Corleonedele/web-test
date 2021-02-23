import React from 'react'
import "./page.css"


export default function Page() {
    return (
        <body>
        <nav>
            <ul>
                <li> <a class="obss-scroller" href="#section1">Who Am I</a> </li>
                <li> <a class="obss-scroller" href="#section2">About Me</a> </li>
                {/* <li> <a class="obss-scroller" href="#section3">Testimonails</a> </li> */}
                {/* <li> <a class="obss-scroller" href="#section4">Our Teams</a> </li> */}
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
            <p>WeChat QQ Github Twitter Email Instangram</p>
        </section>

        {/* <section id='section4'>
            <h1>My Life</h1>
            <p>Welcome To Look The Guide For The Universe Roaming</p>
        </section>

        <section id='section5'>
            <h1>My Life</h1>
            <p>Welcome To Look The Guide For The Universe Roaming</p>
        </section> */}

        <script src="https://libs.baidu.com/jquery/1.10.2/jquery.min.js"></script>
        <script src="https://code.5g-o.com/wp-content/uploads/2021/01/init-scroller.js"></script> 

        {/* script>
        $(document).ready(function(){
            $("section").height($(window).height());
            onWindowRezise();
            $(".obss-scroller").smoothScroller({
                duration: 1000,
                activeClass: "active"
             });
            });
            var onWindowRezise = function() {
            $(window).resize(function(evt){
                $("section").height($(window).height());
            });
        }    
        </script> */}
        </body>
    )
}
