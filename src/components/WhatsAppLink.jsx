import { ArrowUpRight, MessageCircle } from 'lucide-react';

const enquiryText = encodeURIComponent('Hello RAAS Music Academy, I would like to enquire about music classes.');

export default function WhatsAppLink({ children = 'Enquire on WhatsApp', className = '', icon = true }) {
  return (
    <a
      className={className}
      href={`https://wa.me/?text=${enquiryText}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Enquire with RAAS Music Academy on WhatsApp"
    >
      {icon && <MessageCircle size={17} aria-hidden="true" />}
      {children}
      {!icon && <ArrowUpRight size={16} aria-hidden="true" />}
    </a>
  );
}
