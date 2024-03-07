import React,{useEffect} from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const WomenFashion = () => {
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
      id="WomenFashionPage"
    >
      <div className="col-md-6 p-lg-5 mx-auto my-5">
        <h1 className="display-3 fw-bold" style={{ color: "white" }}>
        Chase the Thrill, Find the Deal.
        </h1>
        <h3 className="fw-normal mb-3" style={{ color: "#62f1f1" }}>
        Where Trends Meet Tradition, Shop with Passion
        </h3>
      </div> 

      <div className="product-device shadow-sm d-none d-md-block"></div>
      <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
    <h2 class="pb-2 border-bottom my-2" style={{backgroundColor:'black',color: "white", fontFamily: "Georgia, serif"}}>  <img
        id="tshirt"
        class="d-blockmb-4 "
        src="https://cdn-icons-png.flaticon.com/512/4953/4953438.png?ga=GA1.1.1656739361.1690525536"
        style={{ width: "60px", height: "60px" ,marginLeft:'30px'}}
      /> Sarees</h2>
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
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://i.pinimg.com/originals/b5/7c/d7/b57cd7f14645a0894b38ec8695583fab.jpg"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://5.imimg.com/data5/NN/SR/MY-59196823/bridal-wedding-sarees-violet-7394-41-483-500x500.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://i.pinimg.com/originals/e5/1f/f6/e51ff68cb9a19295263147e2c5de665e.jpg"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://i.pinimg.com/originals/5f/b6/20/5fb620ef2b7f22a306634c9cd692fd3e.jpg"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://i.pinimg.com/originals/e2/1d/76/e21d7644463f65374a330766d0208ada.jpg"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://i.pinimg.com/originals/9d/8e/11/9d8e117f5bc7a3892278e34ebb8875c8.jpg"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://i.pinimg.com/originals/6a/a8/21/6aa821a5fedbc9f7c1acecc177bf7c90.jpg"
              style={{ maxHeight: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://i.pinimg.com/originals/f3/d1/c2/f3d1c24b05c88b875f0a55dfb150db0e.jpg"
              style={{ height: "400px" }}
              alt=""
            />
          </div>
        </Link>
      </Slider>
    </div>
    <Link
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none mx-5"
      to="/WomenProduct"
    ><button class="bn30 my-4 fw-bold">More</button>
    </Link>
    <h2 class="pb-2 border-bottom my-2" style={{backgroundColor:'black',color: "white", fontFamily: "Georgia, serif"}}> <img
    id="tshirt"
    class="d-blockmb-4 "
    src="https://cdn-icons-png.flaticon.com/512/6667/6667116.png?ga=GA1.1.1656739361.1690525536"
    style={{ width: "60px", height: "60px" ,marginLeft:'30px'}}
  />Top Wears</h2>
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
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://i5.walmartimages.com/asr/a4449b53-cb13-4b8c-85f1-0a24f1850dce.e17693f87fdc818739a8e98b2a43355b.jpeg"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://i5.walmartimages.com/asr/6cb8af1d-4e5f-4785-b6f2-83765b9da0dc_1.70f8a5fa57010a9f0212bd967e2f3038.jpeg"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://i.pinimg.com/736x/18/5a/55/185a556909a0a121df9a2743874d74a6.jpg"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://th.bing.com/th/id/OIP.inbvQpx9lNK2NrMtYDIe8wHaJ4?w=1200&h=1600&rs=1&pid=ImgDetMain"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://th.bing.com/th/id/OIP.YRSUYDi8WYGrdAqPFexDTgHaHa?rs=1&pid=ImgDetMain"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://th.bing.com/th/id/OIP.qHMIpk5k6uhXNhidjP0hzwHaHa?w=665&h=665&rs=1&pid=ImgDetMain"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://d3d71ba2asa5oz.cloudfront.net/12012048/images/191432029759%20(1).jpg"
              style={{ maxHeight: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://cdn.shopify.com/s/files/1/0233/6885/9728/products/tranquiltop2_600x.jpg?v=1562213996"
              style={{ height: "400px" }}
              alt=""
            />
          </div>
        </Link>
      </Slider>
    </div>
    <Link
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none mx-5 "
      to="/WomenProduct"
    ><a href="/"><button class="bn30 my-4 fw-bold">More</button></a> 
    </Link>
    <h2 class="pb-2 border-bottom my-2" style={{backgroundColor:'black',color: "white", fontFamily: "Georgia, serif"}}> <img
        id="tshirt"
        class="d-blockmb-4 "
        src="https://cdn-icons-png.flaticon.com/512/4055/4055979.png?ga=GA1.1.1656739361.1690525536"
        style={{ width: "60px", height: "60px" ,marginLeft:'30px'}}
      /> Jewellery</h2>
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
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://www.pngall.com/wp-content/uploads/8/Gold-Jewellery-Necklace-PNG.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://battulaaljewels.com/assets/admin/uploads/product_category/1449898153.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://www.vippng.com/png/full/442-4420174_jewellery-png.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://th.bing.com/th/id/R.7c779a0a92c8c84cee18b937eb6b5fb0?rik=Co7PMP8Jut26zg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fjewellery-png-jewellery-png-transparent-images-image-36045-1000.png&ehk=wpH1A9P2UpcsNqTTSTDQTC8iVKQ9OXiGlq%2fDbV92yQY%3d&risl=&pid=ImgRaw&r=0"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://www.transparentpng.com/thumb/necklace/epYEim-necklace-clipart-transparent.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://freepngimg.com/thumb/jewellery/28086-8-jewellery-necklace-image.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://www.pngmart.com/files/16/Necklace-Jewellery-PNG-Clipart.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://www.pngkey.com/png/full/261-2612384_orra-gold-set-necklace-gold-jewellery-set.png"
              style={{ height: "400px" }}
              alt=""
            />
          </div>
        </Link>
      </Slider>
    </div>
    <Link
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none mx-5 "
      to="/WomenProduct"><button class="bn30 my-4 fw-bold">More</button>
    </Link>
     <h2 class="pb-2 border-bottom my-2" style={{backgroundColor:'black',color: "white", fontFamily: "Georgia, serif"}}> <img
    id="tshirt"
    class="d-blockmb-4 "
    src="https://cdn-icons-png.flaticon.com/512/5122/5122761.png?ga=GA1.1.1656739361.1690525536"
    style={{ width: "60px", height: "60px" ,marginLeft:'30px'}}
  />HandBags</h2>
    <div className="container ">
      <Slider
        {...settings}
        style={{
          backgroundColor: "#455d7a",
          boxShadow:
            " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          borderRadius: "12px",
        }}
      >
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://th.bing.com/th/id/R.d43fa49a4505bc41ae33c23605142e09?rik=DSWFpF%2b%2bfsuzfw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fWomen-Bag-PNG-HD.png&ehk=%2bd9arQpPM1e%2fA0wU0wNC91pFNya8sIxU1l7pzkGOPkI%3d&risl=&pid=ImgRaw&r=0"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://pngimg.com/uploads/women_bag/women_bag_PNG6428.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://pngimg.com/uploads/women_bag/women_bag_PNG6406.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://www.pngmart.com/files/15/Yellow-Ladies-Handbag-PNG.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://pluspng.com/img-png/women-bag-png--1000.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://www.pngmart.com/files/15/Ladies-Handbag-PNG.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://purepng.com/public/uploads/large/purepng.com-women-baghandbagwomen-bagsoft-fabricleatherladies-14215264147290bjek.png"
              style={{ height: "400px" }}
              alt="T-shirts"
            />
          </div>
        </Link>
        <Link to="/WomenFashionItems">
          {" "}
          <div  id="TshirtsSlider">
            <img
              src="https://www.pngarts.com/files/8/Designer-Ladies-Purse-PNG-Image-Background.png"
              style={{ height: "400px" }}
              alt=""
            />
          </div>
        </Link>
      </Slider>
    </div>
    <Link
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none mx-5 "
      to="/WomenProduct"
    ><button class="bn30 my-4 fw-bold">More</button>
    </Link>
  </div>
  )
}

export default WomenFashion
