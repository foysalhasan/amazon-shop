import React from 'react'

const LoginForm = (props) => {
	const { status, isLoggedIn, handleForm, getName, getEmail, getPassword, checkLoggedIn, handlePassReset } = props.formHandling

	return (
		<div className="card bg-white shadow-sm rounded p-4">
			<h4 className="mb-3">
				PLEASE <span className="text-danger fw-bold">{isLoggedIn ? 'LOGIN' : 'REGISTER'}</span>
			</h4>
			<form onSubmit={handleForm}>
				{!isLoggedIn && (
					<div>
						<input onBlur={getName} type="text" placeholder="FULL NAME" className="form-control mb-2" />
					</div>
				)}
				<div>
					<input onBlur={getEmail} type="email" placeholder="EMAIL" className="form-control mb-2" required />
					<input onBlur={getPassword} type="password" placeholder="PASSWORD" className="form-control mb-3" required />
				</div>

				<div className="mb-3 form-check">
					<input type="checkbox" className="form-check-input" id="checkbox" onChange={checkLoggedIn} />
					<label className="form-check-label text-primary" htmlFor="checkbox">
						ALEADY REGISTERED
					</label>
				</div>
				<input type="submit" className="btn btn-danger" value={isLoggedIn ? 'LOGIN' : 'REGISTER'} />
				<button className="ms-1 btn btn-primary" onClick={handlePassReset}>
					RESET PASS
				</button>
				<div className="mt-1">
					<small className={`fw-bold text-uppercase ${status.class}`}>{status.msg}</small>
				</div>
			</form>
		</div>
	)
}

export default LoginForm
