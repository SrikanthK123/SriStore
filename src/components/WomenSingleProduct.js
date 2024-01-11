import React, { useState } from 'react'

const WomenSingleProduct = () => {
    const [distance,setDistance]= useState('')
        const [rate,setRate]= useState('')
        const [res,setRes]= useState(null)
    const Calculator = ()=>{
        const distVal = parseFloat(distance)
        const rateVal = parseFloat(rate)
        if(!isNaN(distVal) && !isNaN(rateVal)){
            const toll = distVal * rateVal ;
            setRes(`Distance is ${distVal} and Rate is ${rateVal} and the result is ${toll}`)
        }
        else{
            setRes("Please Enter valid value")
        }
    }
   
  return (
    <div className='HomePge'>
      <div className='container bg-green'>
        <div className='row'>
            <div className='col-6'>
            <div className="mb-3">
                <label>Enter Distance</label>
                <input type='text' placeholder='Enter Distance Value' value={distance} onChange={(e)=>{setDistance(e.target.value)}} />
                </div>
                <div className="mb-3">
                <label className='mt-3'>Enter Rate</label>
                <input type='text' placeholder='Enter Rate  Value' value={rate} onChange={(e)=>{(setRate(e.target.value))}} /></div>
                <button className='btn btn-primary text-center justisfy-center' onClick={Calculator}>Calculate</button>
                {res && <div className='lead m-3 alert alert-success'>{res}</div>}
            </div>
        </div>
      </div>
    </div>
  )
}

export default WomenSingleProduct
