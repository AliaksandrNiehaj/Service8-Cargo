import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToService = (serviceId: string) => {
    const e = document.getElementById(serviceId);
    if (e) {
      e.scrollIntoView({behavior: 'smooth', block: 'center'})
    }
  };
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-32 mb-8">
          <div>
            <h3 className="text-white text-lg mb-4">{t('footer.about.title')}</h3>
            <p className="text-sm">
              {t('footer.about.text')}
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg mb-4">{t('footer.services.title')}</h3>
            <ul className="space-y-2 text-sm">
              <li> 
                <button
                  onClick={() => scrollToService('service-1') }
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.services.1')}
                </button>
              </li>

              <li> 
                <button
                  onClick={() => scrollToService('service-2') }
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.services.2')}
                </button>
              </li>

              <li> 
                <button
                  onClick={() => scrollToService('service-3') }
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.services.3')}
                </button>
              </li>

              <li> 
                <button
                  onClick={() => scrollToService('service-4') }
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.services.4')}
                </button>
              </li>

              <li> 
                <button
                  onClick={() => scrollToService('service-5') }
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.services.5')}
                </button>
              </li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="text-white text-lg mb-4">{t('footer.info.title')}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.info.1')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.info.2')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.info.3')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.info.4')}</a></li>
            </ul>
          </div> */}
          
          <div>
            <h3 className="text-white text-lg mb-4">{t('footer.contact.title')}</h3>
            <ul className="space-y-2 text-sm">
              <li>{t('footer.contact.phone')}</li>
              <li>{t('footer.contact.email')}</li>
              <li>{t('footer.contact.hours')}</li>
              <li>{t('footer.contact.address')}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}