import React from 'react'
import { useParams, Navigate } from 'react-router-dom';
import { useState } from "react";
import datasJson from '../../assets/data/data.json'
import Rating from '../../components/rating/index.js'
import Tag from '../../components/tag/index.js'
import Diaporama from '../../components/Diaporama/index.js'
import { Dropdown } from '../../components/Dropdown/index.js'
import './style.scss';

export function Property () {
  let { propertyId } = useParams();
  const [data, setData] = useState({tags: [], host: []});
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading === true) {

    for (let i = 0; i < datasJson.length; i++) {
      const dataJson = datasJson[i];

      if (dataJson.id === propertyId) {
        setIsLoading(false)
        return setData(dataJson)
      } else if (isLoading === false) {
        return (<Navigate to="/404" replace={true} />)
      }
    }
  }

  return (
    <main id="main" className="property">
      <div className="property-diapoContainer">
        <Diaporama image={data.pictures} />
      </div>
      <div className="property-contentContainer">
        <div className="property-details">
          <div className="property-title">
            {data.title}
          </div>
          <div className="property-location">
            {data.location}
          </div>
          <div className="property-tags">
              {
                data.tags.map((tag) => <Tag key={tag} tag={tag}></Tag>)
              }
          </div>
        </div>
        <div className="property-social">
          <div className="property-user">
            <div className="property-userName">
              <div className="property-userNameFirst">{data.host.name.split(' ')[0]}</div>
              <div className="property-userNameLast">{data.host.name.split(' ')[1]}</div>
            </div>
            <div className="property-userPicture">
              <img src={data.host.picture} alt={"Portrait de " + data.host.name} />
            </div>
          </div>
          <Rating rate={data.rating}></Rating>
        </div>
      </div>
      <div className="dropdownContainer">
        <div className="property-description">
          <Dropdown title="Description" content={data.description} />
        </div>
        <div className="property-equipments">
          <Dropdown title="Equipement" content={data.equipments} />
        </div>
      </div>
    </main>
  )
}
