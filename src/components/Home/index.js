import {Link} from 'react-router-dom'

import './index.css'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-bg-container">
      <div className="half-cont">
        <h1 className="home-heading">Find The Job That Fits Your Life</h1>
        <p className="home-para">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button type="button" className="home-btn">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default Home
