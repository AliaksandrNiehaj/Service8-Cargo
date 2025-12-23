import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
// import { PriceCalculator } from './components/PriceCalculator';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Features />
        <About />
        {/* <PriceCalculator /> */}
        <CTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}