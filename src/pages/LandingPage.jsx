import {
  About,
  BackgroundPageLayout,
  Experience,
  Hero,
  Navbar,
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
    </BackgroundPageLayout>
  );
};

export default LandingPage;
