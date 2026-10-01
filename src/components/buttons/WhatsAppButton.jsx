import WhatsAppIcon from '../icons/WhatsAppIcon';
import { getWhatsAppUrl } from '../../config/contact';

export default function WhatsAppButton({ message }) {
  const href = getWhatsAppUrl(message);
  const isPlaceholder = href === '#';

  return (
    <a
      href={href}
      aria-label={isPlaceholder ? 'WhatsApp pendiente de configuración' : 'Hablar por WhatsApp'}
      className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#1EBE5A] ${isPlaceholder ? 'cursor-not-allowed opacity-80' : ''}`}
      {...(isPlaceholder ? { tabIndex: -1 } : {})}
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="sr-only">{isPlaceholder ? 'WhatsApp pendiente de configuración' : 'Hablar por WhatsApp'}</span>
    </a>
  );
}
