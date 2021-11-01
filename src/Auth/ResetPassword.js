import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./../styles/auth.css"

const cssCDN = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
const ResetPassword = () => {
    useEffect(() => {
        let _headContent = document.querySelector("head").innerHTML

        document.querySelector("head").innerHTML =
            `<link  rel="stylesheet" href=${cssCDN} />` + _headContent

        return () => document.querySelector("head link:first-child").remove()

    }, [])
    return (
  <div className="container">
  <div className="d-flex justify-content-center h-100">
    <div className="card" style={{height: 'fit-content'}}>
      <div className="card-header">
        <h3 style={{margin: 15}}>Reset password</h3>
        <div className="d-flex justify-content-end social_icon">
          <span><i className="fab fa-facebook-square" /></span>
          <span><i className="fab fa-google-plus-square" /></span>
          <span><i className="fab fa-twitter-square" /></span>
        </div>
      </div>
      <div className="card-body">
        <form>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-key" /></span>
            </div>
            <input type="password" className="form-control" placeholder="New Password" />
          </div>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-key" /></span>
            </div>
            <input type="password" className="form-control" placeholder="Confirm password" />
          </div>
          <div className="form-group">
            <input type="submit" defaultValue="send" className="btn float-right login_btn" />
          </div>
        </form>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-center links">
          Already have an account?<Link to="/"><a>Sign In</a></Link>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default ResetPassword
