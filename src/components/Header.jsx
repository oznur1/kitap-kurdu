
import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='bg-body text-dark'>
      <div className='d-flex justify-content-around align-items-center container py-2'>
        <h2 className='fs-2'>Kitap Kurdu</h2>
       <nav className='d-flex gap-4'>
        <NavLink to="/">AnaSayfa</NavLink>
        <NavLink to="/Ürünler">Ürünler</NavLink>
        <NavLink to="/Kategori">Kategori</NavLink>
       </nav>
      </div>
    </header>
  )
}

export default Header