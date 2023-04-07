import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthenContext } from '../../Authentication/AuthContext';
import useToken from '../../Hooks/useTokenHook/useToken';

const SignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createdUserEmail, setCreatedUserEmail] = useState(null);
    const [token] = useToken(createdUserEmail);
    const { createUser } = useContext(AuthenContext);

    // if(token){
    //     navigate('/')
    // }

    const onSubmit = data => {
        const image = data.image[0];
        console.log(image)
        const email = data.email;
        const password = data.password;

        createUser(email, password)
        .then(data => {
            console.log('user created successfully')
        })
        .then(err => console.log(err));

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=d1fbaa0b9f043f285b08e6d997b387ef`;
        //conver image to link with imagebb

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                const userInfo = {
                    phone: data.phone,
                    email: data.email,
                    password: data.password,
                    image: imageData
                }

                fetch(`http://localhost:5000/user`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => setCreatedUserEmail(email))
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
                                <label>Phone</label><br />
                                <input type='number' className='input input-bordered w-full' {...register("phone", { required: true })} />
                            </div>
                            <div>
                                <label>Password</label><br />
                                <input className='input input-bordered w-full' {...register("password", { required: true })} />
                            </div>
                            <div>
                                <label>Image</label><br />
                                <input type='file' className='input input-bordered' {...register("image", { required: true })} />
                            </div>
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className='btn btn-primary' type="submit" />
                            <p>New To this website? <Link to={'/login'} className='text-primary'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;