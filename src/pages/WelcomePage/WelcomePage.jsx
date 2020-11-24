import React from 'react';
import './WelcomePage.css'

const WelcomePage = (props) => {
    return (
        <div>
            <h1 className='greeting'>
                Welcome To Noise Tracker!
            </h1>
            <h3 className='question'>
                Has your neighbor made any noise today?
            </h3>
            <h5>
                Today is {props.date}
            </h5>
        </div>
    )
}

export default WelcomePage;
