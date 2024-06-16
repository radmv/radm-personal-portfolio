import {
  About,
  BackgroundPageLayout,
  Contact,
  Experience,
  Hero,
  Navbar,
  Projects,
  Technologies,
} from "../components";

const LandingPage = () => {
  return (
    <BackgroundPageLayout>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
    </BackgroundPageLayout>
  );
};

export default LandingPage;
