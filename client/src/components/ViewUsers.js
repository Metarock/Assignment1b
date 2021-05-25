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
import React, { useState, useEffect } from "react"
import { useGoogleLogin } from "react-google-login"
import axios from "axios"
import { User } from "./User"

export const ViewUsers = () => {
  const [display, setDisplay] = useState([{}])

  let displayItems

  useEffect(() => {
    axios
      .get("./api/googles")
      .then(res => {
        console.log("Got users details")
        setDisplay(res.data)
      })
      .catch(err => {
        console.log(`Error from View Users ${err.name}`)
      })
  }, [])

  if (display) {
    const results = display
    console.log(results)
    if (results.length > 0) {
      displayItems = (
        <table className="table text-light">
          {results.map((result, k) => (
            <User userData={result} key={k} />
          ))}
        </table>
      )
    } else {
      displayItems = <h2 className="lead text-light">No Results Found</h2>
    }
    // eslint-disable-next-line no-console
    console.log("There are results returned")
  }

  return (
    <div className="box bg-dark">
      <div
        id="result-container"
        className="container-fluid bg-dark text-light"
        style={{ height: "100%" }}
      >
        <div className="row">
          <div className="col-12">{/* Nav bar here? */}</div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className="display-2">Users</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="container-fluid">{displayItems}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
