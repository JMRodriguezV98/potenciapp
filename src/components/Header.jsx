import React from 'react'
import logo from '../img/logoVector.png'
import more from '../img/free_icon_2.svg'
import { Link } from 'react-router-dom'

export const Header = () => {

  return (
    <header className='header'>
        <img className='logo' src={ logo } alt="Logo Potencia y tecnología" />
        <nav className='menu'>
            <ul className='menuOptions'>
                <Link style={{textDecoration: 'none', color: 'white'}} to='/quienes_somos'>
                    <li className='liMore' >
                        <p>Quienes somos</p>
                    </li>
                </Link>
                <Link style={{textDecoration: 'none', color: 'white'}} to="/productos"><li className='liMore'>
                    <p>Productos</p>
                    <span className='subMenu-switch'>
                        {/* <img className='moreS' src={more} alt="imageMore" /> */}
                    </span>
                </li>
                </Link>
                <Link style={{textDecoration: 'none', color: 'white'}} to='/marcas_distribuidas'>
                    <li className='liMore' >
                        <p>Marcas distribuidas</p>
                    </li>
                </Link>
                <Link style={{textDecoration: 'none', color: 'white'}} to='/catalogo'>
                    <li className='liMore' >
                        <p>Catalogo</p>
                    </li>
                </Link>
                <Link style={{textDecoration: 'none', color: 'white'}} to='contacto'>
                    <li className='liMore' >
                        <p>Contacto</p>
                    </li>
                </Link>
            </ul>
        </nav>
    </header>
  )
  
}