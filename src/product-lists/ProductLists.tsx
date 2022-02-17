import React from 'react';
import { Box, Container, Stack } from '@chakra-ui/react';
import Header from '../components/Header';

export default function ProductLists() {
  return (
    <Container maxW="3xl">
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Header title="Product List" />
      </Stack>
    </Container>
  );
}
