import React from 'react';
import { Dropdown } from '../../components/Dropdown/index.js';
import banner from "../../assets/img/banner-about.png";
import './style.scss';

export function About () {

  const contentData = [
      {
        'key': 'Fiabilité',
        'content': "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
      },
      {
        'key': 'Respect',
        'content': "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      },
      {
        'key': 'Services',
        'content': "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      },
      {
        'key': 'Sécurité',
        'content': "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      }
    ]

  return (
    <main id="main" className='about'>
      <div className="banner">
        <img src={banner} alt="Paysage de montagne" />
      </div>
      {
        contentData.map((data) => {
          return <Dropdown key={data.key} title={data.key} content={data.content} />
        })
      }
    </main>
  )
}
