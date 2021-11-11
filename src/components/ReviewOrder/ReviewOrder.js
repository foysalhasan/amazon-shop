import React from 'react'
import { useHistory } from 'react-router'
import { HelloContext } from '../../context/HelloContext'
import useCart from '../../hooks/useCart'
import useProduct from '../../hooks/useProduct'
import { clearDB, removeItem } from '../../utilities/utility'
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem'

const ReviewOrder = () => {
	const [products] = useProduct()
	const [cart, setCart] = useCart(products)
	const history = useHistory()

	const handleRemove = (key) => {
		const restItems = cart.filter((pd) => pd.key !== key)
		setCart(restItems)
		removeItem(key)
	}

	const handleOrder = () => {
		if (!cart.length) return
		history.push('/placeorder')
		clearDB()
		setCart([])
	}

	// const isCartEmpty = !cart.length ? true : false
	const user = 'sagor'
	return (
		<HelloContext.Provider value={user}>
			<div className="container my-5">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="card bg-white p-4 rounded shadow-sm">
							<ul className="list-group">
								{cart.length ? (
									cart.map((pd) => <ReviewItem handleRemove={handleRemove} product={pd} key={pd.key}></ReviewItem>)
								) : (
									<h4 className="text-danger mb-0">YOUR CART IS EMPTY !</h4>
								)}
							</ul>
						</div>
					</div>
					<div className="col-lg-4">
						<Cart cart={cart}>
							<button className="btn btn-warning px-5 fw-bold" onClick={handleOrder}>
								PLACE ORDER
							</button>
						</Cart>
					</div>
				</div>
			</div>
		</HelloContext.Provider>
	)
}

export default ReviewOrder
