import React from 'react'
import grocery from "../Images/grocery.gif";
import dairyproducts from "../Images/cutting-board.gif";
import {
    Link
  } from "react-router-dom";
const KitchenProduct = () => {
    const KitchenItems = [
        {
            item :'Non-stick frying pan',
            price : '300',
            imageUrl : 'https://th.bing.com/th/id/R.099d68676b447cb0de3817e5ebfc3b73?rik=vYvEBMj4FvIDwg&riu=http%3a%2f%2fpngimg.com%2fuploads%2ffrying_pan%2ffrying_pan_PNG8342.png&ehk=UCxH2n3N9Ir4FhjILW%2bSpyYXP6yON%2bOXpIl8tm1jRq0%3d&risl=1&pid=ImgRaw&r=0'
        },
        {
            item :'Grinder machine',
            price : '5000',
            imageUrl : 'https://shop.havells.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/_/0_287_3_5652.jpg'
        },
        {
            item :'Oil Bottle',
            price : '1200',
            imageUrl : 'https://purepng.com/public/uploads/medium/purepng.com-sunflower-oilsunflower-oilcooking-oilfrying-oilnon-volatile-oil-14115298330120ljtq.png'
        },
        {
            item :'Coffee Maker',
            price : '999',
            imageUrl : 'https://pngimg.com/uploads/coffee_machine/coffee_machine_PNG17307.png'
        },
        {
            item :'Microwave oven',
            price : '1399',
            imageUrl : 'https://www.pngmart.com/files/15/Samsung-Digital-Black-Microwave-Oven-Transparent-PNG.png'
        },
        {
            item :'Cutting boards',
            price : '569',
            imageUrl : 'https://www.napoleon.com/sites/default/files/products/70039-Carving-Set-Cutting-board-transparent-800px.png'
        },
        {
            item :'Baking sheets',
            price : '599',
            imageUrl : 'https://cdn.shopify.com/s/files/1/1344/1669/products/B01SC_product_1024x1024.png?v=1547774588'
        }
        ,
        {
            item :'Ladles',
            price : '399',
            imageUrl : 'https://th.bing.com/th/id/R.4e801c661401619b64d145cddef34b89?rik=B3lcb6Vc4ybfQw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fLadle-PNG-Pic.png&ehk=LVOrPI96e2mhRmgpdaSTAC1EDmWlqxQk68mZe4yKSGE%3d&risl=&pid=ImgRaw&r=0'
        }
        ,
        {
            item :'Garlic press',
            price : '499',
            imageUrl : 'https://th.bing.com/th/id/R.7d0d57ef9c7a561a6c7ff080a57bbe5b?rik=s2NWWy2jlH3z3g&riu=http%3a%2f%2fwww.brandsmartusa.com%2fimages%2fproduct%2flarge%2f20129623.png&ehk=XtF0RaDH%2fshIMsxtMnmTTpS1Wge9R36eNjb47QAkrVk%3d&risl=&pid=ImgRaw&r=0'
        },
        {
            item :'Tongs',
            price : '359',
            imageUrl : 'https://d3cizcpymoenau.cloudfront.net/images/39415/SIL_Tongs_OXO_Good_Grips_12-Inch_Tongs_28581.png'
        },
        {
            item :'Dinner plate sets',
            price : '1499',
            imageUrl : 'https://www.pngarts.com/files/8/Dinner-Plate-PNG-Transparent-Image.png'
        },
        {
            item :'Drinking glasses Set',
            price : '499',
            imageUrl : 'https://chairish-prod.global.ssl.fastly.net/image/product/master/7214e120-d71c-43f5-aef9-bc7bb05414c2'
        },
        {
            item :'Whisks',
            price : '295',
            imageUrl : 'https://th.bing.com/th/id/R.3de9889f49bb9198e67e23b6c4a01778?rik=0F0FMzLsZdUdqA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fwhisk-silhouette%2fwhisk-silhouette-23.png&ehk=93pH9iOfxkRSEDSwBI7nJi5Bn9yDtqeXG6iOi%2f1zMbk%3d&risl=&pid=ImgRaw&r=0'
        },
        {
            item :'Pot holders',
            price : '359',
            imageUrl : 'https://i.pinimg.com/originals/91/ce/f6/91cef611437aa7b6eb2f839bb305cdf8.png'
        },
        {
            item :'Double Burner',
            price : '1499',
            imageUrl : 'https://orel.com/wp-content/uploads/2019/09/499-0600_1-1.png'
        }
    ]
  return (  
    <div className='HomePage'>
      <div
        className="position-relative overflow-hidden p-3 p-md-5 mx-auto text-center"
        id="KitchenBanner"
      >
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold" style={{ color: "white" }}>
          Tools for Taste: Your Kitchen, Your Rules!
          </h1>
          <h3 className="fw-normal  mb-3" style={{ color: "#62f1f1" }}>
          Stirring Up Style, Serving Up Savings!
          </h3>
          <div className="d-flex gap-3 justify-content-center lead fw-normal">
          
            <a className="icon-link" href="#">
              <img id="buyGif" src={grocery} style={{ width: "80px" }} />
            </a>
          </div>
        </div>

        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      
        <div className='container py-5'>
          <h4 className='text-center mb-5'>
            <strong>Product listing</strong>
          </h4>

          <div className='row'>
            {KitchenItems.map((item, index) => (
              <div className='col-lg-4 col-md-12 mb-4' key={index}  >
                <div className='card' id='kitchenCard' style={{backgroundColor:'#005792',boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
                  <img  style={{ height: '40vh',padding:'10px' }} src={item.imageUrl} className='w-100' alt={item.item} />
                  <Link to= {`/${item.item}`} style={{ textDecoration: 'none' }}>
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                      <div className='d-flex justify-content-start align-items-start h-100'>
                        <ul className='d-flex list-unstyled mt-auto'>
                          <li className='me-auto' style={{ padding: '5px', margin: '10px' }}>
                            <h3  style={{color:'white'}}>{item.item}</h3>
                          </li>
                        </ul>
                        <h5>
                          <span id='PriceText' className='badge  pt-2 ms-3 mt-3 ' style={{boxShadow:' rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>₹{item.price}</span>
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

export default KitchenProduct
