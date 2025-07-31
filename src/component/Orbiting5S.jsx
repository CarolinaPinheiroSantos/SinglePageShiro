import { motion } from "framer-motion";

function Orbiting5S({ centerImg, surroundingImgs = [] }) {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center overflow-visible">
      {/* Orbiting container */}
      <motion.div
        className="absolute w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <div className="relative w-full h-full">
          {surroundingImgs.slice(0, 5).map((img, i) => {
            const angle = (360 / 5) * i;
            const radius = 150;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <img
                key={i}
                src={img}
                alt={`orbit-${i}`}
                className="absolute w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] object-contain rounded-full shadow-md"
                style={{
                  left: "40%",
                  top: "40%",
                  transform: `translate(${x}px, ${y}px)`
                }}
              />
            );
          })}
        </div>
      </motion.div>

      {/* Central image */}
      <img
        src={centerImg}
        alt="center"
        className="z-20 w-[120px] sm:w-[180px] h-[120px] sm:h-[180px] object-contain rounded-full"
      />
    </div>
  );
}

export default Orbiting5S;
