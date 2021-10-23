import React,{useState, useContext} from "react";
import AuthContext from "../context/auth/authContext";

export const RegisterForm = () => {
    const [data, setData] = useState({
        name:"",
        email:"",
        password:"",
        passwordConfirm:""
    });

	const authContext = useContext(AuthContext);
	const {signup} = authContext;

    const onChange = (e)=>{
        data[e.target.name] = e.target.value;
     
    }
    //Submit data
	const onSubmit = (e) => {
		e.preventDefault();
       const {password, passwordConfirm} = data;
       if(password===passwordConfirm){
		   delete data.passwordConfirm;
          signup(data);
       }
       else{
           console.log('No Match');
       }
	};

	return (
		<div className='container is-centered'>
			<form onSubmit={onSubmit} className='form'>
				<div className='field'>
					<label htmlFor='label' className='label'>
						Name
					</label>
					<input
						type='text'
						name='name'
						className='input'
						placeholder='Name'
                        onChange={onChange}
						required
					/>
				</div>
				<div className='field'>
					<label htmlFor='label' className='email'>
						Email
					</label>
					<input
						type='email'
						name='email'
						className='input'
						placeholder='Email'
                        onChange={onChange}
						required
					/>
				</div>
				<div className='field'>
					<label htmlFor='label' className='password'>
						Password
					</label>
					<input
						type='password'
						name='password'
						className='input'
						placeholder='Password'
                        onChange={onChange}
						required
					/>
				</div>
				<div className='field'>
					<label htmlFor='label' className='password'>
						Confirm Password
					</label>
					<input
						type='password'
						name='passwordConfirm'
						className='input'
						placeholder='Password'
                        onChange={onChange}
						required
					/>
				</div>

				<input type='submit' value='Submit' className='button is-primary' />
			</form>
		</div>
	);
};
