import { ArrowDown, ArrowRight, Music2, Sparkles } from 'lucide-react';
import MediaFrame from './MediaFrame.jsx';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-inner page-container">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span />A home for every note</p>
          <h1>Your Voice,<br /><span>Our Passion.</span></h1>
          <p className="hero-lede">Find your sound. Follow your rhythm.<br className="desktop-break" /> Make music your own.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#classes">Explore classes <ArrowRight size={17} /></a>
            <a className="hero-watch-link" href="#about"><span className="play-orb"><Music2 size={17} /></span> Discover Raas</a>
          </div>
          <div className="hero-note"><Sparkles size={15} /> Learn. Play. Grow.</div>
        </div>
        <div className="hero-art-wrap">
          <div className="hero-art-glow" />
          <MediaFrame
            file="raasbanner.jpeg"
            alt="Raas Music Academy promotional banner"
            className="hero-art"
            imageClassName="hero-banner-image"
            placeholder="Your Raas story starts here"
          />
          <div className="hero-art-tag"><span className="tag-dot" /> Music lives here</div>
          <span className="hero-art-spark hero-art-spark-one">✦</span>
          <span className="hero-art-spark hero-art-spark-two">✧</span>
        </div>
        <a className="scroll-cue" href="#classes"><ArrowDown size={15} /> Scroll to explore</a>
      </div>
    </section>
  );
}
