import { ArrowUpRight, MessageCircle } from 'lucide-react';

const enquiryText = encodeURIComponent('Hello Raas Music Academy, I would like to enquire about music classes.');
const whatsappPhone = '919015627005';

export default function WhatsAppLink({ children = 'Enquire on WhatsApp', className = '', icon = true }) {
  return (
    <a
      className={className}
      href={`https://wa.me/${whatsappPhone}?text=${enquiryText}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Enquire with Raas Music Academy on WhatsApp"
    >
      {icon && <MessageCircle size={17} aria-hidden="true" />}
      {children}
      {!icon && <ArrowUpRight size={16} aria-hidden="true" />}
    </a>
  );
}
