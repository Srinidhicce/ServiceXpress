import Top from '../components/Top/Top'
import './Home.css'
import AboutUs from './AboutUs'


const Home = () => {
  return (
    <div>
      <Top />
      <br></br>
   
      {/* About Us link added */}
      <div className="about-us-link-container">
      <AboutUs/>
      </div>
      <br>
    </br>
    <hr></hr>
      
    </div>
  )
}

export default Home
