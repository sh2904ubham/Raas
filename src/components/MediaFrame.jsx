import { Image, Music2 } from 'lucide-react';

const suppliedImages = import.meta.glob('../assets/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

export default function MediaFrame({
  file,
  alt,
  className = '',
  placeholder = 'RAAS image',
  icon = Image,
  imageClassName = '',
}) {
  const source = suppliedImages[`../assets/${file}`];
  const PlaceholderIcon = icon || Music2;

  return (
    <div className={`media-frame ${className}`} role={source ? undefined : 'img'} aria-label={source ? undefined : placeholder}>
      {source ? (
        <img className={imageClassName} src={source} alt={alt} loading="lazy" decoding="async" />
      ) : (
        <div className="media-placeholder" aria-hidden="true">
          <span className="placeholder-orbit placeholder-orbit-one" />
          <span className="placeholder-orbit placeholder-orbit-two" />
          <span className="placeholder-icon"><PlaceholderIcon size={28} strokeWidth={1.4} /></span>
          <span className="placeholder-caption">{placeholder}</span>
        </div>
      )}
    </div>
  );
}
