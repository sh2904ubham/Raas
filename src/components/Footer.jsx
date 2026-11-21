import { ArrowUpRight } from 'lucide-react';
import SocialLinks from './SocialLinks.jsx';
import WhatsAppLink from './WhatsAppLink.jsx';

const suppliedImages = import.meta.glob('../assets/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

const logo = suppliedImages['../assets/raaslogo.jpeg'];

const footerLinks = [
  ['About', 'about'],
  ['Classes', 'classes'],
  ['Performances', 'performances'],
  ['Gallery', 'gallery'],
  ['Contact', 'contact'],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <a className="brand footer-brand" href="#home" aria-label="Raas Music Academy home">
              {logo ? <img className="brand-logo" src={logo} alt="Raas" /> : <span className="brand-word">Raas</span>}
              <span className="brand-divider" />
              <span className="brand-name">Music Academy <span>&amp; Entertainment</span></span>
            </a>
            <p>A place to learn, play and grow through music.</p>
            <SocialLinks variant="footer" />
          </div>
          <div className="footer-nav-block">
            <span className="footer-label">Explore Raas</span>
            <nav className="footer-links" aria-label="Footer navigation">
              {footerLinks.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}
            </nav>
          </div>
          <div className="footer-cta-block">
            <span className="footer-label">Got a question?</span>
            <WhatsAppLink className="footer-contact-link" icon={false}>Say hello <ArrowUpRight size={15} /></WhatsAppLink>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Raas Music Academy &amp; Entertainment</span>
          <span className="footer-location">Made with music in Varanasi, India <span>✦</span></span>
          <a href="#home" className="back-to-top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
