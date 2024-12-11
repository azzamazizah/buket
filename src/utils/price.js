/**
 * Format price in IDR currency
 * @param {number} price - Price in IDR
 * @returns {string} Formatted price
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(price)
}