import React from 'react'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const OnePlusMobiles = () => {
    const OnePlusPhones = [
        {
            title : "OnePlus 11 5G",
            desc : "Experience flagship performance and sleek design with OnePlus mobiles, available for seamless online shopping",
            Price : "61000",
            MainTitle : "OnePlus 11 5G",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675251452/Croma%20Assets/Communication/Mobiles/Images/268761_ldq3nt.png?tr=w-640",
        },
        {
            title : "OnePlus 10 Pro 5G",
            desc : "Experience flagship performance and sleek design with OnePlus mobiles, available for seamless online shopping",
            Price : "103000",
            MainTitle : "OnePlus 10 Pro 5G ",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1666992010/Croma%20Assets/Communication/Mobiles/Images/250719_t2svgl.png?tr=w-640",
        },
        {
            title : "OnePlus 10T 5G",
            desc : "Experience flagship performance and sleek design with OnePlus mobiles, available for seamless online shopping",
            Price : "39000",
            MainTitle : "OnePlus 10T 5G",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683553576/Croma%20Assets/Communication/Mobiles/Images/259487_0_mrzk3t.png?tr=w-640",
        },
        {
            title : "OnePlus Nord CE 3 Lite 5G",
            desc : "Experience flagship performance and sleek design with OnePlus mobiles, available for seamless online shopping",
            Price : "67000",
            MainTitle : "OnePlus Nord CE 3 Lite 5G",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697017854/Croma%20Assets/Communication/Mobiles/Images/270656_0_p6disg.png?tr=w-640",
        },
        {
            title : "OnePlus 10R 5G",
            desc : "Experience flagship performance and sleek design with OnePlus mobiles, available for seamless online shopping",
            Price : "94000",
            MainTitle : "OnePlus 10R 5G",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662436197/Croma%20Assets/Communication/Mobiles/Images/252418_hz8qqi.png?tr=w-640",
        },
        {
            title : "OnePlus Nord 3 5G",
            desc : "Experience flagship performance and sleek design with OnePlus mobiles, available for seamless online shopping",
            Price : "33000",
            MainTitle : "OnePlus Nord 3 5G",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689050760/Croma%20Assets/Communication/Mobiles/Images/274673_vmfyd3.png?tr=w-640",
        },
        {
            title : "OnePlus Nord CE3 5G",
            desc : "Experience flagship performance and sleek design with OnePlus mobiles, available for seamless online shopping",
            Price : "24000",
            MainTitle : "OnePlus Nord CE3 5G",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1691050214/Croma%20Assets/Communication/Mobiles/Images/275685_iblzsb.png?tr=w-640",
        },
        {
            title : "OnePlus 11R 5G",
            desc : "Experience flagship performance and sleek design with OnePlus mobiles, available for seamless online shopping",
            Price : "44000",
            MainTitle : "OnePlus 11R 5G",
            imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697625095/Croma%20Assets/Communication/Mobiles/Images/269146_ltv0e6.png?tr=w-640",
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
         Top OnePlus Phones 
       </span>
     </a>
   </header>
   <div className="container">
   <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
   {OnePlusPhones.map((oneplusPhones, index) => (
         <div key={index} className="feature col d-flex justify-content-center">
           <div
             className="card mx-auto"
             id="LaptopCards"
             style={{ width: "18rem" }}
           >
              <img
             src={oneplusPhones.imageUrl}
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
                   {oneplusPhones.title}
                 </h3>
                 <p className="text-white" style={{ textAlign: "justify" }}>
                   {oneplusPhones.desc}
                 </p>
                 <ul class="d-flex list-unstyled mt-auto">
                   <li class="me-auto mx-3">
                     <h4 style={{ color: "white" }}>₹{oneplusPhones.Price}</h4>
                   </li>
                   <li class="d-flex align-items-center me-3 mx-4">
                     <Link to={`/${oneplusPhones.title}`} id="openPage">
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
               <h5 > {oneplusPhones.MainTitle}</h5>
             </div>
           </div>
         </div>
       ))}
   </div>
 </div>
 </div>
  )
}

export default OnePlusMobiles
