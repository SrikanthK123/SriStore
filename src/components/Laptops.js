import React,{useEffect} from 'react'
import DellLogo from "../Images/DellLogo1.gif"
import MacLogo from "../Images/MacLogo1.gif" 
import HpLogo from "../Images/hp-logo.gif"
import LegionLogo from "../Images/LenovoLogo1.gif"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Laptops = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div className="HomePage">
    <div
      className="position-relative overflow-hidden p-3 p-md-5 mx-auto text-center"
      id="LaptopPage"
    >
      <div className="col-md-6 p-lg-5 mx-auto my-5">
        <h1 className="display-3 fw-bold" style={{ color: "white" }}>
        Your Portable Powerhouse Awaits: Laptop Bliss Online.
        </h1>
        <h3 className="fw-normal  mb-3" style={{ color: "#62f1f1" }}>
        Laptops Redefined: Shop, Click, Thrive Online
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
      <Link to="/DellLapTopsList" style={{textDecoration:'none'}}>
    <div class="container my-5">
      
<div class="p-5 text-center  rounded-4" id='LaptopSection1' >
  <h1 class="text"><img src="https://artcopyright.interartive.org/sites/default/files/default_images/dell.gif" style={{width:'40px',height:'40px',marginRight:'10px'}} />DELL</h1>
  <p class="lead" style={{textAlign:'justify'}}>
Dell laptops embody a perfect fusion of cutting-edge technology and reliable performance, offering users a seamless computing experience. </p>
</div>
</div></Link>
<Link to="/MacLapTopsList" style={{textDecoration:'none'}}>
<div class="container my-5">
<div class="p-5 text-center bg-body-tertiary rounded-3" id='LaptopSection2' >
  <h1 class="text"><img src={MacLogo} style={{width:'100px',height:'78px'}} />MacBook</h1>
  <p class="lead" style={{textAlign:'justify'}}>
  MacBook, an epitome of elegance and performance, redefines portable computing with its sleek design, exceptional build quality.
  </p>
</div>
</div></Link>
<Link to="/HPLapTopsList" style={{textDecoration:'none'}}>
<div class="container my-5">
<div class="p-5 text-center bg-body-tertiary rounded-3" id='LaptopSection3' >
  <h1 class="text"><img src= {HpLogo} style={{width:'70px',height:'61px',marginRight:'5px'}} />HP</h1>
  <p class="lead" style={{textAlign:'justify'}}>
 
  HP laptops are renowned for their sleek design, robust performance, and innovative features, catering to diverse user needs.
  </p>
</div>
</div></Link>
<Link to="/ROGLapTopsList" style={{textDecoration:'none'}}>
<div class="container my-5">
<div class="p-5 text-center bg-body-tertiary rounded-3" id='LaptopSection4' >
  <h1 class="text"><img src="https://media.giphy.com/avatars/asusrogde/SjKaWmSyysV2.gif" style={{width:'70px',height:'61px',marginRight:'10px'}} />ROG</h1>
  <p class="lead" style={{textAlign:'justify'}}>
 
ROG (Republic Of Gamers) laptops by ASUS are synonymous with high-performance gaming,boasting powerful hardware, advanced cooling systems
  </p>
</div>
</div></Link>
<Link to="/LenovoLapTopsList" style={{textDecoration:'none'}}>
<div class="container" style={{padding:'10px'}}>
<div class="p-5 text-center bg-body-tertiary rounded-3" id='LaptopSection5' >
  <h1 class="text"><img src={LegionLogo} style={{width:'70px',height:'60px',marginRight:'10px'}} />Legion</h1>
  <p class="lead" style={{textAlign:'justify'}}>
  Legion laptops, part of Lenovo's gaming lineup, are celebrated for their exceptional gaming prowess, featuring powerful processors
  </p>
</div>
</div></Link>
  </div>
  )
}

export default Laptops
