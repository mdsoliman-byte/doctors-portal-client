import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        euser,
        eloading,
        eerror,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    if (user || euser) {
        console.log(user || euser)
    }

    if (loading || eloading) {
        return <Loading></Loading>
    }
    let getErrors;
    if (error || eerror) {
        getErrors = error?.message || eerror?.message;
    }
    const onSubmit = (data) => {
        const { email, password } = data;

        createUserWithEmailAndPassword(email, password)
    };
    return (
        <div className='flex justify-center items-center h-screen' >
            <div className=" card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Registration</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>

                            </label>
                            <input type="text" placeholder=" Enter Your Name" class="input input-bordered w-full max-w-xs" {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name Is Required"
                                },

                            })} />
                            <label class="label">
                                {errors.name?.type === "required" && <span class="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input type="email" placeholder=" Enter Your Email" class="input input-bordered w-full max-w-xs" {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email Is Required"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: "Provide A valid Email"
                                }
                            })} />
                            <label class="label">
                                {errors.email?.type === "required" && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === "pattern" && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>
                            <input type="password" placeholder=" Enter Your Password" class="input input-bordered w-full max-w-xs" {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password Is Required"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Password musr be 6 carector"
                                }
                            })} />
                            <label class="label">
                                {errors.password?.type === "required" && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === "minLength" && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <p className='text-red-500 mb-5 '> {getErrors}</p>
                        <input className=' btn w-full max-w-xs' type="submit" />
                        <p>Already Have A Account <Link to="/login">Please Login </Link></p>

                    </form>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline">SignIn With Google </button>
                </div>

            </div>
        </div>
    );
};

export default Registration;