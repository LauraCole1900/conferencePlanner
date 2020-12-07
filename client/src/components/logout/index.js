import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './index.css';


const Logout = () => {
	const { logout, isAuthenticated } = useAuth0();
	return (
		isAuthenticated && (
			<div >
				<div className="container">

					<button onClick={() => logout()} className="Logout-button">Log Out</button>
				</div>
			</div>
		)
	)
}

export default Logout