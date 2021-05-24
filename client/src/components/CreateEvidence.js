/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

// this is will be use in the near future to submit an evidence
class CreateEvidence extends Component {
  constructor() {
    super()
    this.state = {
      article: "",
      author: "",
      title: "",
      journal: "",
      eprint: "",
      eprinttype: "",
      eprintclass: "",
      pages: "",
      month: "",
      annote: "",
      claimStrength: ""
    }
  }
}

onChange = e => {
  this.setState({ [e.target.name]: e.target.value })
}

onSubmit = e => {
  e.preventDefault()

  const data = {
    article: this.state.article,
    author: this.state.author,
    title: this.state.title,
    journal: this.state.journal,
    eprint: this.state.eprint,
    eprinttype: this.state.eprinttype,
    eprintclass: this.state.eprintclass,
    pages: this.state.pages,
    month: this.state.month,
    annote: this.state.annote,
    claimStrength: this.state.claimStrength
  }

  axios
    .post("/api/evidences", data)
    .then(res => {
      this.setState({
        article: "",
        author: "",
        title: "",
        journal: "",
        eprint: "",
        eprinttype: "",
        eprintclass: "",
        pages: "",
        month: "",
        annot: "",
        claimStrength: ""
      })
      this.props.history.push("/")
    })
    .catch(err => {
      console.log("error in create evidence")
    })
}
