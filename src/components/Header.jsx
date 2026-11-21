import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import WhatsAppLink from './WhatsAppLink.jsx';

const suppliedImages = import.meta.glob('../assets/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

const logo = suppliedImages['../assets/raaslogo.jpeg'];

const navigation = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Classes', 'classes'],
  ['Performances', 'performances'],
  ['Gallery', 'gallery'],
  ['Contact', 'contact'],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Raas Music Academy home">
          {logo ? <img className="brand-logo" src={logo} alt="Raas" /> : <span className="brand-word">Raas</span>}
          <span className="brand-divider" />
          <span className="brand-name">Music Academy <span>&amp; Entertainment</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav id="primary-navigation" className={`primary-navigation${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
          <WhatsAppLink className="button button-gold header-enquire" />
        </nav>
      </div>
    </header>
  );
}
