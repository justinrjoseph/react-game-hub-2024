function createCroppedImageUrl(url:string):`${string}crop/600/400/${string}` | '' {
  if (!url) return '';

  const target = 'media/';

  const idx = url.indexOf(target) + target.length;

  return `${url.slice(0, idx)}crop/600/400/${url.slice(idx)}`;
}

export default createCroppedImageUrl;