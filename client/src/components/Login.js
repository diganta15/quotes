import React,{useState} from 'react';

export const Login = () => {
    const [data, setData] = useState({});

    const onChange = (e) =>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(data);
    }


    return (
        <div className="container is-centered login">
            
            <div className="box is-centered is-flex is-flex-direction-column ml-6 mr-6">
                <div className="is-size-3 ml-auto mr-auto">LOGIN</div>
                <form onSubmit={onSubmit} className="form">
                    <div className="field ml-6 mr-6">
                        <label htmlFor="name" className="label">Username</label>
                        <input type="text" name="username" className="input" onChange={onChange} placeholder="Username" />
                    </div>
                    <div className="field ml-6 mr-6">
                        <label htmlFor="name" className="label">Password</label>
                        <input type="password" name="password" className="input" onChange={onChange} placeholder="Password" />
                    </div>
                    <div className="is-centered ml-auto mr-auto has-text-centered">
                        <input type="submit" className="button is-primary" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}
