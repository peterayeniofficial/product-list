import React from 'react';
import { Box, Container, Stack } from '@chakra-ui/react';
import Header from '../components/Header';
import ProductTable from '../components/ProductTable/ProductTable';

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
        <ProductTable products={[]} />
      </Stack>
    </Container>
  );
}
