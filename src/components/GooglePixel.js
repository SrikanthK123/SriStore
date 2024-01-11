import React from 'react'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const GooglePixel = () => {
   const  vivoMobiles =[
        {
            title : "vivo X90 5G",
                desc : "Discover the perfect blend of style and innovation with Vivo mobiles, available for seamless online shopping. Explore a wide range of models boasting advanced features, sleek designs.",
                Price : "63000",
                MainTitle : "vivo X90 5G",
                imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689156881/Croma%20Assets/Communication/Mobiles/Images/271554_0_awnxq0.png?tr=w-640",
        },
        {
            title : "vivo X100 Pro 5G",
                desc : "Discover the perfect blend of style and innovation with Vivo mobiles, available for seamless online shopping. Explore a wide range of models boasting advanced features, sleek designs.",
                Price : "63000",
                MainTitle : "vivo X100 Pro 5G",
                imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703916591/Croma%20Assets/Communication/Mobiles/Images/303577_mwvz6y.png?tr=w-640",
        },
        {
            title : "vivo T2 5G",
                desc : "Discover the perfect blend of style and innovation with Vivo mobiles, available for seamless online shopping. Explore a wide range of models boasting advanced features, sleek designs.",
                Price : "11000",
                MainTitle : "vivo T2 5G",
                imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697626196/Croma%20Assets/Communication/Mobiles/Images/271393_cnwf06.png?tr=w-640",
        },
        {
            title : "vivo Y17s",
                desc : "Discover the perfect blend of style and innovation with Vivo mobiles, available for seamless online shopping. Explore a wide range of models boasting advanced features, sleek designs.",
                Price : "11000",
                MainTitle : "vivo Y17s",
                imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696858536/Croma%20Assets/Communication/Mobiles/Images/300739_ojb7u8.png?tr=w-640",
        },
        {
            title : "vivo Y02T",
                desc : "Discover the perfect blend of style and innovation with Vivo mobiles, available for seamless online shopping. Explore a wide range of models boasting advanced features, sleek designs.",
                Price : "8000",
                MainTitle : "vivo Y02T",
                imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689153394/Croma%20Assets/Communication/Mobiles/Images/273473_0_gkauyu.png?tr=w-640",
        },
        {
            title : "vivo V29e 5G",
                desc : "Discover the perfect blend of style and innovation with Vivo mobiles, available for seamless online shopping. Explore a wide range of models boasting advanced features, sleek designs.",
                Price : "18000",
                MainTitle : "vivo V29e 5G",
                imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703081487/Croma%20Assets/Communication/Mobiles/Images/300158_0_w2xugk.png?tr=w-640",
        },
        {
            title : "vivo V29 5G",
                desc : "Discover the perfect blend of style and innovation with Vivo mobiles, available for seamless online shopping. Explore a wide range of models boasting advanced features, sleek designs.",
                Price : "32000",
                MainTitle : "vivo V29 5G",
                imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696435835/Croma%20Assets/Communication/Mobiles/Images/301419_ov7h5n.png?tr=w-640",
        },
        {
            title : "vivo Y100A 5G",
                desc : "Discover the perfect blend of style and innovation with Vivo mobiles, available for seamless online shopping. Explore a wide range of models boasting advanced features, sleek designs.",
                Price : "20000",
                MainTitle : "vivo Y100A 5G",
                imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689152469/Croma%20Assets/Communication/Mobiles/Images/271389_0_rojdud.png?tr=w-640",
        }
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
         Top Vivo Phones 
       </span>
     </a>
   </header>
   <div className="container">
   <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
   {vivoMobiles.map((vivoMobilesPhones, index) => (
         <div key={index} className="feature col d-flex justify-content-center">
           <div
             className="card mx-auto"
             id="LaptopCards"
             style={{ width: "18rem" }}
           >
              <img
             src={vivoMobilesPhones.imageUrl}
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
                   {vivoMobilesPhones.title}
                 </h3>
                 <p className="text-white" style={{ textAlign: "justify" }}>
                   {vivoMobilesPhones.desc}
                 </p>
                 <ul class="d-flex list-unstyled mt-auto">
                   <li class="me-auto mx-3">
                     <h4 style={{ color: "white" }}>₹{vivoMobilesPhones.Price}</h4>
                   </li>
                   <li class="d-flex align-items-center me-3 mx-4">
                     <Link to={`/${vivoMobilesPhones.title}`} id="openPage">
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
               <h5 > {vivoMobilesPhones.MainTitle}</h5>
             </div>
           </div>
         </div>
       ))}
   </div>
 </div>
 </div>
  )
}

export default GooglePixel
