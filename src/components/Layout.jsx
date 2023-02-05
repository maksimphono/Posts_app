import React from 'react'
import {Outlet, Link} from "react-router-dom";
import Navigation from "./Navigation.jsx";
import Footer from './Footer.jsx';

function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
