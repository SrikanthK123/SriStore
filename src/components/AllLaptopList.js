import React, { useState, useEffect } from "react";
import AddCartAnimi from "../Images/AddToCart1.gif";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import placeOrder from "../Images/delivery-truck1.gif";
import ProductAddCart from "../Images/ProductAddCart.gif";
import SuccessFullyOrder from "../Images/Bell_Success.wav" 

const AllLaptopList = (props) => {
    const [clickCount, setClickCount] = useState(null);
  const [amount, setAmount] = useState(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setClickCount((prevCount) => prevCount + 1);
    setAmount((prevAmount) => prevAmount + Number(props.Price));
    console.log("Item details:", props);
  };

  const handleButtonClickDec = (e) => {
    e.preventDefault();
    if (clickCount > 0) {
      setClickCount((prevCount) => prevCount - 1);
      setAmount((prevAmount) => prevAmount - Number(props.Price));
    }
  };
  const playSuccessSound = () => {
    const audio = new Audio(SuccessFullyOrder);
    
    // Event listener for handling errors during audio playback
    audio.addEventListener('error', (err) => {
      console.error('Error during audio playback:', err);
    });

    audio.play()
      .then(() => {
        // Playback started successfully
        console.log('Audio playback started successfully');
        // Reload the page after the sound finishes playing (adjust the timeout as needed)
        setTimeout(() => {
          window.location.reload();
        }, audio.duration * 500); // Convert duration from seconds to milliseconds
      })
      .catch((err) => {
        // Handle errors during audio playback
        console.error('Error starting audio playback:', err);
      });
  };
  
  const [showBanner, setShowBanner] = useState(false);
  const AlertButton =()=>{
    playSuccessSound();
  }
  
  return (
    <div className='HomePage'>
  <div class="container">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 ">
    <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden ">
          <img class="rounded-lg-3" id="LaptopMainImg"  src= {props.imageUrl} alt="" width="720"/>
      </div>
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis" style={{fontFamily:'-moz-initial'}}>{props.title}</h1>
       
        <p class="lead text-white" style={{textAlign:'justify'}}>{props.desc}</p>
        <h3>Price - ₹{props.Price}</h3>
        <div class="mb-5">
          <Link
            to={`/${props.title}`}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
             <Link><img src='https://cdn-icons-png.flaticon.com/512/10473/10473788.png' id="LaptopBtn" /></Link>
           <div
              class="modal fade "
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog ">
                <div class="modal-content">
                  <div
                    class="modal-header"
                    style={{ backgroundColor: "#fcf4d9" }}
                  >
                    <h1
                      class="modal-title fs-5 text-success"
                      id="exampleModalLabel"
                    >
                      Successfully Ordered{" "}
                      <img id="CarAnimartion" src={placeOrder} />
                    </h1>
                  </div>

                  <div
                    class="modal-body"
                    style={{ backgroundColor: "#8ed2c9" }}
                  >
                    <a
                      class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center flex-md-row  flex-sm-column align-items-md-center align-items-sm-center py-3 link-body-emphasis text-decoration-none"
                      href="#"
                    >
                      <img
                        src={props.imageUrl}
                        alt="KitchenProduct"
                        style={{
                          width: "90px",
                          height: "90px",
                          backgroundColor: "#005689",
                          borderRadius: "13px",
                          padding: "10px",
                        }}
                      />
                      <div class="col-lg-8">
                        <h5 class="mb-1" style={{ color: "#01497B" }}>
                          {props.title}
                        </h5>
                        <p style={{ textAlign: "justify" }}>
                          {props.desc && props.desc.slice(0, 99)}
                          ....
                        </p>
                        {showBanner && clickCount > 0 ? (
                          <div>
                            <small
                              class="text-white fw-bold"
                              style={{ float: "left" }}
                            >
                              <span
                                className="fw-bold"
                                style={{ color: "black" }}
                              >
                                Price
                              </span>{" "}
                              -{" "}
                              <span style={{ color: "#1e549f" }}>
                                ₹ {props.Price}
                              </span>
                            </small>
                            <br />
                            <small
                              class="text-white fw-bold"
                              style={{ float: "left" }}
                            >
                              <span
                                className="fw-bold"
                                style={{ color: "black" }}
                              >
                                Items
                              </span>{" "}
                              -{" "}
                              <span style={{ color: "#1e549f" }}>
                                {clickCount}
                              </span>
                            </small>
                            <br />
                            <small
                              class="text-white fw-bold"
                              style={{ float: "left" }}
                            >
                              <span
                                className="fw-bold"
                                style={{ color: "black" }}
                              >
                                Total Amount
                              </span>{" "}
                              -{" "}
                              <span style={{ color: "#1e549f" }}>
                                {" "}
                                ₹ {amount}
                              </span>
                            </small>
                          </div>
                        ) : (
                          <div className="alert alert-info">
                            {" "}
                            <img
                              src= "https://cdn-icons-png.flaticon.com/512/9486/9486994.png"
                              alt="Item"
                              style={{ width: "50px", height: "50px" }}
                            />{" "}
                            Please Add Product in Cart then Return
                          </div>
                        )}
                      </div>
                    </a>
                  </div>

                  <div
                    class="modal-footer"
                    style={{ backgroundColor: "#f4aeba" }}
                  >
                    <div></div>
                    <div id="liveAlertPlaceholder"></div>
                    <button
                      type="button"
                      class="btn btn-info"
                      disabled={clickCount <= 0}
                      onClick={AlertButton}
                    >
                      Ok
                    </button>

                    <button
                      type="button"
                      class="btn btn-info"
                      data-bs-dismiss="modal"
                    >
                      close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="modal fade "
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog ">
                <div class="modal-content">
                  <div
                    class="modal-header"
                    style={{ backgroundColor: "#fcf4d9" }}
                  >
                    <h1
                      class="modal-title fs-5 text-success"
                      id="exampleModalLabel"
                    >
                      Successfully Ordered{" "}
                      <img id="CarAnimartion" src='https://cdn-icons-png.flaticon.com/512/6190/6190179.png'/>
                    </h1>
                  </div>
                  <div
                    class="modal-body"
                    style={{ backgroundColor: "#8ed2c9" }}
                  ></div>

                  <div
                    class="modal-footer"
                    style={{ backgroundColor: "#f4aeba" }}
                  >
                    <button
                      type="button"
                      class="btn btn-info"
                      data-bs-dismiss="modal"
                    >
                      Ok
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <Link><img src='https://cdn-icons-png.flaticon.com/512/6190/6190179.png' id="LaptopBtn" /></Link>
          </Link>

          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div
                  class="modal-header"
                  style={{ backgroundColor: "#fcf4d9" }}
                >
                  <h1
                    class="modal-title fs-5 text-danger"
                    id="staticBackdropLabel"
                  >
                    Add Item Here <img id="CarAnimartion" src={AddCartAnimi} />{" "}
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  className="modal-body"
                  style={{ backgroundColor: "#8ed2c9" }}
                >
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center flex-md-row  align-items-md-center! align-items-sm-center py-3 link-body-emphasis text-decoration-none"
                    href="#"
                  >
                    <img
                      src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3520/media-gallery/in3520-cnb-05000ff090-sl.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full"
                      alt="KitchenProduct"
                      style={{
                        width: "90px",
                        height: "90px",
                        borderRadius: "13px",
                        backgroundColor: "purple",
                      }}
                    />
                    <div className="col-lg-4">
                      <h6 className="mb-0">{props.title}</h6>
                      <small className="text-white fw-bold">
                        ₹ {props.Price}
                      </small>
                    </div>
                    <div className="col-8">
                            <button
                              className="btn btn-info m-3"
                              onClick={handleButtonClick}
                            >
                              ADD
                            </button>
                            <button
                              className="btn btn-info"
                              onClick={handleButtonClickDec}
                              disabled={clickCount < 1}
                            >
                              Delete
                            </button>
                          </div>
                  </a>

                  <h5>
                    {clickCount >= 1 && (
                      <div className="lead m-3 alert alert-info">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/4554/4554834.png"
                          style={{ width: "50px", height: "50px" }}
                        />
                        <span
                          className=" text fw-bold my-2"
                          style={{
                            padding: "8px",
                            borderRadius: "12px",
                            fontSize: "20px",
                            color: "#ff007b",
                          }}
                        >
                          {clickCount}
                        </span>
                        <span className="fw-bold">{props.title}</span> is Added{" "}
                      </div>
                    )}
                    {clickCount < 1 && (
                      <div className="lead m-3 alert alert-info">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/9018/9018889.png"
                          style={{ width: "50px", height: "50px" }}
                        />{" "}
                        Empty in Cart
                      </div>
                    )}
                  </h5>
                  <h3
                    className="bg-success text-white p-3"
                    style={{
                      borderRadius: "13px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Amount : {amount}
                  </h3>
                </div>
                <div
                  class="modal-footer"
                  style={{ backgroundColor: "#f4aeba" }}
                >
                  <button
                    type="button"
                    class="btn bg-black text-white"
                    data-bs-dismiss="modal"
                    onClick={() => setShowBanner(true)}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 border-bottom">Product Photos</h2>
    <section >
  <section class="" style={{marginTop:'20px'}}>
    <div class="row" id="AllLaptopRow">
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 " >
        <div
          class="bg-image hover-overlay ripple shadow-1-strong rounded "
          data-ripple-color="light"
          id="gellaryImg"
        >
          <img
            src={props.pic1}
            class="w-100"
            style={{borderRadius:'20px'}}
          />
          <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal1">
            <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2);"}}></div>
          </a>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 " id="gellaryImg" >
        <div
          class="bg-image hover-overlay ripple shadow-1-strong rounded " 
          data-ripple-color="light"
        >
          <img
            src={props.pic2}
            class="w-100"
            style={{borderRadius:'20px'}}
          />
          <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal1">
            <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2);"}}></div>
          </a>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0" id="gellaryImg" >
        <div
          class="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light"
        >
          <img
            src={props.pic3}
            class="w-100"
            style={{borderRadius:'20px'}}
          />
          <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal1">
            <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2);"}}></div>
          </a>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0" id="gellaryImg" >
        <div
          class="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light"
        >
          <img
            src={props.pic4}
            class="w-100"
            style={{borderRadius:'20px'}}
            
          />
          <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal1">
            <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2);"}}></div>
          </a>
        </div>
      </div>

      <div class="col-lg-4 mb-4 mb-lg-0" id="gellaryImg" >
        <div
          class="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light"
        >
          <img
            src={props.pic5}
            class="w-100"
            style={{borderRadius:'20px'}}
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
  <div class="p-2 text-center  rounded-3" id="LaptopFeatures">
  
    <h1 class="text">Processor</h1>
    <img src="https://cdn.dribbble.com/users/1366606/screenshots/8075231/media/e971c24ffcfc453ec6c21accb4acbec8.gif" id="FeaturesImgs"  class="img-fluid rounded-3 shadow-lg mb-4" alt="Example image" width="100" height="100" loading="lazy"/>
   
    <p class="lead px-5 text-white" style={{textAlign:'justify',display:'flex',justifyContent:'center'}}>
   {props.Processor}
    </p>
  </div>
