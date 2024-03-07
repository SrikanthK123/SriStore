import React,{useEffect} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import image from '../Images/online-learning1.gif'
const LenovoList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const Laptops = [
    {
      title : "Lenovo Chromebook C330",
      desc : " Lenovo laptops combine cutting-edge design with robust performance, offering a diverse range from professional ThinkPads to gaming-oriented Legions.",
      Price : "₹54000",
      MainTitle : "Lenovo Chromebook C330",
      imageUrl : "https://www.lenovo.com/medias/lenovo-laptops-lenovo-student-chromebooks-ideapad-flex-3-chromebook-11-gallery-5.png?context=bWFzdGVyfHJvb3R8MTA5ODA3fGltYWdlL3BuZ3xoNjkvaDBlLzEwODcyNjI1ODg5MzEwLnBuZ3w2OTMxYzgzYmU3YzRhZjkwMGUxOWNjYWUyYTNjYTc0MjkyYzZjMWEwNjc3YTFhYjFmNDgxY2Q1NDA4OWQ5NGI4",

    },
    {
      title : "Lenovo Flex Laptop",
      desc : " Lenovo laptops combine cutting-edge design with robust performance, offering a diverse range from professional ThinkPads to gaming-oriented Legions.",
      Price : "₹54000",
      MainTitle : "Lenovo Flex Laptop",
      imageUrl : "https://www.lenovo.com/medias/lenovo-ideapad-l340-15-gaming-front.png?context=bWFzdGVyfHJvb3R8NzEyODJ8aW1hZ2UvcG5nfGhjYS9oNjIvMTAwODgxMzc1MjMyMzAucG5nfDcyZWYxMzY0ZDRmN2IzMGRiMTY5NzdlZDA4MTFmODY1YWUzZjJjY2I3ZTIzMmI0ZDM0MjVlN2ZjNmRmYWM2MTc",

    },
    {
      title : "Lenovo Ideapad L340",
      desc : " Lenovo laptops combine cutting-edge design with robust performance, offering a diverse range from professional ThinkPads to gaming-oriented Legions.",
      Price : "₹54000",
      MainTitle : "Lenovo Ideapad L340",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697016285/Croma%20Assets/Computers%20Peripherals/Laptop/Images/300236_0_u4clsp.png?tr=w-640",

    },
    {
      title : "Lenovo Legion 5",
      desc : " Lenovo laptops combine cutting-edge design with robust performance, offering a diverse range from professional ThinkPads to gaming-oriented Legions.",
      Price : "₹54000",
      MainTitle : "Lenovo Legion 5, AMD Ryzen-7",
      imageUrl : "https://gadgetguy-assets.s3.ap-southeast-2.amazonaws.com/wordpress/wp-content/uploads/2021/07/08152412/Lenovo_Legion_5_Pro_16ACH6H_CT2_02.png",

    },
    {
      title : "Lenovo IdeaPad 3",
      desc : " Lenovo laptops combine cutting-edge design with robust performance, offering a diverse range from professional ThinkPads to gaming-oriented Legions.",
      Price : "₹54000",
      MainTitle : "Lenovo Chromebook Duet",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689153299/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272714_0_d9tfur.png?tr=w-640",

    },
    {
      title : "Lenovo YOGA C740-14",
      desc : " Lenovo laptops combine cutting-edge design with robust performance, offering a diverse range from professional ThinkPads to gaming-oriented Legions.",
      Price : "₹54000",
      MainTitle : "Lenovo YOGA C740-14",
      imageUrl : "https://www.lenovo.com/medias/lenovo-laptop-yoga-c740-14-series.png?context=bWFzdGVyfHJvb3R8MTE4MTQ1fGltYWdlL3BuZ3xoMmUvaGUzLzE0MzM5NTc5OTY5NTY2LnBuZ3xkZGM3YTMwMzQ5ZTNiY2YwM2NhZjJmZDdkZjEzYTgwZGM2N2NkNGNmN2E2MDFmYjVmMzFjOGZhZTk2YzI2ZGJl",

    },
    {
      title : "Lenovo IdeaPad Gaming 3",
      desc : " Lenovo laptops combine cutting-edge design with robust performance, offering a diverse range from professional ThinkPads to gaming-oriented Legions.",
      Price : "₹54000",
      MainTitle : "Lenovo ThinkPad X1 Carbon",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690470310/Croma%20Assets/Computers%20Peripherals/Laptop/Images/269865_zdgdgr.png?tr=w-640",

    },
    {
      title : "Lenovo Yoga 9i 14",
      desc : "Lenovo laptops combine cutting-edge design with robust performance, offering a diverse range from professional ThinkPads to gaming-oriented Legions.",
      Price : "₹54000",
      MainTitle : "Lenovo Yoga 9i 14",
      imageUrl : "https://gearshop.vn/upload/resizer.php?src=https://gearshop.vn/upload/images/Product/Lenovo/Laptop/Yoga%209/14IAP7%20-%2082LU006DVN/Laptop-Lenovo-Yoga-9-14IAP7-82LU006DVN-(4).png&w=1200&h=1200&q=72&zc=2",

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
         Top Lenovo Laptop 
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

export default LenovoList
