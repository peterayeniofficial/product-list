/* eslint-disable comma-dangle */
import { encode } from 'base-64';

export const getAllProducts = async () => {
  const username = 'adrian+1004930927@nexudus.com';
  const password = '9h3A3klZXz5W';
  const response = await fetch(
    'https://spaces.nexudus.com/api/billing/products?page=1&size=25',
    {
      headers: new Headers({
        Authorization: `Basic ${encode(`${username}:${password}`)}`,
      }),
    }
  );
  if (response.status !== 200) {
    throw new Error('Error fetching products');
  }
  return response.json();
};
