import { About, Hero, Navbar } from "../components";

const LandingPage = () => {
  return (
    <div className="relative overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 w-full h-full -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container px-8 mx-auto">
        <Navbar />
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default LandingPage;
