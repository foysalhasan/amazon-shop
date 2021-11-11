import React from 'react'
import { NavLink } from 'react-router-dom'
import './Product.css'
const Product = (props) => {
	const { name, seller, img, price, key } = props.product
	const { handleAddCart } = props
	return (
		<div className="col-lg-4">
			<div className="card bg-white rounded border border-warning">
				<div className="p-4">
					<img src={img} alt="product pic" className="rounded" style={{ height: '250px', objectFit: 'cover' }} />
				</div>
				<div className="card-header">
					<NavLink to={`product/${key}`} style={{ textDecoration: 'none' }}>
						<h6 className="text-uppercase  text-dark product__name">{name.slice(0, 70)}...</h6>
					</NavLink>
					<div className="">
						<span className="badge bg-danger me-1">PRICE: {price}</span>
						<span className="badge bg-success me-1">SELLER: {seller}</span>
					</div>
				</div>
				<div className="card-body">
					<button
						className="btn btn-secondary"
						onClick={() => {
							handleAddCart(props.product)
						}}
					>
						<i className="fas fa-shopping-basket me-1"></i>
						<span>ADD TO CART</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Product
