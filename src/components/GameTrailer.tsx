import useTrailers from '../hooks/useTrailers';

interface Props {
  slug: string;
}

const GameTrailer = ({ slug }: Props): JSX.Element | null => {
  const { data: trailers, error, isLoading } = useTrailers(slug);

  if (error) throw error;

  if (isLoading) return null;

  const [{ preview, data: { max } }] = trailers.results;

  return <video src={max} poster={preview} controls />;
}

export default GameTrailer;