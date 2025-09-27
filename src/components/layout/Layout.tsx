import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Dashboard from '../pages/Dashboard'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        

        
        {/* / Menu */}
            <Sidebar />
        {/* Layout container */}
        <div className="layout-page">
          {/* Navbar */}

          <Navbar />

          {/* <!-- / Navbar --> */}
          {/* <!-- Content wrapper --> */}
          <div className="content-wrapper">
            {/* <!-- Content --> */}

            <Outlet />
            {/* <!-- / Content --> */}

            {/* <!-- Footer --> */}
            <Footer />
            {/* <!-- / Footer --> */}

            <div className="content-backdrop fade"></div>
          </div>
          {/* <!-- Content wrapper --> */}
        </div>
        {/* <!-- / Layout page --> */}
      </div>

      {/* <!-- Overlay --> */}
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
    
    </>
  )
}

export default Layout
