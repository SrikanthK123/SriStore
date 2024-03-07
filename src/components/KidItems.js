import React,{useEffect} from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const KidItems = () => {
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
    <div className="HomePage" style={{padding:'5px'}}>
    <div
      className="position-relative overflow-hidden p-3 p-md-5 mx-auto text-center"
      id="KidsToyPage"
    >
      <div className="col-md-6 p-lg-5 mx-auto my-5">
        <h1 className="display-3 fw-bold" style={{ color: "white" }}>
        Fashion Fun for Every Little One.
        </h1>
        <h3 className="fw-normal mb-3" style={{ color: "#62f1f1" }}>
        Playful Picks, Happy Kids
        </h3>
      </div> 

      <div className="product-device shadow-sm d-none d-md-block"></div>
      <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
    <h2 class="pb-2 border-bottom my-2" style={{backgroundColor:'black',color: "white", fontFamily: "Georgia, serif"}}>  <img
        id="tshirt"
        class="d-blockmb-4 "
        src="https://cdn-icons-png.flaticon.com/512/5283/5283698.png?ga=GA1.1.1656739361.1690525536"
        style={{ width: "60px", height: "60px" ,marginLeft:'30px'}}
      /> Toys</h2>
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
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Toy-Story-PNG-Pic.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Toy-Story-Movie-PNG.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://purepng.com/public/uploads/large/minion-toy-vbr.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://pluspng.com/img-png/png-toys-toy-transparent-background-1000.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://www.pngmart.com/files/6/Toy-PNG-HD.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://th.bing.com/th/id/R.0bbf47a366384174524b7e43a5b27793?rik=8dypXYCqsNGBKg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f6%2fToy-Download-PNG-Image.png&ehk=BkQ0J6mdiBvDg97rwhrk0lIDZ%2bpNBp3ew%2fNFJN%2bCbGc%3d&risl=&pid=ImgRaw&r=0"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Toy-PNG-Download-Image.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://purepng.com/public/uploads/large/duck-toy-ndn.png"
              style={{ height: "400px" }}
              alt=""
            />
          </div>
        </Link>
      </Slider>
    </div>
    <Link
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none mx-5"
      to="/KidsProduct"
    ><button class="bn30 my-4 fw-bold">More</button>
    </Link>
    <h2 class="pb-2 border-bottom my-2" style={{backgroundColor:'black',color: "white", fontFamily: "Georgia, serif"}}> <img
    id="tshirt"
    class="d-blockmb-4 "
    src="https://cdn-icons-png.flaticon.com/512/4593/4593905.png?ga=GA1.1.1656739361.1690525536"
    style={{ width: "60px", height: "60px" ,marginLeft:'30px'}}
  />Kids Wears</h2>
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
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://th.bing.com/th/id/R.3e03a3b610e81be0ca10d226e1624dc6?rik=fAUlPgeCsM%2b%2bnQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fBaby-Clothes-Transparent-PNG.png&ehk=VlrtVj5xNEHNGizUnnGDNqa1tWIUaTtXhyalw3MFjq8%3d&risl=1&pid=ImgRaw&r=0"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://www.pngmart.com/files/7/Baby-Clothes-PNG-Free-Download.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://www.pngmart.com/files/7/Baby-Clothes-PNG-Photo.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://www.pngmart.com/files/7/Baby-Clothes-PNG-Picture.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://i.pinimg.com/originals/79/1c/87/791c87eb4aa3017cc61ce354f3b51b67.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://th.bing.com/th/id/R.43e498a0196b2c56a867c5343350c508?rik=q%2fnOGzFQBOCcDg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fdress%2fdress_PNG119.png&ehk=UgW3LJN1Y%2fc%2b5hQxyetZwIepNihLJgaCjzbLIWLB2xk%3d&risl=&pid=ImgRaw&r=0"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://th.bing.com/th/id/R.a0282ae974f498530b9a62c026de900f?rik=R0qtQNqZmV9rUA&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fBaby-Clothes-PNG-Image.png&ehk=Slo2ZNicKB996VGxI8D1YQhTGRMApRrrbKfBTjNIyz8%3d&risl=&pid=ImgRaw&r=0"
              style={{ maxHeight: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://i.pinimg.com/originals/23/c4/bc/23c4bcf0473be9629cf54f901bb0dad4.png"
              style={{ height: "400px" }}
              alt=""
            />
          </div>
        </Link>
      </Slider>
    </div>
    <Link
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none mx-5 "
      to="/shirt"
    ><Link to="/KidsProduct"><button class="bn30 my-4 fw-bold">More</button></Link> 
    </Link>
    <h2 class="pb-2 border-bottom my-2" style={{backgroundColor:'black',color: "white", fontFamily: "Georgia, serif"}}> <img
        id="tshirt"
        class="d-blockmb-4 "
        src="https://cdn-icons-png.flaticon.com/512/5895/5895786.png?ga=GA1.1.1656739361.1690525536"
        style={{ width: "60px", height: "60px" ,marginLeft:'30px'}}
      /> School Bags</h2>
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
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://www.pngarts.com/files/1/School-Bag-PNG-Photo.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://pluspng.com/img-png/png-school-bag-school-bag-png-transparent-image-500.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://www.pngarts.com/files/1/School-Bag-Download-Transparent-PNG-Image.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://freepngimg.com/thumb/gloves/55160-2-school-bag-free-download-image.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://www.pngall.com/wp-content/uploads/2/Bag-PNG-High-Quality-Image.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://th.bing.com/th/id/R.5a9c57757209c881706bab086c150931?rik=6q0sGsUQ92Hbew&riu=http%3a%2f%2fpngimg.com%2fuploads%2fbackpack%2fbackpack_PNG6333.png&ehk=wWR28N1v4Qzv9t6E45I%2fH9YsTPwWhcUGMKSncCoYePc%3d&risl=1&pid=ImgRaw&r=0"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://th.bing.com/th/id/R.c70097c4b95820a46033cb4ef44cda08?rik=fu64sfD2cDXG7Q&riu=http%3a%2f%2fwww.nvsbags.com%2fassets%2fimages%2fkidz_bag%2fkids-1.png&ehk=eQsW3zUTDcXdXkwHYK70qlEQFnnP%2bIHb7bKGxA0qP%2bY%3d&risl=&pid=ImgRaw&r=0"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/KidItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://www.nvsbags.com/assets/images/kidz_bag/k4.png"
              style={{ height: "400px" }}
              alt=""
            />
          </div>
        </Link>
      </Slider>
    </div>
    <Link
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none mx-5 "
      to="/KidsProduct"><button class="bn30 my-4 fw-bold">More</button>
    </Link>
  </div>
  )
}

export default KidItems
