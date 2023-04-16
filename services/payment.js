export const changeCount = (increaseBy, itemCount, totalPrice) => {
  itemCount = itemCount + increaseBy;
  return itemCount;
};

export const totalPriceCount = (itemPrice, totalPrice) => {
  totalPrice = totalPrice + itemPrice;
  return totalPrice;
};
