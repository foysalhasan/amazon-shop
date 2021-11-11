import React from 'react'
import './Cart.css'

const Cart = (props) => {
	// INFO: GET PRODUCT QUANTIY
	const cart = props.cart
	let quantity = 0
	for (const item of cart) {
		if (!item.quantity) item.quantity = 1
		quantity += item.quantity
	}

	// INFO: CART CALCULATION
	const reducer = (acc, curr) => acc + curr.price
	const price = cart.reduce(reducer, 0) * quantity
	const tax = price * 0.04
	const shipping = price * 0.05
	const total = price + tax + shipping

	return (
		<div className="card bg-white p-4 rounded shadow-sm cart__comp">
			<h5 className="text-center">
				ITEM ADDED: <span className="text-danger">{quantity}</span>
			</h5>
			<ul className="list-group">
				<li className="list-group-item">
					TOTAL PRICE: <span className="text-danger fw-bold">{price.toFixed(2)}$</span>
				</li>
				<li className="list-group-item">
					TAX: <span className="text-danger fw-bold">{tax.toFixed(2)}$</span>
				</li>
				<li className="list-group-item">
					SHIPPING: <span className="text-danger fw-bold">{shipping.toFixed(2)}$</span>
				</li>
				<li className="list-group-item">
					GRAND TOTAL: <span className="text-danger fw-bold">{total.toFixed(2)}$</span>
				</li>
			</ul>
			<div className="text-center mt-4">{props.children}</div>
		</div>
	)
}

export default Cart
