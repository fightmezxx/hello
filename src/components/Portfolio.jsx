import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation'; // Import navigation styles
import { EffectCoverflow,FreeMode, Pagination, Navigation } from 'swiper/modules';
import { RxArrowLeft } from 'react-icons/rx';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { ServiceData } from '../constants';
import 'swiper/swiper-bundle.css'; // Import the swiper bundle CSS

const Portfolio = () => {
  const swiperRef = useRef(null);
  const initialSlideIndex = 3; // Index of the third slide (zero-based)

  useEffect(() => {
    // Update the button positions when the window is resized
    const handleResize = () => {
      if (swiperRef.current) {
        const swiperContainerWidth = swiperRef.current.clientWidth;
        const slidesPerView = swiperRef.current.swiper.params.slidesPerView;
        const spaceBetween = swiperRef.current.swiper.params.spaceBetween;

        const buttonWidth = 40; // Adjust this value based on the button's width
        const offset = (swiperContainerWidth - slidesPerView * (buttonWidth + spaceBetween)) / 2;

        document.getElementById('custom-swiper-button-next').style.right = `${offset}px`;
        document.getElementById('custom-swiper-button-prev').style.left = `${offset}px`;
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  return (
    <div className='flex items-center justify-center flex-col h-screen bg-black relative'>
    {/* Back arrow in the top-left corner */}
    <div className="absolute top-4 left-4 text-white cursor-pointer" onClick={() => console.log('Go back')}>
      {/* You can replace the icon with your preferred back arrow icon */}
      <RxArrowLeft size={50} />
    </div>
  
    {/* Gray thick horizontal line at the top center */}
    <hr className="w-1/3 my-4 border-gray-500 border-t-4 absolute top-0 left-1/2 transform -translate-x-1/2" />

  
    <div className="text-white text-3xl font-bold mt-8 mb-4">공장</div>
      <Swiper
        initialSlide={initialSlideIndex}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 50,
            centeredSlides: true, // Center the slides
            centeredSlidesBounds: true, // Make sure the initial slide is fully in view
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 150,
            centeredSlides: true,
            centeredSlidesBounds: true,
          },
        }}
        freeMode={true}
        loop={true} // Enable infinite loop
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          },
        }}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}

        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 60,
          modifier: 1,
          slideShadows: true,
        }}

        modules={[EffectCoverflow,FreeMode, Pagination, Navigation]}
        className='max-w-[90%] lg:max-w-[80%] mx-auto'
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className='flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] lg:h-[300px]'>
              <div
                className='absolute inset-0 bg-cover bg-center rounded-xl'
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50' />
              <div className='relative'>{/* Additional content for the slide */}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Apply custom styles to the navigation arrows outside the Swiper component */}
      <div className='custom-swiper-button-next' style={{ color: 'white', position: 'absolute', right: '5%' }}>
        <FaChevronCircleRight size={40} color='white' />
      </div>
      <div className='custom-swiper-button-prev' style={{ color: 'white', position: 'absolute', left: '5%' }}>
        <FaChevronCircleLeft size={40} color='white' />
      </div>
    </div>
  );
};

export default Portfolio;
