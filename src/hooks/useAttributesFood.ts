const useAttributesFood = () => {
  const formatPrice = (price = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: "BRL"
    }).format(price);
  };

  return { formatPrice };
};

export default useAttributesFood;
