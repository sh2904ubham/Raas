import { ArrowRight, MapPin } from 'lucide-react';
import MediaFrame from './MediaFrame.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function About() {
  return (
    <section className="section-shell about-section" id="about">
      <div className="page-container about-layout">
        <div className="about-media-column">
          <div className="about-media-frame">
            <MediaFrame
              file="WhatsApp Image 2026-11-20 at 7.51.03 PM(1).jpeg"
              alt="Inside Raas Music Academy"
              className="about-media"
              imageClassName="about-interior-image"
              placeholder="The Raas practice room"
            />
            <div className="about-photo-caption"><span className="caption-line" /> A space to find your sound</div>
          </div>
          <div className="about-floating-note">
            <span className="floating-note-icon"><MapPin size={17} /></span>
            <span><strong>Rooted in Varanasi</strong><small>Made for music, made for you</small></span>
          </div>
          <span className="about-ring about-ring-one" />
          <span className="about-ring about-ring-two" />
        </div>
        <div className="about-copy">
          <SectionHeading
            eyebrow="A little about us"
            title={<>Welcome to<br /><span className="heading-accent">Raas.</span></>}
          />
          <p className="about-paragraph">Raas Music Academy &amp; Entertainment is a place to learn, play and grow through music. Based in Varanasi, we welcome curious beginners and passionate musicians to explore the sounds they love.</p>
          <p className="about-paragraph about-paragraph-muted">From your first note to finding your own rhythm, make music at your pace in a space built around the joy of learning.</p>
          <a className="button button-outline" href="#contact">Know more <ArrowRight size={16} /></a>
          <div className="about-signoff"><span className="signoff-rule" /> Learn. Play. Grow.</div>
        </div>
      </div>
    </section>
  );
}
