import { useCart } from '../context/CartContext'

export const useCartCount = () => {
  const { getTotalItems } = useCart()
  return getTotalItems()
}
