import React , {useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./css/Navigation.scss";

function Navigation() {
  return (
    <nav>
        <Link to = "/">Home</Link>
    </nav>
  )
}

export default Navigation
