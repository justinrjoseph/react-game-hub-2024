import { useState } from 'react';

import { Button, Text } from '@chakra-ui/react';

type Props = {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 300 }: Props): JSX.Element | null => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= maxChars) return <Text>{children}</Text>

  const displayableText = isExpanded ? children : `${children.slice(0, maxChars)}...`;

  return (
    <Text>
      {displayableText}
      <Button size='xs'
        colorScheme='yellow'
        fontWeight='bold'
        marginInlineStart={1}
        onClick={() => setIsExpanded(!isExpanded)}>
        Show {isExpanded ? 'Less' : 'More'}
      </Button>
    </Text>
  );
}

export default ExpandableText;