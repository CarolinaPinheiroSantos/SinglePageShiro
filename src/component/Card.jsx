import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Card({ img, title, text, centerOnTablet = false }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: -30,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.6, duration: 0.6 },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      style={{ boxShadow: "2px 2px 50px #DCDCDC" }}
      className={`px-5 m-6 h-[300px] flex flex-col justify-center items-center gap-4 border rounded-lg overflow-hidden ${
        centerOnTablet ? "md:col-span-2 lg:col-span-1 lg:mx-0" : ""
      }`}
    >
      <motion.img
        src={img}
        alt=""
        className="w-20 h-20"
        variants={imageVariants}
      />
      <motion.div
        variants={contentVariants}
        className="flex flex-col items-center"
      >
        <h1 className="text-4xl text-darkBlue font-extrabold">{title}</h1>
        <p className="text-center text-gray-700">{text}</p>
      </motion.div>
    </motion.section>
  );
}

export default Card;
