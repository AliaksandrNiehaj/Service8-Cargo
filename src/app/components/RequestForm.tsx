import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Send, MessageCircle, Phone as PhoneIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function RequestForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    comment: ''
  });

  const services = [
    { value: 'truck', label: t('calc.service.truck') },
    { value: 'movers', label: t('calc.service.movers') },
    { value: 'moving', label: t('calc.service.moving') },
    { value: 'intercity', label: t('calc.service.intercity') },
    { value: 'office', label: t('calc.service.office') }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Формируем письмо для mailto
    const subject = `Заявка на услугу: ${formData.service || 'Не указано'}`;
    const body = `
Имя: ${formData.name}
Телефон: ${formData.phone}
Услуга: ${formData.service || 'Не указано'}
Комментарий: ${formData.comment || '-'}
    `.trim();
    
    window.location.href = `mailto:kontakt@service8.pl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsApp = () => {
    const message = `Здравствуйте! Меня зовут ${formData.name || '[Имя]'}. Интересует услуга: ${formData.service || 'уточню'}. ${formData.comment || ''}`;
    window.open(`https://wa.me/48221234567?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleTelegram = () => {
    window.open('https://t.me/service8pl', '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl mb-2 text-gray-900">{t('form.title')}</h3>
        <p className="text-gray-600">{t('form.subtitle')}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-gray-700">{t('form.name')}</Label>
          <Input
            id="name"
            type="text"
            placeholder={t('form.name.placeholder')}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-gray-700">{t('form.phone')}</Label>
          <Input
            id="phone"
            type="tel"
            placeholder={t('form.phone.placeholder')}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="service" className="text-gray-700">{t('form.service')}</Label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">{t('form.service')}</option>
            {services.map(service => (
              <option key={service.value} value={service.label}>
                {service.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="comment" className="text-gray-700">{t('form.comment')}</Label>
          <Textarea
            id="comment"
            placeholder={t('form.comment.placeholder')}
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            rows={3}
            className="mt-1"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
          size="lg"
        >
          <Send className="w-4 h-4 mr-2" />
          {t('form.submit')}
        </Button>
      </form>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-center text-sm text-gray-600 mb-3">{t('form.or')}</p>
        <div className="flex gap-3">
          <Button
            type="button"
            onClick={handleWhatsApp}
            variant="outline"
            className="flex-1 border-green-500 text-green-600 hover:bg-green-50"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
          <Button
            type="button"
            onClick={handleTelegram}
            variant="outline"
            className="flex-1 border-blue-500 text-blue-600 hover:bg-blue-50"
          >
            <PhoneIcon className="w-4 h-4 mr-2" />
            Telegram
          </Button>
        </div>
      </div>
    </div>
  );
}
