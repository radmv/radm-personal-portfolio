import { motion } from "framer-motion";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BottomBorderedSection } from "../../Elements";

const iconVariants = (duration) => ({
  initial: {
    y: -10,
  },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <BottomBorderedSection>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <TechContainer animationDuration={2.5}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </TechContainer>
        <TechContainer animationDuration={3}>
          <TbBrandNextjs className="text-7xl" />
        </TechContainer>
        <TechContainer animationDuration={5}>
          <SiMongodb className="text-green-400 text-7xl" />
        </TechContainer>
        <TechContainer animationDuration={2}>
          <DiRedis className="text-red-400 text-7xl" />
        </TechContainer>
        <TechContainer animationDuration={6}>
          <FaNodeJs className="text-green-400 text-7xl" />
        </TechContainer>
        <TechContainer animationDuration={4}>
          <BiLogoPostgresql className="text-sky-400 text-7xl" />
        </TechContainer>
      </div>
    </BottomBorderedSection>
  );
};

const TechContainer = ({ children, animationDuration }) => (
  <motion.div
    variants={iconVariants(animationDuration)}
    initial="initial"
    animate="animate"
    className="p-4 border-4 rounded-2xl border-neutral-800"
  >
    {children}
  </motion.div>
);

export default Technologies;
