import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../styles/auth.css"
const cssCDN = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
const Auth = () => {
    useEffect(() => {
        let _headContent = document.querySelector("head").innerHTML

        document.querySelector("head").innerHTML = 
        `<link  rel="stylesheet" href=${cssCDN} />` + _headContent

        return () => document.querySelector("head link:first-child").remove()

    }, [])

    return (
        <>
 <div className="container">
  <div className="d-flex justify-content-center h-100">
    <div className="card">
      <div className="card-header">
        <h3>Sign In</h3>
        <div className="d-flex justify-content-end social_icon">
          <span><i className="fab fa-facebook-square" ></i></span>
          <span><i className="fab fa-google-plus-square" ></i></span>
          <span><i className="fab fa-twitter-square" ></i></span>
        </div>
      </div>
      <div className="card-body">
        <form>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-user" ></i></span>
            </div>
            <input type="text" className="form-control" placeholder="username" />
          </div>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-key" /></span>
            </div>
            <input type="password" className="form-control" placeholder="password" />
          </div>
          <div className="row align-items-center remember">
            <input type="checkbox" />Remember Me
          </div>
          <div className="form-group">
            <input type="submit" Value="Login" className="btn float-right login_btn" />
          </div>
        </form>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-center links">
          Don't have an account?<Link to="/register"><a>Sign Up</a></Link>
        </div>
        <div className="d-flex justify-content-center">
        <Link to="/forget-pass">
                                <a>Forgot your password?</a>
                            </Link>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Auth
