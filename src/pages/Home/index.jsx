
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
 <div className='container my-5  d-flex flex-column align-items-center gap-5 '>
  <h1>Hoş Geldiniz</h1>
  
  <img src="public/welcome.webp" className='img-fluid rounded images'
   alt="" />

   <p>Ürünler Sayfasında Yeni Çıkan Bütün Kitaplara Ulaşabilirsiniz</p>
 </div>
  )
}

export default Home