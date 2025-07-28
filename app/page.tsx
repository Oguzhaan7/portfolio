import { Menu } from "@/components/Main/Menu";
import { About } from "@/components/Main/About";
import { Project } from "@/components/Main/Project";
import { Testimonial } from "@/components/Main/Testimonial";
import { Experience } from "@/components/Main/Experience";
import { Logos } from "@/components/Main/Logos";
import { Approach } from "@/components/Main/Approach";
import { Contact } from "@/components/Main/Contact";

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
      <section className="overflow-hidden" id="testimonials">
        <Testimonial />
      </section>
      <section>
        <Logos />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Approach />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
