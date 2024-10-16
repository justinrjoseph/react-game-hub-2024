export default interface Trailer {
  preview: `https://media.rawg.io/media/movies/${string}/${string}.jpg`;
  data: {
    480: `https://steamcdn-a.akamaihd.net/steam/apps/${number}/movie480.mp4`;
    max: `https://steamcdn-a.akamaihd.net/steam/apps/${number}/movie_max.mp4`;
  }
}