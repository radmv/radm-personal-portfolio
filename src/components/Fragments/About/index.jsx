import { motion } from "framer-motion";
import aboutImg from "../../../assets/about2.jpg";
import { ABOUT_TEXT } from "../../../constants";
import { BottomBorderedSection } from "../../Elements";

const About = () => {
  return (
    <BottomBorderedSection>
      <h1 className="my-20 text-4xl text-center">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="about" className="rounded-2xl" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="max-w-xl py-6 my-2">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </BottomBorderedSection>
  );
};

export default About;
