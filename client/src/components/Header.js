import React, { useState,useEffect,useContext } from "react";
import { Link,useHistory } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

export const Header = () => {
	const [active, setActive] = useState(false);
	const [user, setUser] = useState(null);
	const history = useHistory();
	const authContext = useContext(AuthContext);
	const {userEmail, logout} = authContext;

	useEffect(()=>{
		if(userEmail !== null){
			setUser(userEmail);
		}
	});


	

	return (
		<div className='section is-centered'>
			<nav className='navbar'>
				<div className='navbar-brand'>
					<div className='navbar-item'>
						<h1 className='title is-1'>Quotes</h1>
					</div>
					<a
						role='button'
						className={active ? "navbar-burger is-active" : "navbar-burger"}
						aria-label='menu'
						aria-expanded='false'
						data-target='navbarBasicExample'
						onClick={() => setActive(!active)}>
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
					</a>
				</div>
				<div className={active ? "navbar-menu is-active" : "navbar-menu"}>
					<ul className='navbar-end'>
						<li>
							<Link to='/' className='navbar-item'>
								Quotes
							</Link>
						</li>
						{user ? (
							<>
								<li>
									<Link to='/upload' className='navbar-item'>
										Upload
									</Link>
								</li>
								<li>
									<Link to='/dashboard' className='navbar-item'>
										Dashboard
									</Link>
								</li>
								<li className='button has-text-white has-background-black' onClick={() => {
									logout();
									setUser(null);
								}}>
									<i className='fas fa-sign-out-alt'></i> Log Out
								</li>
							</>
						) : (
							<>
								<li className='button has-text-white has-background-black' onClick={()=>{
									history.push('/login')
								}} >
									<i className='fas fa-sign-in-alt'></i>{" "} Log In
								</li>
							</>
						)}
					</ul>
				</div>
			</nav>
		</div>
	);
};
