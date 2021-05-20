import React from 'react'
import { useGoogleLogout } from 'react-google-login'

const clientId = '920604998733-jlo1s9knrt4kpaet080pltjt8orengkk.apps.googleusercontent.com'


export const Logout = () => {
    const onLogoutSuccess = () => {
        alert('Logged out successfully')
    }

    const onFailure = () => {
        console.log('Handle Failure cases')
    }

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure
    })

    return (
        <button onClick={signOut} className='button'>
            <img src='icons/google.svg' alt='google login' className='icon'></img>

            <span className='buttonText'>Sign Out</span>
        </button>
    )
}