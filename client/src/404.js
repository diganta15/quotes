import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
	return (
		<div className='container is-centered'>
			<h1 className='title has-text-black has-text-centered'>
				{" "}
				<i className='fas fa-exclamation-triangle'></i> 404
			</h1>
			<p className='has-text-centered is-size-4'> Page Not Found</p>
			<p className='has-text-centered is-size-7 mt-2'>
				<Link to='/' className='has-text-primary'>
					Return to homepage?
				</Link>
			</p>
		</div>
	);
};
