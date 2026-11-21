import { ArrowUpRight, AudioLines, Guitar, Mic2, Waves } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const courses = [
  {
    title: 'Guitar',
    suffix: 'Classes',
    description: 'Build your foundations, find your rhythm and bring the songs you love to life.',
    icon: Guitar,
    tone: 'gold',
    tag: 'STRINGS',
  },
  {
    title: 'Vocal',
    suffix: 'Training',
    description: 'Develop your voice, build confidence and express yourself through song.',
    icon: Mic2,
    tone: 'cyan',
    tag: 'VOICE',
  },
  {
    title: 'Harmonium',
    suffix: '',
    description: 'Discover the expressive sound of harmonium, one melody at a time.',
    icon: Waves,
    tone: 'violet',
    tag: 'MELODY',
  },
  {
    title: 'Studio Recording',
    suffix: 'Space',
    description: 'Bring your music into the studio and capture your sound.',
    icon: AudioLines,
    tone: 'rose',
    tag: 'KEYS',
  },
];

export default function Courses() {
  return (
    <section className="section-shell courses-section" id="classes">
      <div className="page-container">
        <div className="courses-intro">
          <SectionHeading
            eyebrow="Find your instrument"
            title={<>A class for every<br /><span className="heading-accent">kind of music lover.</span></>}
            description="New to music or ready to go further? There’s room for you to start."
          />
          <a className="text-link courses-top-link" href="#contact">Ask us about classes <ArrowUpRight size={16} /></a>
        </div>
        <div className="course-grid">
          {courses.map(({ title, suffix, description, icon: Icon, tone, tag }, index) => (
            <article className={`course-card tone-${tone}`} key={title}>
              <div className="course-card-top">
                <span className="course-index">0{index + 1}</span>
                <span className="course-tag">{tag}</span>
              </div>
              <div className="course-icon-wrap"><Icon size={27} strokeWidth={1.6} aria-hidden="true" /></div>
              <h3>{title}<span>{suffix}</span></h3>
              <p>{description}</p>
              <a className="course-link" href="#contact">Explore class <ArrowUpRight size={16} /></a>
              <span className="course-card-shine" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
