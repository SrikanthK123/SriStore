import React from "react";
import Buy from "../Images/buy1.gif";
import Offer from "../Images/Offer1.gif";
import MainGif from "../Images/online-shopping2.gif";
import OnePluse from '../Images/One+.png'
import I15 from '../Images/IPhone15.png'
import s23 from '../Images/S23.png'
import samsungVideo from '../Images/SamsungLatestUpdatevideo.mp4'
import IPhoneVideo from '../Images/IPhone15Video.mp4'
import OnePlusVideo from '../Images/OnePlusVideo.mp4'
import HPVideo from '../Images/HPGamingLTVideo.mp4'
import DellVideo from '../Images/DellVideo.mp4'
import LenovoLegionVideo from '../Images/LenovoLegionVideo.mp4'
import RolexVideo from '../Images/RolexWatchVideo.mp4'
import TitanVideo from '../Images/TitanWatch.mp4'
import FireBoltt from '../Images/FirebolttWatch.mp4'
import SamsungTV from '../Images/SamsungTV.mp4'
import LGVideo from '../Images/LGVideo.mp4'
import SonyTv from '../Images/SonyTv.mp4'

const Home = () => {
  return (
    <div className="HomePage">
      <div
        className="position-relative overflow-hidden p-3 p-md-5 mx-auto text-center"
        id="HomeFirstSub"
      >
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold" style={{ color: "white" }}>
            Fashion finds at your fingertips.
          </h1>
          <h3 className="fw-normal  mb-3" style={{ color: "#62f1f1" }}>
            Your favorite brands, just a click away
          </h3>
          <div className="d-flex gap-3 justify-content-center lead fw-normal">
            <a className="icon-link" href="#">
              <img src={Offer} style={{ width: "60px" }} />
            </a>
            <a className="icon-link" href="#">
              <img id="buyGif" src={Buy} style={{ width: "80px" }} />
            </a>
          </div>
        </div>

        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <main>
        <div
          class="position-relative overflow-hidden my-3 p-3 p-md-5 m-md-3 text-center "
          id="SecBG"
        >
          <div class="col-md-6 p-lg-5 mx-auto my-5">
            <img id="buyGif" src={MainGif} />
            <h1
              class="display-3 fw-bold"
              style={{ color: "rgb(66 10 108 / 80%)" }}
            >
              Click, shop, repeat: Your online retail mantra.
            </h1>
            <h3 class="fw-normal mb-3" style={{ color: "rgb(7 88 76 / 80%)" }}>
              Fashion finds for the digital age
            </h3>
          </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        <header class="pb-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center text-body-emphasis text-decoration-none"
          >
            <span class="fs-4 mx-5 fw-bold" style={{ color: "white",fontFamily:'Georgia, serif' }}>
              UpComing Mobile  
            </span>
          </a>
        </header>
        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3"  style={{padding:'10px'}}>
        <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard1" style={{ height: '500px' }} >
  <div class="video-background">
    <video src={samsungVideo} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} controls autoplay  />
  </div>
  <div class="content-overlay">
    <div class="my-3 py-3">
      <h2 class="display-5">Galaxy </h2>
      <p class="lead">Four high-end Android-based smartphones</p>
    </div>
  </div>
</div>   
              <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard1" style={{ height: '500px' }}>
  <div class="video-background">
    <video src={IPhoneVideo} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} controls autoplay  />
  </div>
  <div class="content-overlay">
    <div class="my-3 py-3">
    <h2 class="display-5">iPhone 15 Here</h2>
              <p class="lead"> Now with Dynamic Island And totally jam-packed</p>
    </div>
  </div>
</div> 

         
              <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard1" style={{ height: '500px' }}>
  <div class="video-background">
    <video src={OnePlusVideo} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} controls autoplay  />
  </div>
  <div class="content-overlay">
    <div class="my-3 py-3">
    <h2 class="display-5">OnePlus Open</h2>
              <p class="lead"> Supports 4K30 video capturing with all five cameras</p>
    </div>
  </div>