</div>
<div class="container my-5" style={{padding:'10px'}}>
  <div class="p-2 text-center  rounded-3"  id="LaptopFeatures">
  
    <h1 class="text">Memory (RAM)</h1>
    <img src="https://cdn-icons-png.flaticon.com/512/4639/4639334.png"  id="FeaturesImgs"  class="img-fluid rounded-3 shadow-lg mb-4" alt="Example image" width="100" height="100" loading="lazy"/>
   
    <p class="lead px-5 text-white" style={{textAlign:'justify',display:'flex',justifyContent:'center'}}>
    {props.Memory}
    </p>
  </div>
</div>
<div class="container my-5" style={{padding:'10px'}}>
  <div class="p-2 text-center  rounded-3" id="LaptopFeatures">
  
    <h1 class="text">Storage</h1>
    <img src="https://cdn.dribbble.com/users/919329/screenshots/3943912/memory-dribbble.gif"  id="FeaturesImgs"  class="img-fluid rounded-3 shadow-lg mb-4" alt="Example image" width="100" height="100" loading="lazy"/>
   
    <p class="lead px-5 text-white" style={{textAlign:'justify',display:'flex',justifyContent:'center'}}>
    {props.Storage}
    </p>
  </div>
</div>
<div class="container my-5" style={{padding:'10px'}}>
  <div class="p-2 text-center  rounded-3" id="LaptopFeatures">
  
    <h1 class="text">Display</h1>
   
    <img src="https://cdn.dribbble.com/users/1129235/screenshots/5475278/ezgif-5-8cccda27de9b.gif" id="FeaturesImgs"  class="img-fluid rounded-3 shadow-lg mb-4" alt="Example image" width="100" height="100" loading="lazy"/>
   
    <p class="lead px-5 text-white" style={{textAlign:'justify'}}>
    {props.Display}
    </p>
  </div>
