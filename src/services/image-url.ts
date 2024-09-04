import imageUnavailable from '../assets/no-image-placeholder-6f3882e0.webp';

type ImageUrl = `${string}crop/600/400/${string}` | string;

function createCroppedImageUrl(url:string): ImageUrl {
  if (!url) return imageUnavailable;

  const target = 'media/';

  const idx = url.indexOf(target) + target.length;

  return `${url.slice(0, idx)}crop/600/400/${url.slice(idx)}`;
}

export default createCroppedImageUrl;