import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import CaseStudyCustomerDev from './pages/CaseStudyCustomerDev'
import CaseStudyProductDefinition from './pages/CaseStudyProductDefinition'
import CaseStudyDesignDev from './pages/CaseStudyDesignDev'
import CaseStudyBusinessFinancials from './pages/CaseStudyBusinessFinancials'
import ResultsImpact from './pages/ResultsImpact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-inter flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/case-study/customer-development" element={<CaseStudyCustomerDev />} />
            <Route path="/case-study/product-definition" element={<CaseStudyProductDefinition />} />
            <Route path="/case-study/design-development" element={<CaseStudyDesignDev />} />
            <Route path="/case-study/business-financials" element={<CaseStudyBusinessFinancials />} />
            <Route path="/results-impact" element={<ResultsImpact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
