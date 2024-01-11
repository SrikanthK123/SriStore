import React from "react";
import Buy from "../Images/buy1.gif";
import Offer from "../Images/Offer1.gif";
import MainGif from "../Images/online-shopping2.gif";
import OnePluse from '../Images/One+.png'
import I15 from '../Images/IPhone15.png'
import s23 from '../Images/S23.png'


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
              Top Mobile Sales 
            </span>
          </a>
        </header>
        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3"  style={{padding:'10px'}}>
        <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard">
            <div class="my-3 py-3">
            <h2 class="display-5">Galaxy S23 </h2>
              <p class="lead">Four high-end Android-based smartphones</p>
            </div>
                <img
                  class=" container rounded-lg-3"
                  src={s23}
                  alt="I15"
                  width="500"
                  id="Mobiles"
                />
              </div>
       
          <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard">
            <div class="my-3 py-3">
              <h2 class="display-5">iPhone 15 Pro Max</h2>
              <p class="lead">Splash, water and dust resistant, and were tested under controlled</p>
            </div>
                <img
                  class=" container rounded-lg-3"
                  src={I15}
                  alt="I15"
                  width="500"
                  id="Mobiles"
                />
              </div>
              <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard">
            <div class="my-3 py-3">
              <h2 class="display-5">OnePlus Open</h2>
              <p class="lead"> Supports 4K30 video capturing with all five cameras</p>
            </div>
                <img
                  class=" container rounded-lg-3"
                  src={OnePluse}
                  alt="OnePluse"
                  width="500"
                  id="Mobiles"
                />
              </div>
              

        </div>
        <header class="pb-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center text-body-emphasis text-decoration-none"
          >
            <span class="fs-4 mx-5 fw-bold" style={{ color: "white",fontFamily:'Georgia, serif' }}>
              Top Laptops Sales
            </span>
          </a>
        </header>
        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3"  style={{padding:'10px'}}>
          <div class=" me-md-3 pt-3 px-3 pt-md-5 my-3 px-md-5 text-center overflow-hidden" id="MobileCard" style={{backgroundColor:'rgb(5 56 56)',color:'white'}}>
            <div class="my-3 py-3">
              <h2 class="display-5">HP Victus 15 </h2>
              <p class="lead">12th Gen Intel Core i5-12450H</p>
            </div>
            
              <div class="col-10 col-sm-8 col-lg-6">
                <img
                  class="rounded-lg-3"
                  src='https://www.hp.com/wcsstore/hpusstore/Treatment/mdps/Q3FY21_omen_victus16/omen_victus_ksp2.png'
                  alt="Laptop"
                  style={{width:'400px'}}
                  id="Mobiles"
                />
              </div>
          </div>
          <div class=" me-md-3 pt-3 px-3 pt-md-5 my-3 px-md-5 text-center overflow-hidden" id="MobileCard" style={{backgroundColor:'rgb(5 56 56)',color:'white'}}>
            <div class="my-3 py-3">
              <h2 class="display-5">Dell inspiron 3520</h2>
              <p class="lead">11th Gen Intel® Core™ Processor</p>
            </div>
                <img
                  class=" rounded-lg-3"
                  src='https://eaz.vn/Upload/Img/Products/133076916946522878.png'
                  alt="Laptop"
                  style={{width:'400px'}}
                  id="Mobiles"
                />
              </div>
              <div class=" me-md-3 pt-3 px-3 pt-md-5 my-3 px-md-5 text-center overflow-hidden" id="MobileCard" style={{backgroundColor:'rgb(5 56 56)',color:'white'}}>
            <div class="my-3 py-3">
              <h2 class="display-5">Lenovo Legion Y720</h2>
              <p class="lead"> Cutting-edge gaming PCs and gear</p>
            </div>
                <img
                  class="rounded-lg-3"
                  src='https://i1.wp.com/www.tech-critter.com/wp-content/uploads/2020/05/Lenovo-Legion-5Pi_Intel_Angled_Open-e1590659519378.png?ssl=1'
                  alt="Laptop"
                  style={{width:'400px'}}
                  id="Mobiles"
                />
              </div>

        </div>
        <header class="pb-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center text-body-emphasis text-decoration-none"
          >
            <span class="fs-4 mx-5 fw-bold" style={{ color: "white",fontFamily:'Georgia, serif' }}>
              Top Watches for Men
            </span>
          </a>
        </header>
        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3"  style={{padding:'10px'}}>
          <div class="me-md-3 pt-3 px-3 pt-md-5 my-3 px-md-5 text-center overflow-hidden" id="MobileCard" style={{backgroundColor:'rgb(6 50 80)',color:'white'}}>
            <div class="my-3 py-3">
              <h2 class="display-5">Rolex Submariner</h2>
              <p class="lead"> Switzerland icons set in isometric 3d style isolated </p>
            </div>
            
              <div class="col-10 col-sm-8 col-lg-6">
                <img
                  class="rounded-lg-3"
                  src='https://purepng.com/public/uploads/medium/rolex-submariner-date-omz.png'
                  alt="Watch"
                  style={{width:'400px',height:'450px'}}
                  id="Mobiles"
                />
              </div>
          </div>
          <div class=" me-md-3 pt-3 px-3 pt-md-5 my-3 px-md-5 text-center overflow-hidden" id="MobileCard" style={{backgroundColor:'rgb(6 50 80)',color:'white'}}>
            <div class="my-3 py-3">
              <h2 class="display-5"> Eco-Drive Titanium</h2>
              <p class="lead">Citizen Eco-Drive Paradigm Quartz Men's Watch</p>
            </div>
                <img
                  class=" rounded-lg-3"
                  src='https://halifaxwatch.com/cdn/shop/products/BM7431-51L.png?v=1602869028&width=1024'
                  alt="Watch"
                  style={{width:'400px',height:'400px'}}
                  id="Mobiles"
                />
              </div>
              <div class=" me-md-3 pt-3 px-3 pt-md-5 my-3 px-md-5 text-center overflow-hidden" id="MobileCard" style={{backgroundColor:'rgb(6 50 80)',color:'white'}}>
            <div class="my-3 py-3">
              <h2 class="display-5">Lenovo Legion Y720</h2>
              <p class="lead"> Smartwatches and Audio Devices with best features</p>
            </div>
                <img
                  class="rounded-lg-3"
                  src='https://indiaeducationdiary.in/wp-content/uploads/2021/02/Fire-Boltt-Smartwatch.3.png'
                  alt="Watch"
                  style={{width:'400px'}}
                  id="Mobiles"
                />
              </div>

        </div>
        <header class="pb-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center text-body-emphasis text-decoration-none"
          >
            <span class="fs-4 mx-5 fw-bold" style={{ color: "white",fontFamily:'Georgia, serif' }}>
              Top Watches for Women 
            </span>
          </a>
        </header>
        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3"  style={{padding:'10px'}}>
          <div class=" me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard" style={{backgroundColor:'rgb(180 1 84)',color:'white'}}>
            <div class="my-3 py-3">
              <h2 class="display-5">Cartier </h2>
              <p class="lead">Luxurious, timeless, elegant, refined, iconic.</p>
            </div>
            
              <div class="col-10 col-sm-8 col-lg-6">
                <img
                  class="rounded-lg-3"
                  src='https://th.bing.com/th/id/R.223d40f40bf3c1d7e215ad56475c565e?rik=3IKWt84H8K5A7Q&riu=http%3a%2f%2fwww.pays-de-born.com%2fwp-content%2fuploads%2f2018%2f10%2fmontres-femme-cartier.png&ehk=3prFYle1qTdc7A1jc8JeftIOyCqjfiIQFSwMXZXm6Ko%3d&risl=&pid=ImgRaw&r=0'
                  alt="Watch"
                  style={{width:'400px',height:'400px'}}
                  id="Mobiles"
                />
              </div>
          </div>
          <div class=" me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard" style={{backgroundColor:'rgb(180 1 84)',color:'white'}}>
            <div class="my-3 py-3">
              <h2 class="display-5">Longines </h2>
              <p class="lead">Elegant Swiss precision timepieces by Longines.</p>
            </div>
                <img
                  class=" rounded-lg-3"
                  src='https://bossluxurywatch.vn/uploads/san-pham/longines/24-2/longines-presence-l47904126.png'
                  alt="Watch"
                  style={{width:'400px',height:'350px'}}
                  id="Mobiles"
                />
              </div>
              <div class="me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard" style={{backgroundColor:'rgb(180 1 84)',color:'white'}}>
            <div class="my-3 py-3">
              <h2 class="display-5">Patek Philippe</h2>
              <p class="lead">Patek Philippe for women: epitome of timeless elegance.</p>
            </div>
                <img
                  class="rounded-lg-3"
                  src='https://cdn0.rubylane.com/shops/solvangantiques/SSHOx20808.1L.jpg?25'
                  alt="Watch"
                  style={{width:'400px',height:'380px'}}
                  id="Mobiles"
                />
              </div>

        </div>
        <header class="pb-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center text-body-emphasis text-decoration-none"
          >
            <span class="fs-4 mx-5 fw-bold" style={{ color: "white",fontFamily:'Georgia, serif' }}>
              Top Toys for Kids 
            </span>
          </a>
        </header>
        <div class="d-md-flex flex-md-equal w-100  ps-md-3" style={{padding:'10px'}}>
          <div class=" me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard" style={{backgroundColor:'rgb(10 157 161)',color:'white'}}>
            <div class="my-3 py-3">
              <h2 class="display-5">Talking Cactus </h2>
              <p class="lead">Interactive, fun-filled learning with a spiky twist!</p>
            </div>
            
              <div class="col-10 col-sm-8 col-lg-6">
                <img
                  class="rounded-lg-3"
                  src='https://www.symbios.pk/image/cache/data/9/9b2e5a2152cae591484dc8d0845d0b8f-removebg-preview-500x500.png'
                  alt="Toy"
                  style={{width:'400px'}}
                  id="Mobiles"
                />
              </div>
          </div>
          <div class=" me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard" style={{backgroundColor:'rgb(10 157 161)',color:'white'}}>
            <div class="my-3 py-3">
              <h2 class="display-5">Remote Controler Car</h2>
              <p class="lead">Endless joy, easy control, and durable design </p>
            </div>
                <img
                  class=" rounded-lg-3"
                  src='https://kidsvip.ca/wp-content/uploads/2019/08/602_9843-kid.png'
                  alt="Toy"
                  style={{width:'400px'}}
                  id="Mobiles"
                />
              </div>
              <div class=" me-md-3 pt-3 px-3 pt-md-5 px-md-5 my-3 text-center overflow-hidden" id="MobileCard" style={{backgroundColor:'rgb(10 157 161)',color:'white'}}>
            <div class="my-3 py-3">
              <h2 class="display-5">Teddy Bear</h2>
              <p class="lead"> Huggable, comforting, and a lifelong friend </p>
            </div>
                <img
                  class="rounded-lg-3"
                  src='https://www.pngmart.com/files/13/Plush-Transparent-PNG.png'
                  alt="Toy"
                  style={{width:'400px'}}
                  id="Mobiles"
                />
              </div>

        </div>
      </main>
    </div>
  );
};

export default Home;
