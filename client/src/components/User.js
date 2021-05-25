/* eslint-disable no-console */
/* eslint-disable no-restricted-exports */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from "react"

export const User = ({ userData }) => {
  const user = userData
  console.log(user.role)

  return (
    <tr>
      <td>{user.googleId}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.imageUrl}</td>
      <td>{user.role}</td>
    </tr>
  )
}
