import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        euser,
        eloading,
        eerror,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    if (user) {
        console.log(user)
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

        signInWithEmailAndPassword(email, password)
    };
    return (
        <div className='flex justify-center items-center h-screen' >
            <div className=" card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                       <p className='text-red-500 mb-5'> {getErrors}</p>
                        <input className=' btn w-full max-w-xs' type="submit" />

                    </form>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline">SignIn With Google </button>
                </div>

            </div>
        </div>
    );
};

export default Login;