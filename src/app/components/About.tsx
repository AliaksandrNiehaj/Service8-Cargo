import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CircleCheck } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();
  
  const benefits = [
    'about.benefit.1',
    'about.benefit.2',
    'about.benefit.3',
    'about.benefit.4',
    'about.benefit.5',
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1700165644892-3dd6b67b25bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkYm9hcmQlMjBib3hlcyUyMG1vdmluZ3xlbnwxfHx8fDE3NjYzNTA5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Pakowanie ładunków"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl">{t('about.title')}</h2>
            <p className="text-lg text-gray-600">
              {t('about.description')}
            </p>
            <ul className="space-y-4">
              {benefits.map((benefitKey, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CircleCheck className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{t(benefitKey)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}