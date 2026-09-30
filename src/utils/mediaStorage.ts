import { MEDIA_COLLECTION } from '../data/athleteData';

const STORAGE_PREFIX = 'ramsports_media_';

// Check if a file is already stored in localStorage
export function getStoredMediaUrl(fileName: string): string | null {
  try {
    return localStorage.getItem(STORAGE_PREFIX + fileName);
  } catch {
    return null;
  }
}

// Store a file's base64 or blob URL in localStorage
export function saveMediaUrl(fileName: string, url: string): void {
  try {
    localStorage.setItem(STORAGE_PREFIX + fileName, url);
    window.dispatchEvent(new CustomEvent('media-updated', { detail: { fileName, url } }));
  } catch (err) {
    console.warn('Storage limit reached or error saving media:', err);
  }
}

// Clear all custom media
export function clearCustomMedia(): void {
  try {
    MEDIA_COLLECTION.forEach((item) => {
      localStorage.removeItem(STORAGE_PREFIX + item.fileName);
    });
    window.dispatchEvent(new CustomEvent('media-updated'));
  } catch (err) {
    console.error('Failed to clear custom media:', err);
  }
}

// Get the best resolved URL for an asset
export function resolveMediaUrl(fileName: string): string {
  // 1. Check user uploaded custom file
  const stored = getStoredMediaUrl(fileName);
  if (stored) return stored;

  // 2. Direct local file path in public assets folder
  const encodedName = encodeURIComponent(fileName);
  return `/assets/${encodedName}`;
}

