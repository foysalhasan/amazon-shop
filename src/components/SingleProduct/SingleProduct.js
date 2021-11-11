import React from 'react'
import Rating from 'react-rating'
import { useState } from 'react'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router'

const SingleProduct = () => {
	const { key } = useParams()
	const history = useHistory()
	const [product, setProduct] = useState({})

	useEffect(() => {
		fetch('/products.JSON')
			.then((res) => res.json())
			.then((data) => {
				const result = data.find((data) => data.key === key)
				setProduct(result)
			})
	}, [key])

	const handleGoBack = () => {
		history.goBack()
	}

	return (
		<div className="container py-5">
			<div className="row justify-content-center">
				<div className="col-lg-8">
					<div className="card p-2 p-lg-4 bg-white rounded shadow-sm">
						<div className="w-25 mx-auto ">
							<img src={product.img} alt="" className="w-100 d-block" />
						</div>
						<h6 className="text-dark mb-4 text-center">{product.name}</h6>
						<div className="text-center">
							<span className="badge bg-dark px-4 py-2 me-2">{product.price}</span>
							<span className="badge bg-warning text-dark px-4 py-2 me-2">
								<Rating emptySymbol={'far fa-star'} fullSymbol={'fas fa-star'} initialRating={product.star} readonly />
							</span>
							<span className="badge bg-dark px-4 py-2 me-2 mt-2 mt-md-0">{product.category}</span>
						</div>
						<div className="card-body">
							<p>
								There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
								randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
								anything embarrassing hidden in the middle of text.
							</p>
							<p className="d-none d-md-block">
								All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the
								Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which
								looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
							</p>
						</div>
					</div>
					<div className="text-center mt-3">
						<button className="btn btn-danger" onClick={handleGoBack}>
							GO BACK
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SingleProduct
