/* eslint-disable object-curly-newline */
import React from 'react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from '@chakra-ui/react';

interface Product {
  nama: string;
  description: string;
  price: number;
  visible: boolean;
}

interface ProductTableProps {
  products: Product[];
}

export default function ProductTable({ products }: ProductTableProps) {
  console.log(products);
  return (
    <Table variant="striped" colorScheme="teal">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Description</Th>
          <Th>Visible</Th>
          <Th isNumeric>Price</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td fontWeight="extrabold">10 Day Pass</Td>
          <Td>10 full days at Kalkio Space.</Td>
          <Td>True</Td>
          <Td isNumeric>$10</Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Total Products: 25</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}
