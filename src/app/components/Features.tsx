import { Truck, Users, House, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";

export function Features() {
  const { t } = useLanguage();
  
  const features = [
    {
      id: 'service-1',
      icon: Truck,
      title: t('features.truck.title'),
      price: '140 PLN/h',
      minTime: t('features.minTime') + ' 2h',
      details: [
        t('features.truck.detail1'),
        t('features.truck.detail2')
      ]
    },
    {
      id: 'service-2',
      icon: Users,
      title: t('features.movers.title'),
      price: '80 PLN/h',
      minTime: t('features.perWorker'),
      details: [
        t('features.movers.detail1'),
        t('features.movers.detail2')
      ]
    },
    {
      id: 'service-3',
      icon: House,
      title: t('features.moving.title'),
      price: '180 PLN/h',
      minTime: t('features.minTime') + ' 2h',
      details: [
        t('features.moving.detail1'),
        t('features.moving.detail2')
      ]
    },
    {
      id: 'service-4',
      icon: MapPin,
      title: t('features.intercity.title'),
      price: t('features.intercity.price'),
      minTime: '',
      details: [
        t('features.intercity.detail1'),
        t('features.intercity.detail2')
      ]
    },
    {
      id: 'service-5',
      icon: Briefcase,
      title: t('features.office.title'),
      price: '250 PLN/h',
      minTime: t('features.minTime') + ' 2h',
      details: [
        t('features.office.detail1'),
        t('features.office.detail2'),
        t('features.office.detail3')
      ],
      isPremium: true
    }
  ];
  
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">{t('features.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <Card 
                key={index}
                id={feature.id}
                className="border-2 hover:border-orange-500 transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md bg-gradient-to-br from-orange-500 to-red-600">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                  
                  <div className="rounded-lg p-4 border bg-orange-50 border-orange-200">
                    <div className="text-3xl font-bold mb-1 text-orange-600">
                      {feature.price}
                    </div>
                    {feature.minTime && (
                      <div className="text-sm text-gray-600">
                        {feature.minTime}
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-orange-500 mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}