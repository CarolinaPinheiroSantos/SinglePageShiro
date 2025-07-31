import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

function Orbiting5S({ centerImg, surroundingImgs = [] }) {
  const [active, setActive] = useState(null);
  const [isTouch, setIsTouch] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const detectTouch = () =>
      setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    detectTouch();
    window.addEventListener("resize", detectTouch);

    const mq = window.matchMedia("(min-width:1024px)");
    const updateDesktop = () => setIsDesktop(mq.matches);
    updateDesktop();
    if (mq.addEventListener) {
      mq.addEventListener("change", updateDesktop);
    } else {
      mq.addListener(updateDesktop);
    }

    return () => {
      window.removeEventListener("resize", detectTouch);
      if (mq.removeEventListener) {
        mq.removeEventListener("change", updateDesktop);
      } else {
        mq.removeListener(updateDesktop);
      }
    };
  }, []);

  const handleOpen = (img, index) => {
    setActive({ src: img.src, title: img.title, index });
  };
  const handleClose = () => setActive(null);

  return (
    <div className="relative lg:my-[5rem] w-full h-[500px] sm:h-[500px] flex items-center justify-center overflow-visible">
      <AnimatePresence>
        {!active && (
          <motion.div
            key="orbiting"
            className="absolute w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <div className="relative w-full h-full">
              {surroundingImgs.slice(0, 5).map((img, i) => {
                const angle = (360 / 5) * i;
                const radius = isDesktop ? 220 : 150; // aumento no desktop
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);

                const wrapperProps = {};
                if (isTouch) {
                  wrapperProps.onClick = () => handleOpen(img, i);
                } else {
                  wrapperProps.onMouseEnter = () => handleOpen(img, i);
                }

                return (
                  <div
                    key={i}
                    className="absolute cursor-pointer"
                    style={{
                      left: "40%",
                      top: "40%",
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    {...wrapperProps}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear",
                      }}
                      className="w-[60px] sm:w-[80px] lg:w-[100px] h-[60px] sm:h-[80px] lg:h-[100px]"
                    >
                      <img
                        src={img.src}
                        alt={`orbit-${i}`}
                        className="w-full h-full object-contain rounded-full shadow-md"
                      />
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <img
        src={centerImg}
        alt="center"
        className="z-10 w-[120px] sm:w-[180px] h-[120px] sm:h-[180px] object-contain rounded-full"
      />

      <AnimatePresence>
        {active && (
          <motion.div
            key="overlay"
            className="absolute inset-0 flex flex-col items-center justify-center bg-blue/70 z-30 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Fechar"
              onClick={handleClose}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full w-8 h-8 flex items-center justify-center font-bold"
            >
              ×
            </button>

            <motion.div
              key="active-img"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative flex flex-col items-center"
            >
              <img
                src={active.src}
                alt={active.title}
                className="block w-[180px] sm:w-[220px] lg:w-[260px] h-[180px] sm:h-[220px] lg:h-[260px] object-contain rounded-full shadow-xl"
              />
              <p className="lg:text-[2rem] mt-4 text-center text-white font-semibold text-lg sm:text-2xl">
                {active.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

Orbiting5S.propTypes = {
  centerImg: PropTypes.string.isRequired,
  surroundingImgs: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Orbiting5S;
