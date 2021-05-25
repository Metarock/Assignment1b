/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react"
import Select from "react-select"
import { Link } from "react-router-dom"
import { EvidenceCard } from "./EvidenceCard"
import { Login } from "./Login"
import { Logout } from "./Logout"

export const EvidenceSearch = () => {
  const [seMethods, setSEMethods] = useState([])
  const [claims, setClaims] = useState([])
  const [searchInfo, setSearchInfo] = useState({
    seMethod: "",
    claim: "",
    startYear: "",
    endYear: ""
  })

  const [showResults, setShowResults] = useState(false)
  const [evidenceCardTest, setEvidenceCards] = useState([])
  const [loginSession, setLoginSession] = useState({
    loggedIn: false,
    loginID: "",
    loginName: "",
    userRole: ""
  })

  // Temporary SE Methods list
  const seList = [
    { label: "TDD", value: "TDD" },
    { label: "FDD", value: "FDD" },
    { label: "SCRUM", value: "SCRUM" },
    { label: "UNIT-TESTING", value: "UNIT-TESTING" },
    { label: "AGILE", value: "AGILE" }
  ]

  // TODO: Try get the list of SE methods from a database/script list
  const claimsList = [
    { label: "Improves Code Quality", value: "Improves Code Quality" },
    {
      label: "More efficient code production",
      value: "Code Production Efficiency"
    },
    { label: "Improve Team Quality", value: "Improve team quality" },
    { label: "Improve App Quality", value: "Improve app quality" }
  ]

  useEffect(() => {
    console.log("Website loaded!")
    // console.log("Print id: " + props.match.params.id);
  }, [])

  const setSession = (isLoggedIn, id, logName, role) => {
    setLoginSession({...loginSession, loggedIn: isLoggedIn, loginID: id, loginName: logName, userRole: role});
  }

  const onChange = e => {
    console.log(e)
    setSearchInfo({ ...searchInfo, [e.target.name]: e.target.value })
    console.log(searchInfo)
  }

  const onSelectChange = (e, attribute) => {
    console.log(e.value)
    console.log(`The actual attribute: ${attribute}`)
    setSearchInfo({ ...searchInfo, [attribute]: e.value })
  }

  const onSubmit = e => {
    e.preventDefault()
  }

  let viewUserBtn = ""
  if(sessionStorage.userRole === "admin") {
    viewUserBtn = <Link
                    to={{ pathname: `/submit-evidence` }}
                    className="btn btn-outline-light btn-lg btn-block"
                  >
                    View Users
                  </Link>
  } else {
    viewUserBtn = ""
  }

  return (
    <div
      className="container-fluid bg-dark text-light"
      style={{ height: "100vh" }}
    >
      <div className="row">
        <div className="col-6">
          <h1 className="display-3">SEEDS Version 1</h1>
        </div>
        <div className="col-2 my-auto">
          <Link
            to={{ pathname: `/submit-evidence` }}
            className="btn btn-outline-light btn-lg btn-block"
          >
            Submit Evidence
          </Link>
        </div>
        <div className="col-2 my-auto">
            {loginSession.loginName}
        </div>
        
        <div className="col-2 my-auto">
          { viewUserBtn }
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-12" align="center">
          <form>
            <div className="form-group col-3">
              <label className="lead fs-2">SE Practice:</label>
              <Select
                className="text-dark"
                onChange={e => {
                  onSelectChange(e, "seMethod")
                }}
                options={seList}
              />
              <br />

              <label className="lead fs-2">Claim:</label>
              <Select
                className="text-dark"
                onChange={e => onSelectChange(e, "claim")}
                options={claimsList}
              />
              <br />

              <label className="lead fs-2">Year Range:</label>
              <input
                className="form-control"
                type="text"
                name="startYear"
                onChange={onChange}
                maxLength="4"
                placeholder="Start Year e.g. 2000"
              />
              <input
                className="form-control"
                type="text"
                name="endYear"
                onChange={onChange}
                maxLength="4"
                placeholder="End Year e.g. 2010"
              />

              <Link
                to={{
                  pathname: `/show-results`,
                  searchParams: { ...searchInfo }
                }}
                className="btn btn-outline-info btn-lg btn-block"
              >
                View Results
              </Link>

              <Link
                to={{
                  pathname: `/edit`,
                  searchParams: { ...searchInfo }
                }}
                className="btn btn-outline-info btn-lg btn-block"
              >
                Edit Evidence
              </Link>

              <Link
                to={{
                  pathname: `/view-users`,
                  searchParams: { ...searchInfo }
                }}
                className="btn btn-outline-info btn-lg btn-block"
              >
                Show Users
              </Link>
              <div>
                <Login setSession={setSession}/>
                <Logout setSession={setSession}/>
              </div>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  )
}
