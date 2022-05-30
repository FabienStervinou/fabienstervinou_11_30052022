import "./style.scss";
import Star from '../../assets/img/starIMG'

export default function Rating (props) {
  const items = []
  const index = 5

  for (let i = 0; i < (parseInt(props.rate)); i++) {
    items.push(<Star className={'active'} key={i}></Star>)
  }

  for (let i = parseInt(props.rate); i < index; i++) {
    items.push(<Star key={i}></Star>)
  }

  return (
    <div className="property-rating">
      {items}
    </div>
  )
}
