/* eslint-disable comma-dangle */

/**
 *
 * @param value
 * @param currency
 * @returns formatted currency
 */
export default function formatCurrency(value: number, currency: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(value);
}
