import { ArrowUpRight, CalendarDays, Music2, UsersRound } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import WhatsAppLink from './WhatsAppLink.jsx';

const moments = [
  { number: '01', title: 'Student performances', detail: 'A place to share what you’ve been learning.', icon: Music2, tone: 'gold' },
  { number: '02', title: 'Music events', detail: 'Come together and celebrate the joy of music.', icon: CalendarDays, tone: 'cyan' },
  { number: '03', title: 'Practice sessions', detail: 'Find your flow, one practice at a time.', icon: UsersRound, tone: 'violet' },
];

export default function Performances() {
  return (
    <section className="section-shell performances-section" id="performances">
      <div className="page-container">
        <div className="performances-layout">
          <div className="performances-copy">
            <SectionHeading
              eyebrow="Beyond the classroom"
              title={<>Made to be<br /><span className="heading-accent">heard.</span></>}
              description="Music brings people together. There’s always something to learn, share and enjoy at RAAS."
            />
            <WhatsAppLink className="text-link performance-link" icon={false}>Ask about RAAS <ArrowUpRight size={16} /></WhatsAppLink>
          </div>
          <div className="moments-list">
            {moments.map(({ number, title, detail, icon: Icon, tone }) => (
              <article className={`moment-row moment-${tone}`} key={title}>
                <span className="moment-number">{number}</span>
                <span className="moment-icon"><Icon size={20} strokeWidth={1.6} /></span>
                <span className="moment-copy"><strong>{title}</strong><small>{detail}</small></span>
                <span className="moment-arrow"><ArrowUpRight size={17} /></span>
              </article>
            ))}
            <div className="moments-note"><span className="note-dot" /> More moments to come</div>
          </div>
        </div>
      </div>
    </section>
  );
}
