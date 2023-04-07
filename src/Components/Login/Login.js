import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthenContext } from '../../Authentication/AuthContext';

const Login = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const {LoginUser} = useContext(AuthenContext)

    const onSubmit = data => {
        console.log(data)
        LoginUser(data.email, data.password)
        .then(data => {
            console.log('user Login successfully')
        })
        .then(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">
                    <div className="card  w-full  shadow-2xl bg-base-100">

                        <form className='grid grid-cols-1 gap-4 p-10' onSubmit={handleSubmit(onSubmit)}>

                            <div>
                                <label>email</label><br />
                                <input className='input input-bordered w-full' {...register("email", { required: true })} />
                            </div>
                            <div>
                                <label>Password</label><br />
                                <input className='input input-bordered w-full' {...register("password", { required: true })} />
                            </div>
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className='btn btn-primary' type="submit" />
                            <p>New To this website? <Link to={'/signup'} className='text-primary'>SignUp</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;