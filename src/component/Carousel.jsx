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
  const slides = [
    {
      title: 'GERADOR DE ETIQUETAS',
      image: screen1,
    },
    {
      title: 'SORTEADOR DE FUNÇÕES',
      image: screen2,
    },
    {
      title: 'RANKING DE NOTAS',
      image: screen3,
    },
    {
      title: 'CONTROLE DE FEEDBACKS',
      image: screen4,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-white font-sans px-4 py-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col justify-between items-center w-full  px-4 py-6"
          >
            {/* Título no topo */}
            <h1 className="text-2xl md:text-4xl lg:text-[4rem] bg-blueGradient bg-clip-text text-transparent font-extrabold px-3 text-center flex items-center justify-center">
              {slide.title}
            </h1>

            <div className="flex-grow" />

            {/* Imagem fixa no fim */}
            <div className="w-full flex justify-center mt-auto">
              <img
                src={slide.image}
                alt={`slide-${index}`}
                className="w-full max-w-[500px] object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
