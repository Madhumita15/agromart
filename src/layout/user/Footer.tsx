import logo from '../../assets/logo.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer className="bg-yellow-400 pt-5 pb-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Logo and Social links */}
            <div>
              <a href="#" className="ml-4">
                <img src={logo} alt="footer-img" className="h-12 w-auto" />
              </a>

              <ul className="flex pt-5 space-x-3">
                <li><a href="#"><i className="fa-solid fa-truck"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
              </ul>
            </div>

            {/* Column 1: Main Home Links */}
            <div className='flex flex-col'>
              <div className="text-lg font-semibold">{t('footer.homeTitle')}</div>
              <ul>
                <li className="mt-4"><a href="#" className="hover:text-gray-700">{t('footer.info')}</a></li>
                <li className="mt-2"><a href="#" className="hover:text-gray-700">{t('footer.privacy')}</a></li>
                <li className="mt-2"><a href="#" className="hover:text-gray-700">{t('footer.cookies')}</a></li>
              </ul>
            </div>

            {/* Column 2: About Company details */}
            <div>
              <div className="text-lg font-semibold">{t('footer.aboutTitle')}</div>
              <ul>
                <li className="mt-4"><a href="#" className="hover:text-gray-700">{t('footer.address')}</a></li>
                <li className="mt-2"><a href="#" className="hover:text-gray-700">{t('footer.directors')}</a></li>
                <li className="mt-2"><a href="#" className="hover:text-gray-700">{t('footer.createPage')}</a></li>
                <li className="mt-2"><a href="#" className="hover:text-gray-700">{t('footer.mission')}</a></li>
              </ul>
            </div>

            {/* Column 3: Help and Support Contact links */}
            <div>
              <div className="text-lg font-semibold">{t('footer.helpCenter')}</div>
              <ul>
                <li className="mt-4"><a href="tel:8234567890" className="hover:text-gray-700">8234567890</a></li>
                <li className="mt-2"><a href="mailto:agromart2025@gmail.com" className="hover:text-gray-700">agromart2025@gmail.com</a></li>
                <li className="mt-2"><a href="https://instagram.com/agromart" target="_blank" rel="noreferrer" className="hover:text-gray-700">instagram.com/agromart</a></li>
                <li className="mt-2"><a href="https://facebook.com/agromart" target="_blank" rel="noreferrer" className="hover:text-gray-700">facebook.com/agromart</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright Meta Bar */}
          <div className="flex justify-center mt-10 pb-4 text-sm text-black text-center">
            {t('footer.copyright')}{" "}
            <a href="index.html" className="mx-2 hover:underline">
              {t('footer.brandName')}
            </a>{" "}|{" "}
            <span className="mx-2">
              {t('footer.privacyPolicy')}
            </span>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;