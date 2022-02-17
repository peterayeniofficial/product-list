/**
 *
 * * truncate text to a certain length
 * @param text
 * @param length
 * @returns text truncated to length
 */

export default function truncateText(text: string, length: number) {
  if (text.length <= length) {
    return text;
  }
  return `${text.substring(0, length)}...`;
}
