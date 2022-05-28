import './style.scss'

export default function Card (props) {
  return (
    <a className="card" data-id={props.data.id} href={"/property/" + props.data.id}>
      <div className="card-title">
        {props.data.title}
      </div>
      <img className="card-img" src={props.data.cover} alt={"Appartement en " + props.data.location}/>
    </a>
  )
}
