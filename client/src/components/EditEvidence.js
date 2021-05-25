/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react"
import Select from "react-select"
import axios from "axios"
import { EvidenceCard } from "./EvidenceCard"

export const EditEvidence = () => {
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

  const seList = [
    { label: "TDD", value: "TDD" },
    { label: "FDD", value: "FDD" },
    { label: "SCRUM", value: "SCRUM" },
    { label: "UNIT-TESTING", value: "UNIT-TESTING" },
    { label: "AGILE", value: "AGILE" }
  ]

  useEffect(() => {
    console.log("Edit Evidence page has loaded")
  }, [])

  return <div className="box bg-dark">Hello</div>
}
