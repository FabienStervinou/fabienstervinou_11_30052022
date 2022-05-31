import React from 'react'
import './styles.scss';
import { Link } from 'react-router-dom'

export function Error404 () {

  return (
  <main className='error'>
    <h1 className='error-title'>404</h1>
    <div className="error-description">
      Oups ! La page que vous demandez n'existe pas
    </div>
    <Link className="error-link" to="/">Retourner sur la page d'accueil</Link>
  </main>
  )
}
