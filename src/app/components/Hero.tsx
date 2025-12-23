import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('openRequestForm'));
      }, 500);
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-100 z-0"></div>
      
      <div className="container mx-auto px-4 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gap-2 bg-orange-600 hover:bg-orange-700 w-full sm:w-auto"
                onClick={ () => window.location.href = 'tel:+48500554818' }
              >
                <Phone className="w-4 h-4" />
                {t('hero.cta.call')}
              </Button>
              {/* <Button size="lg" variant="outline" onClick={scrollToCalculator}>
                {t('hero.cta.calculate')}
              </Button> */}
            </div>

            <div className="pt-4">
              <p className="text-2xl sm:text-3xl font-bold text-orange-600">{t('hero.stat.availability')}</p>
              <p className="text-sm text-gray-600">{t('hero.stat.availability.desc')}</p>
            </div>
          </div>
          
          <div className="relative order-first lg:order-last mb-8 lg:mb-0">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto lg:max-w-none">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760662052295-f84068499a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwdmVoaWNsZSUyMGRlbGl2ZXJ5fGVufDF8fHx8MTc2NjM2MDAzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Samochód dostawczy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}