import {useState,useRef} from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import './Products.css';

export default function Products(){
    
  
     const  [products] = useState([
        { id: 1, name: 'product-name', image:'url'},
        { id: 2, name: 'product-name', image:'url'},
        { id: 3, name: 'product-name', image:'url'},
        { id: 4, name: 'product-name', image:'url'},
        { id: 5, name: 'product-name', image:'url'},
        { id: 6, name: 'product-name', image:'url'},
        { id: 7, name: 'product-name', image:'url'},
        { id: 8, name: 'product-name', image:'url'}
     ]);

      const swiperRef = useRef(null);

      const nextSlide = ()=>{
        if(swiperRef.current){
            swiperRef.current.swiper.nextSlide();
        }
      };

      const prevSlide = () =>{
        if(swiperRef.current){
            swiperRef.current.swiper.prevSlide();
        }
      };
    
    return(
        <div className="Pcontainer" >
            <Swiper style={
              {"--swiper-pagination-color": "black","padding": "20px",
              "--swiper-pagination-bullet-horizontal-gap": 
              "4px" 
              }
            } className='swiper-container'
             slidesPerView = {6}
             pagination = {{clickable: true}}
             autoplay={{
              delay: 7000,
              disableOnInteraction: false
          }}
             loop = {true}
             navigation =
             {{
               nextEl:'.swiper-button-next',
               prevEl: '.swiper-button-prev' 
             }}
             >
             {products.map((product)=>(
                <SwiperSlide  key={product.productId}>
                    <div className="product-card">
                    <img src={products.image} alt={products.name} />
                    <h3 className='product-title'>Prod</h3>
                    <br />
                    <span id='price' className='productPrice'>price</span>
                    <p className='product-description'>lorem</p>
                    </div>
                    
                </SwiperSlide>
                   ))}
                     <button id='button' className='swiper-button-prev' onClick={prevSlide}></button>
                     <button  id= 'button' className='swiper-button-next' onClick={nextSlide}></button>
           </Swiper>
        </div>
    )
}

