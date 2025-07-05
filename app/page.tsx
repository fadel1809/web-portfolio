import Navbar from "../components/navbar";
import Hero from "../components/hero"
import Intro from "../components/intro";
import Journey from "../components/journey";
import Project from "../components/project";
import FooterSection from "../components/footer";
export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <Intro/>
      <Journey/>
      <Project/>
      <FooterSection/>
    </>
  );
}
