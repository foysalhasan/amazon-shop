import { useState } from 'react'
import { firbaseInIt } from '../firebase/firebaseInIt'
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	sendEmailVerification,
	sendPasswordResetEmail,
} from 'firebase/auth'

firbaseInIt()

const useAuth = () => {
	const [status, setStatus] = useState({})
	const [loggedUser, setLoggedUser] = useState({})

	const auth = getAuth()
	const userRegistration = (userName, email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(() => {
				updateUser(userName)
				verifyUser()
				setStatus({
					msg: 'REGISTRATION SUCCESSFULL. VERIFICATION EMAIL SENT !!!',
					class: 'text-success',
				})
				setTimeout(() => {
					setStatus({})
				}, 3000)
			})
			.catch((error) => {
				setStatus({
					msg: error.message,
					class: 'text-danger',
				})
			})
		// e.target.reset()
	}

	const userLogin = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				const { user } = result
				if (user.emailVerified) {
					setStatus({
						msg: 'LOGIN SUCCESSFULL !',
						class: 'text-success',
					})
					console.log(`Welcome Back, ${user.displayName ? user.displayName : 'User'}`)
					setLoggedUser(user)
				} else {
					setStatus({
						msg: 'VERIFY YOUR EMAIL FIRST !',
						class: 'text-danger',
					})
				}
			})
			.catch((error) => {
				setStatus({
					msg: error.message,
					class: 'text-danger',
				})
			})
	}

	const updateUser = (userName) => {
		updateProfile(auth.currentUser, {
			displayName: userName,
		})
			.then(() => {
				// PROFILE UPDATED
			})
			.catch((error) => {
				console.log(error.message)
			})
	}

	const verifyUser = () => {
		sendEmailVerification(auth.currentUser)
			.then(() => {})
			.catch((error) => {
				setStatus({
					msg: error.message,
					class: 'text-danger',
				})
			})
	}

	const passwordReset = (email) => {
		sendPasswordResetEmail(auth, email)
			.then(() => {
				setStatus({
					msg: 'PASSORD RESET EMAIL SENT !',
					class: 'text-success',
				})
			})
			.catch((error) => {
				setStatus({
					msg: error.message,
					class: 'text-danger',
				})
			})
	}

	// INFO: RETURN FROM FUNCTION
	return [status, loggedUser, userLogin, userRegistration, passwordReset]
}

export default useAuth
