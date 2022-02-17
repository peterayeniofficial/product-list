/* eslint-disable comma-dangle */
import { encode } from 'base-64';

export const getAllProducts = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}/products?page=1&size=25`,
    {
      headers: new Headers({
        Authorization: `Basic ${encode(
          `${process.env.REACT_APP_USER_NAME}:${process.env.REACT_APP_PASSWORD}`
        )}`,
      }),
    }
  );
  if (response.status !== 200) {
    throw new Error('Error fetching products');
  }
  return response.json();
};
