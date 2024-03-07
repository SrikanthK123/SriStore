import React,{useEffect} from 'react'
import {
    Link
  } from "react-router-dom";
const WomenAllCards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
    const Sarees = [
        {
            title : " Banarasi Silk Saree",
            Price : '2499',
            imageUrl: 'https://i.pinimg.com/originals/b5/7c/d7/b57cd7f14645a0894b38ec8695583fab.jpg'


        },
        {
             title : "Kanchipuram Silk Saree",
            Price : '3599',
            imageUrl: 'https://5.imimg.com/data5/NN/SR/MY-59196823/bridal-wedding-sarees-violet-7394-41-483-500x500.png'

        },
        {
             title : "Party Fancy Banarasi",

            Price : '1299',
            imageUrl: 'https://i.pinimg.com/originals/e5/1f/f6/e51ff68cb9a19295263147e2c5de665e.jpg'

        }
        ,
        {
             title : "Kanchipuram Silk Pattu Saree",
                       Price : '8999',
            imageUrl: 'https://i.pinimg.com/originals/5f/b6/20/5fb620ef2b7f22a306634c9cd692fd3e.jpg'

        } ,
        {
             title : "Kanchipuram Wedding Saree",
            Price : '5599',
            imageUrl: 'https://i.pinimg.com/originals/e2/1d/76/e21d7644463f65374a330766d0208ada.jpg'

        } ,
        {
             title : "Kanjivaram Lichi Silk Pure Saree",
            Price : '859',
            imageUrl: 'https://i.pinimg.com/originals/9d/8e/11/9d8e117f5bc7a3892278e34ebb8875c8.jpg'

        } ,
        {
             title : "Green Kanchipuram Soft Saree",
             Price : '2999',
            imageUrl: 'https://i.pinimg.com/originals/6a/a8/21/6aa821a5fedbc9f7c1acecc177bf7c90.jpg'

        } ,
        {
             title : "Kanjivaram Soft Silk Saree",
            Price : '3449',
            imageUrl: 'https://i.pinimg.com/originals/f3/d1/c2/f3d1c24b05c88b875f0a55dfb150db0e.jpg'

        } ,
        {
             title : "Kanchipuram Art Silk Saree",
            Price : '6799',
            imageUrl: 'https://siridesignercollections.com/wp-content/uploads/2021/03/kanchi-pattu-silk-sarees-8-481x600.jpg'

        }

       
    ]
    const TopWears = [
        {
            title : "Solid Top Green Casual-wear",
            Price : '779',
            imageUrl: 'https://i5.walmartimages.com/asr/a4449b53-cb13-4b8c-85f1-0a24f1850dce.e17693f87fdc818739a8e98b2a43355b.jpeg'


        },
        {
             title : "Solid Top White Casual-wear",
            Price : '849',
            imageUrl: 'https://i5.walmartimages.com/asr/6cb8af1d-4e5f-4785-b6f2-83765b9da0dc_1.70f8a5fa57010a9f0212bd967e2f3038.jpeg'

        },
        {
             title : "Solid Top Orange Casual-wear",
             
            Price : '799',
            imageUrl: 'https://i.pinimg.com/736x/18/5a/55/185a556909a0a121df9a2743874d74a6.jpg'

        }
        ,
        {
             title : "Regular Fit Party Shirt",
            Price : '650',
            imageUrl: 'https://th.bing.com/th/id/OIP.inbvQpx9lNK2NrMtYDIe8wHaJ4?w=1200&h=1600&rs=1&pid=ImgDetMain'

        } ,
        {
             title : " Bandhni Printed Causal Wear",
            Price : '879',
            imageUrl: 'https://th.bing.com/th/id/OIP.YRSUYDi8WYGrdAqPFexDTgHaHa?rs=1&pid=ImgDetMain'

        } ,
        {
             title : "Floral Printed Cotton Top",
             Price : '999',
            imageUrl: 'https://th.bing.com/th/id/OIP.qHMIpk5k6uhXNhidjP0hzwHaHa?w=665&h=665&rs=1&pid=ImgDetMain'

        } ,
        {
             title : "Flowers Printed Causal Wear",
            Price : '949',
            imageUrl: 'https://d3d71ba2asa5oz.cloudfront.net/12012048/images/191432029759%20(1).jpg'

        } ,
        {
             title : "Corduroy Button Down Shirts Top",
            Price : '699',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0233/6885/9728/products/tranquiltop2_600x.jpg?v=1562213996'

        } ,
        {
             title : "Sleeves Round Neck Foral Top",
             Price : '1299',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0081/9150/8539/products/T3022A2_1200x630.jpg?v=1575428932'

        }

    ]
    const Jewellery = [
        {
            title : "Regal Beaded Gold Necklace",
            Price : '80,517',
            imageUrl: 'https://www.pngall.com/wp-content/uploads/8/Gold-Jewellery-Necklace-PNG.png'


        },
        {
             title : "Eclectic Beaded Gold Necklace",
            Price : '96,529',
            imageUrl: "https://battulaaljewels.com/assets/admin/uploads/product_category/1449898153.png"

        },
        {
             title : "Subtle Artistic Gold Chain",
             
            Price : '1,92,510',
            imageUrl: 'https://www.vippng.com/png/full/442-4420174_jewellery-png.png'

        }
        ,
        {
             title : "Opulent Beaded Chain",
            Price : '1,12,999',
            imageUrl: 'https://th.bing.com/th/id/R.7c779a0a92c8c84cee18b937eb6b5fb0?rik=Co7PMP8Jut26zg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fjewellery-png-jewellery-png-transparent-images-image-36045-1000.png&ehk=wpH1A9P2UpcsNqTTSTDQTC8iVKQ9OXiGlq%2fDbV92yQY%3d&risl=&pid=ImgRaw&r=0'

        } ,
        {
             title : "Glimmering Kundan Necklace",
            Price : '3,68,519',
            imageUrl: 'https://www.transparentpng.com/thumb/necklace/epYEim-necklace-clipart-transparent.png'

        } ,
        {
             title : "Spellbinding Floral Jaisalmeri",
             Price : '3,69,555',
            imageUrl: 'https://freepngimg.com/thumb/jewellery/28086-8-jewellery-necklace-image.png'

        } ,
        {
             title : "Regal Reverie Emerald",
            Price : '24,18,845',
            imageUrl: 'https://www.pngmart.com/files/16/Necklace-Jewellery-PNG-Clipart.png'

        } ,
        {
             title : "Riveting Gold Kemp Necklace",
            Price : '3,45,999',
            imageUrl: 'https://www.pngkey.com/png/full/261-2612384_orra-gold-set-necklace-gold-jewellery-set.png'

        } ,
        {
             title : "Ornate Grand Necklace",
             Price : '3,23,558',
            imageUrl: 'https://www.pngarts.com/files/3/Jewellery-PNG-Image-Transparent.png'

        }

    ]
    const HandBags = [
        {
            title : "Orange Synthetic Solid Fashion",
            Price : '789',
            imageUrl: 'https://th.bing.com/th/id/R.d43fa49a4505bc41ae33c23605142e09?rik=DSWFpF%2b%2bfsuzfw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fWomen-Bag-PNG-HD.png&ehk=%2bd9arQpPM1e%2fA0wU0wNC91pFNya8sIxU1l7pzkGOPkI%3d&risl=&pid=ImgRaw&r=0'


        },
        {
             title : "Nylon Duffle Bags for Women",
            Price : '1299',
            imageUrl: "https://pngimg.com/uploads/women_bag/women_bag_PNG6428.png"

        },
        {
             title : "Red Synthetic Solid Fashion",
             
            Price : '889',
            imageUrl: 'https://pngimg.com/uploads/women_bag/women_bag_PNG6406.png'

        }
        ,
        {
             title : "Yellow Synthetic Solid Fashion",
            Price : '980',
            imageUrl: 'https://www.pngmart.com/files/15/Yellow-Ladies-Handbag-PNG.png'

        } ,
        {
             title : "Women's Western Dark Red",
            Price : '999',
            imageUrl: 'https://pluspng.com/img-png/women-bag-png--1000.png'

        } ,
        {
             title : "Women's Western Mustard",
             Price : '679',
            imageUrl: 'https://www.pngmart.com/files/15/Ladies-Handbag-PNG.png'

        } ,
        {
             title : "Silver Synthetic Solid Fashion",
            Price : '1289',
            imageUrl: 'https://purepng.com/public/uploads/large/purepng.com-women-baghandbagwomen-bagsoft-fabricleatherladies-14215264147290bjek.png'

        } ,
        {
             title : "Cotton Floral Buta Embroidered",
            Price : '1199',
            imageUrl: 'https://www.pngarts.com/files/8/Designer-Ladies-Purse-PNG-Image-Background.png'

        } ,
        {
             title : "Women's Western Tan",
             Price : '1099',
            imageUrl: 'https://pngimg.com/uploads/women_bag/women_bag_PNG6398.png'

        }

    ]
  return (
    <div className='HomePage'>
        <header class="p-3 mb-3" style={{backgroundColor:'#303841',boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
          <a
            href="/"
            class="d-flex align-items-center text-body-emphasis text-decoration-none"
          >
            <span class="fs-4 mx-5 fw-bold" style={{ color: "white",fontFamily:'Georgia, serif' }}>
              Top T-shirts Sales 
            </span>
          </a>
        </header>
        <div className="container">
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
        {Sarees.map((item, index) => (
              <div className='col-lg-4 col-md-12 mb-4' key={index}  >
                <div className='card' id='kitchenCard' style={{backgroundColor:'#bbe4e9',boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
                  <img  style={{ height: '40vh',padding:'10px' }} src={item.imageUrl} className='w-100' alt={item.item} />
                  <Link to= {`/${item.title}`} style={{ textDecoration: 'none' }}>
                    <div className='mask m-1' style={{ backgroundColor: 'black',borderRadius:'10px',boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>
                      <div className='d-flex justify-content-start align-items-start h-100'>
                        <ul className='d-flex list-unstyled mt-auto'>
                          <li className='me-auto' style={{ padding: '5px', margin: '10px' }}>
                            <h5  style={{color:'white'}}>{item.title}</h5>
                          </li>
                        </ul>
                        <h5>
                          <span id='MenPriceText' className='badge  pt-2 ms-3 mt-3 '>₹{item.Price}</span>
                        </h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      <header class="p-3 mb-4" style={{backgroundColor:'#3b0944',boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
          <a
            href="/"
            class="d-flex align-items-center text-body-emphasis text-decoration-none"
          >
            <span class="fs-4 mx-5 fw-bold" style={{ color: "white",fontFamily:'Georgia, serif' }}>
              Top Shirts Sales 
            </span>
          </a>
        </header>
        <div className="container">
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
        {TopWears.map((shirt, index) => (
              <div className='col-lg-4 col-md-12 mb-4' key={index}  >
                <div className='card' id='kitchenCard' style={{backgroundColor:'#dbd8e3',boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
                  <img  style={{ height: '40vh',padding:'10px' }} src={shirt.imageUrl} className='w-100' alt={shirt.title} />
                  <Link  to= {`/${shirt.title}`} style={{ textDecoration: 'none' }}>
                    <div className='mask m-1' style={{ backgroundColor: '#352f44',borderRadius:'10px',boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>
                      <div className='d-flex justify-content-start align-items-start h-100'>
                        <ul className='d-flex list-unstyled mt-auto'>
                          <li className='me-auto' style={{ padding: '5px', margin: '10px' }}>
                            <h5  style={{color:'white'}}>{shirt.title}</h5>
                          </li>
                        </ul>
                        <h5>
                          <span id='MenPriceText' className='badge  pt-2 ms-3 mt-3 '>₹{shirt.Price}</span>
                        </h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      <header class="p-3 mb-4 bg-black" style={{boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
          <a
            href="/"
            class="d-flex align-items-center text-body-emphasis text-decoration-none"
          >
            <span class="fs-4 mx-5 fw-bold" style={{ color: "white",fontFamily:'Georgia, serif' }}>
              Top Jeans Sales 
            </span>
          </a>
        </header>
        <div className="container">
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
        {Jewellery.map((jewellery, index) => (
              <div className='col-lg-4 col-md-12 mb-4' key={index}  >
                <div className='card' id='kitchenCard' style={{backgroundColor:'#0881a3',boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
                  <img  style={{ height: '40vh',padding:'10px' }} src={jewellery.imageUrl} className='w-100' alt={jewellery.title} />
                  <Link to= {`/${jewellery.title}`} style={{ textDecoration: 'none' }}>
                  <div className='mask m-1' style={{ backgroundColor: '#392f2f',borderRadius:'10px',boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset' }}>
                      <div className='d-flex justify-content-start align-items-start h-100'>
                        <ul className='d-flex list-unstyled mt-auto'>
                          <li className='me-auto' style={{ padding: '5px', margin: '10px' }}>
                            <h5  style={{color:'white'}}>{jewellery.title}</h5>
                          </li>
                        </ul>
                        <h6>
                          <span id='MenPriceText' style={{boxShadow:' rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}} className='badge  pt-2 ms-3 mt-3 '>₹{jewellery.Price}</span>
                        </h6>
                      </div> 
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      <header class="p-3 mb-4" style={{backgroundColor:'#264e70',boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
          <a
            href="/"
            class="d-flex align-items-center text-body-emphasis text-decoration-none"
          >
            <span class="fs-4 mx-5 fw-bold" style={{ color: "white",fontFamily:'Georgia, serif' }}>
              Top Shoes Sales 
            </span>
          </a>
        </header>
        <div className="container">
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
        {HandBags.map((bags, index) => (
              <div className='col-lg-4 col-md-12 mb-4' key={index}  >
                <div className='card' id='kitchenCard' style={{backgroundColor:'#5c5757',boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
                  <img  style={{ height: '40vh',padding:'10px' }} src={bags.imageUrl} className='w-100' alt={bags.title} />
                  <Link to= {`/${bags.title}`} style={{ textDecoration: 'none' }}>
                    <div className='mask m-1' style={{ backgroundColor: '#537791',borderRadius:'10px',boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>
                      <div className='d-flex justify-content-start align-items-start h-100'>
                        <ul className='d-flex list-unstyled mt-auto'>
                          <li className='me-auto' style={{ padding: '5px', margin: '10px' }}>
                            <h5  style={{color:'white'}}>{bags.title}</h5>
                          </li>
                        </ul>
                        <h6>
                          <span id='MenPriceText' style={{backgroundColor:'#11144c'}} className='badge  pt-2 ms-3 mt-3 '>₹{bags.Price}</span>
                        </h6>
                      </div> 
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default WomenAllCards
