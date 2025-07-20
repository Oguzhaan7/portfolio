import { Menu } from "@/components/Main/Menu";
import { About } from "@/components/Main/About";

const Home = () => {
  return (
    <div className="grid w-full relative">
      <Menu />
      <section id="about" className="h-max">
        <About />
      </section>
      <section id="project" className="h-screen ">
        Project
      </section>
      <section id="testimonials" className="h-screen ">
        Testimonials
      </section>
      <section id="contact" className="h-screen ">
        Contact
      </section>
    </div>
  );
};

export default Home;
