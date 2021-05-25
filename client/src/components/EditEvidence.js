/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react"
import Select from "react-select"
import axios from "axios"
import { EvidenceCard } from "./EvidenceCard"

export const EditEvidence = () => {
  const [display, setDisplay] = useState([{}])
  const [evidence, setEvidence] = useState({
    article: "",
    author: "",
    title: "",
    journal: "",
    year: "",
    sePractice: "",
    claim: "",
    claimStrength: ""
  })

  let displayItems

  const claimStrengths = [
    { label: "Weakly Supports", value: "Weakly Supports" },
    { label: "Strongly Supports", value: "Strongly Supports" },
    { label: "Weakly Against", value: "Weakly Against" },
    { label: "Strongly Against", value: "Strongly Against" }
  ]

  const seList = [
    { label: "TDD", value: "TDD" },
    { label: "FDD", value: "FDD" },
    { label: "SCRUM", value: "SCRUM" },
    { label: "UNIT-TESTING", value: "UNIT-TESTING" },
    { label: "AGILE", value: "AGILE" }
  ]

  const onChange = e => {
    console.log(e)
    setEvidence({ ...evidence, [e.target.name]: e.target.value })
  }

  const onSelectChange = (e, attribute) => {
    setEvidence({ ...evidence, [attribute]: e.value })
  }

  useEffect(() => {
    console.log("Edit Evidence page has loaded")
    axios
      .get("http://localhost:5000/api/evidences/")
      .then(res => {
        console.log(`Print-ShowEvidenceResults-API-response: ${res.data}`)
        console.log(`The res data: ${res.data}`)
        setDisplay(res.data)
      })
      .catch(err => {
        console.log(`Error from Show Evidence Results${err.name}`)
      })
  }, [])

  const submitEvidence = e => {
    console.log("Submitting evidence")
    console.log(evidence)
    e.preventDefault()

    const data = {
      article: evidence.article,
      author: evidence.author,
      title: evidence.title,
      journal: evidence.journal,
      year: evidence.year,
      sePractice: evidence.sePractice,
      claim: evidence.claim,
      claimStrength: evidence.claimStrength
    }

    axios
      .post("/api/evidences", data)
      .then(res => {
        setEvidence({
          article: "",
          author: "",
          title: "",
          journal: "",
          year: "",
          sePractice: "",
          claim: "",
          claimStrength: ""
        })
        console.log("Evidence submit successful")
      })
      .catch(err => {
        console.log(`Error submitting evidence${err.name}`)
      })
  }

  if (display) {
    const results = display
    console.log(results)
    if (results.length > 0) {

        displayItems = (
          <table className="table text-light">
            {results.map((result, k) => (
              <EvidenceCard evidenceData={result} key={k} />
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
          <h1 className="display-2">SEEDS</h1>
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
  useEffect(() => {
    console.log("Edit Evidence page has loaded")
  }, [])

  return <div className="box bg-dark">Hello</div>
}
