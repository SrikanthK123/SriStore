import React from "react";
import Pan from "../Images/pan1.gif";
import BuyItem from "../Images/shopping-basket.gif";
import AddToCart from "../Images/AddTocart.gif";
import Receipt from "../Images/pos.gif"
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";

const SingleKitchenItem = () => {
    const BuyProduct = ()=>{
        alert("SuccessFully Ordered")
        
    }
    const AddToCartitem = ()=>{
        alert("Item Add in Cart")
    }
  return (
    <div className="SinglrKitchenPage">
      <div class="container marketing">
        <h3>Testing</h3>
        <div class="container marketing">
          <div class="row">
            <hr class="featurette-divider" />
            <div class="row featurette">
              <div class="col-md-7 order-md-2 d-flex align-items-center text-center">
                <div>
                  <h2
                    class="featurette-heading lh-1 "
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    Non-stick frying pan{" "}
                    <img id="buyGif" src={Pan} style={{ width: "80px" }} />
                  </h2>
                  <p
                    class="lead"
                    style={{
                      color: "#01497B",
                      fontWeight: "bold",
                      textAlign: "justify",
                    }}
                  >
                    Non-stick frying pan ensures a seamless cooking experience,
                    allowing you to create delicious meals without worrying
                    about food sticking to the surface. The advanced non-stick
                    coating guarantees easy food release and simple cleanup,
                    making your kitchen adventures a joy.
                  </p>
                </div>
              </div>
              <div class="col-md-5 order-md-1">
                <div id="carouselExampleCaptions" class="carousel slide">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="https://th.bing.com/th/id/R.099d68676b447cb0de3817e5ebfc3b73?rik=vYvEBMj4FvIDwg&riu=http%3a%2f%2fpngimg.com%2fuploads%2ffrying_pan%2ffrying_pan_PNG8342.png&ehk=UCxH2n3N9Ir4FhjILW%2bSpyYXP6yON%2bOXpIl8tm1jRq0%3d&risl=1&pid=ImgRaw&r=0"
                        class="d-block w-100"
                        alt="..."
                        style={{
                          width: "400px",
                          height: "400px",
                          padding: "20px",
                        }}
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://www.pngmart.com/files/17/Stainless-Steel-Frying-Pan-PNG-Photos.png"
                        class="d-block w-100"
                        alt="Pan"
                        style={{ width: "400px", height: "400px" }}
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://www.pinclipart.com/picdir/big/214-2144303_wok-dish-tableware-frying-frying-pan-with-food.png"
                        class="d-block w-100"
                        alt="..."
                        style={{ width: "400px", height: "400px" }}
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://th.bing.com/th/id/R.bff1a33f8390c03798836ae6e11d89f6?rik=htDQxhi2WEJyRQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ffrying-pan-transparent%2ffrying-pan-transparent-9.png&ehk=I7ys%2fmDcmsb2SUOhqz5hz1v1XV%2bZjVADjgTrew8Jd5g%3d&risl=&pid=ImgRaw&r=0"
                        class="d-block w-100"
                        alt="..."
                        style={{ width: "400px", height: "400px" }}
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://pngimg.com/uploads/frying_pan/frying_pan_PNG8332.png"
                        class="d-block w-100"
                        alt="..."
                        style={{ width: "400px", height: "400px" }}
                      />
                    </div>
                  </div>

                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="4"
                      aria-label="Slide 5"
                    ></button>
                  </div>
                </div>
              </div>
            </div>

            <hr class="featurette-divider" />
          </div>
        
      
            <div class="row featurette">
      <div class="col-md-7">
            <h1 class="text-body-emphasis">Product Details</h1>
            <p class="fs-5 col-md-8" style={{textAlign:'justify'}}>
             <ul>
                <li><span style={{fontWeight:'bold'}}>Effortless Cooking</span>: Our non-stick frying pan simplifies your cooking experience with its advanced non-stick coating, ensuring easy food release and quick cleanup.</li>
                <li><span style={{fontWeight:'bold'}}>Healthier Meals</span>: Cook with confidence using less oil, as our pan promotes a healthier lifestyle without compromising on taste or flavor.</li>
                <li><span style={{fontWeight:'bold'}}>Durable Design</span>: Crafted for durability, this frying pan features a sturdy construction that withstands daily use, providing long-lasting performance in your kitchen.</li>
                <li><span style={{fontWeight:'bold'}}>Limited-Time Offer</span>: Elevate your culinary skills with our non-stick frying pan, now available at a special discounted price for a limited time. Don't miss out on this exclusive offer!</li>
             </ul>
            </p>

            <div class="mb-5">
              <Link to="/KitchenItem1" onClick={BuyProduct} >
              <img id="Product" src={BuyItem} style={{ width: "80px",marginRight:'30px' }} />
              </Link>
              <Link to="/KitchenItem1" onClick={AddToCartitem} >
              <img id="Product" src={AddToCart} style={{ width: "80px" }} />
              </Link>
            </div>
      </div>
      <div class="col-md-5">
        <img src= {Receipt} style={{width:'350px',height:'400px'}} /><br/>
        <h1>Thanks</h1>
      </div>
    </div>
     
        </div>
      </div>
    </div>
  );
};

export default SingleKitchenItem;
