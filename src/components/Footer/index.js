import React from 'react'
import './style.css'

function Footer() {
    const date = new Date().getFullYear()

    return (
        <div className="footer">
            <h2 className="footer-txt">© Siddhant {date}</h2>
        </div>
    )
}

export default Footer
