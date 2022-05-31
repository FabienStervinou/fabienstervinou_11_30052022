import React from 'react'
import './style.scss'
import banner from '../../assets/img/banner-top.png'
import CardList from '../../layout/CardList/index'

export function Home () {

  return (
    <main id="main" className='home'>
      <div className="banner">
        <img src={banner} alt="Paysage de montagne" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <CardList/>
    </main>
  ) 
}