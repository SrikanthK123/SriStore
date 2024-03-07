import React,{useEffect} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import image from '../Images/online-learning1.gif'
const MacList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const Laptops = [
    {
      title : "Apple 13-inch M1",
      desc : " Mac laptops, crafted by Apple, offer a seamless blend of sleek design and powerful performance, delivering an intuitive user experience with cutting-edge technology. ",
      Price : "₹54000",
      MainTitle : "Apple 13-inch M1",
      imageUrl : "https://cdn.shopify.com/s/files/1/0183/5769/products/Macbook-Air_0001_438589-Product-0-I-637205826045105601_800x800_0f7a096f-d491-4eef-b0ac-849937b8b7dd.png?v=1618283708",

    },
    {
      title : "MacBook Air 15",
      desc : " Mac laptops, crafted by Apple, offer a seamless blend of sleek design and powerful performance, delivering an intuitive user experience with cutting-edge technology. ",
      Price : "₹54000",
      MainTitle : "MacBook Air 15",
      imageUrl : "https://pngimg.com/uploads/macbook/macbook_PNG51.png",

    },
    {
      title : "MacBook Pro 14",
      desc : " Mac laptops, crafted by Apple, offer a seamless blend of sleek design and powerful performance, delivering an intuitive user experience with cutting-edge technology. ",
      Price : "₹54000",
      MainTitle : "MacBook Pro 14",
      imageUrl : "https://www.pngarts.com/files/4/Apple-Macbook-Pro-Transparent-Images.png",

    },
    {
      title : "Imac",
      desc : " Mac laptops, crafted by Apple, offer a seamless blend of sleek design and powerful performance, delivering an intuitive user experience with cutting-edge technology. ",
      Price : "₹54000",
      MainTitle : "Imac",
      imageUrl : "https://s3-us-west-2.amazonaws.com/shopify.sellyourmac.com/Shopify-Images/iMac-Slim-21.png",

    },
    {
      title : "Macbook Pro",
      desc : " Mac laptops, crafted by Apple, offer a seamless blend of sleek design and powerful performance, delivering an intuitive user experience with cutting-edge technology. ",
      Price : "₹54000",
      MainTitle : "Macbook Pro",
      imageUrl : "https://www.freepnglogos.com/uploads/macbook-png/apple-macbook-air-quot-skins-custom-laptop-skins-30.png",

    },
    {
      title : "Macbook Pro 15",
      desc : " Mac laptops, crafted by Apple, offer a seamless blend of sleek design and powerful performance, delivering an intuitive user experience with cutting-edge technology. ",
      Price : "₹54000",
      MainTitle : "Macbook Pro 15",
      imageUrl : "https://prosteps.cloudimg.io/v7m/resizeinbox/1000x1000/fsharp0/https://tilroy.s3.eu-west-1.amazonaws.com/354/product/MBA-15-starlight-13.png",

    },
    {
      title : "Macbook Pro 14 Pro",
      desc : " Mac laptops, crafted by Apple, offer a seamless blend of sleek design and powerful performance, delivering an intuitive user experience with cutting-edge technology. ",
      Price : "₹54000",
      MainTitle : "Macbook Pro 14 Pro",
      imageUrl : "https://www.pngarts.com/files/4/Apple-Macbook-Pro-Transparent-Image.png",

    },
    {
      title : "Macbook Pro A1278",
      desc : " Mac laptops, crafted by Apple, offer a seamless blend of sleek design and powerful performance, delivering an intuitive user experience with cutting-edge technology. ",
      Price : "₹54000",
      MainTitle : "Macbook Pro A1278",
      imageUrl : "https://www.greenit.ie/schools/wp-content/uploads/sites/4/2020/01/Apple-MacBook-Pro-A1278-MC700LLA.png",

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
         Top Mac Laptop 
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

export default MacList
