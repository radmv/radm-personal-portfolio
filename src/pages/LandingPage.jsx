import {
  About,
  BackgroundPageLayout,
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
    </BackgroundPageLayout>
  );
};

export default LandingPage;
