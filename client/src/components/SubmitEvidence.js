/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react"
import Select from "react-select"
import { Link } from "react-router-dom"
import axios from "axios"

export const SubmitEvidence = () => {
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

  const claimStrengths = [
    { label: "Weakly Supports", value: "Weakly Supports" },
    { label: "Strongly Supports", value: "Strongly Supports" },
    { label: "Weakly Against", value: "Weakly Against" },
    { label: "Strongly Against", value: "Strongly Against" }
  ]

  const onChange = e => {
    console.log(e)
    setEvidence({ ...evidence, [e.target.name]: e.target.value })
  }

  const onSelectChange = (e, attribute) => {
    setEvidence({ ...evidence, [attribute]: e.value })
  }

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
      .post("http://localhost:5000/api/evidences", data)
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

  return (
    <div className="box bg-dark">
      <div
        className="container-fluid bg-dark text-light"
        style={{ height: "100%" }}
      >
        <div className="row">
          <div className="col-12">{/* Nav bar here? */}</div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className="display-2">SEEDS Version 1</h1>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12" align="center">
            <form>
              <div className="form-group col-3">
                <label className="lead fs-2">Article:</label>
                <input
                  className="form-control"
                  type="text"
                  name="article"
                  onChange={onChange}
                  placeholder="Article name..."
                />

                <label className="lead fs-2">Author:</label>
                <input
                  className="form-control"
                  type="text"
                  name="author"
                  onChange={onChange}
                  placeholder="Article Author..."
                />

                <label className="lead fs-2">Title:</label>
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  onChange={onChange}
                  placeholder="Article Title..."
                />

                <label className="lead fs-2">Journal:</label>
                <input
                  className="form-control"
                  type="text"
                  name="journal"
                  onChange={onChange}
                  placeholder="Article Journal..."
                />

                <label className="lead fs-2">Year:</label>
                <input
                  className="form-control"
                  type="text"
                  name="year"
                  onChange={onChange}
                  maxLength="4"
                  placeholder="Article Year..."
                />

                <label className="lead fs-2">SE Practice:</label>
                <input
                  className="form-control"
                  type="text"
                  name="sePractice"
                  onChange={onChange}
                  placeholder="SE Practice..."
                />

                <label className="lead fs-2">Claim:</label>
                <input
                  className="form-control"
                  type="text"
                  name="claim"
                  onChange={onChange}
                  placeholder="Article Claim..."
                />

                <label className="lead fs-2">Claim Strength:</label>
                <Select
                  className="text-dark"
                  onChange={e => onSelectChange(e, "claimStrength")}
                  menuPlacement="auto"
                  options={claimStrengths}
                />

                <br />
                {/* Possibly implement a pop-up showing that the data has been submitted */}
                <button
                  className="btn btn-outline-info bg-dark"
                  type="button"
                  onClick={submitEvidence}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
