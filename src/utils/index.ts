export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: "BRL"
  }).format(price);
};

export const getTotalPrice = (items: MenuItem[]) => {
  return items.reduce((acc, currentValue) => {
    return (acc += currentValue.preco!)
  }, 0)
};
