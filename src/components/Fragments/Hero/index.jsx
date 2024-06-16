import profilePic from "../../../assets/kevinRushProfile.png";
import { HERO_CONTENT } from "../../../constants";
import { BottomBorderedSection } from "../../Elements";

const Hero = () => {
  return (
    <BottomBorderedSection addClassname="lg:mb-32">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Rizki Adam
            </h1>
            <span className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
              Full Stack Developer
            </span>
            <p className="max-w-xl py-6 my-2 font-light tracking-normal">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profilePic} alt="Rizki Adam" />
          </div>
        </div>
      </div>
    </BottomBorderedSection>
  );
};

export default Hero;
