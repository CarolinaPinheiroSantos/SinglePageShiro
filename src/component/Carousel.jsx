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
    <div className="w-full lg:h-screen bg-white text-white font-sans px-4 py-10">
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
        className="mySwiper h-[30rem] lg:w-full h-full"
      >
        <SwiperSlide className="flex flex-col justify-between items-center w-full h-full px-4 py-6">
          <h1 className="text-2xl mx-[4rem] md:text-4xl lg:text-[4rem] lg:pb-4 bg-blueGradient bg-clip-text text-transparent font-extrabold px-3 text-center">
            GERADOR DE ETIQUETAS
          </h1>
          <img src={screen1} className="block w-full h-[90%] object-contain p-6 flex-1" />
        </SwiperSlide>

        <SwiperSlide className="flex flex-col justify-between items-center w-full h-full px-4 py-6">
          <h1 className="text-2xl mx-[4rem] md:text-4xl lg:text-[4rem] lg:pb-4 bg-blueGradient bg-clip-text text-transparent font-extrabold px-3 text-center sm:font-extrabold">
            SORTEADOR DE FUNÇÕES
          </h1>
          <img src={screen2} className="block w-full h-[90%] object-contain p-6 flex-1" />
        </SwiperSlide>

        <SwiperSlide className="flex flex-col justify-between items-center w-full h-full px-4 py-6">
          <h1 className="text-2xl mx-[2rem] md:text-4xl lg:text-[4rem] lg:pb-4 bg-blueGradient bg-clip-text text-transparent font-extrabold px-3 text-center">
            RANKING DE NOTAS POR TURMA
          </h1>
          <img src={screen3} className="block w-full h-[90%] object-contain p-6 flex-1" />
        </SwiperSlide>

        <SwiperSlide className="flex flex-col justify-between items-center w-full h-full px-4 py-6">
          <h1 className="text-2xl mx-[3rem] md:text-4xl lg:text-[4rem] lg:pb-4 bg-blueGradient bg-clip-text text-transparent font-extrabold px-3 text-center">
            CONTROLE DE FEEDBACKS
          </h1>
          <img src={screen4} className="block w-full h-[90%] object-contain p-6 flex-1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
