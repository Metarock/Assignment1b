/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-else-return */
/* eslint no-undef: "error" */
/* global _ */
import React from 'react'
import { useGoogleLogin } from 'react-google-login'
import axios from "axios"

// refresh token 
import { refreshTokenSetup } from '../utils/refreshToken'

const clientId = '920604998733-jlo1s9knrt4kpaet080pltjt8orengkk.apps.googleusercontent.com'

export const Login = () => {

    // Check get request, if user already exists in our database.

    const onSuccess = (res) => {
        console.log("Login sucessful: currentUser: ", res.profileObj)

        const data = {
            googleId: res.profileObj.googleId,
            name: res.profileObj.name,
            email: res.profileObj.email,
            imageUrl: res.profileObj.imageUrl,
            role: "user",
        }

        axios
            .post("/api/googles", data)
            .then(() => {
                console.log("Google data submit successful")
            })
            .catch(err => {
                console.log(`Error submitting evidence ${err.name}, it either exists or boop`)
            })
        refreshTokenSetup(res)
    }

    const onFailure = (res) => {
        console.log('Login failed: res: ', res)
    }

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline'
    })


    return (

        <div className="container-fluid bg-light text-light" >
            <button type='button' onClick={signIn} className='btn btn-social'>
                <img src='icons/google.svg' alt='sign in'></img>
                <span className='buttonText'> Sign in with Google </span>
            </button>
        </div>
    )
}
