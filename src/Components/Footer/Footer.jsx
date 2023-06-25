import React from 'react'
import Github from '../../assets/Icons/Github'
import Linkedin from '../../assets/Icons/Linkedin'

const Footer = () => {
    return (
        <>
            <div style={{'marginTop':'30px'}} className="white-border">
                <div className="container">
                    <div style={{ 'margin': '50px 0','justifyContent':'space-between','alignContent':'center','alignItems':'center' }} className="flex">
                        <div className='logo-text'>SantiagoDoval. ©2023</div>
                        <div className="social-media">
                            <Github />
                            <Linkedin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer