import { render } from "@testing-library/react"
import React from "react";
import { App } from "./App";
import { EvidenceSearch } from "./components/EvidenceSearch"
import { ShowEvidenceResults } from "./components/ShowEvidenceResults"
import { SubmitEvidence } from "./components/SubmitEvidence"
import { EditEvidence } from "./components/EditEvidence"
import { BrowserRouter as Router, Route } from "react-router-dom"


test("render it", () => {
    const component = render(
        <Router>
            <div>
            <Route exact path="/" component={EvidenceSearch} />
            <Route path="/show-results" component={ShowEvidenceResults} />
            <Route path="/submit-evidence" component={SubmitEvidence} />
            <Route path="/edit" component={EditEvidence} />
            </div>
        </Router>
    )
    expect(component.container).toMatchSnapshot()
})