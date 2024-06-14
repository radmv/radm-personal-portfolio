import {
  About,
  BackgroundPageLayout,
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
    </BackgroundPageLayout>
  );
};

export default LandingPage;
