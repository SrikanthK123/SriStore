import React,{useEffect} from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MenFashion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="HomePage" style={{padding:'10px'}}>
      <div
        className="position-relative overflow-hidden p-3 p-md-5 mx-auto text-center"
        id="MenFashionPage"
      >
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold" style={{ color: "white" }}>
            From Casual to Formal, Find Your Perfect Fit Online!
          </h1>
          <h3 className="fw-normal mb-3" style={{ color: "#62f1f1" }}>
            Upgrade Your Closet with the Best in Men's Fashion Trends.
          </h3>
        </div> 

        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <h2 class="pb-2 border-bottom my-2" style={{backgroundColor:'black',color: "white", fontFamily: "Georgia, serif"}}>  <img
          id="tshirt"
          class="d-blockmb-4 "
          src="https://cdn-icons-png.flaticon.com/512/3013/3013526.png"
          style={{ width: "60px", height: "60px" ,marginLeft:'30px'}}
        /> T-Shirts</h2>
      <div className="container my-5">
        <Slider
          {...settings}
          style={{
            backgroundColor: "#455d7a",
            boxShadow:
              " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            borderRadius: "12px",
          }}
        >
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://i.pinimg.com/originals/c6/c5/32/c6c532661c1cbb974dc59aa93df0a217.png"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://image.jimcdn.com/app/cms/image/transf/dimension=1007x10000:format=png/path/sbec91bf8c08a9a72/image/i76dd611f94e491c1/version/1553851215/image.png"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://i.pinimg.com/originals/7e/26/af/7e26af21919d6d6e4c707a2bb96296c3.png"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://th.bing.com/th/id/R.fbe061bf4e60ad0f1e067b2c213399aa?rik=qMW8eYnMoc4cBA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fT-Shirt-PNG-HD.png&ehk=vcK8uo7kkE4Kya1SdkGkqEVZnU4tWcqlrIbN8vmB9OM%3d&risl=&pid=ImgRaw&r=0"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://th.bing.com/th/id/R.fa18fb29aa9692602f1c5ec40c0a8793?rik=%2fSnWBw49L0Sfng&riu=http%3a%2f%2fpngimg.com%2fuploads%2ftshirt%2ftshirt_PNG5450.png&ehk=ksOt2h8ucbvl9i58pNokT5WkIn%2fF0v3OfsuHVm81SKc%3d&risl=&pid=ImgRaw&r=0"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://purepng.com/public/uploads/large/purepng.com-green-t-shirtclothingt-shirtt-shirtdressfashionclothshirt-691522330493iyjsl.png"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://www.pngarts.com/files/5/Plain-Yellow-T-Shirt-Transparent-Image.png"
                style={{ maxHeight: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://freepngimg.com/thumb/tshirt/36674-2-plain-white-t-shirt.png"
                style={{ height: "400px" }}
                alt=""
              />
            </div>
          </Link>
        </Slider>
      </div>
      <Link
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none mx-5"
        to="/MenProduct"
      ><button class="bn30 my-4 ">More</button>
      </Link>
      <h2 class="pb-2 border-bottom my-2" style={{backgroundColor:'black',color: "white", fontFamily: "Georgia, serif"}}> <img
      id="tshirt"
      class="d-blockmb-4 "
      src="https://cdn-icons-png.flaticon.com/512/2503/2503380.png"
      style={{ width: "60px", height: "60px" ,marginLeft:'30px'}}
    />Shirts</h2>
      <div className="container my-5">
        <Slider
          {...settings}
          style={{
            backgroundColor: "#455d7a",
            boxShadow:
              " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            borderRadius: "12px",
          }}
        >
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://th.bing.com/th/id/R.49c8ccc5baa1076b3b1a4041e709f559?rik=Ycd44U1LWWxBMQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f8%2fDress-Shirt-PNG-Image-HD.png&ehk=4FSm7edIajbuJMH%2bIDXoZe0XataLH9xy%2bLKkeMyI23I%3d&risl=1&pid=ImgRaw&r=0"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://purepng.com/public/uploads/thumbnail/purepng.com-denim-blue-full-plain-shirtgarmentdressshirtfitfront-buttonfront-pocketdenim-bluefull-1421526313681bf4uy.png"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://www.pngall.com/wp-content/uploads/5/Shirt-PNG-Download-Image.png"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://www.pngall.com/wp-content/uploads/5/Shirt-PNG-Images.png"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://th.bing.com/th/id/R.c1f0c199989f9f716855f4f26f9ac3a5?rik=VaRyLVAPhjmxDg&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery2%2fDress-Shirt-PNG-Image.png&ehk=BHuXPSvm9cJR1b%2bFeT6xdXZOdWeBXyzNNVJlmeQMUTk%3d&risl=&pid=ImgRaw&r=0"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://pluspng.com/img-png/shirt-hd-png-plaid-shirt-starting-at-85-1618.png"
                style={{ maxHeight: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://th.bing.com/th/id/R.69f31e2dc793851c6ed4d13e1039b884?rik=CAzdEgtZq1pUiA&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery2%2fDress-Shirt-PNG-Picture.png&ehk=4q2DbSpbkUEgxe0av3574z26xHzt3tSNzBij%2bxjYJRU%3d&risl=&pid=ImgRaw&r=0"
                style={{ height: "400px" }}
                alt=""
              />
            </div>
          </Link>
        </Slider>
      </div>
      <Link
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none mx-5 "
        to="/MenProduct"
      ><button class="bn30 my-4 ">More</button>
      </Link>
      <h2 class="pb-2 border-bottom my-2" style={{backgroundColor:'black',color: "white", fontFamily: "Georgia, serif"}}> <img
          id="tshirt"
          class="d-blockmb-4 "
          src="https://cdn-icons-png.flaticon.com/512/1176/1176990.png"
          style={{ width: "60px", height: "60px" ,marginLeft:'30px'}}
        /> Jeans</h2>
      <div className="container my-5">
        <Slider
          {...settings}
          style={{
            backgroundColor: "#455d7a",
            boxShadow:
              " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            borderRadius: "12px",
          }}
        >
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://pngimg.com/uploads/jeans/jeans_PNG5779.png"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://freepngimg.com/thumb/jeans/31-men's-jeans-png-image.png"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://th.bing.com/th/id/R.748c7509be841d7ffa7a6a6432ba4051?rik=ifIznXIcMPS0yg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fRipped-Men-Jeans-PNG.png&ehk=3q0sgVPz%2bQRfeQ30E%2fb3APyIAjccejryt4SwiwuH7wY%3d&risl=&pid=ImgRaw&r=0"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://purepng.com/public/uploads/large/purepng.com-mens-jeansgarmentlower-bodydenimjeansbluebright-14215263626965rysv.png"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://www.pngmart.com/files/7/Denim-Jean-PNG-Transparent.png"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://www.pngall.com/wp-content/uploads/2016/04/Jeans-PNG-Image.png"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://th.bing.com/th/id/R.440a9affd1dd8b7aac43e50f3c7b4833?rik=EvJs1Wh%2f6661Yg&riu=http%3a%2f%2fssl.quiksilver.com%2fstatic%2fQS%2fdefault%2fcategory-assets%2fcat-experiences%2fdenim_selector%2fimg%2fselector%2fslim.png&ehk=JUGBImblisungbELLu4B%2b%2bb1%2bXeM8wZ0B%2fX7I3aCyqM%3d&risl=&pid=ImgRaw&r=0"
                style={{ maxHeight: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://freepngdownload.com/image/thumb/jeans-png-free-download-27.png"
                style={{ height: "400px" }}
                alt=""
              />
            </div>
          </Link>
        </Slider>
      </div>
      <Link
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none mx-5 "
        to="/MenProduct"><button class="bn30 my-4 ">More</button>
      </Link>
       <h2 class="pb-2 border-bottom my-2" style={{backgroundColor:'black',color: "white", fontFamily: "Georgia, serif"}}> <img
      id="tshirt"
      class="d-blockmb-4 "
      src="https://cdn-icons-png.flaticon.com/512/5479/5479005.png"
      style={{ width: "60px", height: "60px" ,marginLeft:'30px'}}
    />Sports Shoes</h2>
      <div className="container my-5 pd-3">
        <Slider
          {...settings}
          style={{
            backgroundColor: "#455d7a",
            boxShadow:
              " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            borderRadius: "12px",
          }}
        >
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://freepngimg.com/download/running%20shoes/15-nike-running-shoes-png-image.png"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://th.bing.com/th/id/R.6075e3b79592af17a19dd08dda8157f7?rik=SzBQICM1XekXkg&riu=http%3a%2f%2fpngimg.com%2fuploads%2frunning_shoes%2frunning_shoes_PNG5818.png&ehk=EJ3CaBx6HEqQtMdnvnfO4CS4RmuEInove5G%2fnVK2XtE%3d&risl=1&pid=ImgRaw&r=0"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://pngimg.com/uploads/running_shoes/running_shoes_PNG5817.png"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://pngimg.com/uploads/running_shoes/running_shoes_PNG5824.png"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://th.bing.com/th/id/R.835983e251d097bc25af6fb3b2155be7?rik=M%2fqrSDtR0zalDw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fshoe-transparent-background%2fshoe-transparent-background-12.png&ehk=aBRlr3y8H6C6wFWasX1boX9%2batIB911%2b5HM0eh0kwTo%3d&risl=&pid=ImgRaw&r=0"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://freepngimg.com/thumb/running%20shoes/10-running-shoes-png-image.png"
                style={{ height: "400px" }}
                alt="T-shirts"
              />
            </div>
          </Link>
          <Link to="/MenFashionItems">
            {" "}
            <div  id="TshirtsSlider">
              <img
                src="https://freepngimg.com/thumb/adidas_shoes/8-2-adidas-shoes-png-picture.png"
                style={{ height: "400px" }}
                alt=""
              />
            </div>
          </Link>
        </Slider>
      </div>
      <Link
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none mx-5 "
        to="/MenProduct"
      ><button class="bn30 my-4 ">More</button>
      </Link>
    </div>
  );
};

export default MenFashion;
