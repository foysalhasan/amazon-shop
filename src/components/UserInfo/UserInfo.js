import React from 'react'

const UserInfo = (props) => {
	const { displayName, email } = props.user
	return (
		<div className="card p-4 bg-white rounded">
			<h4 className="text-uppercase">
				Hello, <span className="text-danger">{displayName}</span>
			</h4>
			<p>
				Your Email Address is <span className="text-success">{email}</span>
			</p>
		</div>
	)
}

export default UserInfo
