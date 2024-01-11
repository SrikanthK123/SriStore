import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const HPList = () => {
  const Laptops = [
    {
      title : "HP Laptop 15",
      desc : "HP laptops are synonymous with reliability and versatility, providing a diverse range of devices from the business-focused EliteBook series to the consumer-friendly Pavilion lineup.",
      Price : "₹54000",
      MainTitle : "HP Laptop 15-fd0018TU",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1693806305/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272179_1_t81dzb.png",

    },
    {
      title : "Victus Gaming",
      desc : "HP laptops are synonymous with reliability and versatility, providing a diverse range of devices from the business-focused EliteBook series to the consumer-friendly Pavilion lineup.",
      Price : "₹54000",
      MainTitle : "Victus Gaming",
      imageUrl : "https://th.bing.com/th/id/R.f3dd4dfd9901707709e0ec79a10ad8a1?rik=qalZkKgd2xrWXA&riu=http%3a%2f%2fomen-pro.hp.com%2fcontent%2fdam%2fsites%2fomen%2fworldwide%2flaptops%2f2022-victus-15-intel%2fHero+Image+2.png&ehk=UyebIIK4K8HkpGt6oWPzvZ8JkMfK36MtDetlwIfJPBk%3d&risl=&pid=ImgRaw&r=0",

    },
    {
      title : " HP Laptop 39.6 cm",
      desc : "HP laptops are synonymous with reliability and versatility, providing a diverse range of devices from the business-focused EliteBook series to the consumer-friendly Pavilion lineup.",
      Price : "₹54000",
      MainTitle : "HP Laptop 39.6 cm",
      imageUrl : "https://e2simages.excess2sell.com/images/pviews/hpseqcolaam1687239574189_1687239574_view1.png",

    },
    {
      title : "HP Envy 39.6 cm",
      desc : "HP laptops are synonymous with reliability and versatility, providing a diverse range of devices from the business-focused EliteBook series to the consumer-friendly Pavilion lineup.",
      Price : "₹54000",
      MainTitle : "HP Envy 39.6 cm",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688726647/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275036_11_c0cklc.png",

    },
    {
      title : "HP Pavilion - Gold",
      desc : "HP laptops are synonymous with reliability and versatility, providing a diverse range of devices from the business-focused EliteBook series to the consumer-friendly Pavilion lineup.",
      Price : "₹54000",
      MainTitle : "HP Pavilion - Gold",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683559247/Croma%20Assets/Computers%20Peripherals/Laptop/Images/270527_17_tvzybu.png?tr=w-1000",

    },
    {
      title : "HP Laptop - Silver",
      desc : "HP laptops are synonymous with reliability and versatility, providing a diverse range of devices from the business-focused EliteBook series to the consumer-friendly Pavilion lineup.",
      Price : "₹54000",
      MainTitle : "HP Laptop - Silver",
      imageUrl : "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07972012.png",

    },
    {
      title : "HP Chromebook",
      desc : "HP laptops are synonymous with reliability and versatility, providing a diverse range of devices from the business-focused EliteBook series to the consumer-friendly Pavilion lineup.",
      Price : "₹54000",
      MainTitle : "HP Chromebook",
      imageUrl : "https://store.hp.com/wcsstore/hpusstore/Treatment/mdps/chromeb-fam/chromeb_family_q2fy20_ksp4_img4.png",

    },
    {
      title : "HP Pavilion Aero",
      desc : "HP laptops are synonymous with reliability and versatility, providing a diverse range of devices from the business-focused EliteBook series to the consumer-friendly Pavilion lineup.",
      Price : "₹54000",
      MainTitle : "HP Pavilion Aero",
      imageUrl : "https://hk-files.apjonlinecdn.com/family-pages/hp-pavilion-family/images/products-row-2-img-min-generic.png",

    },
  ]
  return (
    <div className="HomePage">
        
    <header class="pb-3 mb-4 border-bottom">
      <a
        href="/"
        class="d-flex align-items-center text-body-emphasis text-decoration-none"
      >
        <span
          class="fs-4 mx-5 fw-bold"
          style={{ color: "white", fontFamily: "Georgia, serif" }}
        >
          Top HP Laptops 
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

export default HPList
