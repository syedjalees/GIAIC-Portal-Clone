"use client"
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.module.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='w-[100%] h-[600px] flex justify-center gap-2 px-10 '>
            <Image src="/images/slide1.jpg" alt='slide1' width={550} height={100} className='rounded-lg w-full overflow-hidden object-cover' />
            <Image src="/images/slide2.jpg" alt='slide1' width={550} height={100} className='rounded-lg w-full overflow-hidden object-cover'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[100%] h-[600px] flex justify-center gap-2 px-10 '>
            <Image src="/images/slide3.jpg" alt='slide2' width={550} height={100} className='rounded-lg w-full overflow-hidden object-cover' />
            <Image src="/images/slide4.jpg" alt='slide2' width={550} height={100} className='rounded-lg w-full overflow-hidden object-cover'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[100%] h-[600px] flex justify-center gap-2 px-10 '>
            <Image src="/images/slide5.jpg" alt='slide3' width={550} height={100} className='rounded-lg w-full overflow-hidden object-cover' />
            <Image src="/images/slide6.jpg" alt='slide3' width={550} height={100} className='rounded-lg w-full overflow-hidden object-cover'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[100%] h-[600px] flex justify-center gap-2 px-10 '>
            <Image src="/images/slide7.jpg" alt='slide4' width={550} height={100} className='rounded-lg w-full overflow-hidden object-cover' />
            <Image src="/images/slide8.jpg" alt='slide4' width={550} height={100} className='rounded-lg w-full overflow-hidden object-cover'/>
            </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
