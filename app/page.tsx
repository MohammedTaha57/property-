import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProperties from "./components/FeaturedProperties";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import LensCursor from "./components/LensCursor";

function PremiumSectionWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-[#f6f1e8]">
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-transparent via-[#d9c4aa]/35 to-[#f6f1e8]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[82%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b28b5e]/50 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-[65%] -translate-x-1/2 rounded-full bg-[#c9a66b]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-3 md:px-6">
        <div className="rounded-[3rem] border border-[#d8c4aa]/60 bg-[#fffaf3]/45 shadow-[0_30px_100px_rgba(45,36,31,0.06)] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f6f1e8] text-[#2d241f]">
      <LensCursor />
      <PageTransition />
      <Navbar />

      <Hero />

      <PremiumSectionWrap>
        <FeaturedProperties />
      </PremiumSectionWrap>

      <PremiumSectionWrap>
        <About />
      </PremiumSectionWrap>

      <PremiumSectionWrap>
        <Services />
      </PremiumSectionWrap>

      <PremiumSectionWrap>
        <Contact />
      </PremiumSectionWrap>

      <Footer />
    </main>
  );
}