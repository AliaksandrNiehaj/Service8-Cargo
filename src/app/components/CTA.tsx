import { Button } from "./ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { RequestForm } from "./RequestForm";
import { useState, useEffect } from "react";

export function CTA() {
  const { t } = useLanguage();
  const [showForm, setShowForm] = useState(false);
  
  // Слушаем событие открытия формы из калькулятора
  useEffect(() => {
    const handleOpenForm = () => setShowForm(true);
    window.addEventListener('openRequestForm', handleOpenForm);
    return () => window.removeEventListener('openRequestForm', handleOpenForm);
  }, []);
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
      <div className="container mx-auto px-4">
        {!showForm ? (
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-orange-100">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="gap-2"
                onClick={() => window.location.href = 'tel:+48500554818'}
              >
                <Phone className="w-4 h-4" />
                {t('cta.phone')}
              </Button>
              {/* <Button 
                size="lg" 
                variant="outline"
                className="gap-2 bg-transparent text-black border border-white hover:bg-white/20"
                onClick={() => setShowForm(true)}
              >
                {t('cta.request')}
                <ArrowRight className="w-4 h-4" />
              </Button> */}
            </div>
            <p className="text-sm text-orange-200">
              {t('cta.availability')}
            </p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <RequestForm />
            <div className="text-center mt-6">
              <button 
                onClick={() => setShowForm(false)}
                className="text-white/80 hover:text-white underline text-sm"
              >
                ← {t('nav.contact')}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}