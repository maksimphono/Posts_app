import React from 'react'
import {Link, Outlet} from "react-router-dom";
//import {Outlet} from "react-dom";
import Navigation from "./Navigation.jsx";
import Footer from './Footer.jsx';

function Layout() {
  return (
    <>
      <Navigation />
      <div id = "Outlet">
        <Outlet  />
      </div>
      <Footer />
    </>
  )
}

export default Layout
