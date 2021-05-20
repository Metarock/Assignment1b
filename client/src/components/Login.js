import React from 'react'
import { useGoogleLogin } from 'react-google-login'


// refresh token 
import { refreshTokenSetup } from '../utils/refreshToken'

const clientId = '920604998733-jlo1s9knrt4kpaet080pltjt8orengkk.apps.googleusercontent.com'

export const Login = () => {
    const onSuccess = (res) => {
        console.log("Login sucessful: currentUser: ", res.profileObj)
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
        <button onClick={signIn} className='Button'>
            <img src='icons/google.svg'></img>
            <span className='buttonText'> Sign in with Google </span>
        </button>
    )
}
