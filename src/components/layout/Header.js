import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style = {headerStyle}>
            <h3>TODO LIST</h3>
            <Link style= {linkStyle}to="/">Home</Link> {''}|{' '}
            <Link style={linkStyle}to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    backgroundColor: '#333',
    padding: '10px',
    color: '#fff',
    textAlign: 'center',

}

const linkStyle= {
    color: '#fff',
    textDecoration: 'none'
}