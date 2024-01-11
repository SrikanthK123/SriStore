import React from 'react'
import {
  Link
} from "react-router-dom";
const KidsAllCards = () => {
  const Toys = [
    {
        title : " Buzz Lightyear Toy",
        Price : '899',
        imageUrl: 'https://www.pngall.com/wp-content/uploads/5/Toy-Story-PNG-Pic.png'


    },
    {
         title : "Rex Toy",
        Price : '599',
        imageUrl: 'https://www.pngall.com/wp-content/uploads/5/Toy-Story-Movie-PNG.png'

    },
    {
         title : "Minion",

        Price : '849',
        imageUrl: 'https://purepng.com/public/uploads/large/minion-toy-vbr.png'

    }
    ,
    {
         title : "Classic ERO Fluffy Teddy Bear ",
                   Price : '1499',
        imageUrl: 'https://pluspng.com/img-png/png-toys-toy-transparent-background-1000.png'

    } ,
    {
         title : "Joker Toy",
        Price : '799',
        imageUrl: 'https://www.pngmart.com/files/6/Toy-PNG-HD.png'

    } ,
    {
         title : "Brown Teddy",
        Price : '859',
        imageUrl: 'https://th.bing.com/th/id/R.0bbf47a366384174524b7e43a5b27793?rik=8dypXYCqsNGBKg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f6%2fToy-Download-PNG-Image.png&ehk=BkQ0J6mdiBvDg97rwhrk0lIDZ%2bpNBp3ew%2fNFJN%2bCbGc%3d&risl=&pid=ImgRaw&r=0'

    } ,
    {
         title : "Remote Controller Van for Kids",
         Price : '599',
        imageUrl: 'https://www.pngall.com/wp-content/uploads/5/Toy-PNG-Download-Image.png'

    } ,
    {
         title : "Duck Toy",
        Price : '399',
        imageUrl: 'https://purepng.com/public/uploads/large/duck-toy-ndn.png'

    } ,
    {
         title : "Remote Controller Car",
        Price : '6799',
        imageUrl: 'https://th.bing.com/th/id/R.2150d11d276f9515e889bea9695fb637?rik=z4v%2fFL9Bt%2bhkzw&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f585bb267cb11b227491c328f.png&ehk=qwlRi4IygcmhID%2bQq9yyKTKeRGkFk5X92ORQmD4qrpM%3d&risl=&pid=ImgRaw&r=0'

    }

   
]
const KidWears = [
    {
        title : "Cotton Bow Applique Top",
        Price : '429',
        imageUrl: 'https://th.bing.com/th/id/R.3e03a3b610e81be0ca10d226e1624dc6?rik=fAUlPgeCsM%2b%2bnQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fBaby-Clothes-Transparent-PNG.png&ehk=VlrtVj5xNEHNGizUnnGDNqa1tWIUaTtXhyalw3MFjq8%3d&risl=1&pid=ImgRaw&r=0'


    },
    {
         title : "Hosiery Short Sleeve Regular",
        Price : '350',
        imageUrl: 'https://www.pngmart.com/files/7/Baby-Clothes-PNG-Free-Download.png'

    },
    {
         title : "Cotton Printed Dungaree Set",
         
        Price : '499',
        imageUrl: 'https://www.pngmart.com/files/7/Baby-Clothes-PNG-Photo.png'

    }
    ,
    {
         title : "Toddler Girls Striped Print Puff",
        Price : '650',
        imageUrl: 'https://www.pngmart.com/files/7/Baby-Clothes-PNG-Picture.png'

    } ,
    {
         title : "Bullfinch Floral Printed Modal",
        Price : '879',
        imageUrl: 'https://i.pinimg.com/originals/79/1c/87/791c87eb4aa3017cc61ce354f3b51b67.png'

    } ,
    {
         title : "Kwikk Traders Baby Boys",
         Price : '699',
        imageUrl: 'https://i.pinimg.com/originals/23/c4/bc/23c4bcf0473be9629cf54f901bb0dad4.png'

    } ,
    {
         title : "Niren Enterprise Baby Girl Dresse",
        Price : '649',
        imageUrl: 'https://th.bing.com/th/id/R.43e498a0196b2c56a867c5343350c508?rik=q%2fnOGzFQBOCcDg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fdress%2fdress_PNG119.png&ehk=UgW3LJN1Y%2fc%2b5hQxyetZwIepNihLJgaCjzbLIWLB2xk%3d&risl=&pid=ImgRaw&r=0'

    } ,
    {
         title : "Girl's Cotton Dress",
        Price : '375',
        imageUrl: 'https://th.bing.com/th/id/R.a0282ae974f498530b9a62c026de900f?rik=R0qtQNqZmV9rUA&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fBaby-Clothes-PNG-Image.png&ehk=Slo2ZNicKB996VGxI8D1YQhTGRMApRrrbKfBTjNIyz8%3d&risl=&pid=ImgRaw&r=0'

    } ,
    {
         title : "Sleeves Round Neck Foral Top",
         Price : '1299',
        imageUrl: 'https://freepngimg.com/thumb/jeans/53971-1-baby-clothes-free-download-image.png'

    }

]
const Bags = [
    {
        title : "School Bag Soft Backpacks Cartoon",
        Price : '789',
        imageUrl: 'https://www.pngarts.com/files/1/School-Bag-PNG-Photo.png'


    },
    {
         title : "Casual Backpack",
        Price : '399',
        imageUrl: "https://pluspng.com/img-png/png-school-bag-school-bag-png-transparent-image-500.png"

    },
    {
         title : "Multi Print Boys and Girls School",
         
        Price : '859',
        imageUrl: 'https://www.pngarts.com/files/1/School-Bag-Download-Transparent-PNG-Image.png'

    }
    ,
    {
         title : "Summer-Force School Bag",
        Price : '779',
        imageUrl: 'https://freepngimg.com/thumb/gloves/55160-2-school-bag-free-download-image.png'

    } ,
    {
         title : "Blue & Yellow Bag",
        Price : '419',
        imageUrl: 'https://www.pngall.com/wp-content/uploads/2/Bag-PNG-High-Quality-Image.png'

    } ,
    {
         title : "Black & White Scott Bag",
         Price : '888',
        imageUrl: 'https://th.bing.com/th/id/R.5a9c57757209c881706bab086c150931?rik=6q0sGsUQ92Hbew&riu=http%3a%2f%2fpngimg.com%2fuploads%2fbackpack%2fbackpack_PNG6333.png&ehk=wWR28N1v4Qzv9t6E45I%2fH9YsTPwWhcUGMKSncCoYePc%3d&risl=1&pid=ImgRaw&r=0'

    } ,
    {
         title : "Butterfly Bag for Kids",
        Price : '789',
        imageUrl: 'https://th.bing.com/th/id/R.c70097c4b95820a46033cb4ef44cda08?rik=fu64sfD2cDXG7Q&riu=http%3a%2f%2fwww.nvsbags.com%2fassets%2fimages%2fkidz_bag%2fkids-1.png&ehk=eQsW3zUTDcXdXkwHYK70qlEQFnnP%2bIHb7bKGxA0qP%2bY%3d&risl=&pid=ImgRaw&r=0'

    } ,
    {
         title : " Cartoon Printed Pink Waterproof",
        Price : '699',
        imageUrl: 'https://www.nvsbags.com/assets/images/kidz_bag/k4.png'

    } ,
    {
         title : "Doraemon Bag",
         Price : '899',
        imageUrl: 'https://freepngimg.com/thumb/gloves/55190-1-school-bag-hd-download-hq-png.png'

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
    {Toys.map((item, index) => (
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
    {KidWears.map((shirt, index) => (
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
    {Bags.map((bags, index) => (
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

export default KidsAllCards
