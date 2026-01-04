import Header from '@/components/Header';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Terminal from '@/components/Terminal';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 md:px-8 min-h-screen lg:grid lg:grid-cols-12 lg:gap-8">
      {/* HEADER (Left Side) */}
      <Header />

      {/* MAIN SCROLLABLE (Right Side) */}
      <main className="lg:col-span-7 lg:py-20 relative z-10 w-full">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Terminal />
        <Contact />
      </main>
    </div>
  );
}
