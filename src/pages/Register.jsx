import React from 'react'
import useFetch from '../hooks/useFetch'
import { useForm } from 'react-hook-form'
import useAuthentication from '../hooks/useAuthentication'
import defaultRegisterValues from '../components/utils/defaultRegisterValues'
import { Link } from 'react-router-dom'

const Register = () => {

    const { register, handleSubmit, reset } = useForm()

    const { createNewUser } = useAuthentication()

    const sumit = data => {
        createNewUser(data)
        reset(defaultRegisterValues)

    }

    return (
        <div className="form__user">
            <div className="form__user-container">
                <form onSubmit={handleSubmit(sumit)}>
                    <h2>Create a new User</h2>
                    <div className='input__container'>
                        <label htmlFor="firstName">First Name</label>
                        <input {...register('firstName')} type="text" id='firstName' />
                    </div>
                    <div className='input__container'>
                        <label htmlFor="lasttName">Last Name</label>
                        <input {...register('lastName')} type="text" id='lasttName' />
                    </div>
                    <div className='input__container'>
                        <label htmlFor="email">Email</label>
                        <input {...register('email')} type="text" id='email' />
                    </div>
                    <div className='input__container'>
                        <label htmlFor="password">Password</label>
                        <input {...register('password')} type="text" id='password' />
                    </div>
                    <div className='input__container'>
                        <label htmlFor="phone">Phone</label>
                        <input {...register('phone')} type="tel" id='phone' />
                    </div>
                    <button>Register</button>
                </form>
                <p>Already have an account?<span><a href=""><Link to="/login">Log in</Link></a></span></p>
            </div>
        </div>
    )
}

export default Register