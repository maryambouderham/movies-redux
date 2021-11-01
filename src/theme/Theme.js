import React, { useEffect } from 'react'
import SidebarDash from '../component/SidebarDash'
import TopbarDash from '../component/TopbarDash'
import "../styles/admin.css"
const cssCDN = "//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"

const Theme = ({children}) => {

    useEffect(() => {
        let _headContent = document.querySelector("head").innerHTML

        document.querySelector("head").innerHTML = 
        `<link  rel="stylesheet" href=${cssCDN} />` + _headContent

        return () => document.querySelector("head link:first-child").remove()

    }, [])

    return (
        <>
             <div className="home">
  <div className="container-fluid display-table">
    <div className="row display-table-row">
      {/* SIDEBAR */}
      <SidebarDash/>
      {/* SIDEBAR/ */}
      <div className="col-md-10 col-sm-11 display-table-cell v-align">
        <div className="row">
          {/* HEADER */}
          <TopbarDash/>
          {/* HEADER/ */}
        </div>
        <div className="user-dashboard">
          {/* PAGE CONTENT */}
          {children}
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  
</div>
        </>
    )
}

export default Theme
