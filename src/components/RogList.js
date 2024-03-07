import React, {useEffect} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import image from '../Images/online-learning1.gif'
const RogList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const Laptops = [
    {
      title : "ROG Strix G17",
      desc : " ROG (Republic of Gamers) laptops, engineered by ASUS, redefine gaming excellence with cutting-edge hardware and immersive design.",
      Price : "₹54000",
      MainTitle : "ASUS ROG Strix G17",
      imageUrl : "https://dlcdnwebimgs.asus.com/gain/D68E2936-23E4-494C-9565-256117392C1F/w1000/h732",

    },
    {
      title : "ROG Strix G16",
      desc : " ROG (Republic of Gamers) laptops, engineered by ASUS, redefine gaming excellence with cutting-edge hardware and immersive design.",
      Price : "₹54000",
      MainTitle : "ASUS ROG Strix G16 ",
      imageUrl : "https://dlcdnwebimgs.asus.com/gain/B7F82858-38C0-4A42-B751-5DE480B0ABB6",

    },
    {
      title : "ROG Zephyrus Duo 16",
      desc : " ROG (Republic of Gamers) laptops, engineered by ASUS, redefine gaming excellence with cutting-edge hardware and immersive design.",
      Price : "₹54000",
      MainTitle : "ASUS ROG Zephyrus Duo 16",
      imageUrl : "https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2022/01/asus-rog-zephyrus-g14-2022-frandroid-2022.png?resize=170",

    },
    {
      title : "ROG Strix G15",
      desc : " ROG (Republic of Gamers) laptops, engineered by ASUS, redefine gaming excellence with cutting-edge hardware and immersive design.",
      Price : "₹54000",
      MainTitle : "ROG Strix G15, AMD Ryzen-7",
      imageUrl : "https://dlcdnwebimgs.asus.com/gain/D336705A-46C9-405F-9A01-D8F5EDD6B11E/w1000/h732",

    },
    {
      title : "ROG Strix Scar 15",
      desc : " ROG (Republic of Gamers) laptops, engineered by ASUS, redefine gaming excellence with cutting-edge hardware and immersive design.",
      Price : "₹54000",
      MainTitle : "ASUS ROG Strix Scar 15",
      imageUrl : "https://www.notebookcheck.net/fileadmin/_processed_/6/b/csm_ROG_STrix_Scar_153_052ee2a139.png",

    },
    {
      title : "ROG Zephyrus M16",
      desc : " ROG (Republic of Gamers) laptops, engineered by ASUS, redefine gaming excellence with cutting-edge hardware and immersive design.",
      Price : "₹54000",
      MainTitle : "ASUS ROG Zephyrus M16",
      imageUrl : "https://dlcdnwebimgs.asus.com/gain/676317DE-8D03-445A-AAC3-6BE6E558BF1E",

    },
    {
      title : "ROG Zephyrus G14",
      desc : " ROG (Republic of Gamers) laptops, engineered by ASUS, redefine gaming excellence with cutting-edge hardware and immersive design.",
      Price : "₹54000",
      MainTitle : "ASUS ROG Zephyrus G14",
      imageUrl : "https://dlcdnwebimgs.asus.com/gain/67D69C31-380C-48A0-89BF-5E0350891DE2",

    },
    {
      title : "ROG Flow X13",
      desc : " ROG (Republic of Gamers) laptops, engineered by ASUS, redefine gaming excellence with cutting-edge hardware and immersive design.",
      Price : "₹54000",
      MainTitle : "ASUS ROG Flow X13",
      imageUrl : "https://dlcdnwebimgs.asus.com/gain/0274F593-3FBB-45DF-97C9-A33636E654E7/w1000/h732",

    },
  ]
  return (
    <div className="HomePage">
   <header class="pb-3 mb-4 " style={{display:'flex',justifyContent:'center'}}>
      <a
       href="/"
       class="d-flex align-items-center text-body-emphasis text-decoration-none"
     >
          <span
         class="fs-6 mx-5 fw-bold"
         style={{ color: "white", fontFamily: "Georgia, serif",marginTop:'20px',backgroundColor:'#a2a8d3',padding:'10px',borderRadius:'12px',width:'fit-Content'}}
       >
         <img src= {image} style={{width:'50px',borderRadius:'12px'}} />
         Top ROG Laptops
       </span>
        </a>
      </header>
    <div className="container">
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
      {Laptops.map((laptop, index) => (
            <div key={index} className="feature col d-flex justify-content-center">
              <div
                className="card mx-auto"
                id="LaptopCards"
                style={{ width: "18rem" }}
              >
                <img
                  id="Image"
                  src={laptop.imageUrl}
                  className="card-img"
                  alt="..."
                />
                <div class="card-img-overlay d-flex align-items-center">
                  <div
                    className="card text-center"
                    id="CardBody"
                    style={{ padding: "10px" }}
                  >
                    <h3
                      className="card-title fw-bold text-white"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {laptop.title}
                    </h3>
                    <p className="text-white" style={{ textAlign: "justify" }}>
                      {laptop.desc}
                    </p>
                    <ul class="d-flex list-unstyled mt-auto">
                      <li class="me-auto mx-3">
                        <h4 style={{ color: "white" }}>{laptop.Price}</h4>
                      </li>
                      <li class="d-flex align-items-center me-3 mx-4">
                        <Link to={`/${laptop.title}`} id="openPage">
                          {" "}
                          Details{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            class="bi bi-arrow-up-right-square-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='text-box text-white mb-4' style={{ padding: '10px', display: 'flex', justifyContent: 'center', backgroundColor: 'black', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px' }}>
                  <h5 > {laptop.MainTitle}</h5>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
  )
}

export default RogList
