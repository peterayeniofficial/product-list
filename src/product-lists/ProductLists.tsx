/* eslint-disable object-curly-newline */
import React from 'react';
import { Box, Container, Stack, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import Header from '../components/Header';
import ProductTable from '../ProductTable/ProductTable';
import { getAllProducts } from '../services/api';

export default function ProductLists() {
  const { data, isLoading, isError } = useQuery('products', getAllProducts);

  const products = data?.Records;
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>Error Loading Data</Text>;
  }

  return (
    <Container maxW="2xl">
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Header title="Products List" />
        <ProductTable products={products} />
      </Stack>
    </Container>
  );
}
