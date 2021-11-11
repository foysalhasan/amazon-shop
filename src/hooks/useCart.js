import { useEffect, useState } from 'react'
import { getDB } from '../utilities/utility'

const useCart = (products) => {
	const [cart, setCart] = useState([])
	useEffect(() => {
		if (products.length) {
			const localCart = getDB()
			let storedCart = []
			for (const key in localCart) {
				const savedProduct = products.find((pd) => pd.key === key)
				if (savedProduct) {
					savedProduct.quantity = localCart[key]
					storedCart.push(savedProduct)
				}
			}
			setCart(storedCart)
		}
	}, [products])
	return [cart, setCart]
}

export default useCart
