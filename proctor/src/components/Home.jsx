import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const handleOurServicesClick = () => {
    navigate("/services");
  }

  return (
    <div>
      <div className="hero-container">
        <h1>Building Your Vision: Excellence in Civil Construction</h1>
        <p>At Proctor Civil Construction, we are dedicated to turning your construction dreams into reality. With a strong foundation in civil engineering and construction expertise, we specialize in delivering exceptional projects that transform communities. From concept to completion, our team of skilled professionals is committed to delivering quality, safety, and innovation.</p>
        <div className="button-container">
        <button className="hero-btn" onClick={handleOurServicesClick}>Our Services</button>
          <button className="hero-btn"><a className="link" href="tel:+1956">Call Now</a></button>
        </div>
      </div>
      {/* <div className="about-owner">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
        <h2>Aldo Salinas</h2>
        <p>With over three generations of expertise in civil construction, we take immense pride in our legacy of delivering top-tier infrastructure solutions. Our journey began with a commitment to excellence and an unyielding passion for constructing a better tomorrow.</p>
      </div> */}
    </div>
  )
}

export default Home