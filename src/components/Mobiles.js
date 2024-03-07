import React, {useEffect} from 'react'
import SamsungLogo from "../Images/SamsungLogo1.gif" 
import OnepulseLogo from "../Images/one-1.gif"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Mobiles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div className="HomePage">
      <div
        className="position-relative overflow-hidden p-3 p-md-5 mx-auto text-center"
        id="MobilePage"
      >
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold" style={{ color: "white" }}>
          Transform Your World with Mobile Wonders.
          </h1>
          <h3 className="fw-normal  mb-3" style={{ color: "#62f1f1" }}>
          In Your Hands, Infinite Possibilities.
          </h3>
        </div>

        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <header class="pb-3 mb-4 border-bottom my-3">
          <a
            href="/"
            class="d-flex align-items-center text-body-emphasis text-decoration-none"
          >
            <span class="fs-4 mx-5 fw-bold" style={{ color: "white",fontFamily:'Georgia, serif' }}>
              Top Brands
            </span>
          </a>
        </header>
      <div class="container my-5">
        <Link to="/IPhones"  style={{textDecoration:'none'}} >
  <div class="p-5 text-center  rounded-4" id='mobileSection1' >
    <h1 class="text"><img src='https://media.giphy.com/media/tYiGDt4b33UVq/giphy.gif' style={{width:'50px',marginRight:'5px'}} />Apple Store</h1>
    <p class="lead" style={{textAlign:'justify',display:'flex',justifyContent:'center'}}>The iPhone, a pinnacle of technological elegance, seamlessly blends innovation with intuitive design, setting new standards in the realm of smartphones. </p>
  </div>
  </Link>
</div>
<div class="container my-5"  >
  <Link to="/SamsungPhones"  style={{textDecoration:'none'}} >
  <div class="p-5 text-center bg-body-tertiary rounded-3" id='mobileSection2' >
    <h1 class="text"><img src={SamsungLogo} style={{width:'120px',height:'80px',marginRight:'5px'}} />Samsung</h1>
    <p class="lead"  style={{textAlign:'justify',display:'flex',justifyContent:'center'}}>
    Samsung, a tech titan, crafts a diverse range of devices marked by innovation and versatility, from cutting-edge smartphones.
    </p>
  </div>
  </Link>
</div>
<div class="container my-5">
<Link to="/OnePlusPhones" style={{textDecoration:'none'}}>
  <div class="p-5 text-center bg-body-tertiary rounded-3" id='mobileSection3' >
    <h1 class="text"><img src= {OnepulseLogo} style={{width:'70px',height:'61px',marginRight:'5px'}} />OnePlus</h1>
    <p class="lead"  style={{textAlign:'justify',display:'flex',justifyContent:'center'}}>
   
OnePlus Mobiles epitomize a blend of speed and elegance, offering a premium Android experience with top-tier performance and sleek design.
    </p>
  </div>
  </Link>
</div>
<div class="container my-5">
<Link to="/RealMePhones" style={{textDecoration:'none'}}>
  <div class="p-5 text-center bg-body-tertiary rounded-3" id='mobileSection4' >
    <h1 class="text"><img src="https://media.giphy.com/media/SwZqLhpRwhnHQd1YPG/giphy.gif" style={{width:'70px',height:'61px',marginRight:'10px'}} />RealMe</h1>
    <p class="lead"  style={{textAlign:'justify',display:'flex',justifyContent:'center'}}>
    
RealMe is a Chinese smartphone brand that focuses on delivering affordable and feature-rich devices with a strong emphasis on performance and camera capabilities.
    </p>
  </div></Link>
  
</div>

<div class="container" style={{padding:'10px'}}>
<Link to="/GooglePixel" style={{textDecoration:'none'}}>
  <div class="p-5 text-center bg-body-tertiary rounded-3" id='mobileSection5' >
    <h1 class="text"><img src="https://www.phoneworld.com.pk/wp-content/uploads/2019/02/vivoblue.gif" style={{width:'70px',borderRadius:'12px',height:'60px',marginRight:'10px'}} />Vivo</h1>
    <p class="lead"  style={{textAlign:'justify',display:'flex',justifyContent:'center'}}>
    Explore the latest Vivo mobiles with cutting-edge technology and stylish designs for an exceptional online shopping experience
    </p>
  </div></Link>
</div>
    </div>
  )
}

export default Mobiles
