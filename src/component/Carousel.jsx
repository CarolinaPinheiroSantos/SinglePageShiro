import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import screen1 from '../assets/labelGenerator.png';
import screen2 from '../assets/rolePicker.png';
import screen3 from '../assets/ranking.png';
import screen4 from '../assets/feedback.png';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Carousel() {
  return (
    <div className="h-full bg-white text-white font-sans">
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

        <SwiperSlide className="bg-center bg-cover w-[300px] h-[350px] flex flex-col items-center">
            <h1 className="text-4xl text-darkBlue font-extrabold px-3 text-center">Gerador de etiquetas</h1>
            <img src={screen1} className="block w-full h-[300px] object-cover p-6" />
        </SwiperSlide>

        <SwiperSlide className="bg-center bg-cover w-[300px] h-[350px] flex flex-col items-center">
            <h1 className="text-4xl text-darkBlue font-extrabold px-3 text-center">Sorteador de funções</h1>
            <img src={screen2} className="block w-full h-[300px] object-cover p-6"/>
        </SwiperSlide>

        <SwiperSlide className="bg-center bg-cover w-[300px] h-[350px] flex flex-col items-center">
            <h1 className="text-4xl text-darkBlue font-extrabold px-3 text-center">Ranking de notas</h1>
            <img src={screen3} className="block w-full h-[300px] object-cover p-6"/>
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
