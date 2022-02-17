/* eslint-disable object-curly-newline */
import React from 'react';
import { Box, Container, Stack, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import Header from '../components/Header';
import ProductTable from '../components/ProductTable/ProductTable';
import { getAllProducts } from '../services/api';

export default function ProductLists() {
  const { data, isLoading, error } = useQuery('products', getAllProducts);

  const products = data?.Records;

  return (
    <Container maxW="3xl">
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Header title="Product List" />
        <ProductTable products={products} />
      </Stack>
    </Container>
  );
}
