import React,{useEffect} from 'react'
import YourOrders from '../Images/pallets.gif'
import DamageProduct from '../Images/broken.gif'
import PaymentGIF from '../Images/wallet.gif'
import {
  Link
} from "react-router-dom";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const SignUpSubmit = () => {
    alert("Update Soon");
}
  return (
    <div className='HomePage'>
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1  mb-3" style={{color:'white'}}>Connecting You to the Digital World.</h1>
        <p class="col-lg-10 fs-4" style={{textAlign:'justify'}}>Empower your digital journey with our comprehensive online services, tailored to meet your unique needs. Seamlessly navigate the virtual landscape and unlock the full potential of your online presence with us</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 " id='FormBG'>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput" style={{color:'#176C8D',fontWeight:'bold'}} >Email address</label>
          </div>
          <div class="form-floating mb-3" >
    <textarea type="password" class="form-control" id="exampleFormControlTextarea1" placeholder="Password" style={{height:'100px'}}></textarea>
    <label for="exampleFormControlTextarea1"  style={{color:'#176C8D',fontWeight:'bold'}}>Comment</label>
</div>

          <div class="checkbox mb-3">
            <label className='fw-bold'>
              Contact Us
            </label>
          </div>
          <button class="w-100 btn btn-lg " type="submit" id='servicesBtn' onClick={SignUpSubmit}>Sign up</button>
          <hr class="my-4"/>
         
        </form>
      </div>
    </div>
  </div>
  
  <div className='container ' style={{backgroundColor:'#B7E6F6',borderRadius:'15px'}}>
  <div class="row " style={{display:'flex',justifyContent:'center'}}>
      <div class="col-md-6">
        <h2 class="" style={{backgroundColor:'#f95959',marginTop:'10px',borderRadius:'15px',padding:'20px',color:'white',boxShadow:'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}>Some things you can do here</h2>
        <p style={{textAlign:'justify'}}>Turning Product Problems into Solutions: Unleashing Excellence in Every Challenge.
Embracing Innovation, Resolving Issues—We Turn Challenges into Triumphs.</p>
        <ul class="list-unstyled ps-0">
        <li>
    <div class="card mb-3"  style={{boxShadow:' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
        <div class="row g-0">
            <div class="col-6 col-sm-4 d-flex justify-content-center" style={{backgroundColor:'#38598b'}}> 
                <img src= {YourOrders} style={{padding:'30px',borderRadius:'50%'}} class="img-fluid rounded-start " alt="Product" />
            </div>
            <div class="col-6 col-sm-8" style={{ backgroundColor: 'pink' }}>
                <div class="card-body" id='serviceCardBody'>
                    <h5 class="card-title">Your Order</h5>
                    <p class="card-text" style={{ textAlign: 'justify', letterSpacing: '-0.5px' }}>Streamlined Orders, Organized Inventory – Your Business, Simplified.</p>
                  <Link to='/Services'><button id='Viewbtn' style={{height:'50px'}}>View</button></Link>
                </div>
            </div>
        </div>
    </div>
</li>
<li >
    <div class="card mb-3"  style={{boxShadow:' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
        <div class="row g-0" >
            <div class="col-6 col-sm-4 d-flex justify-content-center" style={{backgroundColor:'#38598b'}}> 
                <img src= {DamageProduct} style={{padding:'30px',borderRadius:'50%'}} class="img-fluid rounded-start" alt="Product" />
            </div>
            <div class="col-6 col-sm-8" style={{ backgroundColor: 'pink' }}>
                <div class="card-body" id='serviceCardBody'>
                    <h5 class="card-title">Return </h5>
                    <p class="card-text" style={{ textAlign: 'justify', letterSpacing: '-0.5px' }}>Seamless Returns: Embracing Damage, Exchanging with Care.</p>
                    <Link to='/Services'><button id='Viewbtn' style={{height:'50px'}}>View</button></Link>
                </div>
            </div>
        </div>
    </div>
</li>
          <li>
          <div class="card mb-3" style={{boxShadow:' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}} >
        <div class="row g-0" >
            <div class="col-6 col-sm-4 d-flex justify-content-center" style={{backgroundColor:'#38598b'}}> 
                <img src= {PaymentGIF} style={{padding:'40px',borderRadius:'50%'}} class="img-fluid rounded-start" alt="Product" />
            </div>
            <div class="col-6 col-sm-8" style={{ backgroundColor: 'pink' }}>
                <div class="card-body" id='serviceCardBody'>
                    <h5 class="card-title">Payment</h5>
                    <p class="card-text" style={{ textAlign: 'justify', letterSpacing: '-0.5px' }}>
    Secure Transactions, Hassle-Free Living: Elevate Your Online Payment Experience
</p>
<Link to='/Services'><button id='Viewbtn' style={{height:'50px'}}>View</button></Link>
                </div>
            </div>
        </div>
    </div>
          </li>
        </ul>
      </div>

    </div>
    </div>
    </div>
  )
}

export default Services
