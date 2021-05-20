import React from 'react'
import { useGoogleLogout } from 'react-google-login'

import { useGoogleLogin } from 'react-google-login'

export const Logout = () => {
    const onLogoutHooks = () => {
        alert('Logged out successfully')
    }

    const onFailure = () =>{
        console.log('Handle Failure cases')
    }
}