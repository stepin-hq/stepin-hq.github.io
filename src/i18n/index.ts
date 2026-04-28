import en from './en.json';
import bg from './bg.json';
import enGallery from './en.gallery.json';
import bgGallery from './bg.gallery.json';

type BaseTranslations = typeof en;
type GalleryTranslations = typeof enGallery;
export type Translations = BaseTranslations & { gallery: GalleryTranslations };

export function useTranslations(locale: string | undefined): Translations {
  const base = locale === 'bg' ? (bg as BaseTranslations) : en;
  const gallery = locale === 'bg' ? bgGallery : enGallery;
  return { ...base, gallery } as Translations;
}
