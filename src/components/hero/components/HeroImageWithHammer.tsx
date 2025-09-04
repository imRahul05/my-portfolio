import { motion } from "framer-motion";
import hammer from "../assets/hammer.png"; // hammer with hand image
import nail from "../assets/nail.png";     // small nail image
import img from "../assets/img1.gif";

const HeroImageWithHammer = () => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Nail at the top center */}
      <motion.img
        src={nail}
        alt="nail"
        className="w-6 absolute top-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      />

      {/* Profile Image */}
      <motion.img
        src={img}
        alt="Rahul Kumar"
        className="w-80 h-80 rounded-full object-cover shadow-2xl mt-6"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
      />

      {/* Hammer animation */}
      <motion.img
        src={hammer}
        alt="hammer"
        className="w-32 absolute -top-10 left-1/2 -translate-x-1/2 origin-bottom"
        initial={{ rotate: -60, y: -150, opacity: 0 }}
        animate={{ rotate: [ -60, 0, -20, 0 ], y: [ -150, 0, -20, 0 ], opacity: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
      />
    </div>
  );
};

export default HeroImageWithHammer;
