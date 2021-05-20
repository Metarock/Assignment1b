/* eslint-disable import/order */
/* eslint-disable react/react-in-jsx-scope */
import { EvidenceSearch } from "./components/EvidenceSearch"
import { ShowEvidenceResults } from "./components/ShowEvidenceResults"
import { SubmitEvidence } from "./components/SubmitEvidence"
import { Login } from "./components/Login"
import { Logout } from './components/Logout'
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={EvidenceSearch} />
        <Route path="/show-results" component={ShowEvidenceResults} />
        <Route path="/submit-evidence" component={SubmitEvidence} />
      </div>

      <div>
        <Login />
        <Logout />
      </div>
    </Router>
  )
}

export default App
