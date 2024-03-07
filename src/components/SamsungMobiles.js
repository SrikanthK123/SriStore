import React,{useEffect} from 'react'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const SamsungMobiles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
    const SamsungPhones = [
        {
            title : "Samsung Galaxy S23",
            desc : "Shop for Samsung mobiles online, experiencing the perfect blend of innovation and style with cutting-edge features",
            Price : "60000",
            MainTitle : "SAMSUNG Galaxy S23 FE 5G",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696593467/Croma%20Assets/Communication/Mobiles/Images/301866_jfzjlc.png?tr=w-640",
        },
        {
            title : "Samsung Galaxy S23 Plus",
            desc : "Shop for Samsung mobiles online, experiencing the perfect blend of innovation and style with cutting-edge features",
            Price : "103000",
            MainTitle : "Samsung Galaxy S23 Plus",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675347214/Croma%20Assets/Communication/Mobiles/Images/268875_csxo0h.png?tr=w-640",
        },
        {
            title : "Samsung Galaxy S23 Ultra",
            desc : "Shop for Samsung mobiles online, experiencing the perfect blend of innovation and style with cutting-edge features",
            Price : "123000",
            MainTitle : "Samsung Galaxy S23 Ultra",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675347234/Croma%20Assets/Communication/Mobiles/Images/268880_vr6pxm.png?tr=w-640",
        },
        {
            title : "Samsung Galaxy S22",
            desc : "Shop for Samsung mobiles online, experiencing the perfect blend of innovation and style with cutting-edge features",
            Price : "67000",
            MainTitle : "Samsung Galaxy S22",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662441829/Croma%20Assets/Communication/Mobiles/Images/248896_fbyfns.png?tr=w-640",
        },
        {
            title : "Samsung Galaxy Z",
            desc : "Shop for Samsung mobiles online, experiencing the perfect blend of innovation and style with cutting-edge features",
            Price : "94000",
            MainTitle : "Samsung Galaxy Z",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1665509976/Croma%20Assets/Communication/Mobiles/Images/260518_0_xgeskk.png?tr=w-640",
        },
        {
            title : "SAMSUNG Galaxy Z Fold5",
            desc : "Shop for Samsung mobiles online, experiencing the perfect blend of innovation and style with cutting-edge features",
            Price : "153000",
            MainTitle : "SAMSUNG Galaxy Z Fold5",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690528172/Croma%20Assets/Communication/Mobiles/Images/275452_c3l9zl.png?tr=w-640",
        },
        {
            title : "SAMSUNG Galaxy S22 Ultra",
            desc : "Shop for Samsung mobiles online, experiencing the perfect blend of innovation and style with cutting-edge features",
            Price : "100000",
            MainTitle : "SAMSUNG Galaxy S22 Ultra",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662439540/Croma%20Assets/Communication/Mobiles/Images/248910_le7z4e.png?tr=w-640",
        },
        {
            title : "SAMSUNG Galaxy S21",
            desc : "Shop for Samsung mobiles online, experiencing the perfect blend of innovation and style with cutting-edge features",
            Price : "41000",
            MainTitle : "SAMSUNG Galaxy S21 ",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701615009/Croma%20Assets/Communication/Mobiles/Images/300445_0_sllzha.png?tr=w-640",
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
            style={{ color: "white", fontFamily: "Georgia, serif",marginTop:'20px',backgroundColor:'#f67280',padding:'10px',borderRadius:'12px'}}
          >
            <img src='https://cdn-icons-png.flaticon.com/512/5608/5608615.png' style={{width:'50px'}} />
            Top Samsung Phones 
          </span>
        </a>
      </header>
      <div className="container">
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
      {SamsungPhones.map((samsungphones, index) => (
            <div key={index} className="feature col d-flex justify-content-center">
              <div
                className="card mx-auto"
                id="LaptopCards"
                style={{ width: "18rem" }}
              >
                 <img
                src={samsungphones.imageUrl}
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
                      {samsungphones.title}
                    </h3>
                    <p className="text-white" style={{ textAlign: "justify" }}>
                      {samsungphones.desc}
                    </p>
                    <ul class="d-flex list-unstyled mt-auto">
                      <li class="me-auto mx-3">
                        <h4 style={{ color: "white" }}>₹{samsungphones.Price}</h4>
                      </li>
                      <li class="d-flex align-items-center me-3 mx-4">
                        <Link to={`/${samsungphones.title}`} id="openPage">
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
                  <h5 > {samsungphones.MainTitle}</h5>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    </div>
  )
}

export default SamsungMobiles
