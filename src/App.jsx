import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Plans from './pages/Plans';
import Summary from './pages/Summary';
import Done from './pages/Done';

import './common.css';

function App() {
  const [plans, setPlans] = useState([
    {title: "Basic",
     description: "For this those that want to know they're covered but don't want to dive too deep into the bells and whistles. You get access to our award winning support team 24/7 as well as learning resources for how best to be insured.",
     features: [
      {description: "Basic coverage", positive: true},
      {description: "24/7 award winning support.", positive: true},
      {description: "One scheduled call with an insurance expert.", positive: false},
      {description: "Access to premium dashboard.", positive: false},
    ],
    value: "basic",
    id: "basic",
    name: "plantype",
    price: 99},

    {title: "Standard",
     description: "For those who want to rest easy at night knowing that everything is taken care of. You get access to our award winning support team 24/7, your own personalised dashboard, as well as one scheduled web call with an insurance expert to get advice on how best to manage your coverage.",
     features: [
      {description: "Standard coverage", positive: true},
      {description: "24/7 award winning support.", positive: true},
      {description: "One scheduled call with an insurance expert.", positive: true},
      {description: "Access to premium dashboard.", positive: false},
    ],
    value: "standard",
    id: "standard",
    name: "plantype",
    price: 159},

     {title: "Premium",
      description: "For those that want everything we have to offer. You are considered a VIP amongst our business and will get full access to everything we have to offer. You get a customised dashboard with premium features and benefits. As well as a direct line to our team of insurance experts.",
      features: [
       {description: "Premium coverage", positive: true},
       {description: "24/7 award winning support.", positive: true},
       {description: "Unlimited access to personal insurance expert.", positive: true},
       {description: "Access to premium dashboard.", positive: true}
      ],
    value: "premium",
    id: "premium",
    name: "plantype",
    price: 249},
  ]);

  const [selectedPlan, setSelectedPlan] = useState("");
  const [userDetails, setUserDetails] = useState({
    firstName: "", 
    lastName: "",
    email: "", 
    birthdate: {day: "", month: "", year: ""}
  })
  
  const detailsFilled = (userDetails.firstName && userDetails.lastName && userDetails.email);

  const handleBirthdateChange = (birthdate) => {
    setUserDetails({ ...userDetails, birthdate });
  };

  return (
    <Router>
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/details" 
            element={
              <Details 
                userDetails={userDetails} 
                setUserDetails={setUserDetails} 
                handleBirthdateChange={handleBirthdateChange} 
              />} 
            />
            <Route
              path="/plans"
              element={
                detailsFilled
                  ? 
                  <Plans
                    plans={plans}
                    selectedPlan={selectedPlan}
                    setSelectedPlan={setSelectedPlan}
                  />
                  : 
                  <Navigate to="/details" />
                }
            />
            <Route
              path="/summary"
              element={
                (detailsFilled && selectedPlan)
                  ? 
                  <Summary
                    userDetails={userDetails}
                    plans={plans}
                    selectedPlan={selectedPlan}
                  />
                  : 
                  <Navigate to="/details" />
              }
            />
            <Route 
              path="/done"
              element={
                (detailsFilled && selectedPlan)
                  ? 
                  <Done />
                  : 
                  <Navigate to="/details" />
              }
            />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
