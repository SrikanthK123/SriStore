import React, { useState, useEffect } from "react";
import BuyItem from "../Images/shopping-basket.gif";
import AddToCart from "../Images/AddTocart.gif";
import Receipt from "../Images/pos.gif";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AddCart from "./AddCart";
import placeOrder from "../Images/delivery-truck1.gif";
import AddCartAnimi from "../Images/AddToCart1.gif";
import SuccessFullyOrder from "../Images/Bell_Success.wav" 
const KitchenSingle = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const PositiveReview = [
    {
      mail: "Srikanth",
      review: `Outstanding ${props.title}! The quality is superb, and it exceeded my expectations. Worth every penny!`,
    },
    {
      mail: "Avyay",
      review: ` ${props.title} has revolutionized my daily routine. It's user-friendly and incredibly efficient`,
    },
    {
      mail: "Kiran",
      review: `Impressive features and durability. I highly recommend this product to anyone in need of a reliable solution.`,
    },
    {
      mail: "Gautham",
      review: `The customer service is excellent, and the product delivered on time. A fantastic overall experience.`,
    },
    {
      mail: "Maha",
      review: `Great value for money. It does exactly what it promises, and I'm extremely satisfied with my purchase.`,
    },
    {
      mail: "Kamal",
      review: `Exceptional build quality. I've tried similar products, but none match the reliability of this one.`,
    },
  ];
  const NegativieReview = [
    {
      mail: "Rravind",
      review: `Extremely disappointed. The product broke within a week of use. Poor quality and not worth the money.`,
    },
    {
      mail: "Rahul",
      review: `Misleading advertising. The features touted were not as impressive in reality. Feeling let down.`,
    },
    {
      mail: "Vinay",
      review: `Terrible customer service. No response to my issues with the ${props.title}. Avoid this company at all costs.`,
    },
    {
      mail: "Venkat",
      review: `${props.Price},Overpriced for what you get. There are better alternatives on the market at a fraction of the cost`,
    },
    {
      mail: "Ramu",
      review: `Difficult to use, and the instructions are unclear. I expected a more user-friendly experience.`,
    },
    {
      mail: "Krishna",
      review: `Flimsy construction. The product feels cheap, and I doubt its durability over the long term.`,
    },
  ];
  const AverageReview = [
    {
      mail: "Siri",
      review: `Decent product. It performs adequately for its price point, but nothing exceptional.`,
    },
    {
      mail: "Lata",
      review: `A satisfactory purchase. It does what it claims, but I expected a bit more in terms of performance.`,
    },
    {
      mail: "Priya",
      review: `Fair value for money. It's neither impressive nor disappointing, just an average product`,
    },
    {
      mail: "Pooja",
      review: `Okay product. It meets basic expectations but lacks the standout features found in competitors.`,
    },
    {
      mail: "Ramya",
      review: `Reasonably good. It won't blow you away, but it gets the job done without major issues`,
    },
    {
      mail: "Kavya",
      review: `Average quality. I haven't encountered significant problems, but it doesn't excel in any particular area.`,
    },
  ];
  const randomPositiveReview =
    PositiveReview[Math.floor(Math.random() * PositiveReview.length)];
  const randomNegativeReview =
    NegativieReview[Math.floor(Math.random() * NegativieReview.length)];
  const randomAverageReview =
    AverageReview[Math.floor(Math.random() * AverageReview.length)];

  const [clickCount, setClickCount] = useState(null);
  const [amount, setAmount] = useState(null);

  const handleButtonClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    setAmount((prevAmount) => prevAmount + Number(props.Price));
    console.log("Item details:", props);
  };

  const handleButtonClickDec = () => {
    if (clickCount > 0) {
      setClickCount((prevCount) => prevCount - 1);
      setAmount((prevAmount) => prevAmount - Number(props.Price));
    }
  };
  const [showBanner, setShowBanner] = useState(false);
  const AlertButton =()=>{
    playSuccessSound();
  }
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

  return (
    <div className="SinglrKitchenPage">
      <div class="container marketing">
        <h3>{props.title}</h3>
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
                    {props.title}{" "}
                    <img
                      id="buyGif"
                      src={props.gif}
                      style={{
                        width: "80px",
                        height: "50px",
                        borderRadius: "12px",
                      }}
                    />
                  </h2>
                  <p
                    class="lead"
                    style={{
                      color: "#01497B",
                      fontWeight: "bold",
                      textAlign: "justify",
                    }}
                  >
                    {props.description}
                  </p>
                  <h4 id="Amount">₹{props.Price}</h4>
                </div>
              </div>
              <div class="col-md-5 order-md-1">
                <div id="carouselExampleCaptions" class="carousel slide">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={props.img1}
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
                        src={props.img2}
                        class="d-block w-100"
                        alt="Pan"
                        style={{ width: "400px", height: "400px" }}
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={props.img3}
                        class="d-block w-100"
                        alt="..."
                        style={{ width: "400px", height: "400px" }}
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={props.img4}
                        class="d-block w-100"
                        alt="..."
                        style={{ width: "400px", height: "400px" }}
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={props.img5}
                        class="d-block w-100"
                        alt="..."
                        style={{ width: "400px", height: "400px" }}
                      />
                    </div>
                  </div>

                  <button
                    class="carousel-control-prev bg-transparent"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      id="next"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next bg-transparent"
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
              <p class="fs-5 col-md-8" style={{ textAlign: "justify" }}>
                <ul>
                  <li>
                    <span style={{ fontWeight: "bold" }}>
                      Effortless Cooking
                    </span>
                    :{props.adv1}
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Healthier Meals</span>:{" "}
                    {props.adv2}
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Durable Design</span>:
                    {props.adv3}
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>
                      Limited-Time Offer
                    </span>
                    : {props.adv4}
                  </li>
                </ul>
              </p>

              <div class="mb-5">
                <Link
                  to={`/${props.title}`}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img
                    id="Product"
                    src={BuyItem}
                    style={{ width: "80px", marginRight: "30px" }}
                  />
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
                        src={props.img1}
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
                          {props.description && props.description.slice(0, 99)}
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
                </Link>
                <Link data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <img id="Product" src={AddToCart} style={{ width: "80px" }} />
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
                          Add Item Here{" "}
                          <img id="CarAnimartion" src={AddCartAnimi} />{" "}
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
                        <Link
                          className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center flex-md-row  align-items-md-center! align-items-sm-center py-3 link-body-emphasis text-decoration-none"
                          to={`/${props.title}`}
                        >
                          <img
                            src={props.img1}
                            alt="KitchenProduct"
                            style={{ width: "90px", height: "90px" }}
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
                        </Link>

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
                        style={{ backgroundColor: "#f4aeba"}}
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
            <div class="col-md-5">
              <img src={Receipt} style={{ width: "325px", height: "350px" }} />
              <br />
              <h1
                style={{
                  color: "white",
                  boxShadow:
                    "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
                  padding: "10px",
                  borderRadius: "12px",
                  backgroundColor: "#01497B",
                }}
              >
                Experience the Best, Forget the Rest – Shop Here!
              </h1>
            </div>
          </div>

          <hr class="featurette-divider" />
        </div>
        <div class="container" style={{ padding: "10px" }}>
          <h1 style={{ padding: "10px" }}>Product Reviews</h1>
          <div
            class=" p-3 y rounded"
            style={{
              backgroundColor: "rgb(76 180 223)",
              boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
            }}
          >
            <h6 class="border-bottom pb-2 mb-0">Recent Reviews</h6>
            <div class="d-flex text-body-secondary pt-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/912/912265.png"
                style={{
                  width: "40px",
                  height: "32px",
                  border: "2px solid green",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  margin: "5px",
                }}
              />
              <p class="pb-3 mb-0 small lh-sm border-bottom">
                <strong class="d-block text-gray-dark my-2">
                  {randomPositiveReview.mail}
                </strong>
                {randomPositiveReview.review}
              </p>
            </div>
            <div class="d-flex text-body-secondary pt-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9119/9119091.png"
                style={{
                  width: "40px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "2px solid red",
                  backgroundColor: "white",
                  margin: "5px",
                }}
              />
              <p class="pb-3 mb-0 small lh-sm border-bottom">
                <strong class="d-block text-gray-dark my-2">
                  {randomNegativeReview.mail}
                </strong>
                {randomNegativeReview.review}
              </p>
            </div>
            <div class="d-flex text-body-secondary pt-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/554/554857.png"
                style={{
                  width: "40px",
                  height: "32px",
                  border: "2px solid orange",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  margin: "5px",
                }}
              />
              <p class="pb-3 mb-0 small lh-sm border-bottom">
                <strong class="d-block text-gray-dark my-2">
                  {randomAverageReview.mail}
                </strong>
                {randomAverageReview.review}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenSingle;
