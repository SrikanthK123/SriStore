import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import KitchenProduct from "./components/KitchenProduct";
import Laptops from "./components/Laptops";
import Mobiles from "./components/Mobiles";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleKitchenItem from "./components/SingleKitchenItem";
import KitchenSingle from "./components/KitchenSingle";
import MenFashion from "./components/MenFashion";
import WomenFashion from "./components/WomenFashion";
import MenSingleProduct from "./components/MenSingleProduct";
import WomenSingleProduct from "./components/WomenSingleProduct";
import AddCart from "./components/AddCart";
import KidItems from "./components/KidItems";
import MenAllCards from "./components/MenAllCards";
import WomenAllCards from "./components/WomenAllCards";
import KidsAllCards from "./components/KidsAllCards";
import ProductMain from "./components/ProductMain";
import Alert from "./components/Alert";
import LaptopCards from "./components/LaptopCards";
import MacList from "./components/MacList";
import HPList from "./components/HPList";
import RogList from "./components/RogList";
import LenovoList from "./components/LenovoList";
import LaptopDetails from "./components/LaptopDetails";
import AllLaptopList from "./components/AllLaptopList";
import AppleMobiles from "./components/AppleMobiles";
import AllMobiles from "./components/AllMobiles";
import SamsungMobiles from "./components/SamsungMobiles";
import OnePlusMobiles from "./components/OnePlusMobiles";
import ROGMobiles from "./components/ROGMobiles";
import GooglePixel from "./components/GooglePixel";

