import React,{useState} from "react";
import {Link} from 'react-router-dom';

export const Header = () => {
    const [active, setActive] = useState(false);

   
	return (
		<div className='section is-centered'>
			<nav className='navbar'>
				<div className='navbar-brand'>
					<div className='navbar-item'>
						<h1 className='title is-1'>Quotes</h1>
					</div>
					<a
						role='button'
						className={active?'navbar-burger is-active':'navbar-burger'}
						aria-label='menu'
						aria-expanded='false'
						data-target='navbarBasicExample'
                        onClick={()=>setActive(!active)}
                        >
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
					</a>
				</div>
				<div className={active?'navbar-menu is-active':'navbar-menu'} >
					<ul className='navbar-end'>
						<Link to='/' className='navbar-item'>Quotes</Link>
						<Link to='/upload' className='navbar-item'>Upload</Link>
                        <Link to='/profile' className='navbar-item'>Profile</Link>
					</ul>
				</div>
			</nav>
		</div>
	);
};
