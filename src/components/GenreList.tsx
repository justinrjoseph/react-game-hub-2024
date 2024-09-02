import useGenres from '../hooks/useGenres';

const GenreList = (): JSX.Element => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((item) => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
}

export default GenreList;