</div>
<div class="container my-5" style={{padding:'10px'}}>
  <div class="p-2 text-center  rounded-3" id="LaptopFeatures">
  
    <h1 class="text">Operating System</h1>
   
    <img src="https://cdn.dribbble.com/users/699802/screenshots/15008068/system.gif" id="FeaturesImgs"  class="img-fluid rounded-3 shadow-lg mb-4" alt="Example image" width="100" height="100" loading="lazy"/>
   
    <p class="lead px-5 text-white" style={{textAlign:'justify',display:'flex',justifyContent:'center'}}>
    {props.Operating_System}
    </p>
  </div>
</div>
<div class="container" style={{padding:'10px'}}>
  <div class="p-2 text-center  rounded-3" id="LaptopFeatures">
  
    <h1 class="text" >Connectivity</h1>
   
    <img src="https://www.lifewire.com/thmb/X8MJ1me9TST8ZpRNc7NXfftxWXc=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/how-many-devices-can-share-a-wifi-network-818298-ac3330f3078d45909c7fe096a0ea5332.gif"  id="FeaturesImgs"  class="img-fluid rounded-3 shadow-lg mb-4" alt="Example image" width="100" height="100" loading="lazy"/>
   
    <p class="lead px-5 text-white" style={{textAlign:'justify',display:'flex',justifyContent:'center'}}>
    {props.Connectivity}
    </p>
  </div>
</div>  

  </div>
    </div>
  )
}

export default AllLaptopList
