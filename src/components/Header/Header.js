import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HelloContext } from '../../context/HelloContext'
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
	const value = useContext(HelloContext)
	console.log(value)
	return (
		<div className="bg-warning text-white py-2">
			<div className="container">
				<div className="row justify-content-center justify-content-lg-between align-items-center">
					<div className="col-lg-3">
						<div className="logo">
							<Link to="/">
								<img src={logo} alt="Header__logo" className="w-50 d-block mx-auto mx-lg-0" />
							</Link>
						</div>
					</div>
					<div className="col-lg-9">
						<nav className="d-flex justify-content-end">
							<NavLink className="nav-link active text-dark" to="/shop">
								SHOP
							</NavLink>
							<NavLink className="nav-link text-dark" to="/order-review">
								REVIEW ORDER
							</NavLink>

							<NavLink className="nav-link text-dark" to="/login">
								LOGIN
							</NavLink>
						</nav>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
