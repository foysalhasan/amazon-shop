import React from 'react'
import { Link } from 'react-router-dom'

const ReviewItem = (props) => {
	const { name, img, key } = props.product

	return (
		<li className="list-group-item d-flex flex-column flex-lg-row justify-content-between align-items-center">
			<div className="list__info">
				<Link className="text-decoration-none" to={`/product/${key}`}>
					<h6 className="fw-normal mb-3">{name}</h6>
				</Link>

				<div
					className="btn btn-danger btn-sm"
					onClick={() => {
						props.handleRemove(key)
					}}
				>
					REMOVE
				</div>
			</div>
			<div className="list-photo">
				<img src={img} alt="" className="d-block rounded" />
			</div>
		</li>
	)
}

export default ReviewItem
