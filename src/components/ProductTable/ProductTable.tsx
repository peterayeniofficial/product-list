/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
import React from 'react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from '@chakra-ui/react';
import truncateText from '../../utils/truncateText';
import formatCurrency from '../../utils/formatCurrency';

interface Product {
  Name: string;
  Description: string;
  Visible: boolean;
  Price: number;
  ID: number;
  CurrencyCode: string;
}

interface ProductTableProps {
  products: Product[];
}

export default function ProductTable({ products }: ProductTableProps) {
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
        {products.map((product) => (
          <Tr key={product.ID}>
            <Td fontWeight="extrabold">{product.Name}</Td>
            <Td>{truncateText(product.Description, 10)}</Td>
            <Td>{product.Visible ? 'Yes' : 'No'}</Td>
            <Td isNumeric>
              {formatCurrency(product.Price, product.CurrencyCode)}
            </Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Total: {products.length}</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}
