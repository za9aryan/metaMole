import React from 'react';
import BasicButton from './BasicButton'
import { useNavigate } from 'react-router-dom'

function Navbar(props) {
    
    const menu = [
        {
            name: "About",
            path: ""
        },
        {
            name: "Why Metamloe",
            path: ""
        },
        {
            name: "Ecosystem",
            path: ""
        },
        {
            name: "The future of the project",
            path: ""
        },
        {
            name: "Tokenomics",
            path: ""
        },
        {
            name: "Help",
            path: ""
        },
        {
            name: "About",
            path: ""
        }
    ]


    const handleButtonClick = (path) => { }
    const renderNavbar = ({ name, path }) => {
    return <BasicButton handleClick={handleButtonClick} name={name} path={path} />
    }

    return (
    <div className="navbar">{menu.map(renderNavbar)}</div>
    )
}

export default Navbar;