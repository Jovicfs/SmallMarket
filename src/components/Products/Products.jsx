import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Products.css';

export default function Products() {
  const [products] = useState([
    { id: 1, name: 'product-name', image: 'url', price: 'price', description: 'description' },
    { id: 2, name: 'product-name', image: 'url', price: 'price', description: 'description' },
    { id: 3, name: 'product-name', image: 'url', price: 'price', description: 'description' },
    { id: 4, name: 'product-name', image: 'url', price: 'price', description: 'description' },
    { id: 5, name: 'product-name', image: 'url', price: 'price', description: 'description' },
    { id: 6, name: 'product-name', image: 'url', price: 'price', description: 'description' },
    { id: 7, name: 'product-name', image: 'url', price: 'price', description: 'description' },
    { id: 8, name: 'product-name', image: 'url', price: 'price', description: 'description' },
    { id: 9, name: 'product-name', image: 'url', price: 'price', description: 'description' },
    { id: 10, name: 'product-name', image: 'url', price: 'price', description: 'description' }
  ]);

  const swiperRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setSlidesPerView(1);
      } else if (width <= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(6);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set the right values on load

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="Pcontainer">
      <Swiper
        ref={swiperRef}
        style={{
          "--swiper-pagination-color": "blue",
          "padding": "25px 0",
          "--swiper-pagination-bullet-horizontal-gap": "3px"
        }}
        className="swiper-container"
        slidesPerView={slidesPerView}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
              <img src={product.image} alt={product.name} />
              <h3 className="product-title">{product.name}</h3>
              <span id="price" className="productPrice">
                {product.price}
              </span>
              <p className="product-description">{product.description}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev" onClick={prevSlide}></div>
        <div className="swiper-button-next" onClick={nextSlide}></div>
      </Swiper>
    </div>
  );
}
