import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
    <ul>
    <Link to="/"><li>Home</li></Link>
    <Link to="/page-2/"><li>Quem Somos</li></Link>
    <li>Serviços & Preços</li>
    <li>Contato</li>
    <li>Testimonials</li>
    </ul>
);

export default Menu;
