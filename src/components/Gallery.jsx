import { ArrowUpRight, Guitar, Music2, Quote, Sparkles } from 'lucide-react';
import MediaFrame from './MediaFrame.jsx';
import SectionHeading from './SectionHeading.jsx';

const galleryItems = [
  { file: 'guitar-poster.png', alt: 'RAAS guitar classes poster', label: 'Find your rhythm', category: 'Guitar classes', icon: Guitar, className: 'gallery-guitar' },
  { file: 'music-quote.png', alt: 'RAAS Hindi music motivational quote poster', label: 'A little inspiration', category: 'Words & music', icon: Quote, className: 'gallery-quote' },
  { file: 'banner.png', alt: 'RAAS Music Academy promotional banner', label: 'This is RAAS', category: 'Academy', icon: Sparkles, className: 'gallery-banner' },
  { file: 'academy-interior.png', alt: 'RAAS Music Academy interior', label: 'A space to create', category: 'Inside RAAS', icon: Music2, className: 'gallery-interior' },
];

export default function Gallery() {
  return (
    <section className="section-shell gallery-section" id="gallery">
      <div className="page-container">
        <div className="gallery-heading-row">
          <SectionHeading
            eyebrow="A glimpse of RAAS"
            title={<>Little moments.<br /><span className="heading-accent">Big feeling.</span></>}
            description="A look at the music, the moments and the space we share."
          />
          <span className="gallery-count"><span>04</span> moments</span>
        </div>
        <div className="gallery-grid">
          {galleryItems.map(({ file, alt, label, category, icon, className }) => {
            const Icon = icon;
            return (
              <a className={`gallery-tile ${className}`} key={file + category} href="#contact" aria-label={`${category}: ${label}. Contact RAAS to learn more.`}>
                <MediaFrame
                  file={file}
                  alt={alt}
                  className="gallery-image"
                  imageClassName="gallery-photo"
                  placeholder={label}
                  icon={Icon}
                />
                <span className="gallery-overlay" />
                <span className="gallery-tile-copy"><small>{category}</small><strong>{label}</strong></span>
                <span className="gallery-arrow"><ArrowUpRight size={17} /></span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
