import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Calculator, ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function PriceCalculator() {
  const { t } = useLanguage();
  
  const [serviceType, setServiceType] = useState("truck");
  const [distance, setDistance] = useState(10);
  const [movers, setMovers] = useState(2);
  const [hours, setHours] = useState(2);
  const [additionalHelper, setAdditionalHelper] = useState(false);
  const [extras, setExtras] = useState({
    packing: false,
    furniture: false,
    elevator: false,
    express: false,
  });

  // Base prices for services (PLN)
  const basePrices: Record<string, number> = {
    truck: 140,      // 140 PLN/hour
    movers: 80,      // 80 PLN/hour per worker
    moving: 180,     // 180 PLN/hour
    intercity: 0,    // Calculated separately
    office: 250,     // 250 PLN/hour
  };

  // Calculate total price
  const calculatePrice = () => {
    let total = 0;
    
    // For intercity: special calculation
    if (serviceType === 'intercity') {
      if (distance <= 100) {
        // 30-100 km: 4 PLN/km + 100 PLN/hour
        total = distance * 4 + hours * 100;
      } else {
        // Over 100 km: 5 PLN/km
        total = distance * 5;
      }
    } else {
      // Base price (minimum 2 hours)
      const actualHours = Math.max(hours, 2);
      total = basePrices[serviceType] * actualHours;
      
      // For truck service: add city delivery fee from 15 km
      if (serviceType === 'truck' && distance >= 15) {
        total += 40;
      }
      
      // For movers service: calculate per worker
      if (serviceType === 'movers') {
        total = movers * actualHours * 80;
        // Add additional helper if selected
        if (additionalHelper) {
          total += actualHours * 80; // +80 PLN/hour for additional helper
        }
      }
    }
    
    // Add extras
    if (extras.packing) total += 150;
    if (extras.furniture) total += 200;
    if (extras.elevator) total += 100;
    if (extras.express) total += 100;
    
    return total;
  };

  // Define which extras are available for each service type
  const getAvailableExtras = () => {
    switch (serviceType) {
      case 'truck':
        return ['packing', 'express'];
      case 'movers':
        return ['packing', 'furniture', 'elevator'];
      case 'moving':
      case 'intercity':
      case 'office':
        return ['packing', 'furniture', 'elevator'];
      default:
        return [];
    }
  };

  const availableExtras = getAvailableExtras();

  const totalPrice = calculatePrice();

  return (
    <section id="calculator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4">
              <Calculator className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-4xl lg:text-5xl mb-4">
              {t('calc.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('calc.subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left column - inputs */}
              <div className="space-y-6">
                {/* Service type */}
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    {t('calc.service')}
                  </label>
                  <div className="relative">
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none appearance-none bg-white"
                    >
                      <option value="truck">{t('calc.service.truck')}</option>
                      <option value="movers">{t('calc.service.movers')}</option>
                      <option value="moving">{t('calc.service.moving')}</option>
                      <option value="intercity">{t('calc.service.intercity')}</option>
                      <option value="office">{t('calc.service.office')}</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Distance */}
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    {t('calc.distance')}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={distance}
                    onChange={(e) => setDistance(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                </div>

                {/* Movers - only for movers service */}
                {serviceType === "movers" && (
                  <>
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        {t('calc.movers')}
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={movers}
                        onChange={(e) => setMovers(parseInt(e.target.value) || 0)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                      />
                    </div>
                    
                    {/* Additional helper checkbox */}
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <Checkbox
                          checked={additionalHelper}
                          onCheckedChange={(checked) => setAdditionalHelper(checked === true)}
                        />
                        <div>
                          <span className="text-gray-700 block">
                            {t('calc.extras.additionalHelper') || 'Дополнительный помощник'}
                          </span>
                          <span className="text-sm text-gray-500">
                            +80 PLN/{t('calc.hours').toLowerCase()}
                          </span>
                        </div>
                      </label>
                    </div>
                  </>
                )}

                {/* Hours - for all except intercity (intercity uses distance) */}
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    {t('calc.hours')}
                  </label>
                  <input
                    type="number"
                    min={serviceType === "truck" || serviceType === "moving" || serviceType === "office" ? "2" : "1"}
                    max="24"
                    value={hours}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 0;
                      const minHours = (serviceType === "truck" || serviceType === "moving" || serviceType === "office") ? 2 : 1;
                      setHours(Math.max(value, minHours));
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Right column - extras and result */}
              <div className="space-y-6">
                {/* Extras */}
                <div>
                  <label className="block mb-4 font-medium text-gray-700">
                    {t('calc.extras')}
                  </label>
                  <div className="space-y-3">
                    {availableExtras.includes('packing') && (
                      <label className="flex items-center gap-3 cursor-pointer">
                        <Checkbox
                          checked={extras.packing}
                          onCheckedChange={(checked) => setExtras({ ...extras, packing: checked === true })}
                        />
                        <span className="text-gray-700">{t('calc.extras.packing')}</span>
                      </label>
                    )}
                    {availableExtras.includes('furniture') && (
                      <label className="flex items-center gap-3 cursor-pointer">
                        <Checkbox
                          checked={extras.furniture}
                          onCheckedChange={(checked) => setExtras({ ...extras, furniture: checked === true })}
                        />
                        <span className="text-gray-700">{t('calc.extras.furniture')}</span>
                      </label>
                    )}
                    {availableExtras.includes('elevator') && (
                      <label className="flex items-center gap-3 cursor-pointer">
                        <Checkbox
                          checked={extras.elevator}
                          onCheckedChange={(checked) => setExtras({ ...extras, elevator: checked === true })}
                        />
                        <span className="text-gray-700">{t('calc.extras.elevator')}</span>
                      </label>
                    )}
                    {availableExtras.includes('express') && (
                      <label className="flex items-center gap-3 cursor-pointer">
                        <Checkbox
                          checked={extras.express}
                          onCheckedChange={(checked) => setExtras({ ...extras, express: checked === true })}
                        />
                        <span className="text-gray-700">{t('calc.extras.express')}</span>
                      </label>
                    )}
                  </div>
                </div>

                {/* Price result */}
                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">{t('calc.result')}</p>
                    <p className="text-4xl text-orange-600 mb-2">
                      {t('calc.from')} {totalPrice} PLN
                    </p>
                  </div>
                </div>

                {/* Submit button */}
                <Button 
                  className="w-full bg-orange-600 hover:bg-orange-700" 
                  size="lg"
                  onClick={() => {
                    // Прокручиваем к секции контактов
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                      // Отправляем событие для открытия формы
                      setTimeout(() => {
                        window.dispatchEvent(new CustomEvent('openRequestForm'));
                      }, 500);
                    }
                  }}
                >
                  {t('calc.button')}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  {t('calc.note')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}