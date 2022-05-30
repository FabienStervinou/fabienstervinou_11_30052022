import './style.scss';

export default function Tag (props) {
  return (
    <div key={props.tag} className="property-tag">{props.tag}</div>
  )
}
