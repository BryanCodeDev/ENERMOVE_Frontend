import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../config/contact';

export default function WhatsAppButton({ message }) {
  const href = getWhatsAppUrl(message);
  const isPlaceholder = href === '#';

  return (
    <a
      href={href}
      aria-label={isPlaceholder ? 'WhatsApp pendiente de configuración' : 'Hablar por WhatsApp'}
      className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-green-700 ${isPlaceholder ? 'cursor-not-allowed opacity-80' : ''}`}
      {...(isPlaceholder ? { tabIndex: -1 } : {})}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">{isPlaceholder ? 'WhatsApp pendiente de configuración' : 'Hablar por WhatsApp'}</span>
    </a>
  );
}
