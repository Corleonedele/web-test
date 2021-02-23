import React from 'react'
import "./Ghost.css"


export default function Ghost() {
    return (
            <div className="ghost">
                <div className="face">
                    <div className="eyes">
                        <span></span><span></span>
                    </div>

                <div className="mouth"></div>

                </div>

                <div className="hand">
                    <span></span><span></span>
                </div>
                <div className="feet">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
    )
}
