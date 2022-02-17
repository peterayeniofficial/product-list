import React from 'react';
import { Heading } from '@chakra-ui/react';

interface HeaderProps {
  title: string;
}
/**
 ** Header component
 * @param title - title of the header
 */
export default function Header({ title }: HeaderProps) {
  return (
    <Heading
      fontWeight={600}
      fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
      lineHeight="110%"
    >
      {title}
    </Heading>
  );
}
