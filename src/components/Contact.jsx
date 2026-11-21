import { ArrowUpRight, MapPin, Phone } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import SocialLinks from './SocialLinks.jsx';
import WhatsAppLink from './WhatsAppLink.jsx';

export default function Contact() {
  return (
    <section className="section-shell contact-section" id="contact">
      <div className="contact-glow" />
      <div className="page-container contact-container">
        <div className="contact-card">
          <div className="contact-main">
            <SectionHeading
              eyebrow="Your next note starts here"
              title={<>Let’s make<br /><span className="heading-accent">some music.</span></>}
              description="Curious about classes? We’d love to hear from you."
            />
            <WhatsAppLink className="button button-gold contact-cta" />
          </div>
          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-detail-icon"><MapPin size={18} /></span>
              <div><small>Come find us</small><strong>Varanasi, India</strong></div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-icon"><Phone size={18} /></span>
              <div><small>Call or WhatsApp</small><WhatsAppLink className="placeholder-contact" icon={false}>+91 90156 27005</WhatsAppLink></div>
            </div>
            <a
              className="contact-map-placeholder"
              href="https://maps.google.com/maps?q=25.367918%2C83.006182&z=17&hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the Raas location in Google Maps"
            >
              <span className="map-grid" />
              <span className="map-pin"><MapPin size={20} /></span>
              <span className="map-label">Raas location in Varanasi</span>
              <span className="map-caption">Open in Google Maps</span>
            </a>
            <div className="contact-social-row">
              <span>Follow the music</span>
              <SocialLinks />
            </div>
            <p className="contact-social-note">Follow Raas on Facebook &amp; Instagram <ArrowUpRight size={13} /></p>
          </div>
        </div>
        <p className="contact-bottom-note"><span className="contact-bottom-line" />Good things begin with a hello.</p>
      </div>
    </section>
  );
}
