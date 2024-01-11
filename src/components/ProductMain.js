import React, { useEffect, useState } from "react";
import BuyNow from "../Images/buy-now.gif";
import AddCartAnimi from "../Images/AddToCart1.gif";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ProductAddCart from "../Images/ProductAddCart.gif";
import placeOrder from "../Images/delivery-truck1.gif";
import SuccessOrder from "../Images/delivery-truck-Order.gif";
import SuccessFullyOrder from "../Images/Bell_Success.wav"
const ProductMain = (props) => {
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
    <div className="HomePage">
      <div class="px-4 pt-5 text-center border-bottom">
        <h1
          class="display-4 fw-bold"
          style={{
            fontFamily:
              "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
            color: "#defcf9",
          }}
        >
          {props.title}
        </h1>
        <div class="col-lg-6 mx-auto">
          <p
            class="lead mb-2"
            style={{ textAlign: "justify", fontFamily: "initial" }}
          >
            {props.desc}
          </p>
        </div>
        <div class="overflow-hidden mt-5">
          <div class="container px-5">
            <img
              src={props.imageUrl}
              style={{
                width: "300px",
                height: "300px",
                padding: "15px",
                backgroundColor: "#137da9",
                borderRadius: "12px",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
              class="img-fluid  lg mb-4"
              alt="ProductImage"
              loading="lazy"
            />
            <p className="lead fw-bold">₹{props.Price}</p>
          </div>
        </div>
        <div class="mb-5">
          <Link
            to={`/${props.title}`}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <button
              type="button"
              class=" btn-lg  me-sm-3 mx-3"
              id="ProductBuyBtn"
            >
              <img src={BuyNow} style={{ width: "70px", height: "70px" }} />
            </button>

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
                              src="https://cdn-icons-png.flaticon.com/512/9486/9486994.png"
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
                      <img id="CarAnimartion" src={placeOrder} />
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
            <button
              type="button"
              class=" btn-lg  me-sm-3 mx-3"
              id="ProductCart"
            >
              <img
                src={ProductAddCart}
                style={{ width: "70px", height: "70px" }}
              />
            </button>
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
                      src={props.imageUrl}
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
  );
};

export default ProductMain;
