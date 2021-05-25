/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-else-return */

import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { EvidenceCard } from "./EvidenceCard"

export const ShowEvidenceResults = props => {
  const [searchParameters, setSearchParameters] = useState({})
  const [searchResults, setSearchResults] = useState([{}])
  const [sortingOption, setSortingOption] = useState()

  let displayItems

  useEffect(() => {
    console.log("ShowEvidencePage Loaded!")
    console.log(props.location.searchParams)
    if (props.location.searchParams) {
      console.log("there is props")
      setSearchParameters(props.location.searchParams)
    }

    // Ideally get the key of the object that is parsed into this component
    // via props.location.searchParams and then get the key/value pairs into the
    // searchParameters state so that attributes can be accessed directly
    // console.log(Object.keys(searchParameters));

    // New info: change to statement above ^
    // Actually, it is a matter of using a triple dot operator as the prop
    // is actually an object inside an object rather than replacing the object
    // with the object's attributes

    axios
      .get("./api/evidences/")
      .then(res => {
        console.log(`Print-ShowEvidenceResults-API-response: ${res.data}`)
        console.log(`The res data: ${res.data}`)
        setSearchResults(res.data)
      })
      .catch(err => {
        console.log(`Error from Show Evidence Results${err.name}`)
      })
  }, [props.location.searchParams])

  console.log(searchParameters.seMethod)

  // On option change
  const onOpChange = e => {
    setSortingOption(e.target.value)
  }

  // Filter Results:
  const filterResults = data => {
    const newResults = []
    console.log(data)
    data.forEach(element => {
      if (
        element.sePractice === searchParameters.seMethod &&
        element.claim === searchParameters.claim &&
        element.year >= searchParameters.startYear &&
        element.year <= searchParameters.endYear
      ) {
        newResults.push(element)
      }
    })
    return newResults
  }

  // Sort reults based on the user's choice
  const sortResults = () => {
    const sortOption = sortingOption
    console.log(`Search result being sorted: ${sortOption}`)
    const results = filterResults(searchResults)
    console.log(`the results: ${results}`)
    const sortedResults = results

    // Sort by the year
    if (sortOption === "year") {
      sortedResults.sort((a, b) => a.year - b.year)
      console.log(sortedResults)
      // Sort by the title
    } else if (sortOption === "title") {
      sortedResults.sort((a, b) => {
        if (a.title < b.title) {
          return -1
        } else if (a.title > b.title) {
          return 1
        } else {
          return 0
        }
      })
      // Sort by the author
    } else if (sortOption === "author") {
      sortedResults.sort((a, b) => {
        if (a.author < b.author) {
          return -1
        } else if (a.author > b.author) {
          return 1
        } else {
          return 0
        }
      })
    }

    displayItems = (
      <table className="table text-light">
        {sortedResults.map((result, k) => (
          <EvidenceCard evidenceData={result} key={k} />
        ))}
      </table>
    )
  }

  if (searchResults) {
    const results = filterResults(searchResults)
    console.log(results)
    if (results.length > 0) {
      if (sortingOption != null) {
        sortResults()
      } else {
        displayItems = (
          <table className="table text-light">
            {results.map((result, k) => (
              <EvidenceCard evidenceData={result} key={k} />
            ))}
          </table>
        )
      }
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
            <h1 className="display-2">SEEDS</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-right">
            <p className="lead d-inline">Sort by: </p>
            <select id="sorting" onChange={onOpChange} className="d-inline">
              <option hidden selected value>
                Sort
              </option>
              <option value="title">Title</option>
              <option value="author">Author</option>
              <option value="year">Year</option>
            </select>
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
