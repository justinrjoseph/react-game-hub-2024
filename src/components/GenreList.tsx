import useGenres from '../hooks/useGenres';

const GenreList = (): JSX.Element => {
  const { genres } = useGenres();

  return (
    <ul>
      {genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  );
}

export default GenreList;