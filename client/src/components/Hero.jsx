import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
const navigate = useNavigate()

  return (
    <div className="relative h-screen">
      <div className='absolute inset-0 bg-[url("/src/assets/HeroImg111.png")] bg-no-repeat bg-cover bg-center'></div>
      <div className="absolute inset-0 bg-gray-950/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white h-full">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-secondary/25 flex flex-col items-center justify-center gap-4 py-10 px-5 rounded-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="font-sora text-[20px] md:text-5xl md:text-[56px] md:leading-16 font-bold max-w-4xl text-center"
          >
            Connecting art and commissions in one space.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-180 text-[20px] md:text-base leading-7 text-center"
          >
            The original artwork from talented creators or commission custom
            pieces tailored to your vision. From concept to completion, track
            every step of your creative journey in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-5"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-2.5 rounded bg-black cursor-pointer text-white font-bold"
              onClick={()=> { navigate("/artworks"); scrollTo(0, 0)} }
            >
              Commission Art
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
