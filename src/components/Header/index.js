import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-container">
      <div className="large-display-cont">
        <Link to="/Job-Searching-Application">
          <img
            className="logo-in-header"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
        </Link>
        <ul className="menu-container">
          <li>
            <Link to="/Job-Searching-Application" className="list-text">
              Home
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="list-text">
              Jobs
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="logout-btn"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="small-display-cont">
        <img
          className="logo-in-header"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
        />
        <div className="menu-container">
          <Link to="/Job-Searching-Application" className="list-text-icon">
            <AiFillHome />
          </Link>
          <Link to="/jobs" className="list-text-icon">
            <BsBriefcaseFill />
          </Link>
          <button
            type="button"
            className="small-display-logout-btn"
            onClick={onClickLogout}
          >
            <FiLogOut className="list-text-icon" />
          </button>
        </div>
      </div>
    </nav>
  )
}
export default withRouter(Header)
