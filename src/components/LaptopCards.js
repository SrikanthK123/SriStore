import React, {useEffect} from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import image from '../Images/online-learning1.gif'
const LaptopCards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const Laptops = [
    {
      title : "Vostro 3520",
      desc : "Dell laptops are versatile and come in a range of models to suit different needs, including small business productivity, gaming, and creativity.",
      Price : "₹54000",
      MainTitle : "Vostro 3520",
      imageUrl : "https://www.downloadclipart.net/medium/dell-laptop-png-pic.png",

    },
    {
      title : "Inspiron 15",
      desc : "Dell laptops are versatile and come in a range of models to suit different needs, including small business productivity, gaming, and creativity.",
      Price : "₹56000",
      MainTitle : "Inspiron 15",
      imageUrl : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3520/media-gallery/in3520-cnb-05000ff090-sl.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full",

    },
    {
      title : "G-Series",
      desc : "Dell laptops are versatile and come in a range of models to suit different needs, including small business productivity, gaming, and creativity.",
      Price : "₹161000",
      MainTitle : "G-Series",
      imageUrl : "https://basic-tutorials.com/wp-content/uploads/2019/01/Dell-G5-15-SE_03.png",

    },
    {
      title : "Latitude E6430",
      desc : "Dell laptops are versatile and come in a range of models to suit different needs, including small business productivity, gaming, and creativity.",
      Price : "₹63000",
      MainTitle : "Latitude E6430, AMD Ryzen-7",
      imageUrl : "https://laptop88.vn/media/product/3899_dell_e6430_4.png",

    },
    {
      title : "Inspiron 14 2-in-1",
      desc : "Dell laptops are versatile and come in a range of models to suit different needs, including small business productivity, gaming, and creativity.",
      Price : "₹65000",
      MainTitle : "Inspiron 14 2-in-1",
      imageUrl : "https://www.pngall.com/wp-content/uploads/2016/05/Laptop-PNG.png",

    },
    {
      title : "Inspiron 14",
      desc : "Dell laptops are versatile and come in a range of models to suit different needs, including small business productivity, gaming, and creativity.",
      Price : "₹62000",
      MainTitle : "Inspiron 14",
      imageUrl : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-7425-2n1/pdp/laptop-inspiron-14-2n1-7425-pdp-hero-gn-pen.psd?qlt=95&fit=constrain,1&hei=350&wid=500&fmt=png-alpha&wid=570&hei=400",

    },
    {
      title : "Notebook Dell",
      desc : "Dell laptops are versatile and come in a range of models to suit different needs, including small business productivity, gaming, and creativity.",
      Price : "₹54000",
      MainTitle : "Notebook Dell",
      imageUrl : "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/pt-br/pd-image-gallery/in5406t-ctb-00030lf120-gy-large.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=554&qlt=100,0&resMode=sharp2&size=554,402",

    },
    {
      title : "Vostro 16",
      desc : "Dell laptops are versatile and come in a range of models to suit different needs, including small business productivity, gaming, and creativity.",
      Price : "₹54000",
      MainTitle : "Vostro 16",
      imageUrl : "https://tech.co.za/wp-content/uploads/2022/07/notebook-vostro-16-5620-nt-bk-gallery-7-1536x1152.png",

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
         Top Dell Laptop 
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
                style={{ width: "18rem", }}
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
  );
};

export default LaptopCards;
