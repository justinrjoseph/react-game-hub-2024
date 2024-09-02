import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const AverageScore = ({ score }: Props): JSX.Element => {
  const color = score > 75
    ? 'green'
    : score > 60 ? 'yellow' : '';

  return (
    <Badge colorScheme={color}
      fontSize='.875em'
      paddingX={2}
      borderRadius='.25rem'>
      {score}
    </Badge>
  );
}

export default AverageScore;