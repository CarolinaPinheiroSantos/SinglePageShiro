import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import screen1 from '../assets/labelGenerator.png';
import screen2 from '../assets/rolePicker.png';
import screen3 from '../assets/ranking.png';
import screen4 from '../assets/feedback.png';
import { EffectCoverflow, Pagination } from 'swiper/modules';

function Carousel() {
  return (
    <div className="h-full bg-white text-white font-sans">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="w-full py-12"
      >

        <SwiperSlide className="bg-center bg-cover w-[300px] h-[350px] flex flex-col items-center">
            
            <img src={screen1} className="block w-full h-[300px] object-cover p-6" />
            <h1 className="text-4xl text-darkBlue font-extrabold px-3 text-center">Gerador de etiquetas</h1>
        </SwiperSlide>

        <SwiperSlide className="bg-center bg-cover w-[300px] h-[350px] flex flex-col items-center">
            <h1 className="text-4xl text-darkBlue font-extrabold px-3 text-center">Sorteador de funções</h1>
            <img src={screen2} className="block w-full h-[300px] object-cover p-6"/>
        </SwiperSlide>

        <SwiperSlide className="bg-center bg-cover w-[300px] h-[350px] flex flex-col items-center">
            
            <img src={screen3} className="block w-full h-[300px] object-cover p-6"/>
            <h1 className="text-4xl text-darkBlue font-extrabold px-3 text-center">Ranking de notas</h1>
        </SwiperSlide>

        <SwiperSlide className="bg-center bg-cover w-[300px] h-[350px] flex flex-col items-center">
            <h1 className="text-4xl text-darkBlue font-extrabold px-3 text-center">Acopanhamento de feedbacks</h1>
            <img src={screen4} className="block w-full h-[300px] object-cover p-6"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