function App() {
  const KitchenItem = [
    {
      title: "Non-stick frying pan",
      description: "Non-stick frying pan ensures a seamless cooking experience,allowing you to create delicious meals without worrying about food sticking to the surface. The advanced non-stick coating guarantees easy food release and simple cleanup,making your kitchen adventures a joy.",
      img1: "https://th.bing.com/th/id/R.099d68676b447cb0de3817e5ebfc3b73?rik=vYvEBMj4FvIDwg&riu=http%3a%2f%2fpngimg.com%2fuploads%2ffrying_pan%2ffrying_pan_PNG8342.png&ehk=UCxH2n3N9Ir4FhjILW%2bSpyYXP6yON%2bOXpIl8tm1jRq0%3d&risl=1&pid=ImgRaw&r=0",
      img2: "https://www.pngmart.com/files/17/Stainless-Steel-Frying-Pan-PNG-Photos.png",
      img3: "https://www.pinclipart.com/picdir/big/214-2144303_wok-dish-tableware-frying-frying-pan-with-food.png",
      img4: "https://th.bing.com/th/id/R.bff1a33f8390c03798836ae6e11d89f6?rik=htDQxhi2WEJyRQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ffrying-pan-transparent%2ffrying-pan-transparent-9.png&ehk=I7ys%2fmDcmsb2SUOhqz5hz1v1XV%2bZjVADjgTrew8Jd5g%3d&risl=&pid=ImgRaw&r=0",
      img5: "https://pngimg.com/uploads/frying_pan/frying_pan_PNG8332.png",
      adv1: " Our non-stick frying pan simplifies your cooking experience with its advanced non-stick coating, ensuring easy food release and quick cleanup.",
      adv2: "Cook with confidence using less oil, as our pan promotes a healthier lifestyle without compromising on taste or flavor.",
      adv3: "Crafted for durability, this frying pan features a sturdy construction that withstands daily use, providing long-lasting performance in your kitchen.",
      adv4: " Elevate your culinary skills with our non-stick frying pan, now available at a special discounted price for a limited time. Don't miss out on this exclusive offer!",
      gif: "https://media3.giphy.com/media/Tg7M6S53syjN6prF93/source.gif",
      Price: "300",
    },
    {
      title: "Grinder machine",
      description:
        "The grinder machine is an indispensable tool in the kitchen, offering unparalleled convenience for various culinary tasks. With its versatile functionality, it effortlessly transforms whole spices, coffee beans, and grains into precisely ground textures, unlocking a spectrum of flavors for your recipes. Its powerful performance not only ensures consistent results but also saves valuable time in food preparation.",
      img1: "https://shop.havells.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/_/0_287_3_5652.jpg",
      img2: "https://www.havells.com/content/dam/havells/consumer/appliances/food-preparation/mixer-grinder/momenta-nv/cover.png",
      img3: "https://cdn.staticans.com/image/tr:e-sharpen-01,h-500,w-500,cm-pad_resize/data/preethi/14-oct-2021/Trio.png",
      img4: "https://www.pngmart.com/files/7/Mixer-Grinder-PNG-HD.png",
      img5: "https://www.havells.com/HavellsProductImages/HavellsIndia/Content/Consumer/Appliances/Food-prepration/mixer-grinder/SPRINT%20MIXER%20GRINDER%204%20JAR%20GREY%20600%20W/cover.png",
      adv1: "Our grinder machine streamlines your kitchen tasks with advanced features, ensuring smooth operation and quick results.",
      adv2: "Grind with confidence using our machine that allows you to control ingredients, promoting a healthier lifestyle without compromising on taste or freshness.",
      adv3: "Crafted for longevity, this grinder machine boasts a robust design that can withstand frequent use, providing reliable performance in your kitchen.",
      adv4: "Elevate your culinary experience with our grinder machine, now available at an exclusive discounted price for a limited time. Seize this opportunity for enhanced kitchen efficiency!",
      gif: "https://media2.giphy.com/media/YnZAxWHrqBPQvDhcVa/source.gif",
      Price: "5000",
    },
    {
      title: "Oil Bottle",
      description:
        "Natural oils, derived from plants such as olives, coconuts, and avocados, offer a myriad of benefits for overall well-being. Rich in antioxidants and essential fatty acids, these oils contribute to radiant skin, promoting a natural glow. Incorporating them into your diet supports heart health and aids in nutrient absorption.",
      img1: "https://purepng.com/public/uploads/medium/purepng.com-sunflower-oilsunflower-oilcooking-oilfrying-oilnon-volatile-oil-14115298330120ljtq.png",
      img2: "https://pngimg.com/uploads/sunflower_oil/sunflower_oil_PNG3.png",
      img3: "https://www.pngall.com/wp-content/uploads/2017/03/Oil-PNG-Picture.png",
      img4: "https://www.pngarts.com/files/4/Sunflower-Oil-PNG-Background-Image.png",
      img5: "https://www.pngarts.com/files/4/Sunflower-Oil-Download-Transparent-PNG-Image.png",
      adv1: "Our non-stick frying pan transforms your cooking routine with a natural oil-friendly design, ensuring effortless food release and easy cleanup.",
      adv2: " Cook with confidence using minimal oil, embracing a healthier lifestyle without compromising the rich taste and flavors of your favorite dishes.",
      adv3: "Meticulously crafted for longevity, our frying pan boasts a robust design that withstands daily use, promising enduring performance in your kitchen.",
      adv4: "Elevate your culinary skills with our natural oil-compatible frying pan, now offered at an exclusive discounted rate for a limited time. Seize this opportunity for enhanced cooking at an unbeatable price!",
      gif: "https://media.giphy.com/media/13UwB3fkzR80Za/giphy.gif",
      Price: "1200",
    },
    {
      title: "Coffee Maker",
      description:
        "Experience the ultimate in coffee brewing with our advanced coffee maker. Designed for convenience, it effortlessly transforms coffee preparation into a delightful ritual, ensuring a perfect cup every time. Embrace the aroma, taste, and simplicity that our coffee maker brings to your daily caffeine indulgence.    ",
      img1: "https://pngimg.com/uploads/coffee_machine/coffee_machine_PNG17307.png",
      img2: "https://th.bing.com/th/id/R.ff94adf42d993428cdf8587f7e37ae6e?rik=ikljuGB3WY%2bJNw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-coffee-machinecoffee-machinecoffeemachineautomatic-machinecoffe-maker-1701528346868zastz.png&ehk=ZUb1Dd1sV7haLg71AFW1zWksr%2fbivjEBMqgNgZLJ0ps%3d&risl=&pid=ImgRaw&r=0",
      img3: "https://clipground.com/images/coffee-maker-png-13.png",
      img4: "https://purepng.com/public/uploads/medium/purepng.com-coffee-machinecoffee-machinecoffeemachineautomatic-machinecoffe-maker-1701528346991oljz3.png",
      img5: "https://www.pngmart.com/files/22/Coffee-Maker-PNG-Isolated-HD.png",
      adv1: "Our coffee maker streamlines your morning routine with its user-friendly design, ensuring a hassle-free coffee brewing experience for a perfect start to your day.",
      adv2: "Savor the rich flavors of your favorite coffee without compromising on health. Our coffee maker allows you to control the ingredients, promoting a healthier coffee-drinking lifestyle.",
      adv3: "Engineered for longevity, our coffee maker boasts a robust build that endures daily use, promising a reliable companion for your caffeine cravings.",
      adv4: "Elevate your coffee ritual with our exclusive coffee maker, now at a special discounted rate for a limited time. Don't miss the chance to upgrade your coffee experience!",
      gif: "https://media.giphy.com/media/3o7WIx7urV838kHFzW/giphy.gif",
      Price: "999",
    },
    {
      title: "Microwave oven",
      description:
        "The microwave oven, a modern marvel in kitchen technology, has revolutionized the way we cook and reheat food. Its rapid heating capabilities, utilizing microwaves to excite water molecules within the food, make it an indispensable appliance for busy households. ",
      img1: "https://www.pngmart.com/files/15/Samsung-Digital-Black-Microwave-Oven-Transparent-PNG.png",
      img2: "https://th.bing.com/th/id/R.0552ba09e17e1f74e81bd84d2284bed6?rik=1B1nqdusddG0OQ&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-microwave-ovenelectronics-microwave-oven-941524664147b6jm9.png&ehk=kdTypEl3uNT%2fNAxWlMxwuVphluu9Bc9%2bU1bntAWjXlw%3d&risl=&pid=ImgRaw&r=0",
      img3: "https://pngimg.com/uploads/microwave/microwave_PNG101679.png",
      img4: "https://www.pngall.com/wp-content/uploads/12/Microwave-Oven-PNG-Images-HD.png",
      img5: "https://www.pngarts.com/files/3/Microwave-Oven-PNG-Pic.png",
      adv1: "Revolutionize your kitchen experience with our advanced microwave oven, designed for easy and efficient cooking. Its user-friendly features make preparing your favorite meals a breeze.",
      adv2: "Enjoy guilt-free meals as our microwave oven allows you to cook with minimal oil, preserving the nutritional value of your dishes. Embrace a healthier lifestyle without compromising on taste.",
      adv3: "Crafted for longevity, our microwave oven boasts a robust construction that can withstand daily use. Its durable design ensures reliable performance, making it a lasting addition to your kitchen.",
      adv4: "Elevate your kitchen game with our microwave oven, now available at an exclusive discounted price for a limited time. Seize this opportunity to enhance your cooking experience at an unbeatable value!",
      gif: "https://user-images.githubusercontent.com/42968973/46575902-5d235080-c98c-11e8-903d-112a5f7bca39.gif",
      Price: "1399",
    },
    {
      title: "Cutting boards",
      description:
        "The cutting board, a silent hero in every kitchen, serves as the sturdy foundation for culinary creations. Its smooth surface provides a safe and hygienic space for precision slicing and chopping, ensuring the integrity of ingredients.",
      img1: "https://www.napoleon.com/sites/default/files/products/70039-Carving-Set-Cutting-board-transparent-800px.png",
      img2: "https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,q_auto,w_auto/44163-sil-teakhaus-by-proteak-edge-grain-cutting-board",
      img3: "https://cdn11.bigcommerce.com/s-mq30jhqd1c/images/stencil/original/products/118/975/IMG_0473__01344.1505221618.png?c=2",
      img4: "https://www.woodcuttingboards.com/cms/controller/services/Thumbnail.ashx?width=595&fileName=/media/ecommerce_option.photo/CBU0032.png",
      img5: "https://www.woodcuttingboards.com/cms/controller/services/Thumbnail.ashx?width=595&fileName=/media/ecommerce_option.photo/CBU1065.png",
      adv1: "Our cutting boards are designed for seamless meal prep, offering a smooth surface that simplifies chopping, slicing, and dicing, ensuring a hassle-free cooking experience.",
      adv2: "Embrace a healthier cooking routine with our cutting boards, providing a sanitary and easy-to-clean surface for your fruits, vegetables, and proteins. Prepare nutritious meals with ease.",
      adv3: "Crafted with durability in mind, our cutting boards boast a robust design that can withstand the rigors of daily kitchen activities. Invest in quality and enjoy a long-lasting kitchen essential.",
      adv4: "Elevate your culinary journey with our cutting boards, available at an exclusive discounted rate for a limited time. Upgrade your kitchen tools now and seize this special offer before it's gone!",
      gif: "https://www.dish-works.com/wp-content/uploads/CuttingBoard4.gif",
      Price: "569",
    },
    {
      title: "Baking sheets",
      description:
        "Baking sheets are the unsung heroes of the kitchen, providing a versatile platform for creating delectable treats. With their even heat distribution, these metal sheets guarantee perfectly baked cookies, pastries, and more.",
      img1: "https://cdn.shopify.com/s/files/1/1344/1669/products/B01SC_product_1024x1024.png?v=1547774588",
      img2: "https://cdn.shopify.com/s/files/1/1344/1669/products/B01SC_alternateview.png?v=1547774606",
      img3: "https://th.bing.com/th/id/R.544ec14a464b72c5c3fa55f688a1328f?rik=veocU8HYDZl40w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fbaking-tray-png-range-kleen-toaster-oven-bakeware-1024.png&ehk=pGPAMwmaCdaIjHMREaLxF%2b4xV4WJZzkBc4Vs%2fRh7sUs%3d&risl=&pid=ImgRaw&r=0",
      img4: "https://pluspng.com/img-png/baking-tray-png-prev-650.png",
      img5: "https://media.nisbets.com/static/content/banners/banners_UK/xmas_cookware_baking_trays.png",
      adv1: "Our non-stick baking sheets redefine your baking experience with an advanced non-stick coating, ensuring seamless food release and effortless cleanup.",
      adv2: "Bake with confidence using minimal oil, as our sheets promote a healthier approach without compromising the deliciousness of your favorite treats.",
      adv3: " Engineered for durability, these baking sheets feature a robust construction that stands up to daily use, guaranteeing enduring performance in your kitchen.",
      adv4: "Elevate your baking skills with our non-stick baking sheets, now available at a special discounted price for a limited time. Seize this exclusive offer and transform your baking adventures!",
      gif: "https://media.giphy.com/media/ubhPnN4M58qoU/giphy.gif",
      Price: "599",
    },
    {
      title: "Ladles",
      description:
        "Ladles, the unsung heroes of the kitchen, play a crucial role in every culinary adventure. With their versatile design and graceful curves, ladles effortlessly scoop, pour, and serve, turning ordinary meals into culinary masterpieces.",
      img1: "https://th.bing.com/th/id/R.4e801c661401619b64d145cddef34b89?rik=B3lcb6Vc4ybfQw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fLadle-PNG-Pic.png&ehk=LVOrPI96e2mhRmgpdaSTAC1EDmWlqxQk68mZe4yKSGE%3d&risl=&pid=ImgRaw&r=0",
      img2: "https://th.bing.com/th/id/R.6c62b33c0f20a3955883aab7bc833982?rik=0iWCrtaoyCJ20w&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fLadle-Transparent-PNG.png&ehk=8NsDZknZxjQgqwQ%2boS99BbvYLHAP2yU24IUVJV1gQzk%3d&risl=1&pid=ImgRaw&r=0",
      img3: "https://www.pngmart.com/files/7/Ladle-PNG-Picture.png",
      img4: "https://th.bing.com/th/id/R.dd16a586831a4051c7ac227ea6dbbe23?rik=feJ3U8HFjv%2fl%2fA&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fLadle-PNG-Photos.png&ehk=zZWNlCAeQdxHqWRIlZgW3DBlp%2bk4kWFhIbCQz5nwTfs%3d&risl=&pid=ImgRaw&r=0",
      img5: "https://www.freepngimg.com/thumb/artificial_grass/42341-3-ladle-image-free-download-png-hq.png",
      adv1: "Our ladles are designed for effortless serving, making meal preparation a breeze with their ergonomic design and easy-to-handle features.",
      adv2: "Serve up healthier portions with our ladles that allow precise pouring, helping you control and measure ingredients for a balanced and nutritious meal.",
      adv3: " Crafted with durability in mind, our ladles boast a robust design that stands the test of time, ensuring reliable performance in your kitchen for years to come.",
      adv4: "Time Upgrade: Enhance your kitchen tools with our ladles, now available at an exclusive discounted price for a limited time. Elevate your cooking experience – seize this limited-time offer!",
      gif: "https://media2.giphy.com/media/J33ebMD2g6Rn82lIQJ/source.gif",
      Price: "399",
    },
    {
      title: "Garlic press",
      description:
        "The garlic press, a kitchen essential, streamlines the process of adding rich flavor to dishes. With its efficient design, it effortlessly transforms garlic cloves into finely minced pieces, eliminating the need for tedious hand chopping.",
      img1: "https://th.bing.com/th/id/R.7d0d57ef9c7a561a6c7ff080a57bbe5b?rik=s2NWWy2jlH3z3g&riu=http%3a%2f%2fwww.brandsmartusa.com%2fimages%2fproduct%2flarge%2f20129623.png&ehk=XtF0RaDH%2fshIMsxtMnmTTpS1Wge9R36eNjb47QAkrVk%3d&risl=&pid=ImgRaw&r=0",
      img2: "https://d3cizcpymoenau.cloudfront.net/images/39418/SIL_GarlicPress_Kuhn_Rikon_Epicurean_Garlic_Press_2315.png",
      img3: "https://th.bing.com/th/id/R.82a6fd0a0a78a9c97381e3aac0040dd8?rik=NB%2bRF1M55%2fal0w&riu=http%3a%2f%2fclipart.coolclips.com%2f480%2fvectors%2ftf05200%2fCoolClips_vc020563.png&ehk=NGyLfmvlIsCxYXcepWUVPdZwVvrv%2fIIlv8ypXXKniYY%3d&risl=&pid=ImgRaw&r=0",
      img4: "https://media.portmoni.com/resized/50697/NB01-thumbnail-600x600.png",
      img5: "https://www.pngarts.com/files/3/Raw-Garlic-PNG-Pic.png",
      adv1: "Our garlic press streamlines the process of preparing garlic, featuring an ergonomic design and efficient mechanism for quick and easy use.",
      adv2: "Elevate your dishes with fresh garlic without the hassle. Our garlic press allows you to infuse your meals with robust flavors while promoting a healthier cooking experience.",
      adv3: "Crafted with durability in mind, this garlic press boasts a robust construction that withstands daily use, ensuring a reliable and long-lasting kitchen tool.",
      adv4: " Enhance your culinary repertoire with our garlic press, available now at a special discounted rate for a limited time. Seize this exclusive offer to add convenience and flavor to your kitchen!",
      gif: "https://cdn.shopify.com/s/files/1/0072/1059/8447/files/Garlic-Press_IoC_04_grande.gif?v=1557909167",
      Price: "499",
    },
    {
      title: "Tongs",
      description:
        "Tongs, the unsung heroes of the kitchen, wield a simple yet indispensable power in culinary realms. With their versatile grip and precision, these utensils seamlessly navigate the culinary landscape, ensuring a firm hold on ingredients for precise cooking.",
      img1: "https://d3cizcpymoenau.cloudfront.net/images/39415/SIL_Tongs_OXO_Good_Grips_12-Inch_Tongs_28581.png",
      img2: "https://th.bing.com/th/id/R.5b32fa685e10a466ff77734a64c7f5b1?rik=ee%2fgfZsMaRkRTw&riu=http%3a%2f%2fassets.stickpng.com%2fthumbs%2f5c5959a48c21c9029a0f4911.png&ehk=%2fyhx8JPmMQC5ZEUoZGRqiUlzvu2ZraaSOsG2vGiIkjQ%3d&risl=&pid=ImgRaw&r=0",
      img3: "https://th.bing.com/th/id/R.3a9e33192767311725a6f2142607c27a?rik=DhelkFkATf1aoQ&riu=http%3a%2f%2fpak-man.com%2fimages%2fdetailed%2f1%2ftb9.png&ehk=klu3T%2bhYy8hg%2ffEXhZNP%2fVXGxP5wX3fibMio6WTPTTE%3d&risl=&pid=ImgRaw&r=0",
      img4: "https://assets.stickpng.com/thumbs/5c5959aa8c21c9029a0f4912.png",
      img5: "https://kingmetal.com/wp-content/uploads/2021/01/TONGS-HEAVY-TONG-STAINLESS-STEEL-36.png",
      adv1: "Our kitchen tongs are designed for seamless control, ensuring precision in your culinary adventures with their ergonomic and easy-to-use design.",
      adv2: "Embrace a healthier cooking style by using our tongs, designed to provide excellent grip without excessive oil usage, allowing you to create nutritious and delicious meals.",
      adv3: "Crafted with durability in mind, these tongs boast a robust design that stands up to daily kitchen demands, promising reliable performance for years to come.",
      adv4: "Elevate your kitchen experience with our high-quality tongs, now available at a special discounted price for a limited time only. Seize this opportunity to enhance your cooking arsenal!",
      gif: "https://media.baamboozle.com/uploads/images/132767/1649236516_22584_gif-url.gif",
      Price: "359",
    },
    {
      title: "Dinner plate sets",
      description:
        "Dinner plate sets embody the essence of refined dining, transforming ordinary meals into extraordinary experiences. Crafted with precision and artistry, these sets serve as elegant canvases for culinary creations, enhancing the visual appeal of every dish. ",
      img1: "https://www.pngarts.com/files/8/Dinner-Plate-PNG-Transparent-Image.png",
      img2: "https://www.pngarts.com/files/8/Dinner-Plate-PNG-Download-Image.png",
      img3: "https://cdn0.rubylane.com/shops/826772/RL-000894.1L.jpg?55",
      img4: "https://chairish-prod.freetls.fastly.net/image/product/master/dce8488a-202d-49e0-8d47-464e4a9eac79/vintage-mismatched-fine-china-dinner-plates-set-of-4-4746",
      img5: "https://i.pinimg.com/originals/31/35/72/3135729526afa61b1a6af397a20ac799.png",
      adv1: "Our dinner plate sets redefine your dining experience, offering a perfect blend of style and functionality that elevates every meal.",
      adv2: " Crafted for portion control and visual appeal, our dinner plates encourage healthier eating habits while enhancing the aesthetic of your table.",
      adv3: "Engineered with robust materials, these dinner plate sets withstand the rigors of daily use, ensuring a durable and long-lasting addition to your kitchen.",
      adv4: " Experience the convenience of easy cleaning with our dinner plates, featuring a smooth finish that simplifies post-dinner chores and keeps your kitchen shining.",
      gif: "https://media.giphy.com/media/YrNRBJO7iZ5bVXs3G2/giphy.gif",
      Price: "1499",
    },
    {
      title: "Drinking glasses Set",
      description:
        "Elevate your beverage experience with our premium drinking glasses set, featuring crystal-clear craftsmanship for a touch of sophistication in every sip. Designed for durability, these glasses blend style with resilience, making them the perfect addition to your table setting.",
      img1: "https://chairish-prod.global.ssl.fastly.net/image/product/master/7214e120-d71c-43f5-aef9-bc7bb05414c2",
      img2: "https://cdn0.rubylane.com/shops/1464906/MO-1128.1L.jpg?9",
      img3: "https://i.pinimg.com/originals/0d/00/a3/0d00a3b4ae75002c1924a7bdbedf6186.png",
      img4: "https://www.pngplay.com/wp-content/uploads/2/Drinking-Glass-Download-Free-PNG.png",
      img5: "https://www.shoprite.co.za/medias/10627728EA-checkers515Wx515H?context=bWFzdGVyfGltYWdlc3wyNjM2NjB8aW1hZ2UvcG5nfGltYWdlcy9oYWQvaDRlLzg5NzIzMjc2ODIwNzgucG5nfDJjY2EzMWRlNzczZDU0ZDU2MDdhOTE2NTEwOTcwOGZmOTQ3ZmU0Y2IzMjYyZmRmNmY2NzNhOWFiY2ZjNzUwNjU",
      adv1: " Our drinking glasses set offers crystal-clear elegance, providing a sophisticated touch to your beverage experience.",
      adv2: "Enjoy your favorite drinks guilt-free, as our glasses are crafted with quality that complements a healthy lifestyle without compromising on style.",
      adv3: "Designed for durability, this drinking glasses set boasts a robust construction, ensuring resilience for everyday use and enhancing your table setting.",
      adv4: "Elevate your dining experience with our exclusive drinking glasses set, available for a limited time at a special discounted price. Unveil a new level of sophistication – act now and don't miss out on this limited-time offer!",
      gif: "https://th.bing.com/th/id/R.89e20a78eaafea0c87446f3a76a6feed?rik=P6qK%2flqGnccjUA&riu=http%3a%2f%2fwww.20cents-video.com%2fuserdata%2fanimated-gif%2flibrary%2f1Champ_Glasses_Clinking.gif&ehk=dDFYxZ4kV5v%2fpSQfPRRugi8Pp4EJS6KG4zwcLSGR%2bQg%3d&risl=&pid=ImgRaw&r=0",
      Price: "499",
    },
    {
      title: "Whisks",
      description:
        "The whisk, a humble yet indispensable kitchen tool, serves as the unsung hero of culinary mastery. Its wire loops effortlessly blend and beat ingredients, transforming mundane tasks into culinary artistry.",
      img1: "https://th.bing.com/th/id/R.3de9889f49bb9198e67e23b6c4a01778?rik=0F0FMzLsZdUdqA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fwhisk-silhouette%2fwhisk-silhouette-23.png&ehk=93pH9iOfxkRSEDSwBI7nJi5Bn9yDtqeXG6iOi%2f1zMbk%3d&risl=&pid=ImgRaw&r=0",
      img2: "https://th.bing.com/th/id/R.0e09ce648f084e292dc344c7845a4a87?rik=GgF04CTvjiV6Jw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fwhisk-silhouette%2fwhisk-silhouette-15.png&ehk=6DzC4bQUMKhyeV9NBDZMzoD21UZDKrpPbQ36Hndulyk%3d&risl=&pid=ImgRaw&r=0",
      img3: "https://www.pinclipart.com/picdir/big/21-219260_whisk-kitchen-tool-comments-whisk-icon-clipart.png",
      img4: "https://th.bing.com/th/id/R.f4fbbbb8299920641f4c2b07ccda9eec?rik=VpOqvdUUGbdUiw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fwhisk-silhouette%2fwhisk-silhouette-20.png&ehk=SBlt0FBVi4xKk2nhs%2bdLlU8qiDAPGhgbeGuT%2f3D%2b%2baI%3d&risl=&pid=ImgRaw&r=0",
      img5: "https://clipground.com/images/whisk-clipart-12.jpg",
      adv1: "Our innovative whisk design ensures effortless mixing and blending, making your cooking experience a breeze. The ergonomic handle and efficient wire configuration guarantee smooth, easy-to-control movements.",
      adv2: "Whisk with confidence and embrace a healthier cooking style. Our whisk allows you to whip up delicious recipes with less effort and fewer ingredients, promoting a nutritious and flavorful culinary journey.",
      adv3: "Crafted for durability, our whisk boasts a robust construction that can handle the demands of daily use. The high-quality materials ensure longevity, providing you with a reliable kitchen companion for all your whisking needs.",
      adv4: "Elevate your culinary skills with our premium whisk, available at an exclusive discounted price for a limited time. Seize the opportunity to enhance your kitchen arsenal with this special offer – whisking perfection awaits!",
      gif: "https://media3.giphy.com/media/XEIVv7hN0YleLnOJjT/source.gif",
      Price: "295",
    },
    {
      title: "Pot holders",
      description:
        "Pot holders are indispensable kitchen companions, serving as the silent guardians against scalding temperatures. Their heat-resistant fabric and ergonomic design provide a reliable shield, ensuring safe and secure handling of hot cookware. ",
      img1: "https://i.pinimg.com/originals/91/ce/f6/91cef611437aa7b6eb2f839bb305cdf8.png",
      img2: "https://shop.square1art.com/shop/content/images/thumbs/0000730_pot-holders.png",
      img3: "https://cdn.shopify.com/s/files/1/0062/2713/2486/products/PHS8_grande.png?v=1565357811",
      img4: "https://res.recyclingpromotions.us/media/catalog/product/cache/65154c07d71f6e07aae402683752d257/b/f/bf601-pot-holders.png",
      img5: "https://images.vexels.com/media/users/3/151920/isolated/preview/416226d616a9a3ad7b39602e3aece1e1-pot-holder-icon-by-vexels.png",
      adv1: "Our pot holders redefine kitchen safety with their heat-resistant design, providing you with a comfortable and secure grip during your cooking adventures.",
      adv2: "Crafted from premium materials, our pot holders not only shield your hands from heat but also ensure a hygienic environment, promoting a healthier cooking experience.",
      adv3: "Engineered for durability, these pot holders feature a robust construction that withstands daily use, offering reliable protection for your hands and surfaces.",
      adv4: "Elevate your kitchen essentials with our pot holders, now part of an exclusive bundle at a limited-time discounted price. Upgrade your culinary setup with this special offer – act now and cook with confidence!",
      gif: "https://media2.giphy.com/media/bd3EgHAd5dxVGiOE2f/giphy.gif?cid=790b7611d00e1525441fce2da77f5b63d1c4bdf85a123d7a&rid=giphy.gif&ct=s",
      Price: "359",
    },
    {
      title: "Double Burner",
      description:
        "Pot holders are indispensable kitchen companions, serving as the silent guardians against scalding temperatures. Their heat-resistant fabric and ergonomic design provide a reliable shield, ensuring safe and secure handling of hot cookware. ",
      img1: "https://orel.com/wp-content/uploads/2019/09/499-0600_1-1.png",
      img2: "https://toughmamaappliances.com/wp-content/uploads/2019/11/NTMDGS-CTDlr.png",
      img3: "https://www.sohojbuy.com/public/uploads/256/10.WGS-DSC3-2.png",
      img4: "https://pngimg.com/uploads/gas_stove/gas_stove_PNG37.png",
      img5: "https://pngimg.com/uploads/gas_stove/gas_stove_PNG84.png",
      adv1: "Transform your culinary journey with our Double Burner, featuring an advanced non-stick coating for easy food release and swift cleanup, ensuring every meal is a breeze to prepare.",
      adv2: " Embrace a healthier lifestyle by using less oil while cooking on our Double Burner. Enjoy delicious and nutritious meals without compromising on taste or flavor.",
      adv3: "Crafted for lasting durability, our Double Burner boasts a robust construction designed to withstand the rigors of daily use. Experience reliable performance in your kitchen for years to come.",
      adv4: "Elevate your cooking experience with our Double Burner, now available at an exclusive discounted price for a limited time only. Don't miss the chance to enhance your culinary skills with this exceptional offer!",
      gif: "https://th.bing.com/th/id/R.eb2560c2496d0fcb6ad4bebf37591bca?rik=Czxw2zLYVehtAg&riu=http%3a%2f%2fwww.animated-gifs.fr%2fcategory_kitchen%2fcooking-range%2f74119386.gif&ehk=qZpFzm5DZMLTGDjdk5vYMRgKS6pg9EyJheNbpkN4pvw%3d&risl=&pid=ImgRaw&r=0",
      Price: "1499",
    },
  ];
  const ProductInfo = [
    {
      title: "White T-shirt",
      desc: "The T-shirt, a wardrobe classic, epitomizes comfort and versatility. Its simple design serves as a canvas for personal expression, featuring a myriad of prints, slogans, and graphics. From casual outings to statement-making fashion, the T-shirt effortlessly adapts to various occasions, making it a timeless and indispensable piece of clothing.",
      imageUrl:
        "https://freepngimg.com/thumb/tshirt/36674-2-plain-white-t-shirt.png",
      Price: "600",
    },
    {
      title: "Grey T-shirt",
      desc: "The T-shirt, a wardrobe classic, epitomizes comfort and versatility. Its simple design serves as a canvas for personal expression, featuring a myriad of prints, slogans, and graphics. From casual outings to statement-making fashion, the T-shirt effortlessly adapts to various occasions, making it a timeless and indispensable piece of clothing.",
      Price: "550",
      imageUrl:
        "https://i.pinimg.com/originals/c6/c5/32/c6c532661c1cbb974dc59aa93df0a217.png",
    },
    {
      title: "Red T-shirt",

      Price: "690",
      desc: "The T-shirt, a wardrobe classic, epitomizes comfort and versatility. Its simple design serves as a canvas for personal expression, featuring a myriad of prints, slogans, and graphics. From casual outings to statement-making fashion, the T-shirt effortlessly adapts to various occasions, making it a timeless and indispensable piece of clothing.",
      imageUrl:
        "https://image.jimcdn.com/app/cms/image/transf/dimension=1007x10000:format=png/path/sbec91bf8c08a9a72/image/i76dd611f94e491c1/version/1553851215/image.png",
    },
    {
      title: "Light Red T-shirt",
      Price: "500",
      desc: "The T-shirt, a wardrobe classic, epitomizes comfort and versatility. Its simple design serves as a canvas for personal expression, featuring a myriad of prints, slogans, and graphics. From casual outings to statement-making fashion, the T-shirt effortlessly adapts to various occasions, making it a timeless and indispensable piece of clothing.",
      imageUrl:
        "https://th.bing.com/th/id/R.fbe061bf4e60ad0f1e067b2c213399aa?rik=qMW8eYnMoc4cBA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fT-Shirt-PNG-HD.png&ehk=vcK8uo7kkE4Kya1SdkGkqEVZnU4tWcqlrIbN8vmB9OM%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "Dark Green T-shirt",
      Price: "660",
      desc: "The T-shirt, a wardrobe classic, epitomizes comfort and versatility. Its simple design serves as a canvas for personal expression, featuring a myriad of prints, slogans, and graphics. From casual outings to statement-making fashion, the T-shirt effortlessly adapts to various occasions, making it a timeless and indispensable piece of clothing.",
      imageUrl:
        "https://th.bing.com/th/id/R.fa18fb29aa9692602f1c5ec40c0a8793?rik=%2fSnWBw49L0Sfng&riu=http%3a%2f%2fpngimg.com%2fuploads%2ftshirt%2ftshirt_PNG5450.png&ehk=ksOt2h8ucbvl9i58pNokT5WkIn%2fF0v3OfsuHVm81SKc%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "Green T-shirt",
      Price: "450",
      desc: "The T-shirt, a wardrobe classic, epitomizes comfort and versatility. Its simple design serves as a canvas for personal expression, featuring a myriad of prints, slogans, and graphics. From casual outings to statement-making fashion, the T-shirt effortlessly adapts to various occasions, making it a timeless and indispensable piece of clothing.",
      imageUrl:
        "https://purepng.com/public/uploads/large/purepng.com-green-t-shirtclothingt-shirtt-shirtdressfashionclothshirt-691522330493iyjsl.png",
    },
    {
      title: "Yellow T-shirt",
      Price: "600",
      desc: "The T-shirt, a wardrobe classic, epitomizes comfort and versatility. Its simple design serves as a canvas for personal expression, featuring a myriad of prints, slogans, and graphics. From casual outings to statement-making fashion, the T-shirt effortlessly adapts to various occasions, making it a timeless and indispensable piece of clothing.",
      imageUrl:
        "https://www.pngarts.com/files/5/Plain-Yellow-T-Shirt-Transparent-Image.png",
    },
    {
      title: "White Collar T-shirt",
      Price: "699",
      desc: "The T-shirt, a wardrobe classic, epitomizes comfort and versatility. Its simple design serves as a canvas for personal expression, featuring a myriad of prints, slogans, and graphics. From casual outings to statement-making fashion, the T-shirt effortlessly adapts to various occasions, making it a timeless and indispensable piece of clothing.",
      imageUrl:
        "https://i.pinimg.com/originals/7e/26/af/7e26af21919d6d6e4c707a2bb96296c3.png",
    },
    {
      title: "Blue T-shirt",
      desc: "The T-shirt, a wardrobe classic, epitomizes comfort and versatility. Its simple design serves as a canvas for personal expression, featuring a myriad of prints, slogans, and graphics. From casual outings to statement-making fashion, the T-shirt effortlessly adapts to various occasions, making it a timeless and indispensable piece of clothing.",
      Price: "399",
      imageUrl: "https://pngimg.com/uploads/tshirt/tshirt_PNG5436.png",
    },
    {
      title: "Half-Hand Shirt",
      Price: "600",
      desc: "Men's shirts, a cornerstone of sophistication, seamlessly blend style and functionality. From crisp dress shirts exuding professionalism to laid-back casual options, they mirror the diverse facets of a man's wardrobe. Crafted with attention to detail, these shirts elevate any ensemble, offering a polished look for both formal and informal settings",
      imageUrl:
        "https://th.bing.com/th/id/R.49c8ccc5baa1076b3b1a4041e709f559?rik=Ycd44U1LWWxBMQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f8%2fDress-Shirt-PNG-Image-HD.png&ehk=4FSm7edIajbuJMH%2bIDXoZe0XataLH9xy%2bLKkeMyI23I%3d&risl=1&pid=ImgRaw&r=0",
    },
    {
      title: "Full-Plain Shirt",
      Price: "550",
      desc: "Men's shirts, a cornerstone of sophistication, seamlessly blend style and functionality. From crisp dress shirts exuding professionalism to laid-back casual options, they mirror the diverse facets of a man's wardrobe. Crafted with attention to detail, these shirts elevate any ensemble, offering a polished look for both formal and informal settings",
      imageUrl:
        "https://purepng.com/public/uploads/thumbnail/purepng.com-denim-blue-full-plain-shirtgarmentdressshirtfitfront-buttonfront-pocketdenim-bluefull-1421526313681bf4uy.png",
    },
    {
      title: "White Shirt",

      Price: "690",
      desc: "Men's shirts, a cornerstone of sophistication, seamlessly blend style and functionality. From crisp dress shirts exuding professionalism to laid-back casual options, they mirror the diverse facets of a man's wardrobe. Crafted with attention to detail, these shirts elevate any ensemble, offering a polished look for both formal and informal settings",
      imageUrl:
        "https://www.pngall.com/wp-content/uploads/5/Shirt-PNG-Download-Image.png",
    },
    {
      title: "Black Shirt",
      Price: "500",
      desc: "Men's shirts, a cornerstone of sophistication, seamlessly blend style and functionality. From crisp dress shirts exuding professionalism to laid-back casual options, they mirror the diverse facets of a man's wardrobe. Crafted with attention to detail, these shirts elevate any ensemble, offering a polished look for both formal and informal settings",
      imageUrl:
        "https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png",
    },
    {
      title: "Light-Blue Shirt",
      Price: "660",
      desc: "Men's shirts, a cornerstone of sophistication, seamlessly blend style and functionality. From crisp dress shirts exuding professionalism to laid-back casual options, they mirror the diverse facets of a man's wardrobe. Crafted with attention to detail, these shirts elevate any ensemble, offering a polished look for both formal and informal settings",
      imageUrl:
        "https://www.pngall.com/wp-content/uploads/5/Shirt-PNG-Images.png",
    },
    {
      title: "Grey Shirt",
      Price: "450",
      desc: "Men's shirts, a cornerstone of sophistication, seamlessly blend style and functionality. From crisp dress shirts exuding professionalism to laid-back casual options, they mirror the diverse facets of a man's wardrobe. Crafted with attention to detail, these shirts elevate any ensemble, offering a polished look for both formal and informal settings",
      imageUrl:
        "https://th.bing.com/th/id/R.c1f0c199989f9f716855f4f26f9ac3a5?rik=VaRyLVAPhjmxDg&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery2%2fDress-Shirt-PNG-Image.png&ehk=BHuXPSvm9cJR1b%2bFeT6xdXZOdWeBXyzNNVJlmeQMUTk%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "Men Checked Slim Shirt",
      Price: "600",
      desc: "Men's shirts, a cornerstone of sophistication, seamlessly blend style and functionality. From crisp dress shirts exuding professionalism to laid-back casual options, they mirror the diverse facets of a man's wardrobe. Crafted with attention to detail, these shirts elevate any ensemble, offering a polished look for both formal and informal settings",
      imageUrl:
        "https://pluspng.com/img-png/shirt-hd-png-plaid-shirt-starting-at-85-1618.png",
    },
    {
      title: "Blue Shirt",
      Price: "699",
      desc: "Men's shirts, a cornerstone of sophistication, seamlessly blend style and functionality. From crisp dress shirts exuding professionalism to laid-back casual options, they mirror the diverse facets of a man's wardrobe. Crafted with attention to detail, these shirts elevate any ensemble, offering a polished look for both formal and informal settings",
      imageUrl:
        "https://th.bing.com/th/id/R.69f31e2dc793851c6ed4d13e1039b884?rik=CAzdEgtZq1pUiA&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery2%2fDress-Shirt-PNG-Picture.png&ehk=4q2DbSpbkUEgxe0av3574z26xHzt3tSNzBij%2bxjYJRU%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "Orange Shirt",
      desc: "Men's shirts, a cornerstone of sophistication, seamlessly blend style and functionality. From crisp dress shirts exuding professionalism to laid-back casual options, they mirror the diverse facets of a man's wardrobe. Crafted with attention to detail, these shirts elevate any ensemble, offering a polished look for both formal and informal settings",
      Price: "399",
      desc : "Men's jeans, an enduring emblem of casual cool, epitomize both comfort and style. From classic blue denim to trendy cuts, jeans are a wardrobe essential that effortlessly transitions from day to night. Their timeless appeal lies in their adaptability, making them suitable for a range of occasions. ",
      imageUrl: "https://clipground.com/images/shirt-png-image-1.png",
    },

    {
      title : "Men's Relaxed Jeans",
      Price : '600',
      desc : "Men's jeans, an enduring emblem of casual cool, epitomize both comfort and style. From classic blue denim to trendy cuts, jeans are a wardrobe essential that effortlessly transitions from day to night. Their timeless appeal lies in their adaptability, making them suitable for a range of occasions. ",
      imageUrl: 'https://pngimg.com/uploads/jeans/jeans_PNG5779.png'


  },
  {
       title : "Men's Relaxed Black Jeans",
      Price : '550',
      desc : "Men's jeans, an enduring emblem of casual cool, epitomize both comfort and style. From classic blue denim to trendy cuts, jeans are a wardrobe essential that effortlessly transitions from day to night. Their timeless appeal lies in their adaptability, making them suitable for a range of occasions. ",
      imageUrl: "https://freepngimg.com/thumb/jeans/31-men's-jeans-png-image.png"

  },
  {
       title : "Tapered Fit Dark Jeans",
       
      Price : '690',
      desc : "Men's jeans, an enduring emblem of casual cool, epitomize both comfort and style. From classic blue denim to trendy cuts, jeans are a wardrobe essential that effortlessly transitions from day to night. Their timeless appeal lies in their adaptability, making them suitable for a range of occasions. ",
      imageUrl: 'https://th.bing.com/th/id/R.748c7509be841d7ffa7a6a6432ba4051?rik=ifIznXIcMPS0yg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fRipped-Men-Jeans-PNG.png&ehk=3q0sgVPz%2bQRfeQ30E%2fb3APyIAjccejryt4SwiwuH7wY%3d&risl=&pid=ImgRaw&r=0'

  }
  ,
  {
       title : "Men's Slim Jeans",
      Price : '500',
      desc : "Men's jeans, an enduring emblem of casual cool, epitomize both comfort and style. From classic blue denim to trendy cuts, jeans are a wardrobe essential that effortlessly transitions from day to night. Their timeless appeal lies in their adaptability, making them suitable for a range of occasions. ",
      imageUrl: 'https://purepng.com/public/uploads/large/purepng.com-mens-jeansgarmentlower-bodydenimjeansbluebright-14215263626965rysv.png'

  } ,
  {
       title : "Men's Slim Black Jeans",
      Price : '660',
      desc : "Men's jeans, an enduring emblem of casual cool, epitomize both comfort and style. From classic blue denim to trendy cuts, jeans are a wardrobe essential that effortlessly transitions from day to night. Their timeless appeal lies in their adaptability, making them suitable for a range of occasions. ",
      imageUrl: 'https://www.pngmart.com/files/7/Denim-Jean-PNG-Transparent.png'


  } ,
  {
       title : "Tapered Fit Jeans",
       Price : '450',
       desc : "Men's jeans, an enduring emblem of casual cool, epitomize both comfort and style. From classic blue denim to trendy cuts, jeans are a wardrobe essential that effortlessly transitions from day to night. Their timeless appeal lies in their adaptability, making them suitable for a range of occasions. ",
       imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/04/Jeans-PNG-Image.png'

  } ,
  {
       title : "Slim Fit Jogger Stretch",
      Price : '600',
      desc : "Men's jeans, an enduring emblem of casual cool, epitomize both comfort and style. From classic blue denim to trendy cuts, jeans are a wardrobe essential that effortlessly transitions from day to night. Their timeless appeal lies in their adaptability, making them suitable for a range of occasions. ",
      imageUrl: 'https://th.bing.com/th/id/R.440a9affd1dd8b7aac43e50f3c7b4833?rik=EvJs1Wh%2f6661Yg&riu=http%3a%2f%2fssl.quiksilver.com%2fstatic%2fQS%2fdefault%2fcategory-assets%2fcat-experiences%2fdenim_selector%2fimg%2fselector%2fslim.png&ehk=JUGBImblisungbELLu4B%2b%2bb1%2bXeM8wZ0B%2fX7I3aCyqM%3d&risl=&pid=ImgRaw&r=0'


  } ,
  {
       title : "Men's Slim Fit Jeans",
      Price : '699',
      desc : "Men's jeans, an enduring emblem of casual cool, epitomize both comfort and style. From classic blue denim to trendy cuts, jeans are a wardrobe essential that effortlessly transitions from day to night. Their timeless appeal lies in their adaptability, making them suitable for a range of occasions. ",
      imageUrl: 'https://freepngdownload.com/image/thumb/jeans-png-free-download-27.png'

  } ,
  {
       title : "Men's Skinny Pants",
       Price : '399',
       desc : "Men's jeans, an enduring emblem of casual cool, epitomize both comfort and style. From classic blue denim to trendy cuts, jeans are a wardrobe essential that effortlessly transitions from day to night. Their timeless appeal lies in their adaptability, making them suitable for a range of occasions. ",
       imageUrl: 'https://www.pngarts.com/files/6/Jeans-Download-PNG-Image.png'

  },
  {
    title : "Men Walking, Running Red Shoe",
    desc : "Sports shoes, essential gear for athletes and enthusiasts alike, offer a blend of comfort and performance. Engineered with advanced materials and ergonomic designs, they provide crucial support during physical activities, reducing the risk of injuries. Beyond functionality, sports shoes have become a style statement, reflecting individual tastes and preferences.",
    desc : "Men's jeans, an enduring emblem of casual cool, epitomize both comfort and style. From classic blue denim to trendy cuts, jeans are a wardrobe essential that effortlessly transitions from day to night. Their timeless appeal lies in their adaptability, making them suitable for a range of occasions. ",
    Price : '600',
    imageUrl: 'https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png'


},
{
  title : "Men's Ultra Lite Running Shoes",
  desc : "Sports shoes, essential gear for athletes and enthusiasts alike, offer a blend of comfort and performance. Engineered with advanced materials and ergonomic designs, they provide crucial support during physical activities, reducing the risk of injuries. Beyond functionality, sports shoes have become a style statement, reflecting individual tastes and preferences.",
     desc : "Men's jeans, an enduring emblem of casual cool, epitomize both comfort and style. From classic blue denim to trendy cuts, jeans are a wardrobe essential that effortlessly transitions from day to night. Their timeless appeal lies in their adaptability, making them suitable for a range of occasions. ",
    Price : '550',
    imageUrl: "https://freepngimg.com/download/running%20shoes/15-nike-running-shoes-png-image.png"

},
{
  title : "Men Running Yellow Shoe",
  desc : "Sports shoes, essential gear for athletes and enthusiasts alike, offer a blend of comfort and performance. Engineered with advanced materials and ergonomic designs, they provide crucial support during physical activities, reducing the risk of injuries. Beyond functionality, sports shoes have become a style statement, reflecting individual tastes and preferences.",
  
 Price : '690',
 imageUrl: 'https://th.bing.com/th/id/R.6075e3b79592af17a19dd08dda8157f7?rik=SzBQICM1XekXkg&riu=http%3a%2f%2fpngimg.com%2fuploads%2frunning_shoes%2frunning_shoes_PNG5818.png&ehk=EJ3CaBx6HEqQtMdnvnfO4CS4RmuEInove5G%2fnVK2XtE%3d&risl=1&pid=ImgRaw&r=0'

}
,
{
  title : "Mens Rodeo ProRunning Shoe",
  desc : "Sports shoes, essential gear for athletes and enthusiasts alike, offer a blend of comfort and performance. Engineered with advanced materials and ergonomic designs, they provide crucial support during physical activities, reducing the risk of injuries. Beyond functionality, sports shoes have become a style statement, reflecting individual tastes and preferences.",
 Price : '500',
 imageUrl: 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5817.png'

} ,
{
  title : "Men's Hurricane Running Shoes",
  desc : "Sports shoes, essential gear for athletes and enthusiasts alike, offer a blend of comfort and performance. Engineered with advanced materials and ergonomic designs, they provide crucial support during physical activities, reducing the risk of injuries. Beyond functionality, sports shoes have become a style statement, reflecting individual tastes and preferences.",
 Price : '660',
 imageUrl: 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5824.png'

} ,
{
  title : "Men's Blue Running Shoes",
  desc : "Sports shoes, essential gear for athletes and enthusiasts alike, offer a blend of comfort and performance. Engineered with advanced materials and ergonomic designs, they provide crucial support during physical activities, reducing the risk of injuries. Beyond functionality, sports shoes have become a style statement, reflecting individual tastes and preferences.",
  Price : '450',
 imageUrl: 'https://th.bing.com/th/id/R.835983e251d097bc25af6fb3b2155be7?rik=M%2fqrSDtR0zalDw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fshoe-transparent-background%2fshoe-transparent-background-12.png&ehk=aBRlr3y8H6C6wFWasX1boX9%2batIB911%2b5HM0eh0kwTo%3d&risl=&pid=ImgRaw&r=0'

} ,
{
  title : "Men’s Ignite PRO Running Shoes",
  desc : "Sports shoes, essential gear for athletes and enthusiasts alike, offer a blend of comfort and performance. Engineered with advanced materials and ergonomic designs, they provide crucial support during physical activities, reducing the risk of injuries. Beyond functionality, sports shoes have become a style statement, reflecting individual tastes and preferences.",
 Price : '600',
 imageUrl: 'https://freepngimg.com/thumb/running%20shoes/10-running-shoes-png-image.png'

} ,
{
  title : "Men's Wonder Sports Running",
  desc : "Sports shoes, essential gear for athletes and enthusiasts alike, offer a blend of comfort and performance. Engineered with advanced materials and ergonomic designs, they provide crucial support during physical activities, reducing the risk of injuries. Beyond functionality, sports shoes have become a style statement, reflecting individual tastes and preferences.",
 Price : '699',
 imageUrl: 'https://freepngimg.com/thumb/adidas_shoes/8-2-adidas-shoes-png-picture.png'

} ,
{
  title : "Men's Wonder Yellow Sports",
  desc : "Sports shoes, essential gear for athletes and enthusiasts alike, offer a blend of comfort and performance. Engineered with advanced materials and ergonomic designs, they provide crucial support during physical activities, reducing the risk of injuries. Beyond functionality, sports shoes have become a style statement, reflecting individual tastes and preferences.",
  Price : '399',
 imageUrl: 'https://freepngimg.com/thumb/running_shoes/5-2-running-shoes-png.png'

},
{
  title : " Banarasi Silk Saree",
  Price : '2499',
  desc  : "Indian sarees are a timeless and culturally significant garment, embodying the rich heritage and diversity of India. Worn by women across the country, sarees come in a myriad of fabrics, colors, and designs, reflecting regional traditions. These elegant garments are not just clothing but carry stories, traditions, and a sense of grace.",
  imageUrl: 'https://i.pinimg.com/originals/b5/7c/d7/b57cd7f14645a0894b38ec8695583fab.jpg'


},
{
   title : "Kanchipuram Silk Saree",
  Price : '3599',
  desc  : "Indian sarees are atimeless and culturally significant garment, embodying the rich heritage and diversity of India. Worn by women across the country, sarees come in a myriad of fabrics, colors, and designs, reflecting regional traditions. These elegant garments are not just clothing but carry stories, traditions, and a sense of grace.",
  imageUrl: 'https://5.imimg.com/data5/NN/SR/MY-59196823/bridal-wedding-sarees-violet-7394-41-483-500x500.png'

},
{
   title : "Party Fancy Banarasi",

  Price : '1299',
  desc  : "Indian sarees are a timeless and culturally significant garment, embodying the rich heritage and diversity of India. Worn by women across the country, sarees come in a myriad of fabrics, colors, and designs, reflecting regional traditions. These elegant garments are not just clothing but carry stories, traditions, and a sense of grace.",
  imageUrl: 'https://i.pinimg.com/originals/e5/1f/f6/e51ff68cb9a19295263147e2c5de665e.jpg'

}
,
{
   title : "Kanchipuram Silk Pattu Saree",
    Price : '8999',
   desc  : "Indian sarees are a timeless and culturally significant garment, embodying the rich heritage and diversity of India. Worn by women across the country, sarees come in a myriad of fabrics, colors, and designs, reflecting regional traditions. These elegant garments are not just clothing but carry stories, traditions, and a sense of grace.",
  imageUrl: 'https://i.pinimg.com/originals/5f/b6/20/5fb620ef2b7f22a306634c9cd692fd3e.jpg'

} ,
{
   title : "Kanchipuram Wedding Saree",
  Price : '5599',
  desc  : "Indian sarees are a timeless and culturally significant garment, embodying the rich heritage and diversity of India. Worn by women across the country, sarees come in a myriad of fabrics, colors, and designs, reflecting regional traditions. These elegant garments are not just clothing but carry stories, traditions, and a sense of grace.",
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
   desc  : "Indian sarees are a timeless and culturally significant garment, embodying the rich heritage and diversity of India. Worn by women across the country, sarees come in a myriad of fabrics, colors, and designs, reflecting regional traditions. These elegant garments are not just clothing but carry stories, traditions, and a sense of grace.",
  imageUrl: 'https://i.pinimg.com/originals/6a/a8/21/6aa821a5fedbc9f7c1acecc177bf7c90.jpg'

} ,
{
   title : "Kanjivaram Soft Silk Saree",
  Price : '3449',
  desc  : "Indian sarees are a timeless and culturally significant garment, embodying the rich heritage and diversity of India. Worn by women across the country, sarees come in a myriad of fabrics, colors, and designs, reflecting regional traditions. These elegant garments are not just clothing but carry stories, traditions, and a sense of grace.",
  imageUrl: 'https://i.pinimg.com/originals/f3/d1/c2/f3d1c24b05c88b875f0a55dfb150db0e.jpg'

} ,
{
   title : "Kanchipuram Art Silk Saree",
  Price : '6799',
  desc  : "Indian sarees are a timeess and culturally significant garment, embodying the rich heritage and diversity of India. Worn by women across the country, sarees come in a myriad of fabrics, colors, and designs, reflecting regional traditions. These elegant garments are not just clothing but carry stories, traditions, and a sense of grace.",
  imageUrl: 'https://siridesignercollections.com/wp-content/uploads/2021/03/kanchi-pattu-silk-sarees-8-481x600.jpg'

},
{
  title : "Solid Top Green Casual-wear",
  desc  : "Ladies' top wears constitute a diverse and ever-evolving category of clothing, reflecting contemporary fashion trends and personal styles. Ranging from casual t-shirts to sophisticated blouses and trendy crop tops, these garments cater to a wide spectrum of occasions and preferences. With a plethora of fabrics, colors, and designs, women's top wears offer a versatile canvas for self-expression and individuality. ",
  Price : '779',
  imageUrl: 'https://i5.walmartimages.com/asr/a4449b53-cb13-4b8c-85f1-0a24f1850dce.e17693f87fdc818739a8e98b2a43355b.jpeg'


},
{
   title : "Solid Top White Casual-wear",
   desc  : "Ladies' top wears constitute a diverse and ever-evolving category of clothing, reflecting contemporary fashion trends and personal styles. Ranging from casual t-shirts to sophisticated blouses and trendy crop tops, these garments cater to a wide spectrum of occasions and preferences. With a plethora of fabrics, colors, and designs, women's top wears offer a versatile canvas for self-expression and individuality. ",
  Price : '849',
  imageUrl: 'https://i5.walmartimages.com/asr/6cb8af1d-4e5f-4785-b6f2-83765b9da0dc_1.70f8a5fa57010a9f0212bd967e2f3038.jpeg'

},
{
   title : "Solid Top Orange Casual-wear",
   desc  : "Ladies' top wears constitute a diverse and ever-evolving category of clothing, reflecting contemporary fashion trends and personal styles. Ranging from casual t-shirts to sophisticated blouses and trendy crop tops, these garments cater to a wide spectrum of occasions and preferences. With a plethora of fabrics, colors, and designs, women's top wears offer a versatile canvas for self-expression and individuality. ",
   
  Price : '799',
  imageUrl: 'https://i.pinimg.com/736x/18/5a/55/185a556909a0a121df9a2743874d74a6.jpg'

}
,
{
   title : "Regular Fit Party Shirt",
   desc  : "Ladies' top wears constitute a diverse and ever-evolving category of clothing, reflecting contemporary fashion trends and personal styles. Ranging from casual t-shirts to sophisticated blouses and trendy crop tops, these garments cater to a wide spectrum of occasions and preferences. With a plethora of fabrics, colors, and designs, women's top wears offer a versatile canvas for self-expression and individuality. ",
  Price : '650',
  imageUrl: 'https://th.bing.com/th/id/OIP.inbvQpx9lNK2NrMtYDIe8wHaJ4?w=1200&h=1600&rs=1&pid=ImgDetMain'

} ,
{
   title : " Bandhni Printed Causal Wear",
   desc  : "Ladies' top wears constitute a diverse and ever-evolving category of clothing, reflecting contemporary fashion trends and personal styles. Ranging from casual t-shirts to sophisticated blouses and trendy crop tops, these garments cater to a wide spectrum of occasions and preferences. With a plethora of fabrics, colors, and designs, women's top wears offer a versatile canvas for self-expression and individuality. ",
  Price : '879',
  imageUrl: 'https://th.bing.com/th/id/OIP.YRSUYDi8WYGrdAqPFexDTgHaHa?rs=1&pid=ImgDetMain'

} ,
{
   title : "Floral Printed Cotton Top",
   desc  : "Ladies' top wears constitute a diverse and ever-evolving category of clothing, reflecting contemporary fashion trends and personal styles. Ranging from casual t-shirts to sophisticated blouses and trendy crop tops, these garments cater to a wide spectrum of occasions and preferences. With a plethora of fabrics, colors, and designs, women's top wears offer a versatile canvas for self-expression and individuality. ",
   Price : '999',
  imageUrl: 'https://th.bing.com/th/id/OIP.qHMIpk5k6uhXNhidjP0hzwHaHa?w=665&h=665&rs=1&pid=ImgDetMain'

} ,
{
   title : "Flowers Printed Causal Wear",
   desc  : "Ladies' top wears constitute a diverse and ever-evolving category of clothing, reflecting contemporary fashion trends and personal styles. Ranging from casual t-shirts to sophisticated blouses and trendy crop tops, these garments cater to a wide spectrum of occasions and preferences. With a plethora of fabrics, colors, and designs, women's top wears offer a versatile canvas for self-expression and individuality. ",
  Price : '949',
  imageUrl: 'https://d3d71ba2asa5oz.cloudfront.net/12012048/images/191432029759%20(1).jpg'

} ,
{
   title : "Corduroy Button Down Shirts Top",
   desc  : "Ladies' top wears constitute a diverse and ever-evolving category of clothing, reflecting contemporary fashion trends and personal styles. Ranging from casual t-shirts to sophisticated blouses and trendy crop tops, these garments cater to a wide spectrum of occasions and preferences. With a plethora of fabrics, colors, and designs, women's top wears offer a versatile canvas for self-expression and individuality. ",
  Price : '699',
  imageUrl: 'https://cdn.shopify.com/s/files/1/0233/6885/9728/products/tranquiltop2_600x.jpg?v=1562213996'

} ,
{
   title : "Sleeves Round Neck Foral Top",
   desc  : "Ladies' top wears constitute a diverse and ever-evolving category of clothing, reflecting contemporary fashion trends and personal styles. Ranging from casual t-shirts to sophisticated blouses and trendy crop tops, these garments cater to a wide spectrum of occasions and preferences. With a plethora of fabrics, colors, and designs, women's top wears offer a versatile canvas for self-expression and individuality. ",
   Price : '1299',
  imageUrl: 'https://cdn.shopify.com/s/files/1/0081/9150/8539/products/T3022A2_1200x630.jpg?v=1575428932'

},
{
  title : "Regal Beaded Gold Necklace",
  desc : "Ladies' gold jewelry exudes timeless elegance, symbolizing tradition, prosperity, and cultural significance. From intricate necklaces to delicate earrings and ornate bangles, these pieces are cherished heirlooms passed down through generations. Gold jewelry complements various occasions, adding a touch of sophistication and enhancing the beauty of women.",
  Price : '80517',
  imageUrl: 'https://www.pngall.com/wp-content/uploads/8/Gold-Jewellery-Necklace-PNG.png'


},
{
   title : "Eclectic Beaded Gold Necklace",
   desc : "Ladies' gold jewelry exudes timeless elegance, symbolizing tradition, prosperity, and cultural significance. From intricate necklaces to delicate earrings and ornate bangles, these pieces are cherished heirlooms passed down through generations. Gold jewelry complements various occasions, adding a touch of sophistication and enhancing the beauty of women.",
  Price : '96529',
  imageUrl: "https://battulaaljewels.com/assets/admin/uploads/product_category/1449898153.png"

},
{
   title : "Subtle Artistic Gold Chain",
   desc : "Ladies' gold jewelry exudes timeless elegance, symbolizing tradition, prosperity, and cultural significance. From intricate necklaces to delicate earrings and ornate bangles, these pieces are cherished heirlooms passed down through generations. Gold jewelry complements various occasions, adding a touch of sophistication and enhancing the beauty of women.",
   
  Price : '192510',
  imageUrl: 'https://www.vippng.com/png/full/442-4420174_jewellery-png.png'

}
,
{
   title : "Opulent Beaded Chain",
   desc : "Ladies' gold jewelry exudes timeless elegance, symbolizing tradition, prosperity, and cultural significance. From intricate necklaces to delicate earrings and ornate bangles, these pieces are cherished heirlooms passed down through generations. Gold jewelry complements various occasions, adding a touch of sophistication and enhancing the beauty of women.",
  Price : '112999',
  imageUrl: 'https://th.bing.com/th/id/R.7c779a0a92c8c84cee18b937eb6b5fb0?rik=Co7PMP8Jut26zg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fjewellery-png-jewellery-png-transparent-images-image-36045-1000.png&ehk=wpH1A9P2UpcsNqTTSTDQTC8iVKQ9OXiGlq%2fDbV92yQY%3d&risl=&pid=ImgRaw&r=0'

} ,
{
   title : "Glimmering Kundan Necklace",
   desc : "Ladies' gold jewelry exudes timeless elegance, symbolizing tradition, prosperity, and cultural significance. From intricate necklaces to delicate earrings and ornate bangles, these pieces are cherished heirlooms passed down through generations. Gold jewelry complements various occasions, adding a touch of sophistication and enhancing the beauty of women.",
  Price : '368519',
  imageUrl: 'https://www.transparentpng.com/thumb/necklace/epYEim-necklace-clipart-transparent.png'

} ,
{
   title : "Spellbinding Floral Jaisalmeri",
   desc : "Ladies' gold jewelry exudes timeless elegance, symbolizing tradition, prosperity, and cultural significance. From intricate necklaces to delicate earrings and ornate bangles, these pieces are cherished heirlooms passed down through generations. Gold jewelry complements various occasions, adding a touch of sophistication and enhancing the beauty of women.",
   Price : '369555',
  imageUrl: 'https://freepngimg.com/thumb/jewellery/28086-8-jewellery-necklace-image.png'

} ,
{
   title : "Regal Reverie Emerald",
   desc : "Ladies' gold jewelry exudes timeless elegance, symbolizing tradition, prosperity, and cultural significance. From intricate necklaces to delicate earrings and ornate bangles, these pieces are cherished heirlooms passed down through generations. Gold jewelry complements various occasions, adding a touch of sophistication and enhancing the beauty of women.",
  Price : '2418845',
  imageUrl: 'https://www.pngmart.com/files/16/Necklace-Jewellery-PNG-Clipart.png'

} ,
{
   title : "Riveting Gold Kemp Necklace",
   desc : "Ladies' gold jewelry exudes timeless elegance, symbolizing tradition, prosperity, and cultural significance. From intricate necklaces to delicate earrings and ornate bangles, these pieces are cherished heirlooms passed down through generations. Gold jewelry complements various occasions, adding a touch of sophistication and enhancing the beauty of women.",
  Price : '345999',
  imageUrl: 'https://www.pngkey.com/png/full/261-2612384_orra-gold-set-necklace-gold-jewellery-set.png'

} ,
{
   title : "Ornate Grand Necklace",
   desc : "Ladies' gold jewelry exudes timeless elegance, symbolizing tradition, prosperity, and cultural significance. From intricate necklaces to delicate earrings and ornate bangles, these pieces are cherished heirlooms passed down through generations. Gold jewelry complements various occasions, adding a touch of sophistication and enhancing the beauty of women.",
   Price : '323558',
  imageUrl: 'https://www.pngarts.com/files/3/Jewellery-PNG-Image-Transparent.png'

},
{
  title : "Orange Synthetic Solid Fashion",
  desc : "Ladies' handbags are not just accessories; they are essential companions that blend fashion with functionality. From chic clutches to spacious totes, these versatile bags effortlessly carry the essentials of a woman's daily life.",
  Price : '789',
  imageUrl: 'https://th.bing.com/th/id/R.d43fa49a4505bc41ae33c23605142e09?rik=DSWFpF%2b%2bfsuzfw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fWomen-Bag-PNG-HD.png&ehk=%2bd9arQpPM1e%2fA0wU0wNC91pFNya8sIxU1l7pzkGOPkI%3d&risl=&pid=ImgRaw&r=0'


},
{
   title : "Nylon Duffle Bags for Women",
   desc : "Ladies' handbags are not just accessories; they are essential companions that blend fashion with functionality. From chic clutches to spacious totes, these versatile bags effortlessly carry the essentials of a woman's daily life.",
  Price : '1299',
  imageUrl: "https://pngimg.com/uploads/women_bag/women_bag_PNG6428.png"

},
{
   title : "Red Synthetic Solid Fashion",
   desc : "Ladies' handbags are not just accessories; they are essential companions that blend fashion with functionality. From chic clutches to spacious totes, these versatile bags effortlessly carry the essentials of a woman's daily life.",
   
  Price : '889',
  imageUrl: 'https://pngimg.com/uploads/women_bag/women_bag_PNG6406.png'

}
,
{
   title : "Yellow Synthetic Solid Fashion",
   desc : "Ladies' handbags are not just accessories; they are essential companions that blend fashion with functionality. From chic clutches to spacious totes, these versatile bags effortlessly carry the essentials of a woman's daily life.",
  Price : '980',
  imageUrl: 'https://www.pngmart.com/files/15/Yellow-Ladies-Handbag-PNG.png'

} ,
{
   title : "Women's Western Dark Red",
   desc : "Ladies' handbags are not just accessories; they are essential companions that blend fashion with functionality. From chic clutches to spacious totes, these versatile bags effortlessly carry the essentials of a woman's daily life.",
  Price : '999',
  imageUrl: 'https://pluspng.com/img-png/women-bag-png--1000.png'

} ,
{
   title : "Women's Western Mustard",
   desc : "Ladies' handbags are not just accessories; they are essential companions that blend fashion with functionality. From chic clutches to spacious totes, these versatile bags effortlessly carry the essentials of a woman's daily life.",
   Price : '679',
  imageUrl: 'https://www.pngmart.com/files/15/Ladies-Handbag-PNG.png'

} ,
{
  desc : "Ladies' handbags are not just accessories; they are essential companions that blend fashion with functionality. From chic clutches to spacious totes, these versatile bags effortlessly carry the essentials of a woman's daily life.",
   title : "Silver Synthetic Solid Fashion",
  Price : '1289',
  imageUrl: 'https://purepng.com/public/uploads/large/purepng.com-women-baghandbagwomen-bagsoft-fabricleatherladies-14215264147290bjek.png'

} ,
{
   title : "Cotton Floral Buta Embroidered",
   desc : "Ladies' handbags are not just accessories; they are essential companions that blend fashion with functionality. From chic clutches to spacious totes, these versatile bags effortlessly carry the essentials of a woman's daily life.",
  Price : '1199',
  imageUrl: 'https://www.pngarts.com/files/8/Designer-Ladies-Purse-PNG-Image-Background.png'

} ,
{
   title : "Women's Western Tan",
   desc : "Ladies' handbags are not just accessories; they are essential companions that blend fashion with functionality. From chic clutches to spacious totes, these versatile bags effortlessly carry the essentials of a woman's daily life.",
   Price : '1099',
  imageUrl: 'https://pngimg.com/uploads/women_bag/women_bag_PNG6398.png'

},{
  title : " Buzz Lightyear Toy",
   desc : "Embark on a journey of joy and creativity with our diverse selection of kids' toys, now available through online shopping. From educational wonders to whimsical playtime companions, our collection caters to all ages and interests. Discover toys designed to spark imagination, encourage learning, and provide endless hours of entertainment. Crafted with safety in mind, our toys are made from quality materials to ensure durability.",
  Price : '899',
  imageUrl: 'https://www.pngall.com/wp-content/uploads/5/Toy-Story-PNG-Pic.png'


},
{
   title : "Rex Toy",
    desc : "Embark on a journey of joy and creativity with our diverse selection of kids' toys, now available through online shopping. From educational wonders to whimsical playtime companions, our collection caters to all ages and interests. Discover toys designed to spark imagination, encourage learning, and provide endless hours of entertainment. Crafted with safety in mind, our toys are made from quality materials to ensure durability.",
  Price : '599',
  imageUrl: 'https://www.pngall.com/wp-content/uploads/5/Toy-Story-Movie-PNG.png'

},
{
   title : "Minion",
    desc : "Embark on a journey of joy and creativity with our diverse selection of kids' toys, now available through online shopping. From educational wonders to whimsical playtime companions, our collection caters to all ages and interests. Discover toys designed to spark imagination, encourage learning, and provide endless hours of entertainment. Crafted with safety in mind, our toys are made from quality materials to ensure durability.",

  Price : '849',
  imageUrl: 'https://purepng.com/public/uploads/large/minion-toy-vbr.png'

}
,
{
   title : "Classic ERO Fluffy Teddy Bear ",
    desc : "Embark on a journey of joy and creativity with our diverse selection of kids' toys, now available through online shopping. From educational wonders to whimsical playtime companions, our collection caters to all ages and interests. Discover toys designed to spark imagination, encourage learning, and provide endless hours of entertainment. Crafted with safety in mind, our toys are made from quality materials to ensure durability.",
             Price : '1499',
  imageUrl: 'https://pluspng.com/img-png/png-toys-toy-transparent-background-1000.png'

} ,
{
   title : "Joker Toy",
    desc : "Embark on a journey of joy and creativity with our diverse selection of kids' toys, now available through online shopping. From educational wonders to whimsical playtime companions, our collection caters to all ages and interests. Discover toys designed to spark imagination, encourage learning, and provide endless hours of entertainment. Crafted with safety in mind, our toys are made from quality materials to ensure durability.",
  Price : '799',
  imageUrl: 'https://www.pngmart.com/files/6/Toy-PNG-HD.png'

} ,
{
   title : "Brown Teddy",
    desc : "Embark on a journey of joy and creativity with our diverse selection of kids' toys, now available through online shopping. From educational wonders to whimsical playtime companions, our collection caters to all ages and interests. Discover toys designed to spark imagination, encourage learning, and provide endless hours of entertainment. Crafted with safety in mind, our toys are made from quality materials to ensure durability.",
  Price : '859',
  imageUrl: 'https://th.bing.com/th/id/R.0bbf47a366384174524b7e43a5b27793?rik=8dypXYCqsNGBKg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f6%2fToy-Download-PNG-Image.png&ehk=BkQ0J6mdiBvDg97rwhrk0lIDZ%2bpNBp3ew%2fNFJN%2bCbGc%3d&risl=&pid=ImgRaw&r=0'

} ,
{
   title : "Remote Controller Van for Kids",
    desc : "Embark on a journey of joy and creativity with our diverse selection of kids' toys, now available through online shopping. From educational wonders to whimsical playtime companions, our collection caters to all ages and interests. Discover toys designed to spark imagination, encourage learning, and provide endless hours of entertainment. Crafted with safety in mind, our toys are made from quality materials to ensure durability.",
   Price : '599',
  imageUrl: 'https://www.pngall.com/wp-content/uploads/5/Toy-PNG-Download-Image.png'

} ,
{
   title : "Duck Toy",
    desc : "Embark on a journey of joy and creativity with our diverse selection of kids' toys, now available through online shopping. From educational wonders to whimsical playtime companions, our collection caters to all ages and interests. Discover toys designed to spark imagination, encourage learning, and provide endless hours of entertainment. Crafted with safety in mind, our toys are made from quality materials to ensure durability.",
  Price : '399',
  imageUrl: 'https://purepng.com/public/uploads/large/duck-toy-ndn.png'

} ,
{
   title : "Remote Controller Car",
   desc : "Embark on a journey of joy and creativity with our diverse selection of kids' toys, now available through online shopping. From educational wonders to whimsical playtime companions, our collection caters to all ages and interests. Discover toys designed to spark imagination, encourage learning, and provide endless hours of entertainment. Crafted with safety in mind, our toys are made from quality materials to ensure durability.",
  Price : '6799',
  imageUrl: 'https://th.bing.com/th/id/R.2150d11d276f9515e889bea9695fb637?rik=z4v%2fFL9Bt%2bhkzw&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f585bb267cb11b227491c328f.png&ehk=qwlRi4IygcmhID%2bQq9yyKTKeRGkFk5X92ORQmD4qrpM%3d&risl=&pid=ImgRaw&r=0'

},
{
  title : "Cotton Bow Applique Top",
   desc : "Explore a world of fashion and comfort for your little ones with our curated collection of kids' outfits, available through online shopping. From vibrant playtime ensembles to stylish school attire, our range combines trendy designs with durability. Discover a variety of sizes and styles crafted from quality materials to ensure your child's comfort throughout the day.",
  Price : '429',
  imageUrl: 'https://th.bing.com/th/id/R.3e03a3b610e81be0ca10d226e1624dc6?rik=fAUlPgeCsM%2b%2bnQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fBaby-Clothes-Transparent-PNG.png&ehk=VlrtVj5xNEHNGizUnnGDNqa1tWIUaTtXhyalw3MFjq8%3d&risl=1&pid=ImgRaw&r=0'


},
{
   title : "Hosiery Short Sleeve Regular",
    desc : "Explore a world of fashion and comfort for your little ones with our curated collection of kids' outfits, available through online shopping. From vibrant playtime ensembles to stylish school attire, our range combines trendy designs with durability. Discover a variety of sizes and styles crafted from quality materials to ensure your child's comfort throughout the day.",
  Price : '350',
  imageUrl: 'https://www.pngmart.com/files/7/Baby-Clothes-PNG-Free-Download.png'

},
{
   title : "Cotton Printed Dungaree Set",
    desc : "Explore a world of fashion and comfort for your little ones with our curated collection of kids' outfits, available through online shopping. From vibrant playtime ensembles to stylish school attire, our range combines trendy designs with durability. Discover a variety of sizes and styles crafted from quality materials to ensure your child's comfort throughout the day.",
   
  Price : '499',
  imageUrl: 'https://www.pngmart.com/files/7/Baby-Clothes-PNG-Photo.png'

}
,
{
   title : "Toddler Girls Striped Print Puff",
    desc : "Explore a world of fashion and comfort for your little ones with our curated collection of kids' outfits, available through online shopping. From vibrant playtime ensembles to stylish school attire, our range combines trendy designs with durability. Discover a variety of sizes and styles crafted from quality materials to ensure your child's comfort throughout the day.",
  Price : '650',
  imageUrl: 'https://www.pngmart.com/files/7/Baby-Clothes-PNG-Picture.png'

} ,
{
   title : "Bullfinch Floral Printed Modal",
    desc : "Explore a world of fashion and comfort for your little ones with our curated collection of kids' outfits, available through online shopping. From vibrant playtime ensembles to stylish school attire, our range combines trendy designs with durability. Discover a variety of sizes and styles crafted from quality materials to ensure your child's comfort throughout the day.",
  Price : '879',
  imageUrl: 'https://i.pinimg.com/originals/79/1c/87/791c87eb4aa3017cc61ce354f3b51b67.png'

} ,
{
   title : "Kwikk Traders Baby Boys",
    desc : "Explore a world of fashion and comfort for your little ones with our curated collection of kids' outfits, available through online shopping. From vibrant playtime ensembles to stylish school attire, our range combines trendy designs with durability. Discover a variety of sizes and styles crafted from quality materials to ensure your child's comfort throughout the day.",
   Price : '699',
  imageUrl: 'https://i.pinimg.com/originals/23/c4/bc/23c4bcf0473be9629cf54f901bb0dad4.png'

} ,
{
   title : "Niren Enterprise Baby Girl Dresse",
    desc : "Explore a world of fashion and comfort for your little ones with our curated collection of kids' outfits, available through online shopping. From vibrant playtime ensembles to stylish school attire, our range combines trendy designs with durability. Discover a variety of sizes and styles crafted from quality materials to ensure your child's comfort throughout the day.",
  Price : '649',
  imageUrl: 'https://th.bing.com/th/id/R.43e498a0196b2c56a867c5343350c508?rik=q%2fnOGzFQBOCcDg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fdress%2fdress_PNG119.png&ehk=UgW3LJN1Y%2fc%2b5hQxyetZwIepNihLJgaCjzbLIWLB2xk%3d&risl=&pid=ImgRaw&r=0'

} ,
{
   title : "Girl's Cotton Dress",
    desc : "Explore a world of fashion and comfort for your little ones with our curated collection of kids' outfits, available through online shopping. From vibrant playtime ensembles to stylish school attire, our range combines trendy designs with durability. Discover a variety of sizes and styles crafted from quality materials to ensure your child's comfort throughout the day.",
  Price : '375',
  imageUrl: 'https://th.bing.com/th/id/R.a0282ae974f498530b9a62c026de900f?rik=R0qtQNqZmV9rUA&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fBaby-Clothes-PNG-Image.png&ehk=Slo2ZNicKB996VGxI8D1YQhTGRMApRrrbKfBTjNIyz8%3d&risl=&pid=ImgRaw&r=0'

} ,
{
   title : "Sleeves Round Neck Foral Top",
   desc : "Explore a world of fashion and comfort for your little ones with our curated collection of kids' outfits, available through online shopping. From vibrant playtime ensembles to stylish school attire, our range combines trendy designs with durability. Discover a variety of sizes and styles crafted from quality materials to ensure your child's comfort throughout the day.",
   Price : '1299',
  imageUrl: 'https://freepngimg.com/thumb/jeans/53971-1-baby-clothes-free-download-image.png'

},
{
  title : "School Bag Soft Backpacks Cartoon",
  desc : "Discover the indispensable companion for your child's academic journey with our selection of school bags available through online shopping. These ergonomic and stylish bags are not just accessories but essential tools for organizational success. Crafted with durable materials, they ensure the safety of textbooks, notebooks, and stationery items during transit. Elevate your online shopping experience by investing in a reliable school bag, fostering a sense of responsibility and providing convenience for your child's educational endeavors. Choose functionality and style effortlessly with our curated collection.",
  Price : '789',
  imageUrl: 'https://www.pngarts.com/files/1/School-Bag-PNG-Photo.png'


},
{
   title : "Casual Backpack",
   desc : "Discover the indispensable companion for your child's academic journey with our selection of school bags available through online shopping. These ergonomic and stylish bags are not just accessories but essential tools for organizational success. Crafted with durable materials, they ensure the safety of textbooks, notebooks, and stationery items during transit. Elevate your online shopping experience by investing in a reliable school bag, fostering a sense of responsibility and providing convenience for your child's educational endeavors. Choose functionality and style effortlessly with our curated collection.",
  Price : '399',
  imageUrl: "https://pluspng.com/img-png/png-school-bag-school-bag-png-transparent-image-500.png"

},
{
   title : "Multi Print Boys and Girls School",
    desc : "Discover the indispensable companion for your child's academic journey with our selection of school bags available through online shopping. These ergonomic and stylish bags are not just accessories but essential tools for organizational success. Crafted with durable materials, they ensure the safety of textbooks, notebooks, and stationery items during transit. Elevate your online shopping experience by investing in a reliable school bag, fostering a sense of responsibility and providing convenience for your child's educational endeavors. Choose functionality and style effortlessly with our curated collection.",
  Price : '859',
  imageUrl: 'https://www.pngarts.com/files/1/School-Bag-Download-Transparent-PNG-Image.png'

}
,
{
   title : "Summer-Force School Bag",
    desc : "Discover the indispensable companion for your child's academic journey with our selection of school bags available through online shopping. These ergonomic and stylish bags are not just accessories but essential tools for organizational success. Crafted with durable materials, they ensure the safety of textbooks, notebooks, and stationery items during transit. Elevate your online shopping experience by investing in a reliable school bag, fostering a sense of responsibility and providing convenience for your child's educational endeavors. Choose functionality and style effortlessly with our curated collection.",
  Price : '779',
  imageUrl: 'https://freepngimg.com/thumb/gloves/55160-2-school-bag-free-download-image.png'

} ,
{
   title : "Blue & Yellow Bag",
    desc : "Discover the indispensable companion for your child's academic journey with our selection of school bags available through online shopping. These ergonomic and stylish bags are not just accessories but essential tools for organizational success. Crafted with durable materials, they ensure the safety of textbooks, notebooks, and stationery items during transit. Elevate your online shopping experience by investing in a reliable school bag, fostering a sense of responsibility and providing convenience for your child's educational endeavors. Choose functionality and style effortlessly with our curated collection.",
  Price : '419',
  imageUrl: 'https://www.pngall.com/wp-content/uploads/2/Bag-PNG-High-Quality-Image.png'

} ,
{
   desc : "Discover the indispensable companion for your child's academic journey with our selection of school bags available through online shopping. These ergonomic and stylish bags are not just accessories but essential tools for organizational success. Crafted with durable materials, they ensure the safety of textbooks, notebooks, and stationery items during transit. Elevate your online shopping experience by investing in a reliable school bag, fostering a sense of responsibility and providing convenience for your child's educational endeavors. Choose functionality and style effortlessly with our curated collection.",
   title : "Black & White Scott Bag",
    desc : "Discover the indispensable companion for your child's academic journey with our selection of school bags available through online shopping. These ergonomic and stylish bags are not just accessories but essential tools for organizational success. Crafted with durable materials, they ensure the safety of textbooks, notebooks, and stationery items during transit. Elevate your online shopping experience by investing in a reliable school bag, fostering a sense of responsibility and providing convenience for your child's educational endeavors. Choose functionality and style effortlessly with our curated collection.",
   Price : '888',
  imageUrl: 'https://th.bing.com/th/id/R.5a9c57757209c881706bab086c150931?rik=6q0sGsUQ92Hbew&riu=http%3a%2f%2fpngimg.com%2fuploads%2fbackpack%2fbackpack_PNG6333.png&ehk=wWR28N1v4Qzv9t6E45I%2fH9YsTPwWhcUGMKSncCoYePc%3d&risl=1&pid=ImgRaw&r=0'

} ,
{
   title : "Butterfly Bag for Kids",
    desc : "Discover the indispensable companion for your child's academic journey with our selection of school bags available through online shopping. These ergonomic and stylish bags are not just accessories but essential tools for organizational success. Crafted with durable materials, they ensure the safety of textbooks, notebooks, and stationery items during transit. Elevate your online shopping experience by investing in a reliable school bag, fostering a sense of responsibility and providing convenience for your child's educational endeavors. Choose functionality and style effortlessly with our curated collection.",
  Price : '789',
  imageUrl: 'https://th.bing.com/th/id/R.c70097c4b95820a46033cb4ef44cda08?rik=fu64sfD2cDXG7Q&riu=http%3a%2f%2fwww.nvsbags.com%2fassets%2fimages%2fkidz_bag%2fkids-1.png&ehk=eQsW3zUTDcXdXkwHYK70qlEQFnnP%2bIHb7bKGxA0qP%2bY%3d&risl=&pid=ImgRaw&r=0'

} ,
{
   title : " Cartoon Printed Pink Waterproof",
    desc : "Discover the indispensable companion for your child's academic journey with our selection of school bags available through online shopping. These ergonomic and stylish bags are not just accessories but essential tools for organizational success. Crafted with durable materials, they ensure the safety of textbooks, notebooks, and stationery items during transit. Elevate your online shopping experience by investing in a reliable school bag, fostering a sense of responsibility and providing convenience for your child's educational endeavors. Choose functionality and style effortlessly with our curated collection.",
  Price : '699',
  imageUrl: 'https://www.nvsbags.com/assets/images/kidz_bag/k4.png'

} ,
{
   title : "Doraemon Bag",
    desc : "Discover the indispensable companion for your child's academic journey with our selection of school bags available through online shopping. These ergonomic and stylish bags are not just accessories but essential tools for organizational success. Crafted with durable materials, they ensure the safety of textbooks, notebooks, and stationery items during transit. Elevate your online shopping experience by investing in a reliable school bag, fostering a sense of responsibility and providing convenience for your child's educational endeavors. Choose functionality and style effortlessly with our curated collection.",
   Price : '899',
  imageUrl: 'https://freepngimg.com/thumb/gloves/55190-1-school-bag-hd-download-hq-png.png'

}

  ];
  const LaptopItems = [
    {  
      title :'Vostro 3520',
      desc : "Dell laptops are synonymous with reliability and innovation,offering cutting-edge technology for a seamless computing experience.",
      Price : "54000",
      pic1 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/vostro-15-3520/media-gallery/black/notebook-vostro-15-3520-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=606&qlt=100,1&resMode=sharp2&size=606,402&chrss=full",
      pic2 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/vostro-15-3520/media-gallery/black/notebook-vostro-15-3520-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&wid=4592&hei=2864&qlt=100,1&resMode=sharp2&size=4592,2864&chrss=full&imwidth=5000",
      pic3 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/vostro-15-3520/media-gallery/black/notebook-vostro-15-3520-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=565&qlt=100,1&resMode=sharp2&size=565,402&chrss=full",
      pic4 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/vostro-15-3520/media-gallery/black/notebook-vostro-15-3520-gallery-9.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=603&qlt=100,1&resMode=sharp2&size=603,402&chrss=full",
      pic5 : "https://www.cdsoft.co.il/img/scenes/dell-vostro-laptop2.jpg",
      Processor : " Vostro laptops typically come with Intel Core or AMD Ryzen processors.The processor, often referred to as the 'brain' of a laptop, executes instructions and performs calculations necessary for various tasks.",
      Memory : " Configurations may vary, but Vostro laptops often offer options for different RAM sizes (e.g., 4GB, 8GB, 16GB).",
      Storage : "Vostro laptops may come with various storage options, including traditional hard drives (HDD) or solid-state drives (SSD).",
      Display : "The screen size and resolution can vary. Vostro laptops generally provide a balance between portability and a decent-sized display.",
      Operating_System : "Dell laptops often come with Windows pre-installed, but specific configurations might offer alternative options.",
      Connectivity : "Vostro laptops typically come with a variety of ports, including USB, HDMI, Ethernet, and more. They may also support wireless connectivity like Wi-Fi and Bluetooth.",
      imageUrl : "https://www.downloadclipart.net/medium/dell-laptop-png-pic.png"
    },
    {
      title :'Inspiron 15',
      desc : "Dell laptops are synonymous with reliability and innovation,offering cutting-edge technology for a seamless computing experience.",
      Price : "56000",
      pic1 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5435-amd/media-gallery/touch/silver/in5435t-cnb-00000ff090-sl-1pc.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=651&qlt=100,1&resMode=sharp2&size=651,402&chrss=full",
      pic2 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5435-amd/media-gallery/touch/silver/in5435t-cnb-00055rf110-sl-1pc.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=651&qlt=100,1&resMode=sharp2&size=651,402&chrss=full",
      pic3 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5435-amd/media-gallery/touch/silver/in5435t-cnb-90000td090-sl-fpr-1pc.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=469&qlt=100,1&resMode=sharp2&size=469,402&chrss=full",
      pic4 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5435-amd/media-gallery/non-touch/silver/notebook-inspiron-14-5435-00055lf110-nt-silver-1pc-fpr.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=650&qlt=100,1&resMode=sharp2&size=650,402&chrss=full",
      pic5 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5435-amd/media-gallery/non-touch/silver/notebook-inspiron-14-5435-00060lb055-nt-silver-non-fpr-1pc.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=645&qlt=100,1&resMode=sharp2&size=645,402&chrss=full",
      Processor : " Inspiron 15 laptops typically come with a range of processors, including Intel Core or AMD Ryzen processors, providing varying levels of performance.",
      Memory : " Configurations may offer different RAM sizes, such as 4GB, 8GB, or 16GB, influencing multitasking capabilities.",
      Storage : "Inspiron 15 laptops may feature different storage options, including traditional hard drives (HDD), solid-state drives (SSD), or a combination of both for a balance of storage capacity and speed.",
      Display : "The series often includes a 15-inch display with various resolution options, providing a balance between portability and screen size.",
      Operating_System : "Dell typically ships Inspiron laptops with the Windows operating system, but configurations may offer alternatives or options without an operating system.",
      Connectivity : " Inspiron 15 laptops typically come with a variety of ports, including USB, HDMI, Ethernet, and more, providing flexibility for connecting peripherals and accessories.",
      imageUrl : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3520/media-gallery/in3520-cnb-05000ff090-sl.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full",
    },
    {
      title :'G-Series',
      desc : "Dell laptops are synonymous with reliability and innovation,offering cutting-edge technology for a seamless computing experience.",
      Price : "161000",
      pic1 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/media-gallery/black/notebook-g16-7630-nt-black-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=536&qlt=100,1&resMode=sharp2&size=536,402&chrss=full",
      pic2 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/media-gallery/black/notebook-g16-7630-nt-black-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=500&qlt=100,1&resMode=sharp2&size=500,402&chrss=full",
      pic3 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/media-gallery/black/notebook-g16-7630-nt-black-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=586&qlt=100,1&resMode=sharp2&size=586,402&chrss=full",
      pic4 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/media-gallery/black/notebook-g16-7630-nt-black-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=586&qlt=100,1&resMode=sharp2&size=586,402&chrss=full",
      pic5 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/media-gallery/black/notebook-g16-7630-nt-black-gallery-6.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=553&qlt=100,1&resMode=sharp2&size=553,402&chrss=full",
      Processor : "G-Series laptops usually come equipped with powerful processors such as Intel Core i5, i7, or even i9, or AMD Ryzen processors, designed to handle demanding gaming tasks.",
      Memory : "Gaming laptops typically feature ample RAM, with options ranging from 8GB to 32GB or more, to support smooth multitasking and gaming performance.",
      Storage : "G-Series laptops often offer a combination of solid-state drives (SSD) for fast boot times and traditional hard drives (HDD) for large storage capacities, giving users a balance between speed and storage space.",
      Display : "The laptops are equipped with high-resolution displays with fast refresh rates, enhancing the gaming experience by reducing motion blur and providing smoother visuals.",
      Operating_System : "G-Series laptops typically come with the Windows operating system, optimized for gaming and a wide range of gaming software.",
      Connectivity : "G-Series laptops typically include a variety of ports for peripherals, external displays, and other gaming accessories. High-speed connectivity options, such as USB-C, are often present.",
      imageUrl : "https://basic-tutorials.com/wp-content/uploads/2019/01/Dell-G5-15-SE_03.png",
    },
    
    {
      title :'Latitude E6430',
      desc : "Dell laptops are synonymous with reliability and innovation,offering cutting-edge technology for a seamless computing experience.",
      Price : "63000",
      pic1 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-3440-laptop/media-gallery/notebook-latitude-14-3440-t-dgpu-ir-gray-gallery-12.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=792&qlt=100,1&resMode=sharp2&size=792,402&chrss=full",
      pic2 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-3440-laptop/media-gallery/notebook-latitude-14-3440-nt-uma-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=664&qlt=100,1&resMode=sharp2&size=664,402&chrss=full",
      pic3 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-3440-laptop/media-gallery/notebook-latitude-14-3440-nt-uma-gray-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=664&qlt=100,1&resMode=sharp2&size=664,402&chrss=full",
      pic4 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-3440-laptop/media-gallery/notebook-latitude-14-3440-t-nonfpr-gray-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=516&qlt=100,1&resMode=sharp2&size=516,402&chrss=full",
      pic5 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-3440-laptop/media-gallery/notebook-latitude-14-3440-nt-uma-gray-gallery-6.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=581&qlt=100,1&resMode=sharp2&size=581,402&chrss=full",
      Processor : "Latitude laptops typically offer a range of processor options, including Intel Core i5 and i7 or similar processors, providing a balance of performance for business tasks.",
      Memory : " Latitude laptops typically offer a range of RAM options, including 4GB, 8GB, 16GB, or higher. The available options may vary depending on the specific model and configuration.",
      Storage : "Traditional hard drives with larger storage capacities, suitable for users who require ample storage space for documents, files, and applications.",
      Display : "Latitude laptops typically feature a range of display options, including different sizes and resolutions, catering to various business needs.",
      Operating_System : "Latitude laptops typically come with Windows operating systems, offering compatibility with a wide range of business applications.",
      Connectivity : "Latitude laptops come equipped with a variety of ports, including USB, HDMI, Ethernet, and more, providing flexibility for business users to connect peripherals and accessories.",
      imageUrl : "https://laptop88.vn/media/product/3899_dell_e6430_4.png",
    },
    {
      title :'Inspiron 14 ',
      desc : "Dell laptops are synonymous with reliability and innovation,offering cutting-edge technology for a seamless computing experience.",
      Price : "65000",
      pic1 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5430-intel/media-gallery/silver/non-touch-2-piece-metal/in5430nt-cnb-00000ff090-sl-2pc.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=651&qlt=100,1&resMode=sharp2&size=651,402&chrss=full",
      pic2 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5430-intel/media-gallery/silver/non-touch-2-piece-metal/in5430nt-cnb-00055rf110-sl-nonfpr-2pc.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full",
      pic3 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5430-intel/media-gallery/silver/non-touch-2-piece-metal/in5430nt-cnb-90000td090-sl-nonfpr-2pc.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full",
      pic4 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5430-intel/media-gallery/silver/non-touch-2-piece-metal/in5430nt-cnb-00055lf110-sl-nonfpr-2pc.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full",
      pic5 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5430-intel/media-gallery/silver/non-touch-2-piece-metal/in5430nt-cnb-00060rb055-sl-2pc.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full",
      Processor : " Inspiron 14 laptops typically come with a range of processors, including Intel Core or AMD Ryzen processors, providing varying levels of performance.",
      Memory : " Configurations may offer different RAM sizes, such as 4GB, 8GB, or 16GB, influencing multitasking capabilities.",
      Storage : "Inspiron 14 laptops may feature different storage options, including traditional hard drives (HDD), solid-state drives (SSD), or a combination of both for a balance of storage capacity and speed.",
      Display : "The series often includes a 15-inch display with various resolution options, providing a balance between portability and screen size.",
      Operating_System : "Dell typically ships Inspiron laptops with the Windows operating system, but configurations may offer alternatives or options without an operating system.",
      Connectivity : " Inspiron 14 laptops typically come with a variety of ports, including USB, HDMI, Ethernet, and more, providing flexibility for connecting peripherals and accessories.",
      imageUrl : "https://www.pngall.com/wp-content/uploads/2016/05/Laptop-PNG.png",
    },
    {
      title :'Inspiron 14 2-in-1',
      desc : "Dell laptops are synonymous with reliability and innovation,offering cutting-edge technology for a seamless computing experience.",
      Price : "63000",
      pic1 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-7430-2in1-intel/media-gallery/notebook-inspiron-14-7430-silver-fpr-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=632&qlt=100,1&resMode=sharp2&size=632,402&chrss=full",
      pic2 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-7430-2in1-intel/media-gallery/notebook-inspiron-14-7430-silver-fpr-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=396&qlt=100,1&resMode=sharp2&size=396,402&chrss=full",
      pic3 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-7430-2in1-intel/media-gallery/notebook-inspiron-14-7430-silver-fpr-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=412&qlt=100,1&resMode=sharp2&size=412,402&chrss=full",
      pic4 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-7430-2in1-intel/media-gallery/notebook-inspiron-14-7430-silver-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=619&qlt=100,1&resMode=sharp2&size=619,402&chrss=full",
      pic5 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-7430-2in1-intel/media-gallery/notebook-inspiron-14-7430-silver-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=634&qlt=100,1&resMode=sharp2&size=634,402&chrss=full",
      Processor : " Inspiron 14 laptops typically come with a range of processors, including Intel Core or AMD Ryzen processors, providing varying levels of performance.",
      Memory : " Configurations may offer different RAM sizes, such as 4GB, 8GB, or 16GB, influencing multitasking capabilities.",
      Storage : "Inspiron 14 laptops may feature different storage options, including traditional hard drives (HDD), solid-state drives (SSD), or a combination of both for a balance of storage capacity and speed.",
      Display : "The series often includes a 15-inch display with various resolution options, providing a balance between portability and screen size.",
      Operating_System : "Dell typically ships Inspiron laptops with the Windows operating system, but configurations may offer alternatives or options without an operating system.",
      Connectivity : " Inspiron 14 laptops typically come with a variety of ports, including USB, HDMI, Ethernet, and more, providing flexibility for connecting peripherals and accessories.",
      imageUrl : "https://www.pngall.com/wp-content/uploads/2016/05/Laptop-PNG.png",
    },
    {
      title :'Inspiron 14',
      desc : "Dell laptops are synonymous with reliability and innovation,offering cutting-edge technology for a seamless computing experience.",
      Price : "63000",
      pic1 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5430-intel/media-gallery/silver/non-touch-2-piece-metal/in5430nt-cnb-00000ff090-sl-2pc.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=651&qlt=100,1&resMode=sharp2&size=651,402&chrss=full",
      pic2 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5430-intel/media-gallery/silver/non-touch-2-piece-metal/in5430nt-cnb-00055rf110-sl-nonfpr-2pc.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full",
      pic3 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5430-intel/media-gallery/silver/non-touch-2-piece-metal/in5430nt-cnb-90000td090-sl-nonfpr-2pc.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full",
      pic4 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5430-intel/media-gallery/silver/non-touch-2-piece-metal/in5430nt-cnb-00055lf110-sl-nonfpr-2pc.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full",
      pic5 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5430-intel/media-gallery/silver/non-touch-2-piece-metal/in5430nt-cnb-00060rb055-sl-2pc.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full",
      Processor : " Inspiron 14 laptops typically come with a range of processors, including Intel Core or AMD Ryzen processors, providing varying levels of performance.",
      Memory : " Configurations may offer different RAM sizes, such as 4GB, 8GB, or 16GB, influencing multitasking capabilities.",
      Storage : "Inspiron 14 laptops may feature different storage options, including traditional hard drives (HDD), solid-state drives (SSD), or a combination of both for a balance of storage capacity and speed.",
      Display : "The series often includes a 15-inch display with various resolution options, providing a balance between portability and screen size.",
      Operating_System : "Dell typically ships Inspiron laptops with the Windows operating system, but configurations may offer alternatives or options without an operating system.",
      Connectivity : " Inspiron 14 laptops typically come with a variety of ports, including USB, HDMI, Ethernet, and more, providing flexibility for connecting peripherals and accessories.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696520818/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274959_0_x48llj.png?tr=w-640",
    },
    {
      title :'Notebook Dell',
      desc : "Dell laptops are synonymous with reliability and innovation,offering cutting-edge technology for a seamless computing experience.",
      Price : "113000",
      pic1 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315-2in1/media-gallery/blue/tablet-xps-13-9315-blue-gallery-10.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=750&qlt=100,1&resMode=sharp2&size=750,402&chrss=full",
      pic2 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315-2in1/media-gallery/blue/tablet-xps-13-9315-blue-gallery-8.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=746&qlt=100,1&resMode=sharp2&size=746,402&chrss=full",
      pic3 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315-2in1/media-gallery/blue/tablet-xps-13-9315-blue-gallery-21.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=761&qlt=100,1&resMode=sharp2&size=761,402&chrss=full",
      pic4 : "https://i.dell.com/is/image/DellContent/content/dam/images/products/laptops-and-2-in-1s/xps/13-9315-2n1-touch/xs9315t-xtb-04-bl.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=743&qlt=100,1&resMode=sharp2&size=743,402&chrss=full",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702033812/Croma%20Assets/Computers%20Peripherals/Laptop/Images/252451_2_aefq6y.png?tr=w-640",
      Processor : "Dell laptops often come equipped with various processors, including Intel Core i3, i5, i7, i9, or AMD Ryzen processors, catering to different performance needs.",
      Memory : "Configurations may vary, but Dell laptops typically offer a range of RAM options, such as 4GB, 8GB, 16GB, or more, depending on the model.",
      Storage : "Dell notebooks commonly provide different storage options, including traditional hard drives (HDD), solid-state drives (SSD), or a combination of both for a balance of storage capacity and speed.",
      Display : "Dell laptops come with a variety of display options, including different screen sizes, resolutions, and technologies such as touchscreens or InfinityEdge displays for a nearly borderless viewing experience.",
      Operating_System : "Dell laptops typically come with Windows pre-installed, but some models may offer alternative operating systems or configurations without an operating system",
      Connectivity : "Dell notebooks come with a variety of ports, including USB, HDMI, Thunderbolt, and more, providing connectivity for peripherals, external displays, and other accessories.",
      imageUrl : "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/pt-br/pd-image-gallery/in5406t-ctb-00030lf120-gy-large.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=554&qlt=100,0&resMode=sharp2&size=554,402",
    },
    {
      title :'Vostro 16',
      desc : "Dell laptops are synonymous with reliability and innovation,offering cutting-edge technology for a seamless computing experience.",
      Price : "74000",
      pic1 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/vostro-16-5630/media-gallery/fpr/notebook-vostro-16-5630-gray-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=530&qlt=100,1&resMode=sharp2&size=530,402&chrss=full",
      pic2 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/vostro-16-5630/media-gallery/fpr/notebook-vostro-16-5630-gray-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=522&qlt=100,1&resMode=sharp2&size=522,402&chrss=full",
      pic3 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/vostro-16-5630/media-gallery/fpr/notebook-vostro-16-5630-gray-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=634&qlt=100,1&resMode=sharp2&size=634,402&chrss=full",
      pic4 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/vostro-16-5630/media-gallery/notebook-vostro-16-5630-gray-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=701&qlt=100,1&resMode=sharp2&size=701,402&chrss=full",
      pic5 : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/vostro-16-5630/media-gallery/notebook-vostro-16-5630-gray-gallery-6.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=591&qlt=100,1&resMode=sharp2&size=591,402&chrss=full",
      Processor : "Vostro laptops typically come equipped with Intel Core or AMD Ryzen processors, offering a balance of performance and energy efficiency.",
      Memory : "Configurations may vary, but Vostro laptops generally offer options for different RAM sizes, such as 4GB, 8GB, 16GB, or more.",
      Storage : "Vostro 16 laptops may feature different storage options, including traditional hard drives (HDD), solid-state drives (SSD), or a combination of both for a balance of storage capacity and speed.",
      Display : "The series often includes a 16-inch display with various resolution options, providing a larger screen size for enhanced productivity",
      Operating_System : "Dell typically ships Vostro laptops with the Windows operating system, but configurations may offer alternatives or options without an operating system.",
      Connectivity : "Vostro 16 laptops typically come with a variety of ports, including USB, HDMI, Ethernet, and more, providing flexibility for connecting peripherals and accessories.",
      imageUrl : "https://tech.co.za/wp-content/uploads/2022/07/notebook-vostro-16-5620-nt-bk-gallery-7-1536x1152.png",
    },
    {
      title :'Apple 13-inch M1',
      desc : "Mac laptops, crafted by Apple, offer a seamless blend of sleek design and powerful performance, delivering an intuitive user experience with cutting-edge technology. ",
      Price : "99000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_umnwok.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966369/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_3_wkidwj.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966377/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_4_nlw7rh.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966378/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_5_r7le1h.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966380/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_6_bmjqyq.png?tr=w-640",
      Processor : "The MacBook Air and MacBook Pro 13-inch are powered by Apple's custom-designed M1 chip, which includes an 8-core CPU and an 8-core GPU, providing improved performance and energy efficiency.",
      Memory : "M1-based MacBooks come with unified memory, shared between the CPU and GPU. Configurations may include 8GB or 16GB of RAM.",
      Storage : "These laptops typically offer SSD storage options, with capacities ranging from 256GB to 2TB or more, depending on the specific configuration.",
      Display : "The 13-inch models feature a Retina display with True Tone ",
      Operating_System : "The laptops run on the macOS operating system, with support for the latest features and updates. They also have the capability to run iOS and iPadOS apps natively.",
      Connectivity : "These MacBooks come equipped with Thunderbolt/USB 4 ports, providing high-speed connectivity for various peripherals and external displays.",
      imageUrl : "https://cdn.shopify.com/s/files/1/0183/5769/products/Macbook-Air_0001_438589-Product-0-I-637205826045105601_800x800_0f7a096f-d491-4eef-b0ac-849937b8b7dd.png?v=1618283708",
    },
    {
      title :'MacBook Air 15',
      desc : "Mac laptops, crafted by Apple, are celebrated for their seamless integration of hardware and software, providing a consistently smooth user experience. Renowned for their sleek aluminum unibody designs, MacBooks feature high-resolution Retina displays and the powerful M1 chip, delivering impressive performance and efficiency.",
      Price : "149000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690293464/Croma%20Assets/Computers%20Peripherals/Laptop/Images/273880_g6cpks.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690293468/Croma%20Assets/Computers%20Peripherals/Laptop/Images/273880_3_aqb72d.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685965790/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256597_3_o5ugq5.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685965791/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256597_4_f9zwko.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966368/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256713_xqa1ds.png?tr=w-640",
      Processor : "The MacBook Air is powered by Apple's custom-designed M1 chip, providing improved performance and energy efficiency.",
      Memory : "The MacBook Air typically comes with unified memory, with configurations including 8GB or 16GB of RAM.",
      Storage : "MacBook Air models are equipped with SSD storage, with capacities ranging from 256GB to 2TB, depending on the specific configuration.",
      Display : "The MacBook Air features a Retina display with True Tone technology, offering a high-resolution screen with vibrant colors and excellent clarity.",
      Operating_System : "The laptop runs on the macOS operating system, with support for the latest features and updates.",
      Connectivity : "The MacBook Air comes equipped with Thunderbolt/USB 4 ports, providing high-speed connectivity for various peripherals and external displays.",
      imageUrl : "https://pngimg.com/uploads/macbook/macbook_PNG51.png",
    },
    {
      title :'MacBook Pro 14',
      desc : "Mac laptops, crafted by Apple, are celebrated for their seamless integration of hardware and software, providing a consistently smooth user experience. Renowned for their sleek aluminum unibody designs, MacBooks feature high-resolution Retina displays and the powerful M1 chip, delivering impressive performance and efficiency.",
      Price : "149000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966781/Croma%20Assets/Computers%20Peripherals/Laptop/Images/268363_pkcn86.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966780/Croma%20Assets/Computers%20Peripherals/Laptop/Images/268363_3_jvjitw.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966823/Croma%20Assets/Computers%20Peripherals/Laptop/Images/268360_xpcgfb.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966824/Croma%20Assets/Computers%20Peripherals/Laptop/Images/268360_3_tuba7e.png?tr=w-640",
      pic5 : "https://www.freepnglogos.com/uploads/macbook-png/apple-macbook-air-quot-skins-custom-laptop-skins-30.png",
      Processor : "MacBook Pro models are likely to feature Apple's custom-designed chips, such as the M1 or a successor chip, offering enhanced performance and energy efficiency.",
      Memory : "MacBook Pro laptops typically come with various RAM configurations, ranging from 8GB to 32GB or more, depending on the model.",
      Storage : "Expect SSD storage options, with capacities ranging from 256GB to several terabytes, depending on the specific configuration.",
      Display : "MacBook Pro models typically feature a high-resolution Retina display with True Tone technology for accurate color representation.",
      Operating_System : "The MacBook Pro runs on the macOS operating system, with support for the latest features and updates.",
      Connectivity : "Expect multiple Thunderbolt/USB 4 ports for high-speed connectivity, allowing users to connect various peripherals and external displa",
      imageUrl : "https://www.pngarts.com/files/4/Apple-Macbook-Pro-Transparent-Images.png",
    },
    {
      title :'Imac',
      desc : "Mac laptops, crafted by Apple, are celebrated for their seamless integration of hardware and software, providing a consistently smooth user experience. Renowned for their sleek aluminum unibody designs, MacBooks feature high-resolution Retina displays and the powerful M1 chip, delivering impressive performance and efficiency.",
      Price : "95000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1692771180/Croma%20Assets/Computers%20Peripherals/Monitor/Images/268508_0_rk68qc.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698652880/Croma%20Assets/Computers%20Peripherals/Desktops/Images/302339_4_zwwdjq.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698652883/Croma%20Assets/Computers%20Peripherals/Desktops/Images/302339_6_faecci.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683210056/Croma%20Assets/Computers%20Peripherals/Desktops/Images/234343_6_cd7myv.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683210051/Croma%20Assets/Computers%20Peripherals/Desktops/Images/234343_0_unebk2.png?tr=w-640",
      Processor : "iMacs typically come equipped with powerful processors, including Intel Core processors in earlier models and Apple's custom-designed M1 or later chips in newer models.",
      Memory : "iMacs offer various RAM configurations, ranging from 8GB to 64GB or more, depending on the specific model.",
      Storage : "iMacs feature fast SSD storage options, with capacities ranging from 256GB to several terabytes, depending on the model and configuration.",
      Display : " iMacs are known for their high-resolution Retina displays, providing vibrant colors and crisp visuals. Display sizes can vary, with options like 21.5-inch or 27-inch screens.",
      Operating_System : "iMacs run on the macOS operating system, providing access to a wide range of applications and features.",
      Connectivity : " iMacs come with a variety of ports, including Thunderbolt/USB 4 ports, USB-A ports, headphone jacks, and more, offering connectivity for peripherals and external devices.",
      imageUrl : "https://s3-us-west-2.amazonaws.com/shopify.sellyourmac.com/Shopify-Images/iMac-Slim-21.png",
    },
    {
      title :'Macbook Pro',
      desc : "Mac laptops, crafted by Apple, are celebrated for their seamless integration of hardware and software, providing a consistently smooth user experience. Renowned for their sleek aluminum unibody designs, MacBooks feature high-resolution Retina displays and the powerful M1 chip, delivering impressive performance and efficiency.",
      Price : "76000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685968972/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256607_ogforz.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685968975/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256607_3_durg8w.png?tr=w-640",
      pic3 : "https://wowjohn.com/wp-content/uploads/2022/05/Macbook-Pro-PNG-Clipart-Free-1024x1024.png",
      pic4 : "https://th.bing.com/th/id/R.8593980719357abc021e94c5524207ca?rik=cW86JIeD8F9ENw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-macbookmacbooknotebookcomputersapple-inmacbook-familyapple-laptops-17015283614248ry9g.png&ehk=MbYqVcq7JPjSm9qrh0wwn02CnhDMPH4pYKDsgGor8Wg%3d&risl=&pid=ImgRaw&r=0",
      pic5 : "https://thegoodguys.sirv.com/products/50071252/50071252_704937.PNG?format=webp&webp.fallback=jpg",
      Processor : " MacBook Pro laptops come with various processors, including Intel Core processors in older models and Apple's custom-designed M1 or later chips in newer models, offering improved performance and energy efficiency.",
      Memory : "MacBook Pro laptops offer different RAM configurations, ranging from 8GB to 64GB or more, depending on the specific model.",
      Storage : "MacBook Pro models typically feature fast SSD storage options, with capacities ranging from 256GB to several terabytes, depending on the configuration.",
      Display : "MacBook Pro laptops are known for their high-resolution Retina displays, providing vibrant colors, high contrast, and excellent clarity. Display sizes can vary, including 13-inch and 16-inch options.",
      Operating_System : "MacBook Pro laptops run on the macOS operating system, providing access to a wide range of applications and features.",
      Connectivity : "MacBook Pro laptops come equipped with Thunderbolt/USB 4 ports, offering high-speed connectivity for peripherals, external displays, and other accessories.",
      imageUrl : "https://www.freepnglogos.com/uploads/macbook-png/apple-macbook-air-quot-skins-custom-laptop-skins-30.png",
    },
    {
      title :'Macbook Pro 15',
      desc : "Mac laptops, crafted by Apple, are celebrated for their seamless integration of hardware and software, providing a consistently smooth user experience. Renowned for their sleek aluminum unibody designs, MacBooks feature high-resolution Retina displays and the powerful M1 chip, delivering impressive performance and efficiency.",
      Price : "112000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685967188/Croma%20Assets/Computers%20Peripherals/Laptop/Images/268355_uc63os.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685967189/Croma%20Assets/Computers%20Peripherals/Laptop/Images/268355_3_tpjfmd.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683562580/Croma%20Assets/Computers%20Peripherals/Laptop/Images/268355_1_ttqkyy.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685967171/Croma%20Assets/Computers%20Peripherals/Laptop/Images/268355_4_ubdmsv.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685346354/Croma%20Assets/Computers%20Peripherals/Laptop/Images/268355_2_xxe2ln.png?tr=w-640",
      Processor : " MacBook Pro laptops come with various processors, including Intel Core processors in older models and Apple's custom-designed M1 or later chips in newer models, offering improved performance and energy efficiency.",
      Memory : "MacBook Pro laptops offer different RAM configurations, ranging from 8GB to 64GB or more, depending on the specific model.",
      Storage : "MacBook Pro models typically feature fast SSD storage options, with capacities ranging from 256GB to several terabytes, depending on the configuration.",
      Display : "MacBook Pro laptops are known for their high-resolution Retina displays, providing vibrant colors, high contrast, and excellent clarity. Display sizes can vary, including 13-inch and 16-inch options.",
      Operating_System : "MacBook Pro laptops run on the macOS operating system, providing access to a wide range of applications and features.",
      Connectivity : "MacBook Pro laptops come equipped with Thunderbolt/USB 4 ports, offering high-speed connectivity for peripherals, external displays, and other accessories.",
      imageUrl : "https://prosteps.cloudimg.io/v7m/resizeinbox/1000x1000/fsharp0/https://tilroy.s3.eu-west-1.amazonaws.com/354/product/MBA-15-starlight-13.png",
    },
    {
      title :'Macbook Pro 14 Pro',
      desc : "Mac laptops, crafted by Apple, are celebrated for their seamless integration of hardware and software, providing a consistently smooth user experience. Renowned for their sleek aluminum unibody designs, MacBooks feature high-resolution Retina displays and the powerful M1 chip, delivering impressive performance and efficiency.",
      Price : "137000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663348542/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245233_0_l5bk1y.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663348546/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245233_5_eg8knx.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663348547/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245233_7_a6yj6y.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663348550/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245233_10_rvvvli.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663348552/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245233_11_l5affb.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685346354/Croma%20Assets/Computers%20Peripherals/Laptop/Images/268355_2_xxe2ln.png?tr=w-640",
      Processor : " MacBook Pro laptops come with various processors, including Intel Core processors in older models and Apple's custom-designed M1 or later chips in newer models, offering improved performance and energy efficiency.",
      Memory : "MacBook Pro laptops offer different RAM configurations, ranging from 8GB to 64GB or more, depending on the specific model.",
      Storage : "MacBook Pro models typically feature fast SSD storage options, with capacities ranging from 256GB to several terabytes, depending on the configuration.",
      Display : "MacBook Pro laptops are known for their high-resolution Retina displays, providing vibrant colors, high contrast, and excellent clarity. Display sizes can vary, including 13-inch and 16-inch options.",
      Operating_System : "MacBook Pro laptops run on the macOS operating system, providing access to a wide range of applications and features.",
      Connectivity : "MacBook Pro laptops come equipped with Thunderbolt/USB 4 ports, offering high-speed connectivity for peripherals, external displays, and other accessories.",
      imageUrl : "https://www.pngarts.com/files/4/Apple-Macbook-Pro-Transparent-Image.png",
    },
    {
      title :'Macbook Pro A1278',
      desc : "Mac laptops, crafted by Apple, are celebrated for their seamless integration of hardware and software, providing a consistently smooth user experience. Renowned for their sleek aluminum unibody designs, MacBooks feature high-resolution Retina displays and the powerful M1 chip, delivering impressive performance and efficiency.",
      Price : "154000",
      pic1 : "https://i.gadgets360cdn.com/products/laptops/large/1546455476_635_apple_macbook-pro-a1278.jpg?downsize=*:420&output-quality=80",
      pic2 : "https://i.gadgets360cdn.com/products/laptops/large/1546455476_1_635_apple_macbook-pro-a1278.jpg?downsize=*:420&output-quality=80",
      pic3 : "https://i.gadgets360cdn.com/products/laptops/large/1546455476_2_635_apple_macbook-pro-a1278.jpg?downsize=*:420&output-quality=80",
      pic4 : "https://i.gadgets360cdn.com/products/laptops/large/1546455476_3_635_apple_macbook-pro-a1278.jpg?downsize=*:420&output-quality=80",
      pic5 : "https://i.gadgets360cdn.com/products/laptops/large/1546455476_4_635_apple_macbook-pro-a1278.jpg?downsize=*:420&output-quality=80",
      Processor : " MacBook Pro laptops come with various processors, including Intel Core processors in older models and Apple's custom-designed M1 or later chips in newer models, offering improved performance and energy efficiency.",
      Memory : "MacBook Pro laptops offer different RAM configurations, ranging from 8GB to 64GB or more, depending on the specific model.",
      Storage : "MacBook Pro models typically feature fast SSD storage options, with capacities ranging from 256GB to several terabytes, depending on the configuration.",
      Display : "MacBook Pro laptops are known for their high-resolution Retina displays, providing vibrant colors, high contrast, and excellent clarity. Display sizes can vary, including 13-inch and 16-inch options.",
      Operating_System : "MacBook Pro laptops run on the macOS operating system, providing access to a wide range of applications and features.",
      Connectivity : "MacBook Pro laptops come equipped with Thunderbolt/USB 4 ports, offering high-speed connectivity for peripherals, external displays, and other accessories.",
      imageUrl : "https://www.greenit.ie/schools/wp-content/uploads/sites/4/2020/01/Apple-MacBook-Pro-A1278-MC700LLA.png",
    },
    {
      title :'HP Laptop 15',
      desc : "HP laptops are known for their reliability, sleek designs, and versatile functionality across various user needs. From the business-oriented EliteBook series to the consumer-friendly Pavilion lineup, HP offers a diverse range of laptops to cater to different preferences.",
      Price : "61000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696516772/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275165_0_tdfr2q.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696516758/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275165_20_jgvg9g.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696516757/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275165_19_azc5pu.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696516767/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275165_3_cn8uj3.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696516769/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275165_4_lrc0xy.png?tr=w-640",
      Processor : "HP laptops often come with a range of processors, including Intel Core or AMD Ryzen processors, providing options for different performance levels.",
      Memory : "Configurations may vary, but HP Laptop 15 models typically offer a range of RAM options, such as 4GB, 8GB, or 16GB.",
      Storage : "HP laptops may feature different storage options, including traditional hard drives (HDD), solid-state drives (SSD), or a combination of both for a balance of storage capacity and speed.",
      Display : "HP Laptop 15 models often include a 15.6-inch display with various resolution options, providing a standard screen size for productivity and multimedia.",
      Operating_System : "HP laptops usually come with Windows pre-installed, but configurations may offer alternatives or options without an operating system.",
      Connectivity : " HP Laptop 15 models typically come with a variety of ports, including USB, HDMI, Ethernet, and more, providing flexibility for connecting peripherals and accessories.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1693806305/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272179_1_t81dzb.png",
    },
    {
      title :'Victus Gaming',
      desc : "HP laptops are known for their reliability, sleek designs, and versatile functionality across various user needs. From the business-oriented EliteBook series to the consumer-friendly Pavilion lineup, HP offers a diverse range of laptops to cater to different preferences.",
      Price : "70000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701409916/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303113_eobj1c.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701409919/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303113_1_hlekft.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701409916/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303113_3_gebtyt.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701409913/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303113_4_cgzhsb.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701409918/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303113_6_fta3ca.png?tr=w-640",
      Processor : "Victus gaming laptops often come equipped with high-performance processors, such as Intel Core i5, i7, or i9, or AMD Ryzen processors, providing the processing power needed for gaming and multitasking.",
      Memory : " Gaming laptops often feature ample RAM, with configurations ranging from 8GB to 32GB or more to support smooth multitasking and gaming performance.",
      Storage : "Victus gaming laptops may offer various storage options, including fast SSDs (Solid State Drives) for quick system responsiveness and game loading times, and additional HDDs (Hard Disk Drives) for larger storage capacity.",
      Display : "Gaming laptops often come with high-refresh-rate displays for smoother gameplay. The Victus series might include a Full HD (1080p) or higher resolution display with anti-glare features.",
      Operating_System : "Gaming laptops often include a variety of ports, including USB, HDMI, Ethernet, and more, to accommodate gaming peripherals and accessories.",
      Connectivity : "HP Victus gaming laptops are likely to run on a Windows operating system, such as Windows 10 or Windows 11, depending on the release date and model specification",
      imageUrl : "https://th.bing.com/th/id/R.f3dd4dfd9901707709e0ec79a10ad8a1?rik=qalZkKgd2xrWXA&riu=http%3a%2f%2fomen-pro.hp.com%2fcontent%2fdam%2fsites%2fomen%2fworldwide%2flaptops%2f2022-victus-15-intel%2fHero+Image+2.png&ehk=UyebIIK4K8HkpGt6oWPzvZ8JkMfK36MtDetlwIfJPBk%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title : " HP Laptop 39.6 cm",
      desc : "HP laptops are known for their reliability, sleek designs, and versatile functionality across various user needs. From the business-oriented EliteBook series to the consumer-friendly Pavilion lineup, HP offers a diverse range of laptops to cater to different preferences.",
      Price : "54000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664414767/Croma%20Assets/Computers%20Peripherals/Laptop/Images/248619_0_dn9w7i.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664414788/Croma%20Assets/Computers%20Peripherals/Laptop/Images/248619_17_mppndv.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664414787/Croma%20Assets/Computers%20Peripherals/Laptop/Images/248619_16_imxtqm.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664414775/Croma%20Assets/Computers%20Peripherals/Laptop/Images/248619_11_ps7y3t.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664414770/Croma%20Assets/Computers%20Peripherals/Laptop/Images/248619_1_cwzsna.png?tr=w-640",
      Processor : "HP laptops typically come with a variety of processors, including Intel Core i3, i5, i7, or AMD Ryzen processors, providing options for different performance levels.",
      Memory : "Configurations may vary, but HP laptops generally offer a range of RAM options, such as 4GB, 8GB, 16GB, or more.",
      Storage : "HP laptops may feature different storage options, including traditional hard drives (HDD), solid-state drives (SSD), or a combination of both for a balance of storage capacity and speed.",
      Display : " HP laptops come with a variety of display options, including different screen sizes, resolutions, and technologies such as touchscreens for specific models.",
      Operating_System : "HP laptops often come with Windows pre-installed, but configurations may offer alternatives or options without an operating system.",
      Connectivity : " HP laptops typically come with a variety of ports, including USB, HDMI, Ethernet, and more, providing flexibility for connecting peripherals and accessories.",
      imageUrl : "https://e2simages.excess2sell.com/images/pviews/hpseqcolaam1687239574189_1687239574_view1.png",
    },
    {
      title :'HP Envy 39.6 cm',
      desc : "HP laptops are known for their reliability, sleek designs, and versatile functionality across various user needs. From the business-oriented EliteBook series to the consumer-friendly Pavilion lineup, HP offers a diverse range of laptops to cater to different preferences.",
      Price : "85000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689234963/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275135_wzfrw0.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689234963/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275135_1_xsj81s.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689234964/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275135_8_qyoqkl.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689234963/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275135_4_wnrpds.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689234964/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275135_8_qyoqkl.png?tr=w-640",
      Processor : "HP Envy laptops typically come with various processor options, including Intel Core i5, i7, or AMD Ryzen processors, offering a balance of performance and energy efficiency.",
      Memory : " Configurations may vary, but HP Envy laptops generally offer a range of RAM options, such as 8GB, 16GB, or 32GB for multitasking capabilities.",
      Storage : "HP Envy laptops may feature SSD storage options for fast boot times and responsiveness. Capacities can vary, including 256GB, 512GB, or higher.",
      Display : "The 39.6 cm specification indicates a 15.6-inch display (since 1 inch is approximately 2.54 cm). HP Envy laptops often feature high-resolution displays with narrow bezels and touch screen capabilities in certain models.",
      Operating_System : "HP Envy laptops usually come with Windows pre-installed, providing access to a wide range of applications and features.",
      Connectivity : "HP Envy laptops typically come with a variety of ports, including USB, HDMI, and other ports for connecting peripherals and accessories.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688726647/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275036_11_c0cklc.png",
    },
    {
      title :'HP Pavilion - Gold',
      desc : "HP laptops are known for their reliability, sleek designs, and versatile functionality across various user needs. From the business-oriented EliteBook series to the consumer-friendly Pavilion lineup, HP offers a diverse range of laptops to cater to different preferences.",
      Price : "80000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683559235/Croma%20Assets/Computers%20Peripherals/Laptop/Images/270527_0_z4fblk.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683559249/Croma%20Assets/Computers%20Peripherals/Laptop/Images/270527_18_ybzk5v.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683559247/Croma%20Assets/Computers%20Peripherals/Laptop/Images/270527_17_tvzybu.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683559245/Croma%20Assets/Computers%20Peripherals/Laptop/Images/270527_16_m3cwjp.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683559243/Croma%20Assets/Computers%20Peripherals/Laptop/Images/270527_4_dldsez.png?tr=w-640",
      Processor : "HP Pavilion Gold laptops may come with a range of processors, including Intel Core or AMD Ryzen processors, providing different levels of performance.",
      Memory : "Configurations may vary, but HP Pavilion Gold laptops typically offer a range of RAM options, such as 4GB, 8GB, or 16GB.",
      Storage : "HP Pavilion Gold laptops may feature different storage options, including traditional hard drives (HDD), solid-state drives (SSD), or a combination of both for a balance of storage capacity and speed.",
      Display : " The Pavilion series often includes a variety of display options, including different screen sizes, resolutions, and technologies such as touchscreens for specific models.",
      Operating_System : "HP laptops typically come with Windows pre-installed, but configurations may offer alternatives or options without an operating syste",
      Connectivity : " HP Pavilion Gold laptops typically come with a variety of ports, including USB, HDMI, Ethernet, and more, providing flexibility for connecting peripherals and accessories.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683559247/Croma%20Assets/Computers%20Peripherals/Laptop/Images/270527_17_tvzybu.png?tr=w-1000",
    },
    {
      title :'HP Laptop - Silver',
      desc : "HP laptops are known for their reliability, sleek designs, and versatile functionality across various user needs. From the business-oriented EliteBook series to the consumer-friendly Pavilion lineup, HP offers a diverse range of laptops to cater to different preferences.",
      Price : "45000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664414767/Croma%20Assets/Computers%20Peripherals/Laptop/Images/248619_0_dn9w7i.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664414770/Croma%20Assets/Computers%20Peripherals/Laptop/Images/248619_1_cwzsna.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664414793/Croma%20Assets/Computers%20Peripherals/Laptop/Images/248619_2_zbwiuk.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664414775/Croma%20Assets/Computers%20Peripherals/Laptop/Images/248619_11_ps7y3t.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664414783/Croma%20Assets/Computers%20Peripherals/Laptop/Images/248619_15_bmteqg.png?tr=w-640",
      Processor : "HP laptops typically come with a variety of processors, including Intel Core i3, i5, i7, or AMD Ryzen processors, providing options for different performance levels.",
      Memory : "Configurations may vary, but HP laptops generally offer a range of RAM options, such as 4GB, 8GB, 16GB, or more.",
      Storage : "HP laptops may feature different storage options, including traditional hard drives (HDD), solid-state drives (SSD), or a combination of both for a balance of storage capacity and speed.",
      Display : " HP laptops come with a variety of display options, including different screen sizes, resolutions, and technologies such as touchscreens for specific models.",
      Operating_System : "HP laptops often come with Windows pre-installed, but configurations may offer alternatives or options without an operating system.",
      Connectivity : " HP laptops typically come with a variety of ports, including USB, HDMI, Ethernet, and more, providing flexibility for connecting peripherals and accessories.",
      imageUrl : "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07972012.png",
    },
    {
      title :'HP Chromebook',
      desc : "HP laptops are known for their reliability, sleek designs, and versatile functionality across various user needs. From the business-oriented EliteBook series to the consumer-friendly Pavilion lineup, HP offers a diverse range of laptops to cater to different preferences.",
      Price : "45000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663347538/Croma%20Assets/Computers%20Peripherals/Laptop/Images/244320_0_nlondt.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663347541/Croma%20Assets/Computers%20Peripherals/Laptop/Images/244320_1_jztuv3.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663347546/Croma%20Assets/Computers%20Peripherals/Laptop/Images/244320_3_mwngta.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663347548/Croma%20Assets/Computers%20Peripherals/Laptop/Images/244320_10_n6kznn.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663347559/Croma%20Assets/Computers%20Peripherals/Laptop/Images/244320_15_zxpus1.png?tr=w-640",
      Processor : "Chromebooks typically feature energy-efficient processors, often from Intel or AMD, designed to deliver good performance while maximizing battery life.",
      Memory : "Chromebooks come with varying amounts of RAM, typically ranging from 4GB to 8GB. The focus on cloud-based applications means that Chromebooks can often perform well with modest memory.",
      Storage : " Chromebooks often feature modest internal storage, usually 16GB or 32GB of eMMC storage. However, Chromebooks emphasize cloud storage through services like Google Drive.",
      Display : "HP Chromebooks come in various display sizes, ranging from compact models with 11-inch screens to larger models with 14-inch or 15.6-inch screens. Display resolutions may vary, but many Chromebooks offer HD or Full HD displays.",
      Operating_System : "HP Chromebooks run on Chrome OS, an operating system designed by Google. Chrome OS is known for its simplicity, security, and seamless integration with Google services.",
      Connectivity : "Chromebooks come with various ports, including USB ports, HDMI, headphone jacks, and microSD card slots. Wireless connectivity includes Wi-Fi and Bluetooth.",
      imageUrl : "https://store.hp.com/wcsstore/hpusstore/Treatment/mdps/chromeb-fam/chromeb_family_q2fy20_ksp4_img4.png",
    },
    {
      title : "HP Pavilion Aero",
      desc : "HP laptops are known for their reliability, sleek designs, and versatile functionality across various user needs. From the business-oriented EliteBook series to the consumer-friendly Pavilion lineup, HP offers a diverse range of laptops to cater to different preferences.",
      Price : "62000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664414470/Croma%20Assets/Computers%20Peripherals/Laptop/Images/259500_0_bz4aoj.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664414472/Croma%20Assets/Computers%20Peripherals/Laptop/Images/259500_1_cyzftp.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664414491/Croma%20Assets/Computers%20Peripherals/Laptop/Images/259500_3_w8xvfr.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664414489/Croma%20Assets/Computers%20Peripherals/Laptop/Images/259500_2_zubwyw.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664414491/Croma%20Assets/Computers%20Peripherals/Laptop/Images/259500_3_w8xvfr.png?tr=w-640",
      Processor : "The Pavilion Aero is likely to be equipped with AMD Ryzen processors, offering a balance of performance and power efficiency.",
      Memory : "Configurations may vary, but the Pavilion Aero typically offers a range of RAM options, such as 8GB or 16GB, for smooth multitasking.",
      Storage : " Pavilion Aero laptops may feature solid-state drive (SSD) storage for faster data access and improved overall system responsiveness. Storage capacities can vary.",
      Display : "The Pavilion Aero is expected to have a compact and lightweight design, possibly with a 13.3-inch or similar-sized display. The display may feature Full HD (1080p) resolution for clear visuals.",
      Operating_System : "The Pavilion Aero is expected to run the Windows operating system, offering compatibility with a wide range of software and applications.",
      Connectivity : "Pavilion Aero laptops typically come with a variety of ports, including USB, HDMI, and headphone jacks. Wireless connectivity includes Wi-Fi and Bluetooth.",
      imageUrl : "https://hk-files.apjonlinecdn.com/family-pages/hp-pavilion-family/images/products-row-2-img-min-generic.png",
    },
    {
      title :'ROG Strix G17',
      desc : "ROG (Republic of Gamers) laptops by ASUS are synonymous with high-performance gaming machines, featuring powerful processors and advanced graphics cards. Renowned for their sleek designs and RGB lighting, ROG laptops offer immersive gaming experiences with high refresh rate displays and exceptional audio quality. ",
      Price : "90000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689757103/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256264_ezzvdk.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664417560/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256264_3_mr3bkg.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664417561/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256264_4_lqyxoa.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664417560/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256264_1_humz8e.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664417594/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256264_5_kgmw4l.png?tr=w-640",
      Processor : "The ROG Strix G17 is likely to be powered by high-performance processors, such as Intel Core i7 or i9, or AMD Ryzen processors, providing strong processing capabilities for gaming and multitasking.",
      Memory : "Configurations may vary, but the ROG Strix G17 is likely to offer substantial RAM options, ranging from 16GB to 32GB or more, to support demanding gaming and multitasking scenarios.",
      Storage : "The laptop is likely to feature SSD storage options for fast data access and quicker system responsiveness. Some models may include additional HDD storage for higher capacity.",
      Display : "The ROG Strix G17 is expected to have a larger display, possibly 17.3 inches, with various resolution options, high refresh rates (120Hz or higher), and adaptive sync technologies for smoother gaming experiences.",
      Operating_System : "The ROG Strix G17 is likely to run the Windows operating system, providing compatibility with a vast library of gaming and productivity software",
      Connectivity : " Gaming laptops typically include a variety of ports, including USB, HDMI, Ethernet, and audio jacks, providing connectivity for gaming peripherals and accessories.",
      imageUrl : "https://dlcdnwebimgs.asus.com/gain/D68E2936-23E4-494C-9565-256117392C1F/w1000/h732",
    },
    {
      title :'ROG Strix G16',
      desc : "ROG (Republic of Gamers) laptops by ASUS are synonymous with high-performance gaming machines, featuring powerful processors and advanced graphics cards. Renowned for their sleek designs and RGB lighting, ROG laptops offer immersive gaming experiences with high refresh rate displays and exceptional audio quality. ",
      Price : "99900",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703161721/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303515_15_zylzfi.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703161795/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303515_14_ngvv3u.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703161795/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303515_12_ryj5ka.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703161690/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303515_11_qjldxb.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703161791/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303515_13_wlkycz.png?tr=w-640",
      Processor : "Powerful processors, such as Intel Core i7 or i9, or AMD Ryzen processors, for high-level gaming and multitasking performance.",
      Memory : "Substantial RAM options, typically ranging from 16GB to 32GB or more, to handle demanding gaming scenarios and multitasking.",
      Storage : "Fast SSD storage for quick data access and system responsiveness. Some models may also include additional HDD storage for higher capacity.",
      Display : " A large display, possibly around 16 inches, with various resolution options, high refresh rates, and adaptive sync technologies for smooth gaming experiences.",
      Operating_System : "The laptop is likely to run the Windows operating system, providing compatibility with a wide range of gaming and productivity software.",
      Connectivity : "A variety of ports, including USB, HDMI, Ethernet, and audio jacks, to accommodate gaming peripherals and accessories.",
      imageUrl : "https://dlcdnwebimgs.asus.com/gain/B7F82858-38C0-4A42-B751-5DE480B0ABB6",
    },
    {
      title :'ROG Zephyrus Duo 16',
      desc : "ROG (Republic of Gamers) laptops by ASUS are synonymous with high-performance gaming machines, featuring powerful processors and advanced graphics cards. Renowned for their sleek designs and RGB lighting, ROG laptops offer immersive gaming experiences with high refresh rate displays and exceptional audio quality. ",
      Price : "165000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688640186/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274257_tf3enf.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688640185/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274257_1_ikxipd.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688640184/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274257_5_qylsma.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688640184/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274257_6_ojldt9.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688640185/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274257_7_o2bu1r.png?tr=w-640",
      Processor : "The Zephyrus Duo series typically features high-end processors, such as Intel Core i9 or AMD Ryzen 9, and dedicated graphics cards from NVIDIA, providing powerful performance for gaming and content creation.",
      Memory : "Generous RAM configurations, often ranging from 16GB to 32GB or more, to support demanding multitasking scenarios.",
      Storage : "Fast SSD storage, providing quick data access and system responsiveness. Some models may include multiple storage options, such as dual SSDs.",
      Display : "The primary display is likely to be a high-resolution and high-refresh-rate screen for an immersive gaming experience. The secondary touchscreen display is often used for additional applications or tools.",
      Operating_System : "The laptop is likely to run the Windows operating system for compatibility with a wide range of software.",
      Connectivity : "A range of ports, including USB, HDMI, Thunderbolt, and audio jacks, to accommodate various peripherals and accessories.",
      imageUrl : "https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2022/01/asus-rog-zephyrus-g14-2022-frandroid-2022.png?resize=170"
    },
    {
      title :'ROG Strix G15',
      desc : "ROG (Republic of Gamers) laptops by ASUS are synonymous with high-performance gaming machines, featuring powerful processors and advanced graphics cards. Renowned for their sleek designs and RGB lighting, ROG laptops offer immersive gaming experiences with high refresh rate displays and exceptional audio quality. ",
      Price : "75000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1691413227/Croma%20Assets/Computers%20Peripherals/Laptop/Images/258089_lwyos5.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664422463/Croma%20Assets/Computers%20Peripherals/Laptop/Images/258089_1_oihjtp.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664422478/Croma%20Assets/Computers%20Peripherals/Laptop/Images/258089_3_xmrdbh.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664422478/Croma%20Assets/Computers%20Peripherals/Laptop/Images/258089_4_ghuohf.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664422473/Croma%20Assets/Computers%20Peripherals/Laptop/Images/258089_5_vwnu5p.png?tr=w-640",
      Processor : " The ROG Strix G15 is likely to be powered by high-performance processors, such as Intel Core i7 or i9, or AMD Ryzen processors, providing strong processing capabilities for gaming and multitasking.",
      Memory : "Substantial RAM options, typically ranging from 16GB to 32GB or more, to handle demanding gaming scenarios and multitasking.",
      Storage : "Fast SSD storage for quick data access and system responsiveness. Some models may also include additional HDD storage for higher capacity.",
      Display : "The ROG Strix G15 is expected to have a high-refresh-rate display, possibly with options for Full HD or higher resolutions. Adaptive sync technologies may be included for smoother gaming experiences.",
      Operating_System : "The laptop is likely to run the Windows operating system, providing compatibility with a wide range of gaming and productivity software.",
      Connectivity : "A variety of ports, including USB, HDMI, Ethernet, and audio jacks, to accommodate gaming peripherals and accessories.",
      imageUrl : "https://dlcdnwebimgs.asus.com/gain/D336705A-46C9-405F-9A01-D8F5EDD6B11E/w1000/h732",
    },
    {
      title :'ROG Strix Scar 15',
      desc : "ROG (Republic of Gamers) laptops by ASUS are synonymous with high-performance gaming machines, featuring powerful processors and advanced graphics cards. Renowned for their sleek designs and RGB lighting, ROG laptops offer immersive gaming experiences with high refresh rate displays and exceptional audio quality. ",
      Price : "269000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1677820460/Croma%20Assets/Computers%20Peripherals/Laptop/Images/270091_k6c24m.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1680772175/Croma%20Assets/Gaming/Laptop/Images/270091_1_hqvulv.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1677820460/Croma%20Assets/Computers%20Peripherals/Laptop/Images/270091_3_doidur.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1677820462/Croma%20Assets/Computers%20Peripherals/Laptop/Images/270091_5_itrpss.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1677820459/Croma%20Assets/Computers%20Peripherals/Laptop/Images/270091_7_oam0r2.png?tr=w-640",
      Processor : "The ROG Strix Scar 15 is likely to be powered by high-performance processors, such as Intel Core i7 or i9, or AMD Ryzen processors, providing strong processing capabilities for gaming and multitasking.",
      Memory : "Substantial RAM options, typically ranging from 16GB to 32GB or more, to handle demanding gaming scenarios and multitasking.",
      Storage : "Fast SSD storage for quick data access and system responsiveness. Some models may also include additional HDD storage for higher capacity.",
      Display : " The ROG Strix Scar 15 is expected to have a high-refresh-rate display, possibly with options for Full HD or higher resolutions. Adaptive sync technologies may be included for smoother gaming experiences.",
      Operating_System : "The laptop is likely to run the Windows operating system, providing compatibility with a wide range of gaming and productivity software",
      Connectivity : "A variety of ports, including USB, HDMI, Ethernet, and audio jacks, to accommodate gaming peripherals and accessories.",
      imageUrl : "https://www.notebookcheck.net/fileadmin/_processed_/6/b/csm_ROG_STrix_Scar_153_052ee2a139.png",
    },
    {
      title :'ROG Zephyrus M16',
      desc : "ROG (Republic of Gamers) laptops by ASUS are synonymous with high-performance gaming machines, featuring powerful processors and advanced graphics cards. Renowned for their sleek designs and RGB lighting, ROG laptops offer immersive gaming experiences with high refresh rate displays and exceptional audio quality. ",
      Price : "169000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688640186/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274257_tf3enf.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688640185/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274257_1_ikxipd.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688640185/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274257_7_o2bu1r.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688640184/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274257_5_qylsma.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688640184/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274257_8_af4nru.png?tr=w-640",
      Processor : "Zephyrus laptops are likely to be powered by high-performance processors, such as Intel Core i7 or i9, or AMD Ryzen processors, providing strong processing capabilities for gaming and multitasking.",
      Memory : "Substantial RAM options, typically ranging from 16GB to 32GB or more, to handle demanding gaming scenarios and multitasking.",
      Storage : "Fast SSD storage for quick data access and system responsiveness. Some models may also include additional HDD storage for higher capacity.",
      Display : "Zephyrus laptops are known for their high-refresh-rate displays, often with options for Full HD or higher resolutions. Adaptive sync technologies may be included for smoother gaming experiences.",
      Operating_System : "The laptops are likely to run the Windows operating system, providing compatibility with a wide range of gaming and productivity softwar",
      Connectivity : " A variety of ports, including USB, HDMI, Ethernet, and audio jacks, to accommodate gaming peripherals and accessories.",
      imageUrl : "https://dlcdnwebimgs.asus.com/gain/676317DE-8D03-445A-AAC3-6BE6E558BF1E",
    },
    {
      title :'ROG Zephyrus G14',
      desc : "ROG (Republic of Gamers) laptops by ASUS are synonymous with high-performance gaming machines, featuring powerful processors and advanced graphics cards. Renowned for their sleek designs and RGB lighting, ROG laptops offer immersive gaming experiences with high refresh rate displays and exceptional audio quality. ",
      Price : "266000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688640186/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274257_tf3enf.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688638208/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274253_ggvdwu.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688638207/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274253_5_ybownn.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688638207/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274253_6_tm6z2t.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688638208/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274253_7_vsira2.png?tr=w-640",
      Processor : " Zephyrus laptops are likely to be powered by high-performance processors, such as Intel Core i7 or i9, or AMD Ryzen processors, providing strong processing capabilities for gaming and multitasking.",
      Memory : "Substantial RAM options, typically ranging from 16GB to 32GB or more, to handle demanding gaming scenarios and multitasking.",
      Storage : "Fast SSD storage for quick data access and system responsiveness. Some models may also include additional HDD storage for higher capacity.",
      Display : "Zephyrus laptops are known for their high-refresh-rate displays, often with options for Full HD or higher resolutions. Adaptive sync technologies may be included for smoother gaming experiences.",
      Operating_System : "The laptops are likely to run the Windows operating system, providing compatibility with a wide range of gaming and productivity softwar",
      Connectivity : " A variety of ports, including USB, HDMI, Ethernet, and audio jacks, to accommodate gaming peripherals and accessories.",
      imageUrl : "https://laptop88.vn/media/product/3899_dell_e6430_4.png",
    },
    {
      title :'ROG Flow X13',
      desc : "ROG (Republic of Gamers) laptops by ASUS are synonymous with high-performance gaming machines, featuring powerful processors and advanced graphics cards. Renowned for their sleek designs and RGB lighting, ROG laptops offer immersive gaming experiences with high refresh rate displays and exceptional audio quality. ",
      Price : "205000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688640087/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274256_ozs7xw.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688640086/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274256_1_vobqp2.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688640087/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274256_5_c1fzvu.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688640086/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274256_6_lqdxtt.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688640087/Croma%20Assets/Computers%20Peripherals/Laptop/Images/274256_7_dwmsey.png?tr=w-640",
      Processor : "The ROG Flow X13 is likely to feature high-performance processors, such as AMD Ryzen processors, providing a balance of power and efficiency.",
      Memory : "Expect substantial RAM options, typically ranging from 16GB to 32GB or more, to support multitasking and demanding applications.",
      Storage : "Fast SSD storage for quick data access and system responsiveness. Configurations may include different storage capacities.",
      Display : "The ROG Flow X13 is expected to have a touchscreen display, possibly with a high refresh rate for smoother interactions and gaming experiences.",
      Operating_System : "The laptop is likely to run the Windows operating system, providing compatibility with a wide range of software.",
      Connectivity : "A variety of ports, including USB Type-C, HDMI, audio jack, and possibly support for external GPUs through dedicated ports.",
      imageUrl : "https://dlcdnwebimgs.asus.com/gain/0274F593-3FBB-45DF-97C9-A33636E654E7/w1000/h732",
    },
    {
      title :'Lenovo Chromebook C330',
      desc : "Lenovo laptops are renowned for their sleek designs, cutting-edge technology, and robust performance. With a diverse range catering to various needs, from the portable ThinkPad series favored by professionals for business tasks to the gaming-oriented Legion laptops",
      Price : "49000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663348489/Croma%20Assets/Computers%20Peripherals/Laptop/Images/246443_0_ssccjy.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663348496/Croma%20Assets/Computers%20Peripherals/Laptop/Images/246443_6_ondsut.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663348498/Croma%20Assets/Computers%20Peripherals/Laptop/Images/246443_10_o5lnnq.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663348504/Croma%20Assets/Computers%20Peripherals/Laptop/Images/246443_11_xbv8my.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663348507/Croma%20Assets/Computers%20Peripherals/Laptop/Images/246443_12_gfmr1d.png?tr=w-640",
      Processor : "The Chromebook C330 is equipped with a MediaTek processor, providing a balance of performance and power efficiency suitable for Chrome OS.",
      Memory : " The Chromebook C330 typically comes with 4GB of RAM, which is sufficient for basic computing tasks and the Chrome OS environment.",
      Storage : "It features eMMC storage with options for 32GB or 64GB. Chromebooks often rely on cloud storage, and the local storage is mainly used for offline access to files and applications.",
      Display : " It comes with an 11.6-inch IPS touchscreen display with a resolution of 1366 x 768 pixels. The touchscreen functionality enables users to interact with the device using touch gestures",
      Operating_System : "As a Chromebook, the C330 runs Chrome OS, a lightweight and secure operating system developed by Google. Chrome OS is known for its simplicity and quick boot times.",
      Connectivity : "The Chromebook C330 supports Wi-Fi for internet connectivity and may also include Bluetooth for wireless peripheral connections.",
      imageUrl : "https://www.lenovo.com/medias/lenovo-laptops-lenovo-student-chromebooks-ideapad-flex-3-chromebook-11-gallery-5.png?context=bWFzdGVyfHJvb3R8MTA5ODA3fGltYWdlL3BuZ3xoNjkvaDBlLzEwODcyNjI1ODg5MzEwLnBuZ3w2OTMxYzgzYmU3YzRhZjkwMGUxOWNjYWUyYTNjYTc0MjkyYzZjMWEwNjc3YTFhYjFmNDgxY2Q1NDA4OWQ5NGI4",
    },
    {
      title :'Lenovo Flex Laptop',
      desc : "Lenovo laptops are renowned for their sleek designs, cutting-edge technology, and robust performance. With a diverse range catering to various needs, from the portable ThinkPad series favored by professionals for business tasks to the gaming-oriented Legion laptops",
      Price : "74000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663350358/Croma%20Assets/Computers%20Peripherals/Laptop/Images/250739_0_nsxbob.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663350363/Croma%20Assets/Computers%20Peripherals/Laptop/Images/250739_3_amsfln.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663350366/Croma%20Assets/Computers%20Peripherals/Laptop/Images/250739_6_fpbdvo.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663350367/Croma%20Assets/Computers%20Peripherals/Laptop/Images/250739_7_d0btsr.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663350370/Croma%20Assets/Computers%20Peripherals/Laptop/Images/250739_10_zvhhl0.png?tr=w-640",
      Processor : " Lenovo Flex laptops typically come equipped with a range of processors, including Intel Core i5, i7, or AMD Ryzen processors, providing a balance of performance and power efficiency.",
      Memory : " Flex laptops generally offer configurations with different amounts of RAM, commonly ranging from 8GB to 16GB, depending on the specific model.",
      Storage : "These laptops may come with different storage options, including Solid State Drives (SSD) for faster data access and responsiveness. Storage capacities can vary from 256GB to 1TB or more.",
      Display : "Flex laptops feature touchscreen displays with various sizes and resolutions, often ranging from 13 inches to 15 inches. The displays may have Full HD (1920 x 1080) or higher resolutions.",
      Operating_System : "Lenovo Flex laptops typically come with the Windows operating system pre-installed, offering compatibility with a wide range of software applications.",
      Connectivity : "Flex laptops typically include a variety of ports, including USB Type-C, USB Type-A, HDMI, audio jack, and sometimes a card reader, providing connectivity for various peripherals.",
      imageUrl : "https://www.lenovo.com/medias/lenovo-ideapad-l340-15-gaming-front.png?context=bWFzdGVyfHJvb3R8NzEyODJ8aW1hZ2UvcG5nfGhjYS9oNjIvMTAwODgxMzc1MjMyMzAucG5nfDcyZWYxMzY0ZDRmN2IzMGRiMTY5NzdlZDA4MTFmODY1YWUzZjJjY2I3ZTIzMmI0ZDM0MjVlN2ZjNmRmYWM2MTc",
    },
    {
      title :'Lenovo Ideapad L340',
      desc : "Lenovo laptops are renowned for their sleek designs, cutting-edge technology, and robust performance. With a diverse range catering to various needs, from the portable ThinkPad series favored by professionals for business tasks to the gaming-oriented Legion laptops",
      Price : "40000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697016275/Croma%20Assets/Computers%20Peripherals/Laptop/Images/300236_3_ipavjy.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697107038/Croma%20Assets/Computers%20Peripherals/Laptop/Images/300236_ch8mwe.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697016275/Croma%20Assets/Computers%20Peripherals/Laptop/Images/300236_7_w0foyd.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697016272/Croma%20Assets/Computers%20Peripherals/Laptop/Images/300236_6_ztpcxi.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697016275/Croma%20Assets/Computers%20Peripherals/Laptop/Images/300236_4_fvwb8y.png?tr=w-640",
      Processor : "The Ideapad L340 laptops typically feature Intel Core i5 or i7 processors, providing a good balance of performance for everyday computing.",
      Memory : " Configurations may vary, but the Ideapad L340 often offers options for 8GB or 16GB of RAM to handle multitasking and general computing tasks.",
      Storage : "Storage options include traditional Hard Disk Drives (HDD) or Solid State Drives (SSD), or a combination of both, providing choices for storage capacity and speed.",
      Display : " Ideapad L340 laptops generally come with display sizes ranging from 15.6 inches to 17.3 inches. The resolution is typically Full HD (1920 x 1080), offering clear visuals.",
      Operating_System : "Ideapad L340 laptops come with the Windows operating system pre-installed, offering compatibility with a wide range of software applications.",
      Connectivity : "Ideapad L340 laptops include a variety of ports, such as USB Type-C, USB Type-A, HDMI, Ethernet, and audio jacks, providing connectivity for various peripherals.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697016285/Croma%20Assets/Computers%20Peripherals/Laptop/Images/300236_0_u4clsp.png?tr=w-640",
    },
    {
      title :'Lenovo Legion 5',
      desc : "Lenovo laptops are renowned for their sleek designs, cutting-edge technology, and robust performance. With a diverse range catering to various needs, from the portable ThinkPad series favored by professionals for business tasks to the gaming-oriented Legion laptops",
      Price : "99000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701765808/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303122_bhx564_awlup0.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701766031/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303122_3_sel82e_h78v0m.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701766031/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303122_6_ggpvpk_p2wlyw.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701766036/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303122_7_bmvyo4_ai3jnk.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701766031/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303122_9_wpjoi7_ewnklg.png?tr=w-640",
      Processor : "Legion 5 laptops are typically equipped with high-performance processors, such as AMD Ryzen 5, Ryzen 7, or Ryzen 9, or Intel Core i5, i7, or i9 processors, providing strong processing capabilities for gaming and multitasking.",
      Memory : "Configurations may vary, but Legion 5 laptops typically offer options for 8GB, 16GB, or more of RAM to handle demanding gaming scenarios and multitasking.",
      Storage : "Fast SSD storage is common in Legion 5 laptops for quick data access and system responsiveness. Some models may also include additional HDD storage for higher capacity.",
      Display : "Legion 5 laptops come with various display sizes, often ranging from 15.6 inches to 17.3 inches, and may feature Full HD (1920 x 1080) or higher resolutions. Some models may include high-refresh-rate displays for smoother gaming experiences.",
      Operating_System : "Legion 5 laptops come with the Windows operating system pre-installed, offering compatibility with a wide range of gaming and productivity software.",
      Connectivity : "A variety of ports, including USB Type-C, USB Type-A, HDMI, Ethernet, and audio jacks, provide connectivity for gaming peripherals and accessories.",
      imageUrl : "https://gadgetguy-assets.s3.ap-southeast-2.amazonaws.com/wordpress/wp-content/uploads/2021/07/08152412/Lenovo_Legion_5_Pro_16ACH6H_CT2_02.png",
    },
    {
      title :'Lenovo IdeaPad 3',
      desc : "Lenovo laptops are renowned for their sleek designs, cutting-edge technology, and robust performance. With a diverse range catering to various needs, from the portable ThinkPad series favored by professionals for business tasks to the gaming-oriented Legion laptops",
      Price : "55000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689153302/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272714_1_sf0pv9.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689153275/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272714_5_vqyaxd.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689153299/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272714_0_d9tfur.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689153295/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272714_18_soms9y.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689153291/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272714_20_czubbw.png?tr=w-640",
      Processor : "IdeaPad 3 laptops typically come with various processor options, including AMD Ryzen or Intel Core processors. The specific model may include options like Ryzen 3, Ryzen 5, Core i3, Core i5, or similar.",
      Memory : "Configurations may vary, but IdeaPad 3 laptops typically offer options for 4GB, 8GB, or more of RAM to handle everyday computing tasks.",
      Storage : "Storage options include Hard Disk Drives (HDD) or Solid State Drives (SSD), providing choices for storage capacity and speed. Some models may feature a combination of both.",
      Display : "IdeaPad 3 laptops have display sizes ranging from 14 inches to 17 inches, and they commonly feature Full HD (1920 x 1080) resolution. Some models may have smaller displays with lower resolutions.",
      Operating_System : " IdeaPad 3 laptops come with the Windows operating system pre-installed, offering compatibility with a wide range of software applications.",
      Connectivity : "IdeaPad 3 laptops include a variety of ports, such as USB Type-C, USB Type-A, HDMI, and an audio jack, providing connectivity for various peripherals and devices.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689153299/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272714_0_d9tfur.png?tr=w-640",
    },
    {
      title :'Lenovo YOGA C740-14',
      desc : "Lenovo laptops are renowned for their sleek designs, cutting-edge technology, and robust performance. With a diverse range catering to various needs, from the portable ThinkPad series favored by professionals for business tasks to the gaming-oriented Legion laptops",
      Price : "75000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701613806/Croma%20Assets/Computers%20Peripherals/Laptop/Images/301461_0_jyeiqr.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701613805/Croma%20Assets/Computers%20Peripherals/Laptop/Images/301461_3_pgmpju.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701613803/Croma%20Assets/Computers%20Peripherals/Laptop/Images/301461_5_pohgko.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701613804/Croma%20Assets/Computers%20Peripherals/Laptop/Images/301461_7_k5eufo.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701613798/Croma%20Assets/Computers%20Peripherals/Laptop/Images/301461_10_hksrs6.png?tr=w-640",
      Processor : "Yoga laptops typically feature a range of processors, including Intel Core i5, i7, or i9, and AMD Ryzen processors. The specific model and configuration can vary.",
      Memory : "Configurations may vary, but Yoga laptops typically offer options for 8GB, 16GB, or more of RAM to handle multitasking and demanding applications.",
      Storage : "Yoga laptops commonly feature Solid State Drives (SSD) for faster data access and system responsiveness. Storage capacities can range from 256GB to 1TB or more.",
      Display : "Yoga laptops come with various display sizes, ranging from around 13 inches to 15 inches or larger. The display resolutions can vary, with options for Full HD (1920 x 1080) or higher resolutions.",
      Operating_System : "Yoga laptops typically come with the Windows operating system pre-installed, offering compatibility with a wide range of software applications.",
      Connectivity : "Yoga devices include a variety of ports, including USB Type-C, USB Type-A, HDMI, audio jack, and sometimes a card reader, providing connectivity for various peripherals",
      imageUrl : "https://www.lenovo.com/medias/lenovo-laptop-yoga-c740-14-series.png?context=bWFzdGVyfHJvb3R8MTE4MTQ1fGltYWdlL3BuZ3xoMmUvaGUzLzE0MzM5NTc5OTY5NTY2LnBuZ3xkZGM3YTMwMzQ5ZTNiY2YwM2NhZjJmZDdkZjEzYTgwZGM2N2NkNGNmN2E2MDFmYjVmMzFjOGZhZTk2YzI2ZGJl",
    },
    {
      title :'Lenovo IdeaPad Gaming 3',
      desc : "Lenovo laptops are renowned for their sleek designs, cutting-edge technology, and robust performance. With a diverse range catering to various needs, from the portable ThinkPad series favored by professionals for business tasks to the gaming-oriented Legion laptops",
      Price : "66000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690470310/Croma%20Assets/Computers%20Peripherals/Laptop/Images/269865_3_erphva.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1679564832/Croma%20Assets/Gaming/Laptop/Images/269865_1_imvypt.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690470310/Croma%20Assets/Computers%20Peripherals/Laptop/Images/269865_5_mwliqt.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690470310/Croma%20Assets/Computers%20Peripherals/Laptop/Images/269865_7_bvjdsc.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1679564832/Croma%20Assets/Gaming/Laptop/Images/269865_1_imvypt.png?tr=w-640",
      Processor : " IdeaPad Gaming 3 laptops typically come equipped with mid-range to high-performance processors, such as AMD Ryzen 5 or 7, or Intel Core i5 or i7. The specific model and configuration can vary.",
      Memory : "Configurations may vary, but IdeaPad Gaming 3 laptops typically offer options for 8GB, 16GB, or more of RAM to handle demanding gaming scenarios and multitasking.",
      Storage : "Fast SSD storage is common in IdeaPad Gaming 3 laptops for quick data access and system responsiveness. Some models may also include additional HDD storage for higher capacity.",
      Display : "IdeaPad Gaming 3 laptops come with various display sizes, often ranging from 15.6 inches to 17.3 inches, and may feature Full HD (1920 x 1080) or higher resolutions.",
      Operating_System : "IdeaPad Gaming 3 laptops come with the Windows operating system pre-installed, offering compatibility with a wide range of gaming and productivity software.",
      Connectivity : "A variety of ports, including USB Type-C, USB Type-A, HDMI, Ethernet, and audio jacks, provide connectivity for gaming peripherals and accessories.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690470310/Croma%20Assets/Computers%20Peripherals/Laptop/Images/269865_zdgdgr.png?tr=w-640",
    },
    {
      title :'Lenovo Yoga 9i 14',
      desc : "Lenovo laptops are renowned for their sleek designs, cutting-edge technology, and robust performance. With a diverse range catering to various needs, from the portable ThinkPad series favored by professionals for business tasks to the gaming-oriented Legion laptops",
      Price : "162000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689847511/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275398_pfkhy1.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689847512/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275398_1_ntvvqo.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689847512/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275398_6_wtihuu.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689847513/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275398_7_gipmgc.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689847513/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275398_9_hcv9dh.png?tr=w-640",
      Processor : "Yoga laptops typically feature a range of processors, including Intel Core i5, i7, or i9, and AMD Ryzen processors. The specific model and configuration can vary.",
      Memory : "Configurations may vary, but Yoga laptops typically offer options for 8GB, 16GB, or more of RAM to handle multitasking and demanding applications.",
      Storage : "Yoga laptops commonly feature Solid State Drives (SSD) for faster data access and system responsiveness. Storage capacities can range from 256GB to 1TB or more.",
      Display : "Yoga laptops come with various display sizes, ranging from around 13 inches to 15 inches or larger. The display resolutions can vary, with options for Full HD (1920 x 1080) or higher resolutions.",
      Operating_System : "Yoga laptops typically come with the Windows operating system pre-installed, offering compatibility with a wide range of software applications.",
      Connectivity : "Yoga devices include a variety of ports, including USB Type-C, USB Type-A, HDMI, audio jack, and sometimes a card reader, providing connectivity for various peripherals",
      imageUrl : "https://gearshop.vn/upload/resizer.php?src=https://gearshop.vn/upload/images/Product/Lenovo/Laptop/Yoga%209/14IAP7%20-%2082LU006DVN/Laptop-Lenovo-Yoga-9-14IAP7-82LU006DVN-(4).png&w=1200&h=1200&q=72&zc=2",
    },
   
  ]
  const MobileItems = [
    {
      title :'Apple iPhone 11',
      desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features, setting a standard for innovation and user experienc",
      Price : "37000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662418916/Croma%20Assets/Communication/Mobiles/Images/230107_2_l6k7sl.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685968256/Croma%20Assets/Communication/Mobiles/Images/230107_7_cx3rcb.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685968264/Croma%20Assets/Communication/Mobiles/Images/230107_4_veukps.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685968269/Croma%20Assets/Communication/Mobiles/Images/230107_5_yjej6q.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685968259/Croma%20Assets/Communication/Mobiles/Images/230107_6_jf2mq7.png?tr=w-640",
      Processor : "A 64-bit hexa-core Apple A13 Bionic processor with a 7 nm+ fabrication process and a 4-core Apple GPU",
      Operating_System : "An iOS 13 operating system that can be upgraded to iOS 17.2",
      Storage : "A 4 GB RAM and a 64 GB, 128 GB, or 256 GB internal storage option, with no card slot for expansion",
      Display : "A 6.1-inch Liquid Retina IPS LCD display with a resolution of 828 x 1792 pixels and a scratch-resistant glass protection.",
      Camera : "A dual 12 MP rear camera with a wide-angle and an ultra-wide-angle lens, and a 12 MP front camera with a depth sensor.",
      Battery : "A 3110 mAh Li-Ion battery that supports fast wired charging (50% in 30 min) and wireless charging (Qi standard)",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662418914/Croma%20Assets/Communication/Mobiles/Images/230107_t40uo8.png?tr=w-640"
    },
    {
      title :'Apple iPhone 13 Pro Max',
      desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features, setting a standard for innovation and user experienc",
      Price : "180000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664009299/Croma%20Assets/Communication/Mobiles/Images/243535_7_iusttu.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664009283/Croma%20Assets/Communication/Mobiles/Images/243535_11_z7f3dt.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664009277/Croma%20Assets/Communication/Mobiles/Images/243535_0_bf6urz.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664009289/Croma%20Assets/Communication/Mobiles/Images/243535_14_x0b29l.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664009292/Croma%20Assets/Communication/Mobiles/Images/243535_12_oxaonl.png?tr=w-640",
      Processor : "A 64-bit hexa-core Apple A15 Bionic processor with a 5 nm fabrication process and a 5-core Apple GPU.",
      Operating_System  : "An iOS 15 operating system that can be upgraded to iOS 17.2",
      Storage : "Fast SSD storage for quick data access and system responsiveness. Some models may also include additional HDD storage for higher capacity.",
      Display : "A 6.7-inch Super Retina XDR OLED display with a resolution of 1284 x 2778 pixels and a Ceramic Shield glass protection.",
      Camera : "A triple 12 MP rear camera with a wide-angle, an ultra-wide-angle, and a telephoto lens, and a 12 MP front camera with a depth sensor.",
      Battery : "A variety of ports, including USB, HDMI, Ethernet, and audio jacks, to accommodate gaming peripherals and accessories.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664009286/Croma%20Assets/Communication/Mobiles/Images/243535_13_ki3dgg.png?tr=w-640",
    },
    {
      title :'Apple iPhone 15 Pro',
      desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features, setting a standard for innovation and user experienc",
      Price : "133000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694674572/Croma%20Assets/Communication/Mobiles/Images/300749_1_tg010y.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694674574/Croma%20Assets/Communication/Mobiles/Images/300749_2_e9emfp.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694674577/Croma%20Assets/Communication/Mobiles/Images/300749_3_gr1i0y.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664009289/Croma%20Assets/Communication/Mobiles/Images/243535_14_x0b29l.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694674558/Croma%20Assets/Communication/Mobiles/Images/300749_4_kyictr.png?tr=w-640",
      Processor : "The iPhone 15 Pro has a powerful A17 Pro chip that delivers fast performance and supports advanced graphics and spatial audio.",
      Operating_System : "Substantial RAM options, typically ranging from 16GB to 32GB or more, to handle demanding gaming scenarios and multitasking.",
      Storage : "The iPhone 15 Pro runs on iOS 15, the latest operating system from Apple. iOS 15 has many new features and improvements, such as Focus mode, Live Text, FaceTime enhancements.",
      Display : "The iPhone 15 Pro has a 6.1-inch Dynamic Island display with ProMotion technology that adapts the refresh rate up to 120Hz for smoother scrolling and gaming.",
      Camera : " The iPhone 15 Pro has a Pro camera system with four cameras: a 48MP main camera, a 12MP ultra wide camera, a 12MP 2x telephoto camera, and a 12MP 3x telephoto camera.",
      Battery : "The iPhone 15 Pro has a long-lasting battery that can be charged wirelessly or reverse-charged to other devices. The battery can last up to 22 hours of video playback.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694674571/Croma%20Assets/Communication/Mobiles/Images/300749_0_y3aw57.png?tr=w-640",
    },
    {
      title :'Apple iPhone 14',
      desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features, setting a standard for innovation and user experienc",
      Price : "64000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685965447/Croma%20Assets/Communication/Mobiles/Images/261931_3_r5n7df.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685965445/Croma%20Assets/Communication/Mobiles/Images/261931_4_gk2gwm.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685965442/Croma%20Assets/Communication/Mobiles/Images/261931_5_mgivu9.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685965461/Croma%20Assets/Communication/Mobiles/Images/261931_6_zmzsdr.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685965458/Croma%20Assets/Communication/Mobiles/Images/261931_7_f4nks7.png?tr=w-640",
      Processor : "A powerful A15 Bionic chip with a 6-core CPU, a 6-core GPU, and a 16-core Neural Engine.",
      Operating_System : "The iPhone 14 runs on iOS 16, which is upgradable to iOS 17",
      Storage : "The iPhone 14 has four storage options: 128GB, 256GB, 512GB, and 1TB, while the iPhone 15 Pro has only three storage options: 128GB, 256GB, and 512GB.",
      Display : "A 6.1-inch Super Retina XDR display with HDR, True Tone, and Wide color",
      Camera : "A dual-camera system with a 12MP main camera and a 12MP ultra wide camera",
      Battery : "A long-lasting battery that supports MagSafe and Qi wireless charging, as well as USB-C fast charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662703417/Croma%20Assets/Communication/Mobiles/Images/261931_kalj3i.png?tr=w-640",
    },
    {
      title :'Apple iPhone 14 Plus',
      desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features, setting a standard for innovation and user experienc",
      Price : "75000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685965280/Croma%20Assets/Communication/Mobiles/Images/261945_3_kbefat.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685965284/Croma%20Assets/Communication/Mobiles/Images/261945_4_mgdeb3.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685965286/Croma%20Assets/Communication/Mobiles/Images/261945_5_jy9ead.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685965282/Croma%20Assets/Communication/Mobiles/Images/261945_6_so1bol.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685965287/Croma%20Assets/Communication/Mobiles/Images/261945_7_vmicsc.png?tr=w-640",
      Processor : "A powerful A15 Bionic chip with a 6-core CPU, a 6-core GPU, and a 16-core Neural Engine.",
      Operating_System : "The iPhone 14 Plus runs on iOS 16, which is upgradable to iOS 17, while the iPhone 15 Pro runs on iOS 17.",
      Storage : "The iPhone 14 has four storage options: 128GB, 256GB, 512GB, and 1TB, while the iPhone 15 Pro has only three storage options: 128GB, 256GB, and 512GB.",
      Display : "A 6.7-inch Super Retina XDR display with HDR, True Tone, and Wide color.",
      Camera : "A dual-camera system with a 12MP main camera and a 12MP ultra wide camera.",
      Battery : "A long-lasting battery that supports MagSafe and Qi wireless charging, as well as USB-C fast charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662703259/Croma%20Assets/Communication/Mobiles/Images/261945_kci7ll.png?tr=w-640",
    },
    {
      title :'Apple iPhone 14 Pro Max',
      desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features, setting a standard for innovation and user experienc",
      Price : "128000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966250/Croma%20Assets/Communication/Mobiles/Images/261976_3_ppr59z.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966249/Croma%20Assets/Communication/Mobiles/Images/261976_4_vhbbod.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966244/Croma%20Assets/Communication/Mobiles/Images/261976_5_sil0cd.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966247/Croma%20Assets/Communication/Mobiles/Images/261976_6_t9wonl.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966240/Croma%20Assets/Communication/Mobiles/Images/261976_7_acc1ef.png?tr=w-640",
      Processor : "A powerful A15 Bionic chip with a 6-core CPU, a 6-core GPU, and a 16-core Neural Engine.",
      Operating_System : "The iPhone 14 Pro Max runs on iOS 16, which is upgradable to iOS 17, while the iPhone 15 Pro runs on iOS 17.",
      Storage : "The iPhone 14 Pro Max has four storage options: 128GB, 256GB, 512GB, and 1TB, while the iPhone 15 Pro has only three storage options: 128GB, 256GB, and 512GB.",
      Display : " A 6.7-inch Super Retina XDR display with HDR, True Tone, and Wide color.",
      Camera : "A dual-camera system with a 12MP main camera and a 12MP ultra wide camera.",
      Battery : "A long-lasting battery that supports MagSafe and Qi wireless charging, as well as USB-C fast charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662655585/Croma%20Assets/Communication/Mobiles/Images/261976_j6acr4.png?tr=w-640"
    },
    {
      title :'Apple iPhone 12',
      desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features, setting a standard for innovation and user experienc",
      Price : "50000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685967582/Croma%20Assets/Communication/Mobiles/Images/229925_3_ctghk2.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685967585/Croma%20Assets/Communication/Mobiles/Images/229925_4_xgrmrj.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685967589/Croma%20Assets/Communication/Mobiles/Images/229925_5_ug12qx.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685967597/Croma%20Assets/Communication/Mobiles/Images/229925_8_qufnkw.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685967593/Croma%20Assets/Communication/Mobiles/Images/229925_6_uqnmfs.png?tr=w-640",
      Processor : "The ROG Strix Scar 15 is likely to be powered by high-performance processors, such as Intel Core i7 or i9, or AMD Ryzen processors, providing strong processing capabilities for gaming and multitasking.",
      Operating_System : "Substantial RAM options, typically ranging from 16GB to 32GB or more, to handle demanding gaming scenarios and multitasking.",
      Storage : "Fast SSD storage for quick data access and system responsiveness. Some models may also include additional HDD storage for higher capacity.",
      Display : " The ROG Strix Scar 15 is expected to have a high-refresh-rate display, possibly with options for Full HD or higher resolutions. Adaptive sync technologies may be included for smoother gaming experiences.",
      Camera : "The laptop is likely to run the Windows operating system, providing compatibility with a wide range of gaming and productivity software",
      Battery : "A variety of ports, including USB, HDMI, Ethernet, and audio jacks, to accommodate gaming peripherals and accessories.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662424588/Croma%20Assets/Communication/Mobiles/Images/229925_lhcfej.png?tr=w-640"
    },
    {
      title :'Apple iPhone 14 Pro-Gold',
      desc : "The iPhone, a pioneering device by Apple, revolutionized the smartphone industry with its sleek design, intuitive interface, and groundbreaking features, setting a standard for innovation and user experienc",
      Price : "122000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966190/Croma%20Assets/Communication/Mobiles/Images/261970_3_onwmhh.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685968256/Croma%20Assets/Communication/Mobiles/Images/230107_7_cx3rcb.png?tr=w-640https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966192/Croma%20Assets/Communication/Mobiles/Images/261970_4_fwzgki.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966195/Croma%20Assets/Communication/Mobiles/Images/261970_5_bc3jof.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966198/Croma%20Assets/Communication/Mobiles/Images/261970_6_ulumcl.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966202/Croma%20Assets/Communication/Mobiles/Images/261970_10_dghvni.png?tr=w-640",
      Processor : "The ROG Strix Scar 15 is likely to be powered by high-performance processors, such as Intel Core i7 or i9, or AMD Ryzen processors, providing strong processing capabilities for gaming and multitasking.",
      Operating_System : "Substantial RAM options, typically ranging from 16GB to 32GB or more, to handle demanding gaming scenarios and multitasking.",
      Storage : "Fast SSD storage for quick data access and system responsiveness. Some models may also include additional HDD storage for higher capacity.",
      Display : " The ROG Strix Scar 15 is expected to have a high-refresh-rate display, possibly with options for Full HD or higher resolutions. Adaptive sync technologies may be included for smoother gaming experiences.",
      Camera : "The laptop is likely to run the Windows operating system, providing compatibility with a wide range of gaming and productivity software",
      Battery : "A variety of ports, including USB, HDMI, Ethernet, and audio jacks, to accommodate gaming peripherals and accessories.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662655547/Croma%20Assets/Communication/Mobiles/Images/261970_blsyac.png?tr=w-640"
    },
    {
      title :'Samsung Galaxy S23',
      desc : "Discover a wide range of Samsung mobiles online, blending innovation and reliability to elevate your smartphone experience. Shop for the latest models with stunning displays, powerful cameras, and advanced features, all at your fingertips",
      Price : "60000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696593467/Croma%20Assets/Communication/Mobiles/Images/301866_8_jsj0hh.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697802166/Croma%20Assets/Communication/Mobiles/Images/301866_1_x9fezy.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696593468/Croma%20Assets/Communication/Mobiles/Images/301866_4_pn0ggs.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696593466/Croma%20Assets/Communication/Mobiles/Images/301866_5_cmq8vm.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696593468/Croma%20Assets/Communication/Mobiles/Images/301866_3_u1thrw.png?tr=w-640",
      Processor : "The ROG Strix Scar 15 is likely to be powered by high-performance processors, such as Intel Core i7 or i9, or AMD Ryzen processors, providing strong processing capabilities for gaming and multitasking.",
      Operating_System : "Substantial RAM options, typically ranging from 16GB to 32GB or more, to handle demanding gaming scenarios and multitasking.",
      Storage : "Fast SSD storage for quick data access and system responsiveness. Some models may also include additional HDD storage for higher capacity.",
      Display : " The ROG Strix Scar 15 is expected to have a high-refresh-rate display, possibly with options for Full HD or higher resolutions. Adaptive sync technologies may be included for smoother gaming experiences.",
      Camera : "The laptop is likely to run the Windows operating system, providing compatibility with a wide range of gaming and productivity software",
      Battery : "A variety of ports, including USB, HDMI, Ethernet, and audio jacks, to accommodate gaming peripherals and accessories.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696593467/Croma%20Assets/Communication/Mobiles/Images/301866_jfzjlc.png?tr=w-640",
    },
    {
      title :'Samsung Galaxy S23 Plus',
      desc : "Discover a wide range of Samsung mobiles online, blending innovation and reliability to elevate your smartphone experience. Shop for the latest models with stunning displays, powerful cameras, and advanced features, all at your fingertips",
      Price : "103000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675406704/Croma%20Assets/Communication/Mobiles/Images/268875_1_kbtqwv.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675609919/Croma%20Assets/Communication/Mobiles/Images/268875_5_f43upp.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675347215/Croma%20Assets/Communication/Mobiles/Images/268875_9_eyl5lc.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675406701/Croma%20Assets/Communication/Mobiles/Images/268875_2_dane3h.jpg?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675347214/Croma%20Assets/Communication/Mobiles/Images/268875_csxo0h.png?tr=w-640",
      Processor : "The ROG Strix Scar 15 is likely to be powered by high-performance processors, such as Intel Core i7 or i9, or AMD Ryzen processors, providing strong processing capabilities for gaming and multitasking.",
      Operating_System : "Substantial RAM options, typically ranging from 16GB to 32GB or more, to handle demanding gaming scenarios and multitasking.",
      Storage : "Fast SSD storage for quick data access and system responsiveness. Some models may also include additional HDD storage for higher capacity.",
      Display : " The ROG Strix Scar 15 is expected to have a high-refresh-rate display, possibly with options for Full HD or higher resolutions. Adaptive sync technologies may be included for smoother gaming experiences.",
      Camera : "The laptop is likely to run the Windows operating system, providing compatibility with a wide range of gaming and productivity software",
      Battery : "A variety of ports, including USB, HDMI, Ethernet, and audio jacks, to accommodate gaming peripherals and accessories.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675347214/Croma%20Assets/Communication/Mobiles/Images/268875_csxo0h.png?tr=w-640",
    },
    {
      title :'Apple iPhone 14 Pro-Gold',
      desc : "Discover a wide range of Samsung mobiles online, blending innovation and reliability to elevate your smartphone experience. Shop for the latest models with stunning displays, powerful cameras, and advanced features, all at your fingertips",
      Price : "122000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966190/Croma%20Assets/Communication/Mobiles/Images/261970_3_onwmhh.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685968256/Croma%20Assets/Communication/Mobiles/Images/230107_7_cx3rcb.png?tr=w-640https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966192/Croma%20Assets/Communication/Mobiles/Images/261970_4_fwzgki.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966195/Croma%20Assets/Communication/Mobiles/Images/261970_5_bc3jof.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966198/Croma%20Assets/Communication/Mobiles/Images/261970_6_ulumcl.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966202/Croma%20Assets/Communication/Mobiles/Images/261970_10_dghvni.png?tr=w-640",
      Processor : "The ROG Strix Scar 15 is likely to be powered by high-performance processors, such as Intel Core i7 or i9, or AMD Ryzen processors, providing strong processing capabilities for gaming and multitasking.",
      Operating_System : "Substantial RAM options, typically ranging from 16GB to 32GB or more, to handle demanding gaming scenarios and multitasking.",
      Storage : "Fast SSD storage for quick data access and system responsiveness. Some models may also include additional HDD storage for higher capacity.",
      Display : " The ROG Strix Scar 15 is expected to have a high-refresh-rate display, possibly with options for Full HD or higher resolutions. Adaptive sync technologies may be included for smoother gaming experiences.",
      Camera : "The laptop is likely to run the Windows operating system, providing compatibility with a wide range of gaming and productivity software",
      Battery : "A variety of ports, including USB, HDMI, Ethernet, and audio jacks, to accommodate gaming peripherals and accessories.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662655547/Croma%20Assets/Communication/Mobiles/Images/261970_blsyac.png?tr=w-640"
    },
    {
      title :'Apple iPhone 14 Pro-Gold',
      desc : "Discover a wide range of Samsung mobiles online, blending innovation and reliability to elevate your smartphone experience. Shop for the latest models with stunning displays, powerful cameras, and advanced features, all at your fingertips",
      Price : "122000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966190/Croma%20Assets/Communication/Mobiles/Images/261970_3_onwmhh.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685968256/Croma%20Assets/Communication/Mobiles/Images/230107_7_cx3rcb.png?tr=w-640https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966192/Croma%20Assets/Communication/Mobiles/Images/261970_4_fwzgki.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966195/Croma%20Assets/Communication/Mobiles/Images/261970_5_bc3jof.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966198/Croma%20Assets/Communication/Mobiles/Images/261970_6_ulumcl.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966202/Croma%20Assets/Communication/Mobiles/Images/261970_10_dghvni.png?tr=w-640",
      Processor : "The ROG Strix Scar 15 is likely to be powered by high-performance processors, such as Intel Core i7 or i9, or AMD Ryzen processors, providing strong processing capabilities for gaming and multitasking.",
      Operating_System : "Substantial RAM options, typically ranging from 16GB to 32GB or more, to handle demanding gaming scenarios and multitasking.",
      Storage : "Fast SSD storage for quick data access and system responsiveness. Some models may also include additional HDD storage for higher capacity.",
      Display : " The ROG Strix Scar 15 is expected to have a high-refresh-rate display, possibly with options for Full HD or higher resolutions. Adaptive sync technologies may be included for smoother gaming experiences.",
      Camera : "The laptop is likely to run the Windows operating system, providing compatibility with a wide range of gaming and productivity software",
      Battery : "A variety of ports, including USB, HDMI, Ethernet, and audio jacks, to accommodate gaming peripherals and accessories.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696593467/Croma%20Assets/Communication/Mobiles/Images/301866_jfzjlc.png?tr=w-640",
    },
    {
      title :'Samsung Galaxy S23 Ultra',
      desc : "Discover a wide range of Samsung mobiles online, blending innovation and reliability to elevate your smartphone experience. Shop for the latest models with stunning displays, powerful cameras, and advanced features, all at your fingertips",
      Price : "123000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675406712/Croma%20Assets/Communication/Mobiles/Images/268880_1_uhlksq.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675609922/Croma%20Assets/Communication/Mobiles/Images/268880_5_lshmcg.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675406709/Croma%20Assets/Communication/Mobiles/Images/268880_2_f9xdqh.jpg?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675347240/Croma%20Assets/Communication/Mobiles/Images/268880_10_qakbgq.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675347241/Croma%20Assets/Communication/Mobiles/Images/268880_11_ke4ryu.png?tr=w-640",
      Processor : "The Galaxy S23 Ultra is powered by a Qualcomm Snapdragon 8 Gen 2 processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "The Galaxy S23 Ultra runs on Android 13, the latest operating system from Google.",
      Storage : "The Galaxy S23 Ultra has 256GB of internal storage.",
      Display : "The Galaxy S23 Ultra has a 6.8-inch Quad HD+ AMOLED display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "The Galaxy S23 Ultra has a quad-camera setup on the rear, consisting of a 200MP primary camera, a 10MP ultra-wide camera, a 12MP telephoto camera, and a 10MP periscope camera.",
      Battery : "The Galaxy S23 Ultra has a 5000mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675347234/Croma%20Assets/Communication/Mobiles/Images/268880_vr6pxm.png?tr=w-640",
    },
    {
      title :'Samsung Galaxy S22',
      desc : "Discover a wide range of Samsung mobiles online, blending innovation and reliability to elevate your smartphone experience. Shop for the latest models with stunning displays, powerful cameras, and advanced features, all at your fingertips",
      Price : "67000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662441832/Croma%20Assets/Communication/Mobiles/Images/248896_3_voag3r.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662441837/Croma%20Assets/Communication/Mobiles/Images/248896_6_slp0ms.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662441838/Croma%20Assets/Communication/Mobiles/Images/248896_7_opefsf.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662441840/Croma%20Assets/Communication/Mobiles/Images/248896_8_kdnoef.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662441846/Croma%20Assets/Communication/Mobiles/Images/248896_19_ubcscc.png?tr=w-640",
      Processor : "Samsung Galaxy S22 is powered by a Qualcomm Snapdragon 8 Gen 1, Octa Core, 2.9 GHzprocessor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "Samsung Galaxy S22 runs on Android 13, the latest operating system from Google.",
      Storage : "Samsung Galaxy S22 has 256GB of internal storage.",
      Display : "Samsung Galaxy S22 has a 6.1 inches (15.39 cm), AMOLED, 120 Hz Refresh Rate display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "Samsung Galaxy S22 has a quad-camera setup on the rear, consisting of a 12 MP + 50 MP + 10 MP Triple Rear & 10 MP Front Camera.",
      Battery : "Samsung Galaxy S22 has a 3700 mAh with 25W Fast Charging that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662441829/Croma%20Assets/Communication/Mobiles/Images/248896_fbyfns.png?tr=w-640",
    },
    {
      title :'Samsung Galaxy Z',
      desc : "Discover a wide range of Samsung mobiles online, blending innovation and reliability to elevate your smartphone experience. Shop for the latest models with stunning displays, powerful cameras, and advanced features, all at your fingertips",
      Price : "94000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1665509966/Croma%20Assets/Communication/Mobiles/Images/260518_1_azurxq.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1660738294/Croma%20Assets/Communication/Mobiles/Images/260518_3_mcn4mw.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1665509979/Croma%20Assets/Communication/Mobiles/Images/260518_5_tkb0wq.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1660738295/Croma%20Assets/Communication/Mobiles/Images/260518_6_qb3n3c.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1665509979/Croma%20Assets/Communication/Mobiles/Images/260518_11_tinvtx.png?tr=w-640",
      Processor : "Samsung Galaxy Z is powered by a Qualcomm Snapdragon 8+ Gen 1, Octa Core, 3.18 GHz , which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "Samsung Galaxy Z runs on Android 13, the latest operating system from Google.",
      Storage : "Samsung Galaxy Z has 256GB of internal storage.",
      Display : "Samsung Galaxy Z has a 6.7 inches (17.02 cm), Dynamic AMOLED 2X, 120 Hz Refresh Rate with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "Samsung Galaxy Z has a quad-camera setup on the rear, consisting of a 12 MP + 12 MP Dual Rear & 10 MP Front Camera",
      Battery : "Samsung Galaxy Z has a 3700 mAh with Super Fast Charging battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1665509976/Croma%20Assets/Communication/Mobiles/Images/260518_0_xgeskk.png?tr=w-640",
    },
    {
      title :'SAMSUNG Galaxy Z Fold5',
      desc : "Discover a wide range of Samsung mobiles online, blending innovation and reliability to elevate your smartphone experience. Shop for the latest models with stunning displays, powerful cameras, and advanced features, all at your fingertips",
      Price : "153000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690528171/Croma%20Assets/Communication/Mobiles/Images/275452_3_lzh2ko.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690528172/Croma%20Assets/Communication/Mobiles/Images/275452_4_p3zkca.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690528171/Croma%20Assets/Communication/Mobiles/Images/275452_5_ot63go.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690528172/Croma%20Assets/Communication/Mobiles/Images/275452_7_arjfho.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690528172/Croma%20Assets/Communication/Mobiles/Images/275452_8_qq9dyp.png?tr=w-640",
      Processor : "SAMSUNG Galaxy Z Fold5 is powered by a Qualcomm Snapdragon 8 Gen 2, Octa Core, 3.36 GHz processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "SAMSUNG Galaxy Z Fold5 runs on Android 13, the latest operating system from Google.",
      Storage : "SAMSUNG Galaxy Z Fold5 has 1TB of internal storage.",
      Display : "SAMSUNG Galaxy Z Fold5 has a 7.6 inches (19.21 cm), Dynamic AMOLED 2X display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "SAMSUNG Galaxy Z Fold5 has a quad-camera setup on the rear, consisting of a 50 MP + 10 MP + 12 MP Triple Rear & 10 MP Front Camera.",
      Battery : "SAMSUNG Galaxy Z Fold5 has a 4400 mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690528172/Croma%20Assets/Communication/Mobiles/Images/275452_c3l9zl.png?tr=w-640",
    },
    {
      title :'SAMSUNG Galaxy S22 Ultra',
      desc : "Discover a wide range of Samsung mobiles online, blending innovation and reliability to elevate your smartphone experience. Shop for the latest models with stunning displays, powerful cameras, and advanced features, all at your fingertips",
      Price : "100000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662439548/Croma%20Assets/Communication/Mobiles/Images/248910_4_jmhilw.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662439550/Croma%20Assets/Communication/Mobiles/Images/248910_6_e5ifv0.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662439551/Croma%20Assets/Communication/Mobiles/Images/248910_7_rj5gc7.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662439553/Croma%20Assets/Communication/Mobiles/Images/248910_8_hfkvw7.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662439558/Croma%20Assets/Communication/Mobiles/Images/248910_10_aeufvl.png?tr=w-640",
      Processor : "SAMSUNG Galaxy S22 Ultra is powered by a Qualcomm Snapdragon 8 Gen 1, Octa Core, 2.9 GHz processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "SAMSUNG Galaxy S22 Ultra runs on Android 13, the latest operating system from Google.",
      Storage : "SAMSUNG Galaxy S22 Ultra has 256GB of internal storage.",
      Display : "SAMSUNG Galaxy S22 Ultra has a 6.8 inches (17.3 cm), AMOLED, 120 Hz Refresh Rate display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "SAMSUNG Galaxy S22 Ultra has a quad-camera setup on the rear, consisting of a 12 MP + 108 MP + 10 MP + 10 MP Quad Rear & 40 MP Front Camera.",
      Battery : "SAMSUNG Galaxy S22 Ultra has a 5000mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662439540/Croma%20Assets/Communication/Mobiles/Images/248910_le7z4e.png?tr=w-640",
    },
    {
      title :'SAMSUNG Galaxy S21',
      desc : "Discover a wide range of Samsung mobiles online, blending innovation and reliability to elevate your smartphone experience. Shop for the latest models with stunning displays, powerful cameras, and advanced features, all at your fingertips",
      Price : "41000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701615007/Croma%20Assets/Communication/Mobiles/Images/300445_3_nlezes.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701615006/Croma%20Assets/Communication/Mobiles/Images/300445_4_wsqsvz.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701615003/Croma%20Assets/Communication/Mobiles/Images/300445_5_ws1apz.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701615002/Croma%20Assets/Communication/Mobiles/Images/300445_7_gbuv87.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701615017/Croma%20Assets/Communication/Mobiles/Images/300445_1_tfyhb3.png?tr=w-640",
      Processor : "SAMSUNG Galaxy S21 is powered by a Snapdragon 888, OctaCore, 2.9GHz processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "SAMSUNG Galaxy S21 runs on Android 13, the latest operating system from Google.",
      Storage : "SAMSUNG Galaxy S21 has 256GB of internal storage.",
      Display : "SAMSUNG Galaxy S21 has a 6.4 inches (16.29 cm), Dynamic AMOLED 2X Display, 120 Hz Refresh Rate with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "SAMSUNG Galaxy S21 has a quad-camera setup on the rear, consisting of a 12.0 MP + 12.0 MP + 8.0 MP Rear Camera & 32MP Front Camera.",
      Battery : "SAMSUNG Galaxy S21 has a  4500 mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701615009/Croma%20Assets/Communication/Mobiles/Images/300445_0_sllzha.png?tr=w-640",
    },
    {
      title :'OnePlus 11 5G',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "61000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675251354/Croma%20Assets/Communication/Mobiles/Images/268759_3_jbuluv.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675845967/Croma%20Assets/Communication/Mobiles/Images/268759_4_o76urz.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675251353/Croma%20Assets/Communication/Mobiles/Images/268759_5_jghsaq.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675845958/Croma%20Assets/Communication/Mobiles/Images/268759_7_hmndnm.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675251353/Croma%20Assets/Communication/Mobiles/Images/268759_10_y9qeo5.png?tr=w-640",
      Processor : "OnePlus 11 5G is powered by a Qualcomm Snapdragon 8 Gen 2 processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "OnePlus 11 5G runs on Android 13, the latest operating system from Google.",
      Storage : "OnePlus 11 5G has 256GB of internal storage.",
      Display : "OnePlus 11 5G has a 6.7-inch AMOLED display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "OnePlus 11 5G has a quad-camera setup on the rear, 50MP  ultra-wide camera, a 12MP telephoto camera, and a 10MP periscope camera.",
      Battery : "OnePlus 11 5G has a 5000mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675251452/Croma%20Assets/Communication/Mobiles/Images/268761_ldq3nt.png?tr=w-640",
    },
    {
      title :'OnePlus 10 Pro 5G',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "103000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1666992016/Croma%20Assets/Communication/Mobiles/Images/250719_3_pgpyox.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1666992019/Croma%20Assets/Communication/Mobiles/Images/250719_4_ocrg9o.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1666992017/Croma%20Assets/Communication/Mobiles/Images/250719_5_prhzd7.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1666992020/Croma%20Assets/Communication/Mobiles/Images/250719_6_fevvup.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1666992012/Croma%20Assets/Communication/Mobiles/Images/250719_1_hjh23g.png?tr=w-640",
      Processor : "OnePlus 11 5G is powered by a Qualcomm Snapdragon 8 Gen 2 processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "OnePlus 11 5G runs on Android 12, the latest operating system from Google.",
      Storage : "OnePlus 11 5G has 256GB of internal storage.",
      Display : "OnePlus 11 5G has a 6.7-inch AMOLED display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "OnePlus 11 5G has a quad-camera setup on the rear, 50MP  ultra-wide camera, a 12MP telephoto camera, and a 10MP periscope camera.",
      Battery : "OnePlus 11 5G has a 4500mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1666992010/Croma%20Assets/Communication/Mobiles/Images/250719_t2svgl.png?tr=w-640",
    },
    {
      title :'OnePlus 10T 5G',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "39000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683553612/Croma%20Assets/Communication/Mobiles/Images/259486_3_qcmion.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683553614/Croma%20Assets/Communication/Mobiles/Images/259486_4_zsymsw.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683553615/Croma%20Assets/Communication/Mobiles/Images/259486_5_dg87vg.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683553617/Croma%20Assets/Communication/Mobiles/Images/259486_6_syr5ki.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683553598/Croma%20Assets/Communication/Mobiles/Images/259486_1_zz4nts.png?tr=w-640",
      Processor : "OnePlus 10T 5G is powered by a Qualcomm Snapdragon 8 Gen 2 processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "OnePlus 10T 5G runs on Android 11, the latest operating system from Google.",
      Storage : "OnePlus 10T 5G has 256GB of internal storage.",
      Display : "OnePlus 10T 5G has a 6.67-inch IPS LCD display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "OnePlus 10T 5G has a quad-camera setup on the rear, 64MP ultra-wide camera, a 12MP telephoto camera, and a 10MP periscope camera.",
      Battery : "OnePlus 10T 5G has a 5000mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683553576/Croma%20Assets/Communication/Mobiles/Images/259487_0_mrzk3t.png?tr=w-640",
    },
    {
      title :'OnePlus Nord CE 3 Lite 5G',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "67000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697017851/Croma%20Assets/Communication/Mobiles/Images/270656_3_nafujp.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697017846/Croma%20Assets/Communication/Mobiles/Images/270656_4_fjfnc6.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697017845/Croma%20Assets/Communication/Mobiles/Images/270656_5_awpx4t.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697017839/Croma%20Assets/Communication/Mobiles/Images/270656_7_vwanez.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697017852/Croma%20Assets/Communication/Mobiles/Images/270656_1_xfnaeo.png?tr=w-640",
      Processor : "OnePlus Nord CE 3 Lite 5G is powered by a Qualcomm Snapdragon 8 Gen 2 processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "OnePlus Nord CE 3 Lite 5G runs on Android 11, the latest operating system from Google.",
      Storage : "OnePlus Nord CE 3 Lite 5G has 256GB of internal storage.",
      Display : "OnePlus Nord CE 3 Lite 5G has a 6.43-inch AMOLED display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "OnePlus Nord CE 3 Lite 5G has a quad-camera setup on the rear, 64MP ultra-wide camera, a 12MP telephoto camera, and a 10MP periscope camera.",
      Battery : "OnePlus Nord CE 3 Lite 5G has a 5000mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697017854/Croma%20Assets/Communication/Mobiles/Images/270656_0_p6disg.png?tr=w-640",
    },
    {
      title :'OnePlus 10R 5G',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "94000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662436206/Croma%20Assets/Communication/Mobiles/Images/252418_3_na0cix.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662436206/Croma%20Assets/Communication/Mobiles/Images/252418_4_ev9psl.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662436208/Croma%20Assets/Communication/Mobiles/Images/252418_5_yas2be.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662436213/Croma%20Assets/Communication/Mobiles/Images/252418_7_oihmrh.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662436200/Croma%20Assets/Communication/Mobiles/Images/252418_1_edrhzf.png?tr=w-640",
      Processor : "OnePlus 10R 5G is powered by a Qualcomm Snapdragon 8 Gen 2 processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "OnePlus 10R 5G runs on Android 11, the latest operating system from Google.",
      Storage : "OnePlus 10R 5G has 256GB of internal storage.",
      Display : "OnePlus 10R 5G has a 6.43-inch AMOLED display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "OnePlus 10R 5G has a quad-camera setup on the rear, 50MP ultra-wide camera, a 12MP telephoto camera, and a 10MP periscope camera.",
      Battery : "OnePlus 10R 5G has a 4500mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662436197/Croma%20Assets/Communication/Mobiles/Images/252418_hz8qqi.png?tr=w-640",
    },
    {
      title :'OnePlus Nord 3 5G',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "33000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689050808/Croma%20Assets/Communication/Mobiles/Images/274675_3_ev2tlf.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689050808/Croma%20Assets/Communication/Mobiles/Images/274675_4_lxulyx.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689050808/Croma%20Assets/Communication/Mobiles/Images/274675_5_k0ifmf.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689050808/Croma%20Assets/Communication/Mobiles/Images/274675_6_gmngzb.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689230123/Croma%20Assets/Communication/Mobiles/Images/274675_1_f9qffe.png?tr=w-640",
      Processor : "OnePlus Nord 3 5G is powered by a Qualcomm Snapdragon 8 Gen 2 processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "OnePlus Nord 3 5G runs on Android 11, the latest operating system from Google.",
      Storage : "OnePlus Nord 3 5G has 256GB of internal storage.",
      Display : "OnePlus Nord 3 5G has a  6.43-inch AMOLED display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "OnePlus Nord 3 5G has a quad-camera setup on the rear, 50MP ultra-wide camera, a 12MP telephoto camera, and a 10MP periscope camera.",
      Battery : "OnePlus Nord 3 5G has a 4500mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689050760/Croma%20Assets/Communication/Mobiles/Images/274673_vmfyd3.png?tr=w-640",
    },
    {
      title :'OnePlus Nord CE3 5G',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "24000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1691050214/Croma%20Assets/Communication/Mobiles/Images/275685_3_nnbmzg.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1691050214/Croma%20Assets/Communication/Mobiles/Images/275685_4_cad3tc.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1691050214/Croma%20Assets/Communication/Mobiles/Images/275685_5_zqgbrb.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1691050215/Croma%20Assets/Communication/Mobiles/Images/275685_6_ahtdfq.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1691147431/Croma%20Assets/Communication/Mobiles/Images/275685_1_osie6z.png?tr=w-640",
      Processor : "OnePlus Nord CE3 5G is powered by a Qualcomm Snapdragon 8 Gen 2 processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "OnePlus Nord CE3 5G runs on Android 11, the latest operating system from Google.",
      Storage : "OnePlus Nord CE3 5G has 256GB of internal storage.",
      Display : "OnePlus Nord CE3 5G has a  6.43-inch AMOLED display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "OnePlus Nord CE3 5G has a quad-camera setup on the rear, 64MP ultra-wide camera, a 12MP telephoto camera, and a 10MP periscope camera.",
      Battery : "OnePlus Nord CE3 5G has a 4500mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1691050214/Croma%20Assets/Communication/Mobiles/Images/275685_iblzsb.png?tr=w-640",
    },
    {
      title :'OnePlus 11R 5G',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "44000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683562728/Croma%20Assets/Communication/Mobiles/Images/269148_3_ve93qo.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683562732/Croma%20Assets/Communication/Mobiles/Images/269148_4_lcfwmn.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683562732/Croma%20Assets/Communication/Mobiles/Images/269148_5_crrobn.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683562724/Croma%20Assets/Communication/Mobiles/Images/269148_1_mbymnt.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683562733/Croma%20Assets/Communication/Mobiles/Images/269148_7_vvj0u0.png?tr=w-640",
      Processor : "OnePlus 11R 5G is powered by a Qualcomm Snapdragon 8 Gen 2 processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "OnePlus 11R 5G runs on Android 11, the latest operating system from Google.",
      Storage : "OnePlus 11R 5G has 256GB of internal storage.",
      Display : "OnePlus 11R 5G has a  6.55-inch AMOLED display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "OnePlus 11R 5G has a quad-camera setup on the rear, 50MP ultra-wide camera, a 12MP telephoto camera, and a 10MP periscope camera.",
      Battery : "OnePlus 11R 5G has a 4500mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697625095/Croma%20Assets/Communication/Mobiles/Images/269146_ltv0e6.png?tr=w-640",
    },
    {
      title :'realme C53',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "9000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697022298/Croma%20Assets/Communication/Mobiles/Images/275240_3_mtisp3.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697022297/Croma%20Assets/Communication/Mobiles/Images/275240_4_tx5ew2.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697022293/Croma%20Assets/Communication/Mobiles/Images/275240_5_ictwgp.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697022292/Croma%20Assets/Communication/Mobiles/Images/275240_6_eqbxwd.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697022305/Croma%20Assets/Communication/Mobiles/Images/275240_1_nswvzz.png?tr=w-640",
      Processor : "The Galaxy S23 Ultra is powered by a Qualcomm Snapdragon 8 Gen 2 processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "realme C53 runs on Android 11, the latest operating system from Google.",
      Storage : "realme C53 has 256GB of internal storage.",
      Display : "6.52-inch IPS LCD display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "The Galaxy S23 Ultra has a quad-camera setup on the rear, consisting of a 200MP primary camera, a 10MP ultra-wide camera, a 12MP telephoto camera, and a 10MP periscope camera.",
      Battery : "5000mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697022306/Croma%20Assets/Communication/Mobiles/Images/275240_0_a0pebs.png?tr=w-640",
    },
    {
      title :'realme 11 5G',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "17000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1692788989/Croma%20Assets/Communication/Mobiles/Images/300113_3_hziudf.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1692788990/Croma%20Assets/Communication/Mobiles/Images/300113_4_jjldy2.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1692788988/Croma%20Assets/Communication/Mobiles/Images/300113_5_vamnfp.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1692788989/Croma%20Assets/Communication/Mobiles/Images/300113_6_lullrw.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1693467491/Croma%20Assets/Communication/Mobiles/Images/300113_1_s4vqdb.png?tr=w-640",
      Processor : "The Galaxy S23 Ultra is powered by a Qualcomm Snapdragon 8 Gen 2 processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "realme 11 5G runs on Android 11, the latest operating system from Google.",
      Storage : "realme 11 5G has 256GB of internal storage.",
      Display : "6.5-inch IPS LCD display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "The Galaxy S23 Ultra has a quad-camera setup on the rear, consisting of a 200MP primary camera, a 10MP ultra-wide camera, a 12MP telephoto camera, and a 10MP periscope camera.",
      Battery : "5000mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1692788990/Croma%20Assets/Communication/Mobiles/Images/300113_v2cqcn.png?tr=w-640",
    },
    {
      title :'realme C67 5G',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "14000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702539424/Croma%20Assets/Communication/Mobiles/Images/303221_3_k3kbr1.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702541830/Croma%20Assets/Communication/Mobiles/Images/303221_4_wn47te.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702539422/Croma%20Assets/Communication/Mobiles/Images/303221_5_osxins.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702541832/Croma%20Assets/Communication/Mobiles/Images/303221_6_mhosjj.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1704432141/Croma%20Assets/Communication/Mobiles/Images/303221_1_tgmhxd.png?tr=w-640",
      Processor : "The Galaxy S23 Ultra is powered by a Qualcomm Snapdragon 8 Gen 2 processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "realme C67 5G runs on Android 13, the latest operating system from Google.",
      Storage : "realme C67 5G has 256GB of internal storage.",
      Display : "6.72-inch IPS LCD display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "The Galaxy S23 Ultra has a quad-camera setup on the rear, consisting of a 200MP primary camera, a 10MP ultra-wide camera, a 12MP telephoto camera, and a 10MP periscope camera.",
      Battery : "5000mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702539425/Croma%20Assets/Communication/Mobiles/Images/303221_kcqf5u.png?tr=w-640",
    },
    {
      title :'realme 11 Pro Plus 5G',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "30000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1686298122/Croma%20Assets/Communication/Mobiles/Images/273454_3_x1l7vg.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1686298122/Croma%20Assets/Communication/Mobiles/Images/273454_5_pk2zr3.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1686298123/Croma%20Assets/Communication/Mobiles/Images/273454_7_zu2a7r.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1686918118/Croma%20Assets/Communication/Mobiles/Images/273454_1_obcimg.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1687255539/Croma%20Assets/Communication/Mobiles/Images/273454_2_zvp731.png?tr=w-640",
      Processor : "The Galaxy S23 Ultra is powered by a Qualcomm Snapdragon 8 Gen 2 processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "realme 11 Pro Plus 5G runs on Android 13, the latest operating system from Google.",
      Storage : "realme 11 Pro Plus 5G has 256GB of internal storage.",
      Display : " 6.55-inch AMOLED display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "The Galaxy S23 Ultra has a quad-camera setup on the rear, consisting of a 200MP primary camera, a 10MP ultra-wide camera, a 12MP telephoto camera, and a 10MP periscope camera.",
      Battery : "4500mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1686298123/Croma%20Assets/Communication/Mobiles/Images/273454_on82gs.png?tr=w-640",
    },
    {
      title :'realme C55',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "12000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689155941/Croma%20Assets/Communication/Mobiles/Images/270932_3_nrpzfh.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689155935/Croma%20Assets/Communication/Mobiles/Images/270932_4_xzojyw.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689155934/Croma%20Assets/Communication/Mobiles/Images/270932_5_fiadel.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689155936/Croma%20Assets/Communication/Mobiles/Images/270932_6_yihp06.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689155927/Croma%20Assets/Communication/Mobiles/Images/270932_1_eann1o.png?tr=w-640",
      Processor : "The Galaxy S23 Ultra is powered by a Qualcomm Snapdragon 8 Gen 2 processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "realme C55 runs on Android 11, the latest operating system from Google.",
      Storage : "realme C55 has 256GB of internal storage.",
      Display : "6.5-inch IPS LCD display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "The Galaxy S23 Ultra has a quad-camera setup on the rear, consisting of a 200MP primary camera, a 10MP ultra-wide camera, a 12MP telephoto camera, and a 10MP periscope camera.",
      Battery : "5000mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689155951/Croma%20Assets/Communication/Mobiles/Images/270932_0_swygzm.png?tr=w-640",
    },
    {
      title :'realme 9 Pro+ 5G',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "22000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662440829/Croma%20Assets/Communication/Mobiles/Images/248839_5_rb6scz.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662440832/Croma%20Assets/Communication/Mobiles/Images/248839_6_gb2vpc.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662440833/Croma%20Assets/Communication/Mobiles/Images/248839_7_w9179a.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662440839/Croma%20Assets/Communication/Mobiles/Images/248839_8_kwwpze.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662440825/Croma%20Assets/Communication/Mobiles/Images/248839_3_q5venm.png?tr=w-640",
      Processor : "The Galaxy S23 Ultra is powered by a Qualcomm Snapdragon 8 Gen 2 processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "realme 9 Pro+ 5G runs on Android 13, the latest operating system from Google.",
      Storage : "realme 9 Pro+ 5G has 256GB of internal storage.",
      Display : "6.7-inch IPS LCD display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "The Galaxy S23 Ultra has a quad-camera setup on the rear, consisting of a 200MP primary camera, a 10MP ultra-wide camera, a 12MP telephoto camera, and a 10MP periscope camera.",
      Battery : "4500mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662440823/Croma%20Assets/Communication/Mobiles/Images/248839_a4lo5i.png?tr=w-640",
    },
    {
      title :'realme C30',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "3700",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664429899/Croma%20Assets/Communication/Mobiles/Images/258552_3_kptoq7.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664429900/Croma%20Assets/Communication/Mobiles/Images/258552_4_qxullw.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664429907/Croma%20Assets/Communication/Mobiles/Images/258552_5_cypdzv.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664429903/Croma%20Assets/Communication/Mobiles/Images/258552_6_jatjjr.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664429891/Croma%20Assets/Communication/Mobiles/Images/258552_1_kahbbt.png?tr=w-640",
      Processor : "The Galaxy S23 Ultra is powered by a Qualcomm Snapdragon 8 Gen 2 processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "realme C30 runs on Android 10, the latest operating system from Google.",
      Storage : "realme C30 has 256GB of internal storage.",
      Display : "6.5-inch IPS LCD display display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "The Galaxy S23 Ultra has a quad-camera setup on the rear, consisting of a 200MP primary camera, a 10MP ultra-wide camera, a 12MP telephoto camera, and a 10MP periscope camera.",
      Battery : "6000mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1680399706/Croma%20Assets/Communication/Mobiles/Images/258552_yxtksi.png?tr=w-640",
    },
    {
      title :'realme 8i',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "6700",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662442885/Croma%20Assets/Communication/Mobiles/Images/243060_3_hqh5xw.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662442886/Croma%20Assets/Communication/Mobiles/Images/243060_4_omg2p3.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662442887/Croma%20Assets/Communication/Mobiles/Images/243060_5_tvkzgq.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662442915/Croma%20Assets/Communication/Mobiles/Images/243060_6_dca9p0.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662442870/Croma%20Assets/Communication/Mobiles/Images/243060_1_fdzqs4.png?tr=w-640",
      Processor : "The Galaxy S23 Ultra is powered by a Qualcomm Snapdragon 8 Gen 2 processor, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "realme 8i runs on Android 11, the latest operating system from Google.",
      Storage : "realme 8i has 256GB of internal storage.",
      Display : "6.6-inch IPS LCD display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "The Galaxy S23 Ultra has a quad-camera setup on the rear, consisting of a 200MP primary camera, a 10MP ultra-wide camera, a 12MP telephoto camera, and a 10MP periscope camera.",
      Battery : "5000mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662442870/Croma%20Assets/Communication/Mobiles/Images/243060_wthuve.png?tr=w-640",
    },
    {
      title :'vivo X90 5G',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "63000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689156889/Croma%20Assets/Communication/Mobiles/Images/271554_3_jp12re.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689156887/Croma%20Assets/Communication/Mobiles/Images/271554_4_j3zk5e.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689156885/Croma%20Assets/Communication/Mobiles/Images/271554_5_hxba3y.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689156886/Croma%20Assets/Communication/Mobiles/Images/271554_6_g0qzds.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689156891/Croma%20Assets/Communication/Mobiles/Images/271554_16_mf8dwf.png?tr=w-640",
      Processor : "Powered by the Qualcomm Snapdragon 8 Gen 2 processor, ensuring smooth and efficient performance.",
      Operating_System : "Vivo X90 5G runs on Android 13, the latest operating system from Google.",
      Storage : "Offers up to 256GB of internal storage, providing ample space for apps, media, and files.",
      Display : "6.78-inch AMOLED screen for vibrant and immersive visuals.",
      Camera : "50MP triple rear camera setup for high-quality and detailed photography.",
      Battery : "4810mAh battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689156881/Croma%20Assets/Communication/Mobiles/Images/271554_0_awnxq0.png?tr=w-640",
    },
    {
      title :'vivo X100 Pro 5G',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "63000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703915520/Croma%20Assets/Communication/Mobiles/Images/303562_3_ozngzl.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703915520/Croma%20Assets/Communication/Mobiles/Images/303562_4_vkrp7e.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703915535/Croma%20Assets/Communication/Mobiles/Images/303562_5_vra0zj.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703915518/Croma%20Assets/Communication/Mobiles/Images/303562_6_w3wkf3.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703915521/Croma%20Assets/Communication/Mobiles/Images/303562_7_slkmdq.png?tr=w-640",
      Processor : "MediaTek Dimensity 9300 processor ensures efficient performance.",
      Operating_System : "vivo X100 Pro 5G runs on Android 14, the latest operating system from Google.",
      Storage : " Offers up to 16GB of RAM and a spacious 1TB of storage.",
      Display : " 6.67-inch AMOLED screen for stunning visuals.",
      Camera : "50MP triple rear camera setup for exceptional photography.",
      Battery : "Vivo X100 Pro 5G 5000mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703916591/Croma%20Assets/Communication/Mobiles/Images/303577_mwvz6y.png?tr=w-640",
    },
    {
      title :'vivo T2 5G',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "11000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697626163/Croma%20Assets/Communication/Mobiles/Images/271393_3_u55wn1.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697626190/Croma%20Assets/Communication/Mobiles/Images/271393_4_c2hebk.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697626187/Croma%20Assets/Communication/Mobiles/Images/271393_6_j2y51d.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697626186/Croma%20Assets/Communication/Mobiles/Images/271393_7_o1us73.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697626178/Croma%20Assets/Communication/Mobiles/Images/271393_10_j4u6mb.png?tr=w-640",
      Processor : "Powered by the Qualcomm Snapdragon 888 for high-end performance.",
      Operating_System : "Vivo T2 5G runs on Android 13, the latest operating system from Google.",
      Storage : " vivo T2 5G has 256GB of internal storage.",
      Display : "6.78-inch AMOLED display for vivid and immersive viewing.",
      Camera : "64MP dual rear camera setup captures detailed and vibrant images.",
      Battery : "4500mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697626196/Croma%20Assets/Communication/Mobiles/Images/271393_cnwf06.png?tr=w-640",
    },
    {
      title :'vivo Y17s',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "11000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696857485/Croma%20Assets/Communication/Mobiles/Images/300731_8_t0pmdk.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696857484/Croma%20Assets/Communication/Mobiles/Images/300731_7_wmc94s.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696857483/Croma%20Assets/Communication/Mobiles/Images/300731_5_z7x3qk.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696857487/Croma%20Assets/Communication/Mobiles/Images/300731_6_strntp.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697789276/Croma%20Assets/Communication/Mobiles/Images/300731_1_x0t60s.png?tr=w-640",
      Processor : "Qualcomm Snapdragon 690 processor ensures smooth multitasking, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "Vivo X90 5G runs on Android 13, the latest operating system from Google.",
      Storage : "vivo Y17s has 256GB of internal storage.",
      Display : "6.44-inch AMOLED display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "50MP triple rear camera setup for versatile photography.",
      Battery : "The Galaxy S23 Ultra has a 5000mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696858536/Croma%20Assets/Communication/Mobiles/Images/300739_ojb7u8.png?tr=w-640",
    },
    {
      title :'vivo Y02T',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "8000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689153391/Croma%20Assets/Communication/Mobiles/Images/273473_9_htjdm3.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689153395/Croma%20Assets/Communication/Mobiles/Images/273473_7_huulki.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689153389/Croma%20Assets/Communication/Mobiles/Images/273473_11_gqm0er.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689153394/Croma%20Assets/Communication/Mobiles/Images/273473_0_gkauyu.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689153386/Croma%20Assets/Communication/Mobiles/Images/273473_1_snzlvq.png?tr=w-640",
      Processor : "Qualcomm Snapdragon 460 processor for reliable performance, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "Vivo Y02T runs on Android 11, the latest operating system from Google.",
      Storage : "vivo Y02T has 256GB of internal storage.",
      Display : "6.5-inch IPS LCD display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "13MP dual rear camera setup for everyday photography.",
      Battery : "5000mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689153394/Croma%20Assets/Communication/Mobiles/Images/273473_0_gkauyu.png?tr=w-640",
    },
    {
      title :'vivo V29e 5G',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "18000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703081489/Croma%20Assets/Communication/Mobiles/Images/300158_10_cvsw7h.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703081485/Croma%20Assets/Communication/Mobiles/Images/300158_7_ulvyt5.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703081492/Croma%20Assets/Communication/Mobiles/Images/300158_5_jvxohj.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703081494/Croma%20Assets/Communication/Mobiles/Images/300158_6_fb6jeg.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703081484/Croma%20Assets/Communication/Mobiles/Images/300158_1_hgn3ci.png?tr=w-640",
      Processor : "Qualcomm Snapdragon 778G processor ensures smooth performance, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "Vivo V29e 5G runs on Android 13, the latest operating system from Google.",
      Storage : "vivo V29e 5G has 256GB of internal storage.",
      Display : "6.44-inch AMOLED display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "64MP triple rear camera setup for high-quality photography.",
      Battery : "4500mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703081487/Croma%20Assets/Communication/Mobiles/Images/300158_0_w2xugk.png?tr=w-640",
    },
    {
      title :'vivo V29 5G',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "32000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696435841/Croma%20Assets/Communication/Mobiles/Images/301419_3_qzbzoy.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696435843/Croma%20Assets/Communication/Mobiles/Images/301419_4_gvez2x.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696435842/Croma%20Assets/Communication/Mobiles/Images/301419_5_mgg37m.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696435843/Croma%20Assets/Communication/Mobiles/Images/301419_6_lhw0ys.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696435845/Croma%20Assets/Communication/Mobiles/Images/301419_8_lkf2mg.png?tr=w-640",
      Processor : "MediaTek Dimensity 900 processor for efficient performance, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "Vivo V29 5G runs on Android 13, the latest operating system from Google.",
      Storage : " vivo V29 5G has 256GB of internal storage.",
      Display : "6.58-inch IPS LCD display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "50MP triple rear camera setup for versatile photography.",
      Battery : "4500mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696435835/Croma%20Assets/Communication/Mobiles/Images/301419_ov7h5n.png?tr=w-640",
    },
    {
      title :'vivo Y100A 5G',
      desc : "Elevate your smartphone game with OnePlus mobiles, offering a seamless online shopping experience for top-tier performance, sleek design, and advanced technology. Explore the latest models to enjoy flagship-level features and a premium user experience.",
      Price : "20000",
      pic1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689152467/Croma%20Assets/Communication/Mobiles/Images/271389_15_nxfyk9.png?tr=w-640",
      pic2 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689152465/Croma%20Assets/Communication/Mobiles/Images/271389_5_ps3zyy.png?tr=w-640",
      pic3 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689152464/Croma%20Assets/Communication/Mobiles/Images/271389_1_yixf4x.png?tr=w-640",
      pic4 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689152461/Croma%20Assets/Communication/Mobiles/Images/271389_2_uge8cy.png?tr=w-640",
      pic5 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689152469/Croma%20Assets/Communication/Mobiles/Images/271389_0_rojdud.png?tr=w-640",
      Processor : "MediaTek Helio G35 processor for reliable performance, which provides fast performance and enables quick gaming and video streaming",
      Operating_System : "Vivo Y100A 5G runs on Android 13, the latest operating system from Google.",
      Storage : " vivo Y100A 5G has 256GB of internal storage.",
      Display : "6.51-inch IPS LCD display with a resolution of 3200 x 1440 pixels. The display has a high refresh rate of 165Hz and is protected by Corning Gorilla Glass Victus",
      Camera : "13MP dual rear camera setup for everyday photography.",
      Battery : "5000mAh lithium-ion battery that supports fast charging and wireless charging.",
      imageUrl : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689152469/Croma%20Assets/Communication/Mobiles/Images/271389_0_rojdud.png?tr=w-640",
    },
  ]
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/SriStore">
            {" "}
            <Home />
          </Route>
          <Route exact path="/Mobile">
            {" "}
            <Mobiles />
          </Route>
          <Route exact path="/Laptops">
            {" "}
            <Laptops />
          </Route>
          <Route exact path="/KitchenProduct">
            {" "}
            <KitchenProduct />
          </Route>

          {KitchenItem.map((KItems, index) => (
            <Route exact path={`/${KItems.title}`} key={index}>
              <KitchenSingle
                title={KItems.title}
                description={KItems.description}
                gif={KItems.gif}
                img1={KItems.img1}
                img2={KItems.img2}
                img3={KItems.img3}
                img4={KItems.img4}
                img5={KItems.img5}
                adv1={KItems.adv1}
                adv2={KItems.adv2}
                adv3={KItems.adv3}
                adv4={KItems.adv4}
                Price={KItems.Price}
              />
            </Route>
          ))}
          <Route exact path="/MenFashionItems">
            <MenFashion />
          </Route>
          <Route exact path="/WomenFashionItems">
            <WomenFashion />
          </Route>
          <Route exact path="/MenSingleItems">
            <MenSingleProduct />
          </Route>
          <Route exact path="/WomenSingleProduct">
            <WomenSingleProduct />
          </Route>
          <Route exact path="/AddItem">
            <AddCart />
          </Route>
          <Route exact path="/KidItems">
            <KidItems />
          </Route>
          <Route exact path="/MenProduct">
            <MenAllCards />
          </Route>
          <Route exact path="/WomenProduct">
            <WomenAllCards />
          </Route>
          <Route exact path="/KidsProduct">
            <KidsAllCards />
          </Route>
          {ProductInfo.map((PItems, index) => (
            <Route exact path={`/${PItems.title}`} key={index}>
              <ProductMain
                title={PItems.title}
                desc={PItems.desc}
                imageUrl={PItems.imageUrl}
                Price={PItems.Price}
              />
            </Route>
          ))}
          <Route exact path="/DellLapTopsList"><LaptopCards/></Route>
          <Route exact path="/MacLapTopsList"><MacList/></Route>
          <Route exact path="/HPLapTopsList"><HPList/></Route>
          <Route exact path="/ROGLapTopsList"><RogList/></Route>
          <Route exact path="/LenovoLapTopsList"><LenovoList/></Route>
          <Route exact path="/LaptopDetails"><LaptopDetails/></Route>
          {LaptopItems.map((LaptopItems, index) => (
            <Route exact path={`/${LaptopItems.title}`} key={index}>
              <AllLaptopList
                title={LaptopItems.title}
                desc={LaptopItems.desc}
                Price={LaptopItems.Price}
                pic1={LaptopItems.pic1}
                pic2={LaptopItems.pic2}
                pic3={LaptopItems.pic3}
                pic4={LaptopItems.pic4}
                pic5={LaptopItems.pic5}
                Processor={LaptopItems.Processor}
                Memory={LaptopItems.Memory}
                Display={LaptopItems.Display}
                Storage={LaptopItems.Storage}
                Operating_System={LaptopItems.Operating_System}
                Connectivity={LaptopItems.Connectivity}
                imageUrl={LaptopItems.imageUrl}
              />
            </Route>
          ))}
          <Route exact path="/IPhones"><AppleMobiles/></Route>
          {MobileItems.map((MobileItems, index) => (
            <Route exact path={`/${MobileItems.title}`} key={index}>
              <AllMobiles
                title={MobileItems.title}
                desc={MobileItems.desc}
                Price={MobileItems.Price}
                pic1={MobileItems.pic1}
                pic2={MobileItems.pic2}
                pic3={MobileItems.pic3}
                pic4={MobileItems.pic4}
                pic5={MobileItems.pic5}
                Processor={MobileItems.Processor}
                Operating_System={MobileItems.Operating_System}
                Display={MobileItems.Display}
                Storage={MobileItems.Storage}
                Camera={MobileItems.Camera}
                Battery={MobileItems.Battery}
                imageUrl={MobileItems.imageUrl}
              />
            </Route>
          ))}
          <Route exact path="/SamsungPhones"><SamsungMobiles/></Route>
          <Route exact path="/OnePlusPhones"><OnePlusMobiles/></Route>
          <Route exact path="/RealMePhones"><ROGMobiles/></Route>
          <Route exact path="/GooglePixel"><GooglePixel/></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
