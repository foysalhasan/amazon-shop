import React from 'react'
import { useState } from 'react'

import useAuth from '../../hooks/useAuth'
import UserInfo from '../UserInfo/UserInfo'
import LoginForm from './LoginForm'

const Login = () => {
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const [status, loggedUser, userLogin, userRegistration, passwordReset] = useAuth()

	// INFO: GET INPUT VALUE
	const getName = (e) => {
		const name = e.target.value.toLowerCase()
		setUserName(name)
	}
	const getEmail = (e) => {
		const email = e.target.value.trim().toLowerCase()
		setEmail(email)
	}
	const getPassword = (e) => {
		const password = e.target.value.trim().toLowerCase()
		setPassword(password)
	}

	// INFO: CHECKED LOGGED IN
	const checkLoggedIn = (e) => {
		setIsLoggedIn(e.target.checked)
	}

	// INFO: HANDLE FORM
	const handleForm = (e) => {
		e.preventDefault()
		isLoggedIn ? userLogin(email, password) : userRegistration(userName, email, password)
	}

	const handlePassReset = () => {
		passwordReset(email)
	}

	const formHandling = { status, isLoggedIn, handleForm, getName, getEmail, getPassword, checkLoggedIn, handlePassReset }

	return (
		<div className="container py-5">
			<div className="row justify-content-center">
				<div className="col-lg-4">{loggedUser.displayName ? <UserInfo user={loggedUser}></UserInfo> : <LoginForm formHandling={formHandling}></LoginForm>}</div>
			</div>
		</div>
	)
}

export default Login
