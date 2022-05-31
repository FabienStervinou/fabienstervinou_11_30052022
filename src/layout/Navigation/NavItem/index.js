import React from 'react'
import './style.scss'
import { NavLink } from "react-router-dom";

export function NavItem (props) {

  return (
    <NavLink to={props.link} className="navLink">
      {props.text}
    </NavLink>
  )
}
