import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import WhatsAppButton from '../buttons/WhatsAppButton';
import { contactConfig } from '../../config/contact';
import { getProduct } from '../../data/products';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  const { pathname } = useLocation();
  const [isReady, setIsReady] = useState(false);
  const productSlug = pathname.startsWith('/producto/') ? pathname.split('/').filter(Boolean).at(-1) : null;
  const product = productSlug ? getProduct(productSlug) : null;
  const whatsappMessage = product
    ? `Hola, estoy interesado en conocer más sobre ${product.name}.`
    : contactConfig.whatsappMessage;

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('route-changing', true);
    const timer = window.setTimeout(() => root.classList.toggle('route-changing', false), 80);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`min-h-screen bg-brand-sand text-brand-charcoal font-body ${isReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton message={whatsappMessage} />
    </div>
  );
}
