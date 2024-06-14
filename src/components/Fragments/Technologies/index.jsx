import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="pb-24 border-b border-neutral-800">
      <h1 className="my-20 text-4xl text-center">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
          <TbBrandNextjs className="text-7xl" />
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
          <SiMongodb className="text-green-400 text-7xl" />
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
          <DiRedis className="text-red-400 text-7xl" />
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
          <FaNodeJs className="text-green-400 text-7xl" />
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
          <BiLogoPostgresql className="text-sky-400 text-7xl" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
