import React from 'react'
import { LINK_ITEMS_DATA } from '../data/Link-items'
import SideBarItem from './SideBarItem'

const SidebarDash = () => {
    return (
        <>
           <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation" style={{height:"100vh"}}>
        <div className="logo">
          <a hef="home.html"><img src="https://pngimage.net/wp-content/uploads/2018/06/movie-logos-png-3.png" alt="merkery_logo" className="hidden-xs hidden-sm" />
          </a>
        </div>
        <div className="navi">
          <ul>
          {
                            LINK_ITEMS_DATA.map(li => <SideBarItem key={li.id} linkItem={li} />)

                        }
          </ul>
        </div>
      </div> 
        </>
    )
}

export default SidebarDash
