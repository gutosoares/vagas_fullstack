const truncate = value => value.length > 5 ? `${value.substring(0, 55)}...` : value

const formatPrice = (value) => {
  const val = (value / 1).toFixed(2).replace('.', ',')
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export {
  truncate,
  formatPrice
}
