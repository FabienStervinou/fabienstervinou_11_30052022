import './style.scss';
import { useState } from 'react'
import Arrow from '../../assets/img/arrow.jsx'

export default function Diaporama (props) {
  const pictureNumber = props.image.length - 1
  const [index, setIndex] = useState(0);
  const [total] = useState(pictureNumber);
  
  const decrement = () => {
    let res = index === 0 ? total : index -1 
    setIndex(res)
  };

  const increment = ()  => {
    let res = index === total ? 0 : index + 1
    setIndex(res)
  };

  return (
    <>
      <Arrow onClick={decrement} className="arrow left" />
      <Arrow onClick={increment} className="arrow right" />
      <img className="property-diapoImg" src={props.image[index]} alt="" />
    </>
  )
}
