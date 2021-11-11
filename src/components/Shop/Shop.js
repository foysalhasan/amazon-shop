import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { addToDB, getDB } from '../../utilities/utility'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './Shop.css'

const Shop = () => {
	const [products, setProducts] = useState([])
	const [filterProducts, setFilterProducts] = useState([])
	const [cart, setCart] = useState([])

	// INFO: LOAD JSON DATA
	useEffect(() => {
		fetch('/products.JSON')
			.then((res) => res.json())
			.then((data) => {
				setProducts(data)
				setFilterProducts(data)
			})
	}, [])

	// INFO: LOAD MORE PRODUCT BUTTON
	const [count, setCount] = useState(6)
	const handleLoadMore = () => {
		setCount(count + 6)
	}

	// INFO: ADD TO CART
	const handleAddCart = (product) => {
		const currProduct = cart.find((pd) => pd.key === product.key)
		const restProduct = cart.filter((pd) => pd.key !== product.key)
		let finalProduct = []
		if (currProduct) {
			currProduct.quantity = currProduct.quantity + 1
			finalProduct = [...restProduct, currProduct]
		} else {
			product.quantity = 1
			finalProduct = [...cart, product]
		}
		setCart(finalProduct)
		addToDB(product.key)
	}

	// INFO: DATA LOAD FROM LOCAL STORAGE
	useEffect(() => {
		if (products.length) {
			const localCart = getDB()
			const storedCart = []
			for (const key in localCart) {
				const matchedProduct = products.find((pd) => pd.key === key)
				matchedProduct.quantity = localCart[key]
				storedCart.push(matchedProduct)
			}
			setCart(storedCart)
		}
	}, [products])

	// INFO: PRODUCT SEARCH

	const handleSearch = (e) => {
		const keywords = e.target.value.trim().toLowerCase()
		const matchedProducts = products.filter((pd) => pd.name.toLowerCase().includes(keywords))
		setFilterProducts(matchedProducts)
	}

	return (
		<div className="container my-4">
			<div className="row justify-content-center align-items-center">
				<div className="col-lg-9">
					<div className="product__search">
						<input type="text" placeholder="SEARCH PRODUCT" className="form-control mx-auto my-4 pd__search" onChange={handleSearch} />
					</div>
					<div className="row gy-4">
						{filterProducts.slice(0, count).map((product) => (
							<Product handleAddCart={handleAddCart} product={product} key={product.key}></Product>
						))}
					</div>
					<div className="text-center mt-3">
						{filterProducts.length && (
							<button className="btn btn-danger" onClick={handleLoadMore}>
								LOAD MORE
							</button>
						)}
					</div>
				</div>
				<div className="col-lg-3">
					<Cart cart={cart}>
						<Link to="/order-review">
							<button className="btn btn-warning px-5 fw-bold">REVIEW ORDER</button>
						</Link>
					</Cart>
				</div>
			</div>
		</div>
	)
}

export default Shop
