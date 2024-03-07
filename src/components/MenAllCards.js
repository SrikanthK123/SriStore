import React,{useEffect} from 'react'
import {
    Link
  } from "react-router-dom";
const MenAllCards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
    const Tshirts = [
        {
            title : "White T-shirt",
            Price : '600',
            imageUrl: 'https://freepngimg.com/thumb/tshirt/36674-2-plain-white-t-shirt.png'


        },
        {
             title : "Grey T-shirt",
             Price : '550',
             imageUrl: 'https://freepngimg.com/thumb/tshirt/36674-2-plain-white-t-shirt.png'

        },
        {
             title : "Red T-shirt",

            Price : '690',
            imageUrl: 'https://image.jimcdn.com/app/cms/image/transf/dimension=1007x10000:format=png/path/sbec91bf8c08a9a72/image/i76dd611f94e491c1/version/1553851215/image.png',

        }
        ,
        {
             title : "Light Red T-shirt",
                       Price : '500',
            imageUrl: 'https://th.bing.com/th/id/R.fbe061bf4e60ad0f1e067b2c213399aa?rik=qMW8eYnMoc4cBA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fT-Shirt-PNG-HD.png&ehk=vcK8uo7kkE4Kya1SdkGkqEVZnU4tWcqlrIbN8vmB9OM%3d&risl=&pid=ImgRaw&r=0'

        } ,
        {
             title : "Dark Green T-shirt",
                       Price : '660',
            imageUrl: 'https://th.bing.com/th/id/R.fa18fb29aa9692602f1c5ec40c0a8793?rik=%2fSnWBw49L0Sfng&riu=http%3a%2f%2fpngimg.com%2fuploads%2ftshirt%2ftshirt_PNG5450.png&ehk=ksOt2h8ucbvl9i58pNokT5WkIn%2fF0v3OfsuHVm81SKc%3d&risl=&pid=ImgRaw&r=0'

        } ,
        {
             title : "Green T-shirt",
                       Price : '450',
            imageUrl: 'https://purepng.com/public/uploads/large/purepng.com-green-t-shirtclothingt-shirtt-shirtdressfashionclothshirt-691522330493iyjsl.png'

        } ,
        {
             title : "Yellow T-shirt",
                       Price : '600',
            imageUrl: 'https://www.pngarts.com/files/5/Plain-Yellow-T-Shirt-Transparent-Image.png'

        } ,
        {
             title : "White Collar T-shirt",
                       Price : '699',
            imageUrl: 'https://i.pinimg.com/originals/7e/26/af/7e26af21919d6d6e4c707a2bb96296c3.png'

        } ,
        {
             title : "Blue T-shirt",
                       Price : '399',
            imageUrl: 'https://pngimg.com/uploads/tshirt/tshirt_PNG5436.png'

        }

       
    ]
    const Shirts = [
        {
            title : "Half-Hand Shirt",
            Price : '600',
            imageUrl: 'https://th.bing.com/th/id/R.49c8ccc5baa1076b3b1a4041e709f559?rik=Ycd44U1LWWxBMQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f8%2fDress-Shirt-PNG-Image-HD.png&ehk=4FSm7edIajbuJMH%2bIDXoZe0XataLH9xy%2bLKkeMyI23I%3d&risl=1&pid=ImgRaw&r=0'


        },
        {
             title : "Full-Plain Shirt",
            Price : '550',
            imageUrl: 'https://purepng.com/public/uploads/thumbnail/purepng.com-denim-blue-full-plain-shirtgarmentdressshirtfitfront-buttonfront-pocketdenim-bluefull-1421526313681bf4uy.png'

        },
        {
             title : "White Shirt",
             
            Price : '690',
            imageUrl: 'https://www.pngall.com/wp-content/uploads/5/Shirt-PNG-Download-Image.png'

        }
        ,
        {
             title : "Black Shirt",
            Price : '500',
            imageUrl: 'https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png'

        } ,
        {
             title : "Light-Blue Shirt",
            Price : '660',
            imageUrl: 'https://www.pngall.com/wp-content/uploads/5/Shirt-PNG-Images.png'

        } ,
        {
             title : "Grey Shirt",
             Price : '450',
            imageUrl: 'https://th.bing.com/th/id/R.c1f0c199989f9f716855f4f26f9ac3a5?rik=VaRyLVAPhjmxDg&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery2%2fDress-Shirt-PNG-Image.png&ehk=BHuXPSvm9cJR1b%2bFeT6xdXZOdWeBXyzNNVJlmeQMUTk%3d&risl=&pid=ImgRaw&r=0'

        } ,
        {
             title : "Men Checked Slim Shirt",
            Price : '600',
            imageUrl: 'https://pluspng.com/img-png/shirt-hd-png-plaid-shirt-starting-at-85-1618.png'

        } ,
        {
             title : "Blue Shirt",
            Price : '699',
            imageUrl: 'https://th.bing.com/th/id/R.69f31e2dc793851c6ed4d13e1039b884?rik=CAzdEgtZq1pUiA&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery2%2fDress-Shirt-PNG-Picture.png&ehk=4q2DbSpbkUEgxe0av3574z26xHzt3tSNzBij%2bxjYJRU%3d&risl=&pid=ImgRaw&r=0'

        } ,
        {
             title : "Orange Shirt",
             Price : '399',
            imageUrl: 'https://clipground.com/images/shirt-png-image-1.png'

        }

    ]
    const Jeans = [
        {
            title : "Men's Relaxed Jeans",
            Price : '600',
            imageUrl: 'https://pngimg.com/uploads/jeans/jeans_PNG5779.png'


        },
        {
             title : "Men's Relaxed Black Jeans",
            Price : '550',
            imageUrl: "https://freepngimg.com/thumb/jeans/31-men's-jeans-png-image.png"

        },
        {
          title : "Tapered Fit Dark Jeans",
             
            Price : '690',
            imageUrl: 'https://th.bing.com/th/id/R.748c7509be841d7ffa7a6a6432ba4051?rik=ifIznXIcMPS0yg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fRipped-Men-Jeans-PNG.png&ehk=3q0sgVPz%2bQRfeQ30E%2fb3APyIAjccejryt4SwiwuH7wY%3d&risl=&pid=ImgRaw&r=0'

        }
        ,
        {
             title : "Men's Slim Jeans",
            Price : '500',
            imageUrl: 'https://purepng.com/public/uploads/large/purepng.com-mens-jeansgarmentlower-bodydenimjeansbluebright-14215263626965rysv.png'

        } ,
        {
             title : "Men's Slim Black Jeans",
            Price : '660',
            imageUrl: 'https://www.pngmart.com/files/7/Denim-Jean-PNG-Transparent.png'

        } ,
        {
             title : "Tapered Fit Jeans",
             Price : '450',
            imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/04/Jeans-PNG-Image.png'

        } ,
        {
             title : "Slim Fit Jogger Stretch",
            Price : '600',
            imageUrl: 'https://th.bing.com/th/id/R.440a9affd1dd8b7aac43e50f3c7b4833?rik=EvJs1Wh%2f6661Yg&riu=http%3a%2f%2fssl.quiksilver.com%2fstatic%2fQS%2fdefault%2fcategory-assets%2fcat-experiences%2fdenim_selector%2fimg%2fselector%2fslim.png&ehk=JUGBImblisungbELLu4B%2b%2bb1%2bXeM8wZ0B%2fX7I3aCyqM%3d&risl=&pid=ImgRaw&r=0'

        } ,
        {
             title : "Men's Slim Fit Jeans",
            Price : '699',
            imageUrl: 'https://freepngdownload.com/image/thumb/jeans-png-free-download-27.png'

        } ,
        {
             title : "Men's Skinny Pants",
             Price : '399',
            imageUrl: 'https://www.pngarts.com/files/6/Jeans-Download-PNG-Image.png'

        }

    ]
    const Shoes = [
        {
            title : "Men Walking, Running Red Shoe",
            Price : '600',
            imageUrl: 'https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png'


        },
        {
             title : "Men's Ultra Lite Running Shoes",
            Price : '550',
            imageUrl: "https://freepngimg.com/download/running%20shoes/15-nike-running-shoes-png-image.png"

        },
        {
             title : "Men Running Yellow Shoe",
             
            Price : '690',
            imageUrl: 'https://th.bing.com/th/id/R.6075e3b79592af17a19dd08dda8157f7?rik=SzBQICM1XekXkg&riu=http%3a%2f%2fpngimg.com%2fuploads%2frunning_shoes%2frunning_shoes_PNG5818.png&ehk=EJ3CaBx6HEqQtMdnvnfO4CS4RmuEInove5G%2fnVK2XtE%3d&risl=1&pid=ImgRaw&r=0'

        }
        ,
        {
             title : "Mens Rodeo ProRunning Shoe",
            Price : '500',
            imageUrl: 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5817.png'

        } ,
        {
             title : "Men's Hurricane Running Shoes",
            Price : '660',
            imageUrl: 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5824.png'

        } ,
        {
             title : "Men's Blue Running Shoes",
             Price : '450',
            imageUrl: 'https://th.bing.com/th/id/R.835983e251d097bc25af6fb3b2155be7?rik=M%2fqrSDtR0zalDw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fshoe-transparent-background%2fshoe-transparent-background-12.png&ehk=aBRlr3y8H6C6wFWasX1boX9%2batIB911%2b5HM0eh0kwTo%3d&risl=&pid=ImgRaw&r=0'

        } ,
        {
             title : "Men’s Ignite PRO Running Shoes",
            Price : '600',
            imageUrl: 'https://freepngimg.com/thumb/running%20shoes/10-running-shoes-png-image.png'

        } ,
        {
             title : "Men's Wonder Sports Running",
            Price : '699',
            imageUrl: 'https://freepngimg.com/thumb/adidas_shoes/8-2-adidas-shoes-png-picture.png'

        } ,
        {
             title : "Men's Wonder Yellow Sports",
             Price : '399',
            imageUrl: 'https://freepngimg.com/thumb/running_shoes/5-2-running-shoes-png.png'

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
        {Tshirts.map((item, index) => (
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
        {Shirts.map((shirt, index) => (
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
        {Jeans.map((jeans, index) => (
              <div className='col-lg-4 col-md-12 mb-4' key={index}  >
                <div className='card' id='kitchenCard' style={{backgroundColor:'#0881a3',boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
                  <img  style={{ height: '40vh',padding:'10px' }} src={jeans.imageUrl} className='w-100' alt={jeans.title} />
                  <Link to= {`/${jeans.title}`} style={{ textDecoration: 'none' }}>
                  <div className='mask m-1' style={{ backgroundColor: '#392f2f',borderRadius:'10px',boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset' }}>
                      <div className='d-flex justify-content-start align-items-start h-100'>
                        <ul className='d-flex list-unstyled mt-auto'>
                          <li className='me-auto' style={{ padding: '5px', margin: '10px' }}>
                            <h5  style={{color:'white'}}>{jeans.title}</h5>
                          </li>
                        </ul>
                        <h5>
                          <span id='MenPriceText' style={{boxShadow:' rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}} className='badge  pt-2 ms-3 mt-3 '>₹{jeans.Price}</span>
                        </h5>
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
        {Shoes.map((shoe, index) => (
              <div className='col-lg-4 col-md-12 mb-4' key={index}  >
                <div className='card' id='kitchenCard' style={{backgroundColor:'#5c5757',boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
                  <img  style={{ height: '40vh',padding:'10px' }} src={shoe.imageUrl} className='w-100' alt={shoe.title} />
                  <Link to= {`/${shoe.title}`} style={{ textDecoration: 'none' }}>
                    <div className='mask m-1' style={{ backgroundColor: '#537791',borderRadius:'10px',boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>
                      <div className='d-flex justify-content-start align-items-start h-100'>
                        <ul className='d-flex list-unstyled mt-auto'>
                          <li className='me-auto' style={{ padding: '5px', margin: '10px' }}>
                            <h5  style={{color:'white'}}>{shoe.title}</h5>
                          </li>
                        </ul>
                        <h5>
                          <span id='MenPriceText' style={{backgroundColor:'#11144c'}} className='badge  pt-2 ms-3 mt-3 '>₹{shoe.Price}</span>
                        </h5>
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

export default MenAllCards
