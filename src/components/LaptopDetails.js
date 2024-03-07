import React, { useState,useEffect } from "react";
import AddCartAnimi from "../Images/AddToCart1.gif";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import placeOrder from "../Images/delivery-truck1.gif";
import ProductAddCart from "../Images/ProductAddCart.gif";
const LaptopDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
 
  return (
    <div className='HomePage'>
  <div class="container">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 ">
    <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden ">
          <img class="rounded-lg-3" style={{backgroundColor:'#044a42',borderRadius:'15px'}} src= "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3520/media-gallery/in3520-cnb-05000ff090-sl.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full" alt="" width="720"/>
      </div>
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis" style={{fontFamily:'-moz-initial'}}>Vostro 3520</h1>
        
        <p class="lead text-white">Dell laptops are synonymous with reliability and innovation,offering cutting-edge technology for a seamless computing experience.</p>
        <h3>Price - 54000</h3>
        <div class="mb-5">
          <Link><img src='https://cdn-icons-png.flaticon.com/512/10473/10473788.png'  style={{width:'80px',borderRadius:'12px',backgroundColor:'#01497B',margin:'15px',boxShadow:'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}/></Link>
          <Link><img src='https://cdn-icons-png.flaticon.com/512/6190/6190179.png'  style={{width:'80px',borderRadius:'12px',backgroundColor:'#01497B',margin:'15px',boxShadow:'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}/></Link>
        </div>
        
      </div>
      
    </div>
    <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 border-bottom">Product Photos</h2>
    <section >
  <section class="" style={{marginTop:'20px'}}>
    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <div
          class="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light"
        >
          <img
            src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/vostro-15-3520/media-gallery/black/notebook-vostro-15-3520-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=606&qlt=100,1&resMode=sharp2&size=606,402&chrss=full"
            class="w-100"
          />
          <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal1">
            <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2);"}}></div>
          </a>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <div
          class="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light"
        >
          <img
            src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/vostro-15-3520/media-gallery/black/notebook-vostro-15-3520-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&wid=4592&hei=2864&qlt=100,1&resMode=sharp2&size=4592,2864&chrss=full&imwidth=5000"
            class="w-100"
          />
          <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal1">
            <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2);"}}></div>
          </a>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <div
          class="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light"
        >
          <img
            src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/vostro-15-3520/media-gallery/black/notebook-vostro-15-3520-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=565&qlt=100,1&resMode=sharp2&size=565,402&chrss=full"
            class="w-100"
          />
          <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal1">
            <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2);"}}></div>
          </a>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <div
          class="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light"
        >
          <img
            src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/vostro-15-3520/media-gallery/black/notebook-vostro-15-3520-gallery-9.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=603&qlt=100,1&resMode=sharp2&size=603,402&chrss=full"
            class="w-100"
          />
          <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal1">
            <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2);"}}></div>
          </a>
        </div>
      </div>

      <div class="col-lg-4 mb-4 mb-lg-0">
        <div
          class="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light"
        >
          <img
            src="https://www.cdsoft.co.il/img/scenes/dell-vostro-laptop2.jpg"
            class="w-100"
          />
          <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal2">
            <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2);"}}></div>
          </a>
        </div>
      </div>

    </div>
  </section>
  <section class="">
    <div
      class="modal fade"
      id="exampleModal1"
      tabindex="-1"
      aria-labelledby="exampleModal1Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/A3PDXmYoF5U"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>

          <div class="text-center py-3">
            <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModal2"
      tabindex="-1"
      aria-labelledby="exampleModal2Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/wTcNtgA6gHs"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>

          <div class="text-center py-3">
            <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModal3"
      tabindex="-1"
      aria-labelledby="exampleModal3Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/vlDzYIIOYmM"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>

          <div class="text-center py-3">
            <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</section>
  </div>
  <div class="container my-5" style={{padding:'10px'}}>
  <div class="p-2 text-center  rounded-3" style={{backgroundColor:'#01497B'}}>
  
    <h1 class="text-body-emphasis">Processor</h1>
    <img src="https://cdn.dribbble.com/users/1366606/screenshots/8075231/media/e971c24ffcfc453ec6c21accb4acbec8.gif" style={{width:'20vh',backgroundColor:'black',boxShadow:'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}} class="img-fluid rounded-3 shadow-lg mb-4" alt="Example image" width="100" height="100" loading="lazy"/>
   
    <p class="lead px-5 text-white" style={{textAlign:'justify'}}>
    Vostro laptops typically come with Intel Core or AMD Ryzen processors.The processor, often referred to as the "brain" of a laptop, executes instructions and performs calculations necessary for various tasks.
    </p>
  </div>
</div>
<div class="container my-5" style={{padding:'10px'}}>
  <div class="p-2 text-center  rounded-3" style={{backgroundColor:'#01497B'}}>
  
    <h1 class="text-body-emphasis">Memory (RAM)</h1>
    <img src="https://cdn-icons-png.flaticon.com/512/4639/4639334.png" style={{width:'20vh',backgroundColor:'black',boxShadow:'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}} class="img-fluid rounded-3 shadow-lg mb-4" alt="Example image" width="100" height="100" loading="lazy"/>
   
    <p class="lead px-5 text-white" style={{textAlign:'justify'}}>
    Configurations may vary, but Vostro laptops often offer options for different RAM sizes (e.g., 4GB, 8GB, 16GB).
    </p>
  </div>
</div>
<div class="container my-5" style={{padding:'10px'}}>
  <div class="p-2 text-center  rounded-3" style={{backgroundColor:'#01497B'}}>
  
    <h1 class="text-body-emphasis">Storage</h1>
    <img src="https://cdn-icons-png.flaticon.com/512/7935/7935831.png" style={{width:'20vh',backgroundColor:'black',boxShadow:'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}} class="img-fluid rounded-3 shadow-lg mb-4" alt="Example image" width="100" height="100" loading="lazy"/>
   
    <p class="lead px-5 text-white" style={{textAlign:'justify'}}>
    Vostro laptops may come with various storage options, including traditional hard drives (HDD) or solid-state drives (SSD).
    </p>
  </div>
</div>
<div class="container my-5" style={{padding:'10px'}}>
  <div class="p-2 text-center  rounded-3" style={{backgroundColor:'#01497B'}}>
  
    <h1 class="text-body-emphasis">Display</h1>
   
    <img src="https://cdn.dribbble.com/users/1129235/screenshots/5475278/ezgif-5-8cccda27de9b.gif" style={{width:'20vh',backgroundColor:'black',boxShadow:'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}} class="img-fluid rounded-3 shadow-lg mb-4" alt="Example image" width="100" height="100" loading="lazy"/>
   
    <p class="lead px-5 text-white" style={{textAlign:'justify'}}>
    The screen size and resolution can vary. Vostro laptops generally provide a balance between portability and a decent-sized display.
    </p>
  </div>
</div>
<div class="container my-5" style={{padding:'10px'}}>
  <div class="p-2 text-center  rounded-3" style={{backgroundColor:'#01497B'}}>
  
    <h1 class="text-body-emphasis">Operating System</h1>
   
    <img src="https://cdn-icons-png.flaticon.com/512/1640/1640977.png" style={{width:'20vh',backgroundColor:'black',boxShadow:'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}} class="img-fluid rounded-3 shadow-lg mb-4" alt="Example image" width="100" height="100" loading="lazy"/>
   
    <p class="lead px-5 text-white" style={{textAlign:'justify'}}>
    Dell laptops often come with Windows pre-installed, but specific configurations might offer alternative options.
    </p>
  </div>
</div>
<div class="container" style={{padding:'10px'}}>
  <div class="p-2 text-center  rounded-3" style={{backgroundColor:'#01497B'}}>
  
    <h1 class="text-body-emphasis">Connectivity</h1>
   
    <img src="https://cdn-icons-png.flaticon.com/512/2082/2082812.png" style={{width:'20vh',backgroundColor:'black',boxShadow:'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}} class="img-fluid rounded-3 shadow-lg mb-4" alt="Example image" width="100" height="100" loading="lazy"/>
   
    <p class="lead px-5 text-white" style={{textAlign:'justify'}}>
    Vostro laptops typically come with a variety of ports, including USB, HDMI, Ethernet, and more. They may also support wireless connectivity like Wi-Fi and Bluetooth.
    </p>
  </div>
</div>  

  </div>
    </div>
  )
}

export default LaptopDetails
