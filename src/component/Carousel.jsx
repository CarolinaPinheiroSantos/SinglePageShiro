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

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Carousel() {
  return (
    <div className="w-full lg:h-screen bg-white text-white font-sans px-4 py-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true} // 🔹 Volta para o início quando chega no final
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-[30rem] lg:w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide className="flex flex-col justify-between items-center w-full h-full px-4 py-4">
          <h1 className="text-[1.50rem] lg:text-[4rem] lg:pb-4 bg-blueGradient bg-clip-text text-transparent font-extrabold px-3 pb-3 text-center">
            GERADOR DE ETIQUETAS
          </h1>

          {/* Mobile */}
          <img src={screen1} className="block md:m-0px md:hidden w-full h-[90%] object-contain flex-1" />

          {/* Tablet e Desktop */}
          <img src={computer1} className="hidden md:block w-full h-[90%] object-contain p-6 flex-1" />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="flex flex-col justify-between items-center w-full h-full px-4 py-6">
          <h1 className="text-[1.50rem] lg:text-[4rem] lg:pb-4 bg-blueGradient bg-clip-text text-transparent font-extrabold px-2 pb-3 text-center">
            SORTEADOR DE FUNÇÕES
          </h1>

          <img src={screen2} className="block md:m-0px md:hidden w-full h-[90%] object-contain flex-1" />
          <img src={computer2} className="hidden md:block w-full h-[90%] object-contain p-6 flex-1" />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="flex flex-col justify-between items-center w-full h-full px-4 py-6">
          <h1 className="text-[1.50rem] lg:text-[4rem] lg:pb-4 bg-blueGradient bg-clip-text text-transparent font-extrabold px-3 pb-3 text-center">
            RANKING DE NOTAS
          </h1>

          <img src={screen3} className="block md:m-0px md:hidden w-full h-[90%] object-contain flex-1" />
          <img src={computer3} className="hidden md:block w-full h-[90%] object-contain p-6 flex-1" />
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide className="flex flex-col justify-between items-center w-full h-full px-4 py-6">
          <h1 className="text-[1.50rem] lg:text-[4rem] lg:pb-4 bg-blueGradient bg-clip-text text-transparent font-extrabold px-3 pb-3 text-center">
            CONTROLE DE FEEDBACKS
          </h1>

          <img src={screen4} className="block md:m-0px md:hidden w-full h-[90%] object-contain flex-1" />
          <img src={computer4} className="hidden md:block w-full h-[90%] object-contain p-6 flex-1" />
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide className="flex flex-col justify-between items-center w-full h-full px-4 py-6">
          <h1 className="text-[1.50rem] lg:text-[4rem] lg:pb-4 bg-blueGradient bg-clip-text text-transparent font-extrabold px-3 pb-3 text-center">
            GERENCIAMENTO
          </h1>

          <img src={screen5} className="block md:m-0px md:hidden w-full h-[90%] object-contain flex-1" />
          <img src={computer5} className="hidden md:block w-full h-[90%] object-contain p-6 flex-1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
