export function getTotalPrice(list) {
  return list.reduce(
    (accumulator, cartItem) =>
      accumulator + cartItem.product.price * cartItem.quantity,
    0
  );
}
export function getSortedData(productList, sortBy) {
  if (sortBy === "PRICE_HIGH_TO_LOW") {
    return [...productList].sort((a, b) => b.price - a.price);
  } else if (sortBy === "PRICE_LOW_TO_HIGH") {
    return [...productList].sort((a, b) => a.price - b.price);
  } else return productList;
}

export function getFilteredData(productList, filterType) {
  let filteredData = productList
    .filter(({ inStock }) => (filterType.includeOutOfStock ? true : inStock))
    .filter(({ isFastDelivery }) =>
      filterType.fastDelivery ? isFastDelivery : true
    )
    .filter(({ offer }) => (filterType.offerOnly ? offer > 0 : true));

  let filteredDataWithRating = filteredData;

  filterType.ratings.sort().reverse().forEach(ratingSelected => {
    filteredData= filteredDataWithRating.filter(({ rating }) => rating >= ratingSelected);
  });
  
  return filteredData;
}
