import { Menu } from "@/components/Main/Menu";
import { About } from "@/components/Main/About";

const Home = () => {
  return (
    <div className="grid w-full relative select-none">
      <Menu />
      <section id="about" className="">
        <About />
      </section>
      <section id="project" className="min-h-screen ">
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
