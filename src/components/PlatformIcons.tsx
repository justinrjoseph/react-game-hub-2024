import { IconType } from 'react-icons';
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';

import { HStack, Icon } from '@chakra-ui/react';

import { Platform, PlatformSlug } from '../models/platform';

interface Props {
  platforms: Platform[];
}

const icons = new Map<PlatformSlug, IconType>([
  ['pc', FaWindows],
  ['nintendo', SiNintendo],
  ['playstation', FaPlaystation],
  ['xbox', FaXbox],
  ['mac', FaApple],
  ['linux', FaLinux],
  ['ios', MdPhoneIphone],
  ['android', FaAndroid],
  ['web', BsGlobe]
]);

const PlatformIcons = ({ platforms }: Props): JSX.Element => {
  return (
    <HStack marginBlock={1}>
      {platforms.map(({ id, slug }) => {
        return <Icon key={id} as={icons.get(slug)} color='gray.500' />;
      })}
    </HStack>
  );
}

export default PlatformIcons;