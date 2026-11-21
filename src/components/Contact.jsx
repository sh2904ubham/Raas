import { ArrowUpRight, Instagram, MapPin, Music2, Phone, Youtube } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
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
              <div><small>Call or WhatsApp</small><span className="placeholder-contact">Contact number coming soon</span></div>
            </div>
            <div className="contact-map-placeholder" aria-label="Google Maps integration placeholder for the RAAS academy location">
              <span className="map-grid" />
              <span className="map-pin"><MapPin size={20} /></span>
              <span className="map-label">Academy location in Varanasi</span>
              <span className="map-caption">Map location to be added</span>
            </div>
            <div className="contact-social-row">
              <span>Follow the music</span>
              <div className="social-links">
                <span className="social-link social-unavailable" aria-label="Instagram link coming soon" title="Instagram link coming soon"><Instagram size={16} /></span>
                <span className="social-link social-unavailable" aria-label="YouTube link coming soon" title="YouTube link coming soon"><Youtube size={17} /></span>
                <span className="social-link social-unavailable" aria-label="Social profile link coming soon" title="Social profile link coming soon"><Music2 size={16} /></span>
              </div>
            </div>
            <p className="contact-social-note">Social links coming soon <ArrowUpRight size={13} /></p>
          </div>
        </div>
        <p className="contact-bottom-note"><span className="contact-bottom-line" />Good things begin with a hello.</p>
      </div>
    </section>
  );
}