</div> 
              

        </div>
        <header class="pb-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center text-body-emphasis text-decoration-none"
          >
            <span class="fs-4 mx-5 fw-bold" style={{ color: "white",fontFamily:'Georgia, serif' }}>
              UpComing Laptops 
            </span>
          </a>
        </header>
        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3"  style={{padding:'10px'}}>
        <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard1" style={{ height: '500px' }}>
  <div class="video-background">
    <video src={HPVideo} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} controls autoplay  />
  </div>
  <div class="content-overlay">
    <div class="my-3 py-3">
    <h2 class="display-5">OMENTranscend14</h2>
              <p class="lead"> The world's lightest 14 gaming laptop is here.</p>
    </div>
  </div>
</div> 
<div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard1" style={{ height: '500px' }}>
  <div class="video-background">
    <video src={DellVideo} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} controls autoplay  />
  </div>
  <div class="content-overlay">
    <div class="my-3 py-3">
    <h2 class="display-5">DELL G16</h2>
              <p class="lead">makes your favorite games look next level</p>
    </div>
  </div>
</div> 
<div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard1" style={{ height: '500px' }}>
  <div class="video-background">
    <video src={LenovoLegionVideo} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} controls autoplay  />
  </div>
  <div class="content-overlay">
    <div class="my-3 py-3">
    <h2 class="display-5">Lenovo Legion 9i</h2>
              <p class="lead">First gaming laptop with integrated liquid cooling</p>
    </div>
  </div>
</div> 
        </div>
        <header class="pb-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center text-body-emphasis text-decoration-none"
          >
            <span class="fs-4 mx-5 fw-bold" style={{ color: "white",fontFamily:'Georgia, serif' }}>
              UpComing Watches
            </span>
          </a>
        </header>
        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3"  style={{padding:'10px'}}>
        <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard1" style={{ height: '500px' }}>
  <div class="video-background">
    <video src={RolexVideo} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} controls autoplay  />
  </div>
  <div class="content-overlay">
    <div class="my-3 py-3">
    <h2 class="display-5">Rolex</h2>
              <p class="lead">Conquering Ocean Depths with Timeless Precision</p>
    </div>
  </div>
</div> 
<div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard1" style={{ height: '500px' }}>
  <div class="video-background">
    <video src={TitanVideo} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} controls autoplay  />
  </div>
  <div class="content-overlay">
    <div class="my-3 py-3">
    <h2 class="display-5">Titan</h2>
              <p class="lead">Elevate Every Moment with Timeless Elegance</p>
    </div>
  </div>
</div> 
<div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard1" style={{ height: '500px' }}>
  <div class="video-background">
    <video src={FireBoltt} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} controls autoplay  />
  </div>
  <div class="content-overlay">
    <div class="my-3 py-3">
    <h2 class="display-5">Fire Boltt</h2>
              <p class="lead">Feel the Heat of Time with Firebolt Watches</p>
    </div>
  </div>
</div>

        </div>
        <header class="pb-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center text-body-emphasis text-decoration-none"
          >
            <span class="fs-4 mx-5 fw-bold" style={{ color: "white",fontFamily:'Georgia, serif' }}>
              UpComing TV 
            </span>
          </a>
        </header>
        <div class="d-md-flex flex-md-equal w-100  ps-md-3"  style={{padding:'10px'}}>
        <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard1" style={{ height: '500px' }}>
  <div class="video-background" >
    <video src={SamsungTV} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} controls autoplay  />
  </div>
  <div class="content-overlay">
    <div class="my-3 py-3">
    <h2 class="display-5">Samsung </h2>
              <p class="lead">Immerse Yourself in Brilliance with Samsung TV</p>
    </div>
  </div>
</div>
<div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard1" style={{ height: '500px' }}>
  <div class="video-background">
    <video src={LGVideo} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} controls autoplay  />
  </div>
  <div class="content-overlay">
    <div class="my-3 py-3">
    <h2 class="display-5">LG  </h2>
              <p class="lead">See More, Feel More: LG TV, Unleash the Visual Spectacle</p>
    </div>
  </div>
</div>
<div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard1" style={{ height: '500px' }}>
  <div class="video-background">
    <video src={SonyTv} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} controls autoplay  />
  </div>
  <div class="content-overlay">
    <div class="my-3 py-3">
    <h2 class="display-5">Sony</h2>
              <p class="lead">Bringing Cinematic Brilliance Home: Sony TV Experience</p>
    </div>
  </div>
</div>
  </div>
      </main>
    </div>
  );
};

export default Home;
