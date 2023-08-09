import AboutContent from "../components/about/about-content";
import Header from "../components/about/header";
import Hobbies from "../components/about/hobbies";
import Skills from "../components/about/skill";

export default function About() {
  return (
    <>
      <main className="flex flex-col items-center justify-center mt-12">
        <section className="w-11/12 lg:w-1/2 mb-16">
          <Header />
          <AboutContent />
        </section>
        <section className="w-11/12 lg:w-1/2 mb-16">
          <Header />
          <Skills />
        </section>
        <section className="w-11/12 lg:w-1/2 mb-16">
          <Header />
          <Hobbies />
        </section>
      </main>
    </>
  )
}
