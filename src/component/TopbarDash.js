import React from 'react'

const TopbarDash = () => {
    return (
        <>
            <header>
            <div className="col-md-7">
              <nav className="navbar-default pull-left">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="offcanvas" data-target="#side-menu" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
              </nav>
              <div className="search hidden-xs hidden-sm">
                <input type="text" placeholder="Search" id="search" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="header-rightside">
                <ul className="list-inline header-top pull-right">
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><img src="https://previews.123rf.com/images/aurora72/aurora721606/aurora72160600006/59282564-avatar-girls-icon.jpg" alt="user" />
                      <b className="caret" /></a>
                    <ul className="dropdown-menu">
                      <li>
                        <div className="navbar-content">
                          <span>JS Krishna</span>
                          <p className="text-muted small">
                            me@jskrishna.com
                          </p>
                          <div className="divider">
                          </div>
                          <a href="#" className="view btn-sm active">View Profile</a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </header> 
    </>
    )
}

export default TopbarDash
