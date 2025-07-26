import { Menu } from "@/components/Main/Menu";
import { About } from "@/components/Main/About";
import { Project } from "@/components/Main/Project";

const Home = () => {
  return (
    <div className="grid w-full relative select-none">
      <Menu />
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Project />
      </section>
      {/* <section id="testimonials">Testimonials</section>
      <section id="contact">Contact</section> */}
    </div>
  );
};

export default Home;
