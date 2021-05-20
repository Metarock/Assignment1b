/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
export const refreshTokenSetup = (res) => {
    // Timing to renew access token 
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000

    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse()
        refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000
        console.log('newAuthRes:', newAuthRes)

        console.log('new auth Token', newAuthRes.id_token)

        // setup the other timer after the first one
        setTimeout(refreshToken, refreshTiming)

    }
    // setup the first refresh timer
    setTimeout(refreshToken, refreshTiming)

}