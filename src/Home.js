import React from 'react';
import'./Home.css';
import Product from "./Product";



function Home() {
 
  return (
    <div className='Home'>
    <div className="home__container">
        <img className="home_image" alt=""
        src={require('./homejpeg.jpg')}/>


    </div>
    <div className="home_row">
        <Product
        id="123"
        title="Specialized Enduro"
        info="Full suspension carbon frame with Shimano SLX brake system and Shimano XT groupset"
        price={112000}
        image='https://cdn.shopify.com/s/files/1/0261/1553/8998/products/93619-50_END_COMP-27_1600x900.jpg?v=1608027386'
        rating={5}/>

        <Product
        id="1234"
        title="Specialized Stumpjumper EVO"
        info="Full sus carbon with FOX air-sus fork, 100km range."
        price={450000}
        rating={4}
        image="https://cdn.shopify.com/s/files/1/0904/4132/files/21-stumpy-evo.jpg?v=1602001380"
        />

        <Product
        id="12345"
        title="Specalized Status"
        info="Carbon Frame, All terrain capability, Deore XT groupset, Shimano SLX brakes"
        price={120000}
        rating={4}
        image="https://cdn.shopify.com/s/files/1/0904/4132/files/status-bp.jpg?v=1654556276" 
        />

      

        {/*for the product panes 3 products*/}
        
    </div>

    <div className="home_row">
    
    <Product
    id="123456"
    title="Shimano Deore"
    info="32-54 cogs, 12 speed, micro spline, hollow tech"
    price={35000}
    image="https://s2.bukalapak.com/img/2023014412/w-1000/10273682151018527060_scaled.jpg"/>

    <Product
    id="1234567"
    title='Shimano SLX'
    info="30-54 cogs, 12 speed, hollow tech, micro spline, easy shifting"
    price={45000}
    image="https://www.bikebargains.co.uk/wp-content/uploads/2019/11/shimano-slx-m7000-11-speed-single-mountain-bike-groupset.jpg"
    />

    <Product
    id="1234567"
    title='Maxxis Ikon'
    info="29er all terrain, tubeless ready (TR), cornering knobs, for enduro and XTR racing "
    price={2500}
    image="https://sc04.alicdn.com/kf/H6055e9682d3242d7a0eb9316c9091b73e.jpg"

    />
    </div>
    <div className="home_row">
    <Product
    id="12345678"
    title="SAGMIT EVO3"
    info="29er, 32 holes, Tubeless Ready, Alloy Rims"
    price={1200}
    image="https://ph-test-11.slatic.net/p/074f90c7acdac93f38f00afd93558456.jpg"
    />
    <Product
    id="123456789"
    title="Fox Racing Shox"
    info="29er, Air suspension, 130mm travel, rebound dampener"
    price={36000}
    image="https://www.maciag-offroad.de/shop/artikelbilder/normal/136360/fox-racing-shox-federgabel-suspension-fork-38-float-factory-e-bike-1.jpg"
    />
    
    <Product
    id="12345678910"
    title="MountainPeak Everest"
    info="29er (M), tapered head tube"
    price={9000}
    image="https://ph-test-11.slatic.net/p/2436bd1e118f83df1266115db9028d29.jpg"
    />
    
      
    </div>

    <div className='home_row'>
    <Product
    id="1111"
    title="Weapon Predator6000 Carbon"
    info="Carbon 7000 Frame Super Light Weight, 27.5, 9mm QR axle"
    price={15500}
    image="http://stan13bike.com/uploads/product/5dc236a43cfd7.jpg"

    />

    <Product
    id="1234567891011"
    title="Spank Spoon 800"
    info="800mm,c: 31.8-35mm, r:20-75mm"
    price={6000}
    image="https://cdn.shopify.com/s/files/1/2363/5997/products/SPANK_SPOON_Bar_BLACK_1800x1800.jpg?v=1598928593"
    
    />

    <Product
    id=""
    title=""
    info=""
    price=""
    image=""

    />

    </div>



    </div>
  );
}

export default Home