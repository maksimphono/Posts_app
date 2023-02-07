import React , {useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./css/Navigation.scss";
import home_icon from "../assets/icons/icons8-home.svg";
import search_icon from "../assets/icons/icons8-search.svg";
import user_icon from "../assets/icons/icons8-user-male.svg";
import add_icon from "../assets/icons/icons8-plus.svg";

function Navigation() {
  return (
    <nav>
        <Link to = "/"><img src={home_icon} alt="" /></Link>
        <Link to = "/"><img src={search_icon} alt="" /></Link>
        <Link to = "/"><img src={add_icon} alt="" /></Link>
        <Link to = "/"><img src={user_icon} alt="" /></Link>
    </nav>
  )
}

export default Navigation
