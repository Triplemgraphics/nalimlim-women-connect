import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Impact from "@/components/Impact";
import BlogSection from "@/components/BlogSection";
import Support from "@/components/Support";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <BlogSection />
        <Support />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
