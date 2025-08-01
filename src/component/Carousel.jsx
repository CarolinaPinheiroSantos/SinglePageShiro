import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import computer1 from '../assets/labelGenerator.png';
import computer2 from '../assets/rolePicker.png';
import computer3 from '../assets/ranking.png';
import computer4 from '../assets/feedback.png';
import computer5 from '../assets/groupManagement.png';

import screen1 from '../assets/labelGeneratorScreen.png';
import screen2 from '../assets/rolePickerScreen.png';
import screen3 from '../assets/rankingScreen.png';
import screen4 from '../assets/feedbackScreen.png';
import screen5 from '../assets/groupManagementScreen.png';

import mascote2 from '../assets/shiro2.png';
import { Autoplay, Pagination } from 'swiper/modules';

function Carousel() {
  const slides = [
    {
      title: 'GERADOR DE ETIQUETAS',
      mobileImg: screen1,
      desktopImg: computer1,
    },
    {
      title: 'SORTEADOR DE FUNÇÕES',
      mobileImg: screen2,
      desktopImg: computer2,
    },
    {
      title: 'RANKING DE NOTAS',
      mobileImg: screen3,
      desktopImg: computer3,
    },
    {
      title: 'CONTROLE DE FEEDBACKS',
      mobileImg: screen4,
      desktopImg: computer4,
    },
    {
      title: 'GERENCIAMENTO',
      mobileImg: screen5,
      desktopImg: computer5,
    },
  ];

  return (
    <div className="w-full lg:h-screen bg-white font-sans px-4 py-10">
      
      {/* ===== Desktop Original ===== */}
      <div className="hidden lg:block w-full h-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper lg:w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-between items-center w-full h-full px-4 py-4"
            >
              <h1 className="text-[1.50rem] lg:text-[4rem] lg:pb-4 bg-blueGradient bg-clip-text text-transparent font-extrabold px-3 pb-3 text-center">
                {slide.title}
              </h1>
              <img
                src={slide.desktopImg}
                className="w-full h-[90%] object-contain p-6 flex-1"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ===== Mobile / Tablet com Mascote Sobreposto ===== */}
      <div className="block lg:hidden relative w-full h-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-between items-center w-full h-full px-4 py-4"
            >
              <h1 className="text-[1.50rem] bg-blueGradient bg-clip-text text-transparent font-extrabold px-3 pb-3 text-center">
                {slide.title}
              </h1>
              <img
                src={slide.mobileImg}
                className="w-full object-contain flex-1"
              />
            </SwiperSlide>
          ))}

                  <img
          src={mascote2}
          alt="Mascote"
          className="
            block sm:hidden
            absolute top-40 left-[20rem]
            w-20 sm:w-28 md:w-36
            drop-shadow-xl
            pointer-events-none
            z-10
          "
        />
        </Swiper>

      </div>
    </div>
  );
}

export default Carousel;
