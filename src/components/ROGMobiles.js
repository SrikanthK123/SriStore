import React from 'react'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const ROGMobiles = () => {
    const RealMePhones = [
        {
            title : "realme C53",
            desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features.",
            Price : "9000",
            MainTitle : "realme C53",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697022306/Croma%20Assets/Communication/Mobiles/Images/275240_0_a0pebs.png?tr=w-640",
        },
        {
            title : "realme 11 5G",
            desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features.",
            Price : "17000",
            MainTitle : "realme 11 5G",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1692788990/Croma%20Assets/Communication/Mobiles/Images/300113_v2cqcn.png?tr=w-640",
        },
        {
            title : "realme C67 5G",
            desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features.",
            Price : "14000",
            MainTitle : "realme C67 5G",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702539425/Croma%20Assets/Communication/Mobiles/Images/303221_kcqf5u.png?tr=w-640",
        },
        {
            title : "realme 11 Pro Plus 5G",
            desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features.",
            Price : "30000",
            MainTitle : "realme 11 Pro Plus 5G",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1686298123/Croma%20Assets/Communication/Mobiles/Images/273454_on82gs.png?tr=w-640",
        },
        {
            title : "realme C55",
            desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features.",
            Price : "12000",
            MainTitle : "realme C55",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689155951/Croma%20Assets/Communication/Mobiles/Images/270932_0_swygzm.png?tr=w-640",
        },
        {
            title : "realme 9 Pro+ 5G",
            desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features.",
            Price : "22000",
            MainTitle : "realme 9 Pro+ 5G",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662440823/Croma%20Assets/Communication/Mobiles/Images/248839_a4lo5i.png?tr=w-640",
        },
        {
            title : "realme C30",
            desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features.",
            Price : "3700",
            MainTitle : "realme C30",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1680399706/Croma%20Assets/Communication/Mobiles/Images/258552_yxtksi.png?tr=w-640",
        },
        {
            title : "realme 8i",
            desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features.",
            Price : "6700",
            MainTitle : "realme 8i",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662442870/Croma%20Assets/Communication/Mobiles/Images/243060_wthuve.png?tr=w-640",
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
         class="fs-5 mx-5 fw-bold"
         style={{ color: "white", fontFamily: "Georgia, serif",marginTop:'20px',backgroundColor:'#f67280',padding:'10px',borderRadius:'12px',width:'fit-Content'}}
       >
         <img src='https://cdn-icons-png.flaticon.com/512/5608/5608615.png' style={{width:'50px'}} />
         Top RealMe Phones 
       </span>
     </a>
   </header>
   <div className="container">
   <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
   {RealMePhones.map((rogphones, index) => (
         <div key={index} className="feature col d-flex justify-content-center">
           <div
             className="card mx-auto"
             id="LaptopCards"
             style={{ width: "18rem" }}
           >
              <img
             src={rogphones.imageUrl}
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
                   {rogphones.title}
                 </h3>
                 <p className="text-white" style={{ textAlign: "justify" }}>
                   {rogphones.desc}
                 </p>
                 <ul class="d-flex list-unstyled mt-auto">
                   <li class="me-auto mx-3">
                     <h4 style={{ color: "white" }}>₹{rogphones.Price}</h4>
                   </li>
                   <li class="d-flex align-items-center me-3 mx-4">
                     <Link to={`/${rogphones.title}`} id="openPage">
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
               <h5 > {rogphones.MainTitle}</h5>
             </div>
           </div>
         </div>
       ))}
   </div>
 </div>
 </div>
  )
}

export default ROGMobiles
