import React, {useEffect} from 'react'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const AppleMobiles = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
   const IPhones = [
        {
            title : "Apple iPhone 11",
            desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features.",
            Price : "37000",
            MainTitle : "Apple iPhone 11",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662418914/Croma%20Assets/Communication/Mobiles/Images/230107_t40uo8.png?tr=w-640",
        },
        {
            title : "Apple iPhone 13 Pro Max",
            desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features.",
            Price : "180000",
            MainTitle : "Apple iPhone 13 Pro Max",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664009277/Croma%20Assets/Communication/Mobiles/Images/243535_0_bf6urz.png?tr=w-640",
        },
        {
            title : "Apple iPhone 15 Pro",
            desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features.",
            Price : "133000",
            MainTitle : "Apple iPhone 15 Pro",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694674571/Croma%20Assets/Communication/Mobiles/Images/300749_0_y3aw57.png?tr=w-640",
        },
        {
            title : "Apple iPhone 14",
            desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features.",
            Price : "64000",
            MainTitle : "Apple iPhone 14",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662703417/Croma%20Assets/Communication/Mobiles/Images/261931_kalj3i.png?tr=w-640",
        },
        {
            title : "Apple iPhone 14 Plus",
            desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features.",
            Price : "75000",
            MainTitle : "Apple iPhone 14 Plus",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662703259/Croma%20Assets/Communication/Mobiles/Images/261945_kci7ll.png?tr=w-640",
        },
        {
            title : "Apple iPhone 14 Pro Max",
            desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features.",
            Price : "128000",
            MainTitle : "Apple iPhone 14 Pro Max ",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662655585/Croma%20Assets/Communication/Mobiles/Images/261976_j6acr4.png?tr=w-640",
        },
        {
            title : "Apple iPhone 12",
            desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features.",
            Price : "50000",
            MainTitle : "Apple iPhone 12",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662424588/Croma%20Assets/Communication/Mobiles/Images/229925_lhcfej.png?tr=w-640",
        },
        {
            title : "Apple iPhone 14 Pro-Gold",
            desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features.",
            Price : "122000",
            MainTitle : "Apple iPhone 14 Pro(Gold)",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662655547/Croma%20Assets/Communication/Mobiles/Images/261970_blsyac.png?tr=w-640",
        },
    ]
  return (
    <div className='HomePage'>
       <header class="pb-3 mb-4 " style={{display:'flex',justifyContent:'center'}}>
        <a
          href="/"
          class="d-flex align-items-center text-body-emphasis text-decoration-none"
        >
          <span
            class="fs-6 mx-5 fw-bold"
            style={{ color: "white", fontFamily: "Georgia, serif",marginTop:'20px',backgroundColor:'#f67280',padding:'10px',borderRadius:'12px',width:'fit-Content'}}
          >
             <img src='https://cdn-icons-png.flaticon.com/512/5608/5608615.png' style={{width:'50px'}} />
            Top Apple Phones 
          </span>
        </a>
      </header>
      <div className="container">
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
      {IPhones.map((iphones, index) => (
            <div key={index} className="feature col d-flex justify-content-center">
              <div
                className="card mx-auto"
                id="LaptopCards"
                style={{ width: "18rem" }}
              >
                 <img
                src={iphones.imageUrl}
                className="card-img"
                alt="..."
                id="ImgList"
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
                      {iphones.title}
                    </h3>
                    <p className="text-white" style={{ textAlign: "justify" }}>
                      {iphones.desc}
                    </p>
                    <ul class="d-flex list-unstyled mt-auto">
                      <li class="me-auto mx-3">
                        <h4 style={{ color: "white" }}>₹{iphones.Price}</h4>
                      </li>
                      <li class="d-flex align-items-center me-3 mx-4">
                        <Link to={`/${iphones.title}`} id="openPage">
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
                  <h5 > {iphones.MainTitle}</h5>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    </div>
  )
}

export default AppleMobiles
