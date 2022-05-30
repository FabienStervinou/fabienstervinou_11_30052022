import './style.scss';
import { useState } from "react";
import Arrow from '../../assets/img/arrow'

export function Dropdown (props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    setIsActive(!isActive)
  }

  return (
    <div className="dropdown">
      <div className="dropdown-header">
        <div className="dropdown-title">
          {props.title}
        </div>
        <div onClick={handleClick} className="dropdown-arrow">
          <Arrow></Arrow>
        </div>
      </div>
      <div className={"dropdown-content" + (isActive ? " isActive" : "")}>
        {
          typeof(props.content) == 'object'
          ? props.content.map((content) => <div key={content}>{content}</div>)
          : props.content
        }
      </div>
    </div>
  )
}
