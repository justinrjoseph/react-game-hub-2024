import { ReactNode } from 'react';

import { Heading } from '@chakra-ui/react';

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const TermAndDefinitions = ({ term, children }: Props) => {
  return (
    <div>
      <Heading as='dt' fontSize='md' color='gray.600'>{term}</Heading>
      {children}
    </div>
  )
}

export default TermAndDefinitions